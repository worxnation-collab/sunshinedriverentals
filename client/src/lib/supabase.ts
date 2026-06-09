/*
 * Supabase form submission — SunshineDrive Rentals
 * Preserves the exact same endpoint and schema as the live site:
 *   URL: https://tfjsduqrnltaxjuurljh.supabase.co/rest/v1/inquiries
 *   Table: inquiries
 *   Schema: { type: string, data: object, created_at: string }
 *
 * CRITICAL: This is the live Supabase anon key from the production site.
 * It is a public anon key (safe to include in client-side code).
 */

const SUPABASE_URL = "https://tfjsduqrnltaxjuurljh.supabase.co/rest/v1/inquiries";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmanNkdXFybmx0YXhqdXVybGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3NDE0NTksImV4cCI6MjA4NjMxNzQ1OX0.i5ztT5CZhvtVr-fn9aFL6fbSfaINknN9KiXJHV5Csok";

export interface InquiryPayload {
  type: "wedding" | "shoot";
  data: Record<string, string>;
}

export interface EmailSubscribePayload {
  email: string;
}

export async function submitEmailSubscription(payload: EmailSubscribePayload): Promise<boolean> {
  try {
    const response = await fetch(SUPABASE_URL.replace('/inquiries', '/subscribers'), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify({
        email: payload.email,
        created_at: new Date().toISOString(),
      }),
    });

    // 201 Created or 409 Conflict (already subscribed) both count as success
    if (response.ok || response.status === 409) {
      return true;
    }

    throw new Error(`${response.status}`);
  } catch (error) {
    console.error("Email subscription error:", error);
    return false;
  }
}

export async function submitInquiry(payload: InquiryPayload): Promise<boolean> {
  try {
    const response = await fetch(SUPABASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        type: payload.type,
        data: payload.data,
        created_at: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("Form submission error:", error);
    return false;
  }
}
