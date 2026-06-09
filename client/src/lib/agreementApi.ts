export type AgreementStatus = "pending" | "signed";

export type Agreement = {
  id?: number;
  bookingId: string;
  status: AgreementStatus;
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
  odometerOut: number;
  fuelOut: string;
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
  renterSignatureText?: string;
  signedAt?: string | null;
  pdfAvailable?: boolean;
  signedPdfFileName?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type AgreementForm = Omit<Agreement, "id" | "status" | "signedAt" | "pdfAvailable" | "signedPdfFileName" | "createdAt" | "updatedAt">;

const endpoint = "/.netlify/functions/agreements";

async function parseResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type") || "";
  const payload = contentType.includes("application/json") ? await response.json() : null;

  if (!response.ok || (payload && payload.success === false)) {
    throw new Error(payload?.error || `Agreement request failed with status ${response.status}`);
  }

  return payload as T;
}

export function getBlankAgreement(): AgreementForm {
  return {
    bookingId: "",
    renterName: "",
    email: "",
    phone: "",
    driversLicense: "",
    licenseStateCountry: "",
    dateOfBirth: "",
    flightNumber: "",
    address: "",
    cityStateZip: "",
    vehicleYearMakeModel: "",
    color: "",
    vin: "",
    licensePlate: "",
    pickupDate: "",
    pickupTime: "",
    pickupLocation: "",
    returnDate: "",
    returnTime: "",
    returnLocation: "",
    odometerOut: 0,
    fuelOut: "Full",
    mileageAllowance: "",
    dailyRate: "",
    totalDays: 1,
    subtotal: "",
    tax: "",
    discountApplied: "",
    totalCharged: "",
    securityDepositHold: "",
    stripeReceiptId: "",
    additionalDriverName: "",
    additionalDriverDob: "",
    additionalDriverLicense: "",
    additionalDriverLicenseStateCountry: "",
    additionalDriverPhone: "",
    additionalDriverRelationship: "",
    agreementNotes: "Renter agrees to return the vehicle in the same condition received, follow all applicable laws, avoid unauthorized drivers, remain responsible for tolls, tickets, fuel, excess mileage, late returns, damage, cleaning charges, and any agreed security deposit terms.",
    renterSignatureText: "",
  };
}

export function getAgreementLink(bookingId: string) {
  if (typeof window === "undefined") return `/agreement/${bookingId}`;
  return `${window.location.origin}/agreement/${bookingId}`;
}

export function getAgreementPdfUrl(bookingId: string) {
  return `${endpoint}?action=pdf&bookingId=${encodeURIComponent(bookingId)}`;
}

export async function listAgreements(pin: string) {
  return parseResponse<{ success: true; agreements: Agreement[] }>(
    await fetch(`${endpoint}?action=list&pin=${encodeURIComponent(pin)}`, { credentials: "include" })
  );
}

export async function createAgreement(pin: string, agreement: AgreementForm) {
  return parseResponse<{ success: true; agreement: Agreement }>(
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ action: "create", pin, agreement }),
    })
  );
}

export async function getAgreement(bookingId: string) {
  return parseResponse<{ success: true; agreement: Agreement }>(
    await fetch(`${endpoint}?bookingId=${encodeURIComponent(bookingId)}`, { credentials: "include" })
  );
}

export async function signAgreement(agreement: Partial<AgreementForm> & { bookingId: string; renterSignatureText: string }) {
  return parseResponse<{ success: true; agreement: Agreement }>(
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ action: "sign", agreement }),
    })
  );
}
