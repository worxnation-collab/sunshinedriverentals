/*
 * Client API — SunshineDrive Rentals.
 * Talks to the Netlify functions. No Supabase keys ever live in the browser.
 */
const FORMS = "/.netlify/functions/forms";
const DASH = "/.netlify/functions/dashboard";

export interface InquiryInput {
  name: string;
  email: string;
  phone?: string;
  vehicle?: string;
  pickup_date?: string;
  return_date?: string;
  pickup_location?: string;
  booking_type?: string;
  message?: string;
}

export async function submitInquiry(payload: InquiryInput): Promise<boolean> {
  try {
    const res = await fetch(FORMS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind: "inquiry", ...payload }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function subscribeEmail(email: string): Promise<boolean> {
  try {
    const res = await fetch(FORMS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind: "subscribe", email }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

// ── Dashboard ──
export async function dashboardLogin(pin: string): Promise<{ valid: boolean; token?: string }> {
  try {
    const res = await fetch(DASH, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "login", pin }),
    });
    if (!res.ok) return { valid: false };
    return await res.json();
  } catch {
    return { valid: false };
  }
}

async function authedGet<T>(resource: string, token: string, extra = ""): Promise<T> {
  const res = await fetch(`${DASH}?resource=${resource}${extra}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(String(res.status));
  return (await res.json()) as T;
}

async function authedPost<T>(body: Record<string, unknown>, token: string): Promise<T> {
  const res = await fetch(DASH, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(String(res.status));
  return (await res.json()) as T;
}

export const dash = {
  stats: (t: string) => authedGet<Record<string, number>>("stats", t),
  inquiries: (t: string, status = "all") =>
    authedGet<{ inquiries: any[] }>("inquiries", t, `&status=${status}`),
  bookings: (t: string) => authedGet<{ bookings: any[] }>("bookings", t),
  quotes: (t: string) => authedGet<{ quotes: any[] }>("quotes", t),
  vehicles: (t: string) => authedGet<{ vehicles: any[] }>("vehicles", t),
  subscribers: (t: string) => authedGet<{ subscribers: any[] }>("subscribers", t),
  pnl: (t: string) => authedGet<{ data: any }>("pnl", t),
  updateInquiryStatus: (t: string, id: string, status: string) =>
    authedPost<{ success: boolean }>({ action: "updateInquiryStatus", id, status }, t),
  savePnl: (t: string, data: unknown) =>
    authedPost<{ success: boolean }>({ action: "savePnl", data }, t),
};
