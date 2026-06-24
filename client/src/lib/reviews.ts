/*
 * Customer reviews — SunshineDrive Rentals
 * Native review capture + display, backed by Supabase project trmbuniojjmetfnoqmgy.
 * Uses the publishable (client-safe) key. Submissions land as 'pending' and
 * only appear publicly once approved — enforced server-side by RLS.
 */
const REVIEWS_URL = "https://trmbuniojjmetfnoqmgy.supabase.co/rest/v1/reviews";
const REVIEWS_KEY = "sb_publishable_MC0Q5DuoJMydkrtEPqMbHw_AZOTK68B";

export interface ReviewRow {
  id: string;
  customer_name: string;
  location: string | null;
  rating: number;
  title: string | null;
  comment: string;
  created_at: string;
}

export interface ReviewInput {
  customer_name: string;
  location?: string;
  rating: number;
  title?: string;
  comment: string;
  vehicle_id?: string;
}

export async function getApprovedReviews(): Promise<ReviewRow[]> {
  try {
    const params =
      "status=eq.approved&order=created_at.desc&select=id,customer_name,location,rating,title,comment,created_at";
    const res = await fetch(`${REVIEWS_URL}?${params}`, {
      headers: { apikey: REVIEWS_KEY, Authorization: `Bearer ${REVIEWS_KEY}` },
    });
    if (!res.ok) return [];
    return (await res.json()) as ReviewRow[];
  } catch {
    return [];
  }
}

export async function submitReview(input: ReviewInput): Promise<boolean> {
  try {
    const res = await fetch(REVIEWS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: REVIEWS_KEY,
        Authorization: `Bearer ${REVIEWS_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        customer_name: input.customer_name.trim(),
        location: input.location?.trim() || null,
        rating: input.rating,
        title: input.title?.trim() || null,
        comment: input.comment.trim(),
        vehicle_id: input.vehicle_id || null,
        status: "pending",
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
