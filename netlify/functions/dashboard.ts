/*
 * Owner dashboard API — SunshineDrive Rentals.
 * PIN login issues a short-lived token; all data routes require it.
 * POST  { action: "login", pin }                         -> { token }
 * POST  { action: "updateInquiryStatus", id, status }    -> { success }  (auth)
 * POST  { action: "savePnl", data }                      -> { success }  (auth)
 * GET   ?resource=stats|inquiries|bookings|quotes|vehicles|subscribers|pnl  (auth)
 *        inquiries supports &status=new|contacted|booked|archived
 */
import { json, envReady, sbSelect, sbPatch, sbUpsert, pinValid, issueToken, tokenValid, bearer } from "./_lib";

const STATUSES = ["new", "contacted", "booked", "archived"];

export const handler = async (event: any) => {
  const missing = envReady();
  if (missing) return json(500, { error: missing });

  // ── POST actions ──
  if (event.httpMethod === "POST") {
    let body: any;
    try {
      const raw = event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body;
      body = JSON.parse(raw || "{}");
    } catch {
      return json(400, { error: "Invalid JSON" });
    }

    if (body.action === "login") {
      if (!pinValid(body.pin)) return json(200, { valid: false });
      return json(200, { valid: true, token: issueToken() });
    }

    if (!tokenValid(bearer(event))) return json(401, { error: "Unauthorized" });

    if (body.action === "updateInquiryStatus") {
      if (!body.id || !STATUSES.includes(body.status)) return json(400, { error: "Bad request" });
      await sbPatch("inquiries", `id=eq.${encodeURIComponent(body.id)}`, { status: body.status });
      return json(200, { success: true });
    }

    if (body.action === "savePnl") {
      await sbUpsert("pnl_settings", { id: 1, data: body.data ?? {}, updated_at: new Date().toISOString() });
      return json(200, { success: true });
    }

    return json(400, { error: "Unknown action" });
  }

  // ── GET reads (auth) ──
  if (event.httpMethod !== "GET") return json(405, { error: "Method not allowed" });
  if (!tokenValid(bearer(event))) return json(401, { error: "Unauthorized" });

  const resource = (event.queryStringParameters?.resource || "").toString();
  const status = (event.queryStringParameters?.status || "").toString();

  try {
    switch (resource) {
      case "inquiries": {
        const filter = status && status !== "all" ? `&status=eq.${encodeURIComponent(status)}` : "";
        return json(200, { inquiries: await sbSelect("inquiries", `select=*&order=created_at.desc${filter}`) });
      }
      case "bookings":
        return json(200, { bookings: await sbSelect("bookings", "select=*&order=created_at.desc") });
      case "quotes":
        return json(200, { quotes: await sbSelect("saved_quotes", "select=*&order=created_at.desc") });
      case "vehicles":
        return json(200, { vehicles: await sbSelect("vehicles", "select=*&order=name.asc") });
      case "subscribers":
        return json(200, { subscribers: await sbSelect("subscribers", "select=*&order=created_at.desc") });
      case "pnl": {
        const rows = await sbSelect<{ data: unknown }>("pnl_settings", "select=data&id=eq.1");
        return json(200, { data: rows[0]?.data ?? null });
      }
      case "stats": {
        const inq = await sbSelect<{ status: string; created_at: string }>("inquiries", "select=status,created_at");
        const subs = await sbSelect<{ id: string }>("subscribers", "select=id");
        const bookings = await sbSelect<{ id: string }>("bookings", "select=id");
        const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
        return json(200, {
          totalInquiries: inq.length,
          newInquiries: inq.filter((i) => i.status === "new" || !i.status).length,
          recentInquiries: inq.filter((i) => new Date(i.created_at).getTime() >= weekAgo).length,
          totalSubscribers: subs.length,
          totalBookings: bookings.length,
        });
      }
      default:
        return json(400, { error: "Unknown resource" });
    }
  } catch (err: any) {
    console.error("dashboard error:", err?.message || err);
    return json(502, { error: "Database error" });
  }
};
