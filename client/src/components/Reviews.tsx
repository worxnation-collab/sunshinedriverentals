/*
 * Reviews — SunshineDrive Rentals
 * Displays approved customer reviews and lets visitors leave one.
 * New submissions are held for approval before they appear publicly.
 */
import { useState, useEffect, type CSSProperties } from "react";
import { getApprovedReviews, submitReview, type ReviewRow } from "@/lib/reviews";

const inputStyle: CSSProperties = {
  flex: 1,
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.6rem",
  border: "1px solid var(--sd-border)",
  background: "white",
  fontSize: "0.9rem",
  color: "var(--sd-charcoal)",
};

function Stars({ value }: { value: number }) {
  const v = Math.max(0, Math.min(5, value));
  return (
    <span aria-label={`${v} out of 5 stars`} style={{ letterSpacing: "1px" }}>
      <span style={{ color: "#f5c518" }}>{"★".repeat(v)}</span>
      <span style={{ color: "var(--sd-border)" }}>{"★".repeat(5 - v)}</span>
    </span>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState<ReviewRow[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    getApprovedReviews()
      .then((r) => {
        setReviews(r);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  async function handleSubmit() {
    if (hp) return;
    if (!name.trim() || !comment.trim() || rating < 1) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const ok = await submitReview({ customer_name: name, location, rating, comment });
    if (ok) {
      setStatus("done");
      setName("");
      setLocation("");
      setRating(5);
      setComment("");
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="reviews" style={{ background: "white", padding: "5rem 0" }}>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-3">Reviews</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--sd-charcoal)",
              marginBottom: "2rem",
            }}
          >
            What our guests say.
          </h2>

          {loaded && reviews.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="p-5 rounded-xl"
                  style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}
                >
                  <Stars value={r.rating} />
                  {r.title && (
                    <h4 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)", margin: "0.5rem 0 0.25rem" }}>
                      {r.title}
                    </h4>
                  )}
                  <p style={{ fontSize: "0.9rem", color: "var(--sd-charcoal)", lineHeight: 1.6, margin: "0.5rem 0" }}>{r.comment}</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--sd-muted)" }}>
                    {r.customer_name}
                    {r.location ? ` · ${r.location}` : ""}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="p-6 rounded-2xl" style={{ background: "var(--sd-cream-dark)", border: "1px solid var(--sd-border)" }}>
            <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--sd-charcoal)", marginBottom: "1rem" }}>Leave a review</h3>
            {status === "done" ? (
              <p style={{ color: "var(--sd-green-dark)", fontWeight: 600 }}>
                Thank you! Your review was submitted and will appear here once we approve it.
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name *" maxLength={80} style={inputStyle} />
                  <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Where you're from (optional)" maxLength={80} style={inputStyle} />
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "0.85rem", color: "var(--sd-muted)" }}>Rating:</span>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRating(n)}
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                      style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.4rem", lineHeight: 1, color: n <= rating ? "#f5c518" : "var(--sd-border)" }}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us about your trip *"
                  maxLength={2000}
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <input
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px" }}
                />
                {status === "error" && (
                  <p style={{ color: "#c0392b", fontSize: "0.85rem" }}>Please add your name, a rating, and a comment, then try again.</p>
                )}
                <div>
                  <button type="button" onClick={handleSubmit} disabled={status === "sending"} className="btn-book" style={{ fontSize: "0.95rem", opacity: status === "sending" ? 0.6 : 1 }}>
                    {status === "sending" ? "Submitting…" : "Submit review"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
