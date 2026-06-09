import { int, longtext, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ── Inquiries table (wedding/shoot form submissions) ──
export const inquiries = mysqlTable("inquiries", {
  id: int("id").autoincrement().primaryKey(),
  type: varchar("type", { length: 32 }).notNull(), // 'wedding' | 'shoot'
  data: text("data").notNull(), // JSON string of form fields
  status: mysqlEnum("status", ["new", "contacted", "booked", "archived"]).default("new").notNull(),
  notes: text("notes"), // Owner's internal notes
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = typeof inquiries.$inferInsert;

// ── Subscribers table (email list signups) ──
export const subscribers = mysqlTable("subscribers", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Subscriber = typeof subscribers.$inferSelect;
export type InsertSubscriber = typeof subscribers.$inferInsert;


// ── Rental Agreements table ──
export const rentalAgreements = mysqlTable("rental_agreements", {
  id: int("id").autoincrement().primaryKey(),
  bookingId: int("booking_id").notNull(), // Assuming there's a bookings table with an 'id' column
  renterName: text("renter_name").notNull(),
  dateOfAgreement: timestamp("date_of_agreement").defaultNow().notNull(),
  driversLicense: varchar("drivers_license", { length: 255 }).notNull(),
  licenseStateCountry: varchar("license_state_country", { length: 255 }).notNull(),
  dateOfBirth: varchar("date_of_birth", { length: 255 }).notNull(), // Storing as string for simplicity, can be date type
  phone: varchar("phone", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  flightNumber: varchar("flight_number", { length: 255 }),
  address: text("address").notNull(),
  cityStateZip: varchar("city_state_zip", { length: 255 }).notNull(),
  vehicleYearMakeModel: text("vehicle_year_make_model").notNull(),
  color: varchar("color", { length: 255 }).notNull(),
  vin: varchar("vin", { length: 255 }).notNull(),
  licensePlate: varchar("license_plate", { length: 255 }).notNull(),
  pickupDate: timestamp("pickup_date").notNull(),
  pickupTime: varchar("pickup_time", { length: 255 }).notNull(),
  pickupLocation: text("pickup_location").notNull(),
  returnDate: timestamp("return_date").notNull(),
  returnTime: varchar("return_time", { length: 255 }).notNull(),
  returnLocation: text("return_location").notNull(),
  odometerOut: int("odometer_out").notNull(),
  odometerIn: int("odometer_in"),
  fuelOut: varchar("fuel_out", { length: 255 }).notNull(),
  fuelIn: varchar("fuel_in", { length: 255 }),
  dailyRate: varchar("daily_rate", { length: 255 }).notNull(), // Storing as string for simplicity, can be numeric
  totalDays: int("total_days").notNull(),
  subtotal: varchar("subtotal", { length: 255 }).notNull(),
  tax: varchar("tax", { length: 255 }).notNull(),
  discountApplied: varchar("discount_applied", { length: 255 }),
  totalCharged: varchar("total_charged", { length: 255 }).notNull(),
  securityDepositHold: varchar("security_deposit_hold", { length: 255 }).notNull(),
  stripeReceiptId: varchar("stripe_receipt_id", { length: 255 }),
  additionalDriverName: text("additional_driver_name"),
  additionalDriverDob: varchar("additional_driver_dob", { length: 255 }),
  additionalDriverLicense: varchar("additional_driver_license", { length: 255 }),
  additionalDriverLicenseStateCountry: varchar("additional_driver_license_state_country", { length: 255 }),
  additionalDriverPhone: varchar("additional_driver_phone", { length: 255 }),
  additionalDriverRelationship: varchar("additional_driver_relationship", { length: 255 }),
  renterSignature: text("renter_signature").notNull(), // Base64 encoded image or text signature
  ownerSignature: text("owner_signature"),
  signedAt: timestamp("signed_at").defaultNow().notNull(),
});

export type RentalAgreement = typeof rentalAgreements.$inferSelect;
export type InsertRentalAgreement = typeof rentalAgreements.$inferInsert;

// ── Booking-specific rental agreement workflow table ──
export const rentalAgreementBookings = mysqlTable("rental_agreement_bookings", {
  id: int("id").autoincrement().primaryKey(),
  bookingId: varchar("booking_id", { length: 64 }).notNull().unique(),
  status: varchar("status", { length: 16 }).default("pending").notNull(),
  renterName: varchar("renter_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 80 }).notNull(),
  driversLicense: varchar("drivers_license", { length: 255 }),
  licenseStateCountry: varchar("license_state_country", { length: 255 }),
  dateOfBirth: varchar("date_of_birth", { length: 64 }),
  flightNumber: varchar("flight_number", { length: 255 }),
  address: text("address"),
  cityStateZip: varchar("city_state_zip", { length: 255 }),
  vehicleYearMakeModel: text("vehicle_year_make_model").notNull(),
  color: varchar("color", { length: 255 }).notNull(),
  vin: varchar("vin", { length: 255 }).notNull(),
  licensePlate: varchar("license_plate", { length: 255 }).notNull(),
  pickupDate: varchar("pickup_date", { length: 64 }).notNull(),
  pickupTime: varchar("pickup_time", { length: 64 }).notNull(),
  pickupLocation: text("pickup_location").notNull(),
  returnDate: varchar("return_date", { length: 64 }).notNull(),
  returnTime: varchar("return_time", { length: 64 }).notNull(),
  returnLocation: text("return_location").notNull(),
  odometerOut: int("odometer_out").default(0).notNull(),
  fuelOut: varchar("fuel_out", { length: 255 }).default("Full").notNull(),
  mileageAllowance: varchar("mileage_allowance", { length: 255 }),
  dailyRate: varchar("daily_rate", { length: 255 }).notNull(),
  totalDays: int("total_days").default(1).notNull(),
  subtotal: varchar("subtotal", { length: 255 }).notNull(),
  tax: varchar("tax", { length: 255 }).notNull(),
  discountApplied: varchar("discount_applied", { length: 255 }),
  totalCharged: varchar("total_charged", { length: 255 }).notNull(),
  securityDepositHold: varchar("security_deposit_hold", { length: 255 }).notNull(),
  stripeReceiptId: varchar("stripe_receipt_id", { length: 255 }),
  additionalDriverName: text("additional_driver_name"),
  additionalDriverDob: varchar("additional_driver_dob", { length: 255 }),
  additionalDriverLicense: varchar("additional_driver_license", { length: 255 }),
  additionalDriverLicenseStateCountry: varchar("additional_driver_license_state_country", { length: 255 }),
  additionalDriverPhone: varchar("additional_driver_phone", { length: 255 }),
  additionalDriverRelationship: varchar("additional_driver_relationship", { length: 255 }),
  agreementNotes: text("agreement_notes"),
  renterSignatureText: text("renter_signature_text"),
  signerIp: varchar("signer_ip", { length: 128 }),
  signedAt: timestamp("signed_at"),
  signedPdfBase64: longtext("signed_pdf_base64"),
  signedPdfFileName: varchar("signed_pdf_file_name", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type RentalAgreementBooking = typeof rentalAgreementBookings.$inferSelect;
export type InsertRentalAgreementBooking = typeof rentalAgreementBookings.$inferInsert;
