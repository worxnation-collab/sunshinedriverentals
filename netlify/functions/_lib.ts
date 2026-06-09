/*
 * Shared helpers for SunshineDrive Netlify Functions.
 * Files prefixed with "_" are NOT exposed as endpoints — import-only.
 */
import crypto from "node:crypto";

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const PIN = process.env.DASHBOARD_PIN || "7650";
const SECRET = process.env.DASHBOARD_SECRET || "change-me";
const TOKEN_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

export const DASHBOARD_PIN = PIN;

export function json(statusCode: number, body: unknown) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify(body),
  };
}

export function envReady(): string | null {
  if (!SUPABASE_URL) return "SUPABASE_URL is not set";
  if (!SERVICE_KEY) return "SUPABASE_SERVICE_ROLE_KEY is not set";
  return null;
}

// ── Supabase REST (PostgREST) using the service role key (server-side only) ──
const REST = () => `${SUPABASE_URL.replace(/\/+$/, "")}/rest/v1`;
const sbHeaders = (extra: Record<string, string> = {}) => ({
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
  "Content-Type": "application/json",
  ...extra,
});

export async function sbSelect<T = any>(table: string, query = ""): Promise<T[]> {
  const res = await fetch(`${REST()}/${table}?${query}`, { headers: sbHeaders() });
  if (!res.ok) throw new Error(`select ${table}: ${res.status} ${await res.text()}`);
  return (await res.json()) as T[];
}

export async function sbInsert(table: string, row: Record<string, unknown>): Promise<void> {
  const res = await fetch(`${REST()}/${table}`, {
    method: "POST",
    headers: sbHeaders({ Prefer: "return=minimal" }),
    body: JSON.stringify(row),
  });
  // 409 = unique conflict (e.g. duplicate subscriber email) — treat as ok
  if (!res.ok && res.status !== 409) throw new Error(`insert ${table}: ${res.status} ${await res.text()}`);
}

export async function sbPatch(table: string, query: string, patch: Record<string, unknown>): Promise<void> {
  const res = await fetch(`${REST()}/${table}?${query}`, {
    method: "PATCH",
    headers: sbHeaders({ Prefer: "return=minimal" }),
    body: JSON.stringify(patch),
  });
  if (!res.ok) throw new Error(`patch ${table}: ${res.status} ${await res.text()}`);
}

export async function sbUpsert(table: string, row: Record<string, unknown>): Promise<void> {
  const res = await fetch(`${REST()}/${table}`, {
    method: "POST",
    headers: sbHeaders({ Prefer: "resolution=merge-duplicates,return=minimal" }),
    body: JSON.stringify(row),
  });
  if (!res.ok) throw new Error(`upsert ${table}: ${res.status} ${await res.text()}`);
}

// ── PIN auth → short-lived HMAC token (no DB, no deps) ──
const b64url = (b: Buffer | string) =>
  Buffer.from(b).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

function sign(data: string): string {
  return b64url(crypto.createHmac("sha256", SECRET).update(data).digest());
}

export function pinValid(pin: string): boolean {
  return typeof pin === "string" && pin === PIN;
}

export function issueToken(): string {
  const payload = b64url(JSON.stringify({ exp: Date.now() + TOKEN_TTL_MS }));
  return `${payload}.${sign(payload)}`;
}

export function tokenValid(token: string | undefined | null): boolean {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = sign(payload);
  if (sig.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  try {
    const { exp } = JSON.parse(Buffer.from(payload.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString());
    return typeof exp === "number" && Date.now() < exp;
  } catch {
    return false;
  }
}

export function bearer(event: { headers?: Record<string, string | undefined> }): string | null {
  const h = event.headers || {};
  const raw = h.authorization || h.Authorization || "";
  return raw.startsWith("Bearer ") ? raw.slice(7) : null;
}
