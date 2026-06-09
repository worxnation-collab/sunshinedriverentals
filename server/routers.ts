import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { getDb } from "./db";
import { inquiries, subscribers, rentalAgreements } from "../drizzle/schema";
import { desc, eq, sql, count } from "drizzle-orm";
import { z } from "zod";
import { spawnSync } from "child_process";
import fs from "fs";

// Dashboard PIN - simple protection for the owner dashboard
const DASHBOARD_PIN = "7650"; // Last 4 digits of phone number

export const appRouter = router({
  rentalAgreements: router({
    create: publicProcedure
      .input(z.object({
        bookingId: z.string().uuid(),
        renterName: z.string(),
        driversLicense: z.string(),
        licenseStateCountry: z.string(),
        dateOfBirth: z.string(),
        phone: z.string(),
        email: z.string().email(),
        flightNumber: z.string().optional(),
        address: z.string(),
        cityStateZip: z.string(),
        vehicleYearMakeModel: z.string(),
        color: z.string(),
        vin: z.string(),
        licensePlate: z.string(),
        pickupDate: z.string(),
        pickupTime: z.string(),
        pickupLocation: z.string(),
        returnDate: z.string(),
        returnTime: z.string(),
        returnLocation: z.string(),
        odometerOut: z.number().int(),
        fuelOut: z.string(),
        dailyRate: z.string(),
        totalDays: z.number().int(),
        subtotal: z.string(),
        tax: z.string(),
        discountApplied: z.string().optional(),
        totalCharged: z.string(),
        securityDepositHold: z.string(),
        stripeReceiptId: z.string().optional(),
        additionalDriverName: z.string().optional(),
        additionalDriverDob: z.string().optional(),
        additionalDriverLicense: z.string().optional(),
        additionalDriverLicenseStateCountry: z.string().optional(),
        additionalDriverPhone: z.string().optional(),
        additionalDriverRelationship: z.string().optional(),
        renterSignatureText: z.string(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) return { success: false };

        await db.insert(rentalAgreements).values({
          bookingId: input.bookingId,
          renterName: input.renterName,
          dateOfAgreement: new Date(),
          driversLicense: input.driversLicense,
          licenseStateCountry: input.licenseStateCountry,
          dateOfBirth: input.dateOfBirth,
          phone: input.phone,
          email: input.email,
          flightNumber: input.flightNumber,
          address: input.address,
          cityStateZip: input.cityStateZip,
          vehicleYearMakeModel: input.vehicleYearMakeModel,
          color: input.color,
          vin: input.vin,
          licensePlate: input.licensePlate,
          pickupDate: new Date(input.pickupDate),
          pickupTime: input.pickupTime,
          pickupLocation: input.pickupLocation,
          returnDate: new Date(input.returnDate),
          returnTime: input.returnTime,
          returnLocation: input.returnLocation,
          odometerOut: input.odometerOut,
          fuelOut: input.fuelOut,
          dailyRate: input.dailyRate,
          totalDays: input.totalDays,
          subtotal: input.subtotal,
          tax: input.tax,
          discountApplied: input.discountApplied,
          totalCharged: input.totalCharged,
          securityDepositHold: input.securityDepositHold,
          stripeReceiptId: input.stripeReceiptId,
          additionalDriverName: input.additionalDriverName,
          additionalDriverDob: input.additionalDriverDob,
          additionalDriverLicense: input.additionalDriverLicense,
          additionalDriverLicenseStateCountry: input.additionalDriverLicenseStateCountry,
          additionalDriverPhone: input.additionalDriverPhone,
          additionalDriverRelationship: input.additionalDriverRelationship,
          renterSignatureText: input.renterSignatureText,
          signedAt: new Date(),
        });
        return { success: true };
      }),

    getByBookingId: publicProcedure
      .input(z.object({ bookingId: z.string().uuid() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return { agreement: null };
        const agreement = await db.select().from(rentalAgreements).where(eq(rentalAgreements.bookingId, input.bookingId)).limit(1);
        return { agreement: agreement.length > 0 ? agreement[0] : null };
      }),

    generatePdf: publicProcedure
      .input(z.object({ bookingId: z.string().uuid() }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) return { success: false, error: "Database unavailable" };

        const agreement = await db.select().from(rentalAgreements).where(eq(rentalAgreements.bookingId, input.bookingId)).limit(1);

        if (agreement.length === 0) {
          return { success: false, error: "Agreement not found" };
        }

        const agreementData = agreement[0];
        const pdfFileName = `rental_agreement_${input.bookingId}.pdf`;
        const pdfPath = `/tmp/${pdfFileName}`;

        const pythonProcess = spawnSync(
          "python3",
          [
            "/home/ubuntu/sunshine-src/server/generate_agreement_pdf.py",
            JSON.stringify(agreementData),
            pdfPath,
          ],
          { encoding: "utf-8" }
        );

        if (pythonProcess.error) {
          console.error("Python script failed to start:", pythonProcess.error);
          return { success: false, error: "PDF generation failed" };
        }

        if (pythonProcess.status !== 0) {
          console.error("Python script exited with error:", pythonProcess.stderr);
          return { success: false, error: "PDF generation failed" };
        }

        // Read the generated PDF file and return it as a base64 string
        const pdfBuffer = fs.readFileSync(pdfPath);
        const pdfBase64 = pdfBuffer.toString("base64");

        // Clean up the temporary PDF file
        fs.unlinkSync(pdfPath);

        return { success: true, pdfBase64 };
      }),
  }),


  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ── Dashboard PIN verification ──
  dashboard: router({
    verifyPin: publicProcedure
      .input(z.object({ pin: z.string() }))
      .mutation(({ input }) => {
        return { valid: input.pin === DASHBOARD_PIN };
      }),

    // ── Get all rental agreements ──
    getRentalAgreements: publicProcedure
      .input(z.object({ pin: z.string() }))
      .query(async ({ input }) => {
        if (input.pin !== DASHBOARD_PIN) return { agreements: [], error: "Invalid PIN" };
        const db = await getDb();
        if (!db) return { agreements: [], error: "Database unavailable" };
        const results = await db.select().from(rentalAgreements).orderBy(desc(rentalAgreements.signedAt));
        return { agreements: results, error: null };
      }),

    // ── Get all inquiries ──
    getInquiries: publicProcedure
      .input(z.object({
        pin: z.string(),
        status: z.enum(["all", "new", "contacted", "booked", "archived"]).optional(),
      }))
      .query(async ({ input }) => {
        if (input.pin !== DASHBOARD_PIN) return { inquiries: [], error: "Invalid PIN" };
        const db = await getDb();
        if (!db) return { inquiries: [], error: "Database unavailable" };

        const results = input.status && input.status !== "all"
          ? await db.select().from(inquiries).where(eq(inquiries.status, input.status)).orderBy(desc(inquiries.createdAt))
          : await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
        return { inquiries: results, error: null };
      }),

    // ── Update inquiry status ──
    updateInquiryStatus: publicProcedure
      .input(z.object({
        pin: z.string(),
        id: z.number(),
        status: z.enum(["new", "contacted", "booked", "archived"]),
      }))
      .mutation(async ({ input }) => {
        if (input.pin !== DASHBOARD_PIN) return { success: false };
        const db = await getDb();
        if (!db) return { success: false };
        await db.update(inquiries).set({ status: input.status }).where(eq(inquiries.id, input.id));
        return { success: true };
      }),

    // ── Get all subscribers ──
    getSubscribers: publicProcedure
      .input(z.object({ pin: z.string() }))
      .query(async ({ input }) => {
        if (input.pin !== DASHBOARD_PIN) return { subscribers: [], error: "Invalid PIN" };
        const db = await getDb();
        if (!db) return { subscribers: [], error: "Database unavailable" };
        const results = await db.select().from(subscribers).orderBy(desc(subscribers.createdAt));
        return { subscribers: results, error: null };
      }),

    // ── Get stats ──
    getStats: publicProcedure
      .input(z.object({ pin: z.string() }))
      .query(async ({ input }) => {
        if (input.pin !== DASHBOARD_PIN) return null;
        const db = await getDb();
        if (!db) return null;

        const [totalInquiries] = await db.select({ count: count() }).from(inquiries);
        const [newInquiries] = await db.select({ count: count() }).from(inquiries).where(eq(inquiries.status, "new"));
        const [totalSubscribers] = await db.select({ count: count() }).from(subscribers);

        // Recent inquiries (last 7 days)
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const [recentInquiries] = await db.select({ count: count() }).from(inquiries).where(
          sql`${inquiries.createdAt} >= ${sevenDaysAgo}`
        );

        return {
          totalInquiries: totalInquiries?.count ?? 0,
          newInquiries: newInquiries?.count ?? 0,
          totalSubscribers: totalSubscribers?.count ?? 0,
          recentInquiries: recentInquiries?.count ?? 0,
        };
      }),
  }),

  // ── Public form submission endpoints ──
  forms: router({
    submitInquiry: publicProcedure
      .input(z.object({
        type: z.enum(["wedding", "shoot"]),
        data: z.record(z.string(), z.string()),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) return { success: false };

        // Insert into database
        await db.insert(inquiries).values({
          type: input.type,
          data: JSON.stringify(input.data),
          status: "new",
        });

        // Notify owner
        const name = input.data.name || "Someone";
        const occasion = input.data.occasion || input.type;
        await notifyOwner({
          title: `New ${input.type} inquiry from ${name}`,
          content: `${name} submitted a ${occasion} inquiry.\nEmail: ${input.data.email || "not provided"}\nPhone: ${input.data.phone || "not provided"}\nDate: ${input.data.date || "not specified"}`,
        });

        return { success: true };
      }),

    submitSubscriber: publicProcedure
      .input(z.object({ email: z.string().email() }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) return { success: false };

        try {
          await db.insert(subscribers).values({ email: input.email });
          // Notify owner of new subscriber
          await notifyOwner({
            title: "New email subscriber",
            content: `${input.email} joined the mailing list.`,
          });
        } catch {
          // Likely duplicate email - that's fine
        }

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
