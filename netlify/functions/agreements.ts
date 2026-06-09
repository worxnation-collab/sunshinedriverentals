import mysql from "mysql2/promise";
import { randomUUID } from "crypto";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const DASHBOARD_PIN = process.env.DASHBOARD_PIN || "7650";
const PDF_CONTENT_TYPE = "application/pdf";

let pool: mysql.Pool | null = null;
let tableReady = false;

function json(statusCode: number, body: Record<string, unknown>) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(body),
  };
}

function badRequest(message: string) {
  return json(400, { success: false, error: message });
}

function unauthorized() {
  return json(401, { success: false, error: "Invalid dashboard PIN" });
}

function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured for agreement storage.");
  }

  if (!pool) {
    pool = mysql.createPool(process.env.DATABASE_URL);
  }

  return pool;
}

async function ensureTable() {
  if (tableReady) return;

  const db = getPool();
  await db.query(`
    CREATE TABLE IF NOT EXISTS rental_agreement_bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      booking_id VARCHAR(64) NOT NULL UNIQUE,
      status VARCHAR(16) NOT NULL DEFAULT 'pending',
      renter_name VARCHAR(255) NOT NULL,
      email VARCHAR(320) NOT NULL,
      phone VARCHAR(80) NOT NULL,
      drivers_license VARCHAR(255),
      license_state_country VARCHAR(255),
      date_of_birth VARCHAR(64),
      flight_number VARCHAR(255),
      address TEXT,
      city_state_zip VARCHAR(255),
      vehicle_year_make_model TEXT NOT NULL,
      color VARCHAR(255) NOT NULL,
      vin VARCHAR(255) NOT NULL,
      license_plate VARCHAR(255) NOT NULL,
      pickup_date VARCHAR(64) NOT NULL,
      pickup_time VARCHAR(64) NOT NULL,
      pickup_location TEXT NOT NULL,
      return_date VARCHAR(64) NOT NULL,
      return_time VARCHAR(64) NOT NULL,
      return_location TEXT NOT NULL,
      odometer_out INT NOT NULL DEFAULT 0,
      fuel_out VARCHAR(255) NOT NULL DEFAULT 'Full',
      mileage_allowance VARCHAR(255),
      daily_rate VARCHAR(255) NOT NULL,
      total_days INT NOT NULL DEFAULT 1,
      subtotal VARCHAR(255) NOT NULL,
      tax VARCHAR(255) NOT NULL,
      discount_applied VARCHAR(255),
      total_charged VARCHAR(255) NOT NULL,
      security_deposit_hold VARCHAR(255) NOT NULL,
      stripe_receipt_id VARCHAR(255),
      additional_driver_name TEXT,
      additional_driver_dob VARCHAR(255),
      additional_driver_license VARCHAR(255),
      additional_driver_license_state_country VARCHAR(255),
      additional_driver_phone VARCHAR(255),
      additional_driver_relationship VARCHAR(255),
      agreement_notes TEXT,
      renter_signature_text TEXT,
      signer_ip VARCHAR(128),
      signed_at TIMESTAMP NULL,
      signed_pdf_base64 LONGTEXT,
      signed_pdf_file_name VARCHAR(255),
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  tableReady = true;
}

type AgreementInput = {
  bookingId?: string;
  renterName: string;
  email: string;
  phone: string;
  driversLicense?: string;
  licenseStateCountry?: string;
  dateOfBirth?: string;
  flightNumber?: string;
  address?: string;
  cityStateZip?: string;
  vehicleYearMakeModel: string;
  color: string;
  vin: string;
  licensePlate: string;
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  returnDate: string;
  returnTime: string;
  returnLocation: string;
  odometerOut?: number;
  fuelOut?: string;
  mileageAllowance?: string;
  dailyRate: string;
  totalDays: number;
  subtotal: string;
  tax: string;
  discountApplied?: string;
  totalCharged: string;
  securityDepositHold: string;
  stripeReceiptId?: string;
  additionalDriverName?: string;
  additionalDriverDob?: string;
  additionalDriverLicense?: string;
  additionalDriverLicenseStateCountry?: string;
  additionalDriverPhone?: string;
  additionalDriverRelationship?: string;
  agreementNotes?: string;
};

type SignInput = Partial<AgreementInput> & {
  bookingId: string;
  renterSignatureText: string;
};

type AgreementRow = Record<string, any>;

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeOptionalString(value: unknown) {
  const normalized = normalizeString(value);
  return normalized || null;
}

function normalizeInt(value: unknown, fallback: number) {
  if (typeof value === "number" && Number.isFinite(value)) return Math.trunc(value);
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return Math.trunc(parsed);
  }
  return fallback;
}

function requireFields(input: Record<string, unknown>, fields: string[]) {
  const missing = fields.filter((field) => normalizeString(input[field]) === "");
  return missing;
}

function mapRow(row: AgreementRow) {
  return {
    id: row.id,
    bookingId: row.booking_id,
    status: row.status,
    renterName: row.renter_name,
    email: row.email,
    phone: row.phone,
    driversLicense: row.drivers_license || "",
    licenseStateCountry: row.license_state_country || "",
    dateOfBirth: row.date_of_birth || "",
    flightNumber: row.flight_number || "",
    address: row.address || "",
    cityStateZip: row.city_state_zip || "",
    vehicleYearMakeModel: row.vehicle_year_make_model,
    color: row.color,
    vin: row.vin,
    licensePlate: row.license_plate,
    pickupDate: row.pickup_date,
    pickupTime: row.pickup_time,
    pickupLocation: row.pickup_location,
    returnDate: row.return_date,
    returnTime: row.return_time,
    returnLocation: row.return_location,
    odometerOut: row.odometer_out,
    fuelOut: row.fuel_out,
    mileageAllowance: row.mileage_allowance || "",
    dailyRate: row.daily_rate,
    totalDays: row.total_days,
    subtotal: row.subtotal,
    tax: row.tax,
    discountApplied: row.discount_applied || "",
    totalCharged: row.total_charged,
    securityDepositHold: row.security_deposit_hold,
    stripeReceiptId: row.stripe_receipt_id || "",
    additionalDriverName: row.additional_driver_name || "",
    additionalDriverDob: row.additional_driver_dob || "",
    additionalDriverLicense: row.additional_driver_license || "",
    additionalDriverLicenseStateCountry: row.additional_driver_license_state_country || "",
    additionalDriverPhone: row.additional_driver_phone || "",
    additionalDriverRelationship: row.additional_driver_relationship || "",
    agreementNotes: row.agreement_notes || "",
    renterSignatureText: row.renter_signature_text || "",
    signedAt: row.signed_at ? new Date(row.signed_at).toISOString() : null,
    pdfAvailable: Boolean(row.signed_pdf_base64),
    signedPdfFileName: row.signed_pdf_file_name || null,
    createdAt: row.created_at ? new Date(row.created_at).toISOString() : null,
    updatedAt: row.updated_at ? new Date(row.updated_at).toISOString() : null,
  };
}

async function getAgreementRow(bookingId: string) {
  const db = getPool();
  const [rows] = await db.execute<mysql.RowDataPacket[]>(
    "SELECT * FROM rental_agreement_bookings WHERE booking_id = ? LIMIT 1",
    [bookingId]
  );
  return rows[0] || null;
}

async function listAgreements() {
  const db = getPool();
  const [rows] = await db.execute<mysql.RowDataPacket[]>(
    "SELECT * FROM rental_agreement_bookings ORDER BY COALESCE(signed_at, created_at) DESC"
  );
  return rows.map(mapRow);
}

async function createAgreement(input: AgreementInput) {
  const requiredFields = [
    "renterName",
    "email",
    "phone",
    "vehicleYearMakeModel",
    "color",
    "vin",
    "licensePlate",
    "pickupDate",
    "pickupTime",
    "pickupLocation",
    "returnDate",
    "returnTime",
    "returnLocation",
    "dailyRate",
    "subtotal",
    "tax",
    "totalCharged",
    "securityDepositHold",
  ];
  const missing = requireFields(input as unknown as Record<string, unknown>, requiredFields);
  if (missing.length) {
    throw new Error(`Missing required agreement fields: ${missing.join(", ")}`);
  }

  const bookingId = normalizeString(input.bookingId) || randomUUID();
  const db = getPool();

  await db.execute(
    `INSERT INTO rental_agreement_bookings (
      booking_id, status, renter_name, email, phone, drivers_license, license_state_country,
      date_of_birth, flight_number, address, city_state_zip, vehicle_year_make_model, color,
      vin, license_plate, pickup_date, pickup_time, pickup_location, return_date, return_time,
      return_location, odometer_out, fuel_out, mileage_allowance, daily_rate, total_days,
      subtotal, tax, discount_applied, total_charged, security_deposit_hold, stripe_receipt_id,
      additional_driver_name, additional_driver_dob, additional_driver_license,
      additional_driver_license_state_country, additional_driver_phone,
      additional_driver_relationship, agreement_notes
    ) VALUES (?, 'pending', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      status = IF(status = 'signed', status, 'pending'),
      renter_name = VALUES(renter_name), email = VALUES(email), phone = VALUES(phone),
      drivers_license = VALUES(drivers_license), license_state_country = VALUES(license_state_country),
      date_of_birth = VALUES(date_of_birth), flight_number = VALUES(flight_number),
      address = VALUES(address), city_state_zip = VALUES(city_state_zip),
      vehicle_year_make_model = VALUES(vehicle_year_make_model), color = VALUES(color),
      vin = VALUES(vin), license_plate = VALUES(license_plate), pickup_date = VALUES(pickup_date),
      pickup_time = VALUES(pickup_time), pickup_location = VALUES(pickup_location),
      return_date = VALUES(return_date), return_time = VALUES(return_time), return_location = VALUES(return_location),
      odometer_out = VALUES(odometer_out), fuel_out = VALUES(fuel_out), mileage_allowance = VALUES(mileage_allowance),
      daily_rate = VALUES(daily_rate), total_days = VALUES(total_days), subtotal = VALUES(subtotal),
      tax = VALUES(tax), discount_applied = VALUES(discount_applied), total_charged = VALUES(total_charged),
      security_deposit_hold = VALUES(security_deposit_hold), stripe_receipt_id = VALUES(stripe_receipt_id),
      additional_driver_name = VALUES(additional_driver_name), additional_driver_dob = VALUES(additional_driver_dob),
      additional_driver_license = VALUES(additional_driver_license),
      additional_driver_license_state_country = VALUES(additional_driver_license_state_country),
      additional_driver_phone = VALUES(additional_driver_phone), additional_driver_relationship = VALUES(additional_driver_relationship),
      agreement_notes = VALUES(agreement_notes)`,
    [
      bookingId,
      normalizeString(input.renterName),
      normalizeString(input.email),
      normalizeString(input.phone),
      normalizeOptionalString(input.driversLicense),
      normalizeOptionalString(input.licenseStateCountry),
      normalizeOptionalString(input.dateOfBirth),
      normalizeOptionalString(input.flightNumber),
      normalizeOptionalString(input.address),
      normalizeOptionalString(input.cityStateZip),
      normalizeString(input.vehicleYearMakeModel),
      normalizeString(input.color),
      normalizeString(input.vin),
      normalizeString(input.licensePlate),
      normalizeString(input.pickupDate),
      normalizeString(input.pickupTime),
      normalizeString(input.pickupLocation),
      normalizeString(input.returnDate),
      normalizeString(input.returnTime),
      normalizeString(input.returnLocation),
      normalizeInt(input.odometerOut, 0),
      normalizeString(input.fuelOut) || "Full",
      normalizeOptionalString(input.mileageAllowance),
      normalizeString(input.dailyRate),
      normalizeInt(input.totalDays, 1),
      normalizeString(input.subtotal),
      normalizeString(input.tax),
      normalizeOptionalString(input.discountApplied),
      normalizeString(input.totalCharged),
      normalizeString(input.securityDepositHold),
      normalizeOptionalString(input.stripeReceiptId),
      normalizeOptionalString(input.additionalDriverName),
      normalizeOptionalString(input.additionalDriverDob),
      normalizeOptionalString(input.additionalDriverLicense),
      normalizeOptionalString(input.additionalDriverLicenseStateCountry),
      normalizeOptionalString(input.additionalDriverPhone),
      normalizeOptionalString(input.additionalDriverRelationship),
      normalizeOptionalString(input.agreementNotes),
    ]
  );

  const row = await getAgreementRow(bookingId);
  return mapRow(row!);
}

async function signAgreement(input: SignInput, signerIp: string | null) {
  const bookingId = normalizeString(input.bookingId);
  if (!bookingId) throw new Error("Missing booking ID.");
  if (!normalizeString(input.renterSignatureText)) throw new Error("Signature is required.");

  const existing = await getAgreementRow(bookingId);
  if (!existing) throw new Error("Agreement not found.");

  const merged = {
    ...mapRow(existing),
    ...input,
    renterSignatureText: normalizeString(input.renterSignatureText),
  };

  const signedAt = new Date();
  const pdfBase64 = await generateAgreementPdfBase64({ ...merged, signedAt: signedAt.toISOString() });
  const safeRenter = normalizeString(merged.renterName).replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "renter";
  const pdfFileName = `sunshinedrive-rental-agreement-${safeRenter}-${bookingId}.pdf`;

  const db = getPool();
  await db.execute(
    `UPDATE rental_agreement_bookings SET
      status = 'signed',
      renter_name = ?, email = ?, phone = ?, drivers_license = ?, license_state_country = ?,
      date_of_birth = ?, flight_number = ?, address = ?, city_state_zip = ?,
      additional_driver_name = ?, additional_driver_dob = ?, additional_driver_license = ?,
      additional_driver_license_state_country = ?, additional_driver_phone = ?,
      additional_driver_relationship = ?, renter_signature_text = ?, signer_ip = ?,
      signed_at = ?, signed_pdf_base64 = ?, signed_pdf_file_name = ?
    WHERE booking_id = ?`,
    [
      normalizeString(merged.renterName),
      normalizeString(merged.email),
      normalizeString(merged.phone),
      normalizeOptionalString(merged.driversLicense),
      normalizeOptionalString(merged.licenseStateCountry),
      normalizeOptionalString(merged.dateOfBirth),
      normalizeOptionalString(merged.flightNumber),
      normalizeOptionalString(merged.address),
      normalizeOptionalString(merged.cityStateZip),
      normalizeOptionalString(merged.additionalDriverName),
      normalizeOptionalString(merged.additionalDriverDob),
      normalizeOptionalString(merged.additionalDriverLicense),
      normalizeOptionalString(merged.additionalDriverLicenseStateCountry),
      normalizeOptionalString(merged.additionalDriverPhone),
      normalizeOptionalString(merged.additionalDriverRelationship),
      normalizeString(merged.renterSignatureText),
      signerIp,
      signedAt,
      pdfBase64,
      pdfFileName,
      bookingId,
    ]
  );

  const row = await getAgreementRow(bookingId);
  return mapRow(row!);
}

function drawWrappedText(page: any, text: string, x: number, y: number, options: any) {
  const { font, size, color, maxWidth, lineHeight } = options;
  const words = String(text || "").split(/\s+/).filter(Boolean);
  let line = "";
  let cursorY = y;

  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    const width = font.widthOfTextAtSize(testLine, size);
    if (width > maxWidth && line) {
      page.drawText(line, { x, y: cursorY, size, font, color });
      cursorY -= lineHeight;
      line = word;
    } else {
      line = testLine;
    }
  }

  if (line) {
    page.drawText(line, { x, y: cursorY, size, font, color });
    cursorY -= lineHeight;
  }

  return cursorY;
}

function formatValue(value: unknown) {
  if (value === null || value === undefined || value === "") return "—";
  return String(value);
}

async function generateAgreementPdfBase64(agreement: Record<string, any>) {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const titleColor = rgb(0.12, 0.2, 0.13);
  const muted = rgb(0.35, 0.35, 0.35);
  const black = rgb(0.05, 0.05, 0.05);

  let page = pdfDoc.addPage([612, 792]);
  let y = 742;

  const newPageIfNeeded = (needed = 80) => {
    if (y < needed) {
      page = pdfDoc.addPage([612, 792]);
      y = 742;
    }
  };

  const heading = (text: string) => {
    newPageIfNeeded(70);
    page.drawText(text, { x: 50, y, size: 14, font: bold, color: titleColor });
    y -= 20;
  };

  const row = (label: string, value: unknown) => {
    newPageIfNeeded(55);
    page.drawText(`${label}:`, { x: 50, y, size: 9.5, font: bold, color: black });
    y = drawWrappedText(page, formatValue(value), 190, y, {
      font,
      size: 9.5,
      color: black,
      maxWidth: 360,
      lineHeight: 13,
    });
    y -= 2;
  };

  page.drawText("SunshineDrive Rentals", { x: 50, y, size: 22, font: bold, color: titleColor });
  y -= 28;
  page.drawText("Signed Rental Agreement", { x: 50, y, size: 15, font: bold, color: black });
  y -= 18;
  page.drawText(`Agreement ID: ${formatValue(agreement.bookingId)}`, { x: 50, y, size: 9, font, color: muted });
  y -= 14;
  page.drawText(`Signed: ${formatValue(agreement.signedAt)}`, { x: 50, y, size: 9, font, color: muted });
  y -= 28;

  heading("Renter Details");
  row("Renter", agreement.renterName);
  row("Email", agreement.email);
  row("Phone", agreement.phone);
  row("Driver's License", agreement.driversLicense);
  row("License State/Country", agreement.licenseStateCountry);
  row("Date of Birth", agreement.dateOfBirth);
  row("Address", agreement.address);
  row("City/State/ZIP", agreement.cityStateZip);
  row("Flight Number", agreement.flightNumber);

  heading("Vehicle Details");
  row("Vehicle", agreement.vehicleYearMakeModel);
  row("Color", agreement.color);
  row("VIN", agreement.vin);
  row("License Plate", agreement.licensePlate);
  row("Odometer Out", agreement.odometerOut);
  row("Fuel Out", agreement.fuelOut);
  row("Mileage Allowance", agreement.mileageAllowance);

  heading("Trip Details");
  row("Pickup", `${formatValue(agreement.pickupDate)} at ${formatValue(agreement.pickupTime)}`);
  row("Pickup Location", agreement.pickupLocation);
  row("Return", `${formatValue(agreement.returnDate)} at ${formatValue(agreement.returnTime)}`);
  row("Return Location", agreement.returnLocation);

  heading("Pricing");
  row("Daily Rate", agreement.dailyRate);
  row("Total Days", agreement.totalDays);
  row("Subtotal", agreement.subtotal);
  row("Tax", agreement.tax);
  row("Discount", agreement.discountApplied);
  row("Total Charged", agreement.totalCharged);
  row("Security Deposit Hold", agreement.securityDepositHold);
  row("Stripe Receipt ID", agreement.stripeReceiptId);

  heading("Additional Driver");
  row("Name", agreement.additionalDriverName);
  row("Date of Birth", agreement.additionalDriverDob);
  row("Driver's License", agreement.additionalDriverLicense);
  row("License State/Country", agreement.additionalDriverLicenseStateCountry);
  row("Phone", agreement.additionalDriverPhone);
  row("Relationship", agreement.additionalDriverRelationship);

  heading("Agreement Notes and Terms");
  const terms = agreement.agreementNotes || "Renter agrees to return the vehicle in the same condition received, follow all applicable laws, avoid unauthorized drivers, remain responsible for tolls, tickets, fuel, excess mileage, late returns, damage, cleaning charges, and any agreed security deposit terms.";
  y = drawWrappedText(page, terms, 50, y, { font, size: 9.5, color: black, maxWidth: 510, lineHeight: 13 });
  y -= 14;

  heading("Electronic Signature");
  row("Typed Legal Signature", agreement.renterSignatureText);
  row("Signed Timestamp", agreement.signedAt);

  const pages = pdfDoc.getPages();
  pages.forEach((pdfPage, index) => {
    pdfPage.drawText(`Page ${index + 1} of ${pages.length}`, {
      x: 500,
      y: 28,
      size: 8,
      font,
      color: muted,
    });
  });

  const bytes = await pdfDoc.save();
  return Buffer.from(bytes).toString("base64");
}

function parseBody(event: any) {
  if (!event.body) return {};
  const rawBody = event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body;
  return JSON.parse(rawBody);
}

function getClientIp(event: any) {
  const forwarded = event.headers?.["x-forwarded-for"] || event.headers?.["X-Forwarded-For"];
  if (typeof forwarded === "string" && forwarded.trim()) return forwarded.split(",")[0].trim();
  return event.headers?.["client-ip"] || event.headers?.["Client-Ip"] || null;
}

export const handler = async (event: any) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: { "Cache-Control": "no-store" }, body: "" };
  }

  try {
    await ensureTable();

    const params = event.queryStringParameters || {};
    const action = params.action || "get";

    if (event.httpMethod === "GET" && action === "list") {
      if (params.pin !== DASHBOARD_PIN) return unauthorized();
      const agreements = await listAgreements();
      return json(200, { success: true, agreements });
    }

    if (event.httpMethod === "GET" && action === "pdf") {
      const bookingId = normalizeString(params.bookingId);
      if (!bookingId) return badRequest("Missing bookingId.");
      const row = await getAgreementRow(bookingId);
      if (!row || !row.signed_pdf_base64) return json(404, { success: false, error: "Signed PDF not found." });
      return {
        statusCode: 200,
        headers: {
          "Content-Type": PDF_CONTENT_TYPE,
          "Content-Disposition": `attachment; filename="${row.signed_pdf_file_name || `rental-agreement-${bookingId}.pdf`}"`,
          "Cache-Control": "private, max-age=0, no-store",
        },
        isBase64Encoded: true,
        body: row.signed_pdf_base64,
      };
    }

    if (event.httpMethod === "GET") {
      const bookingId = normalizeString(params.bookingId);
      if (!bookingId) return badRequest("Missing bookingId.");
      const row = await getAgreementRow(bookingId);
      if (!row) return json(404, { success: false, error: "Agreement not found." });
      return json(200, { success: true, agreement: mapRow(row) });
    }

    if (event.httpMethod === "POST") {
      const body = parseBody(event);

      if (body.action === "create") {
        if (body.pin !== DASHBOARD_PIN) return unauthorized();
        const agreement = await createAgreement(body.agreement || {});
        return json(200, { success: true, agreement });
      }

      if (body.action === "sign") {
        const agreement = await signAgreement(body.agreement || {}, getClientIp(event));
        return json(200, { success: true, agreement });
      }

      return badRequest("Unsupported agreement action.");
    }

    return json(405, { success: false, error: "Method not allowed." });
  } catch (error) {
    console.error("Agreement function error", error);
    return json(500, { success: false, error: error instanceof Error ? error.message : "Unknown agreement error." });
  }
};
