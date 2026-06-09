/*
 * Public form intake — SunshineDrive Rentals.
 * Writes inquiries + email subscribers into Supabase using the service-role key (server-side only).
 * POST body:
 *   { kind: "inquiry", name, email, phone?, vehicle?, pickup_date?, return_date?, pickup_location?, booking_type?, message? }
 *   { kind: "subscribe", email }
 */
import { json, envReady, sbInsert } from "./_lib";

const clean = (v: unknown) => {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t.length ? t : null;
};
const dateOrNull = (v: unknown) => {
  const t = clean(v);
  return t && /^\d{4}-\d{2}-\d{2}$/.test(t) ? t : null;
};

export const handler = async (event: any) => {
  if (event.httpMethod !== "POST") return json(405, { success: false, error: "Method not allowed" });

  const missing = envReady();
  if (missing) return json(500, { success: false, error: missing });

  let body: any;
  try {
    const raw = event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body;
    body = JSON.parse(raw || "{}");
  } catch {
    return json(400, { success: false, error: "Invalid JSON" });
  }

  try {
    if (body.kind === "subscribe") {
      const email = clean(body.email);
      if (!email || !email.includes("@")) return json(400, { success: false, error: "Valid email required" });
      await sbInsert("subscribers", { email });
      return json(200, { success: true });
    }

    // default: inquiry
    const name = clean(body.name);
    const email = clean(body.email);
    if (!name || !email) return json(400, { success: false, error: "Name and email are required" });

    await sbInsert("inquiries", {
      name,
      email,
      phone: clean(body.phone),
      vehicle: clean(body.vehicle),
      pickup_date: dateOrNull(body.pickup_date),
      return_date: dateOrNull(body.return_date),
      pickup_location: clean(body.pickup_location),
      booking_type: clean(body.booking_type) || "general",
      message: clean(body.message),
      status: "new",
    });
    return json(200, { success: true });
  } catch (err: any) {
    console.error("forms error:", err?.message || err);
    return json(502, { success: false, error: "Could not save submission" });
  }
};
