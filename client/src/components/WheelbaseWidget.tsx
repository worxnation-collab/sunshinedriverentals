/*
 * WheelbaseWidget — SunshineDrive Rentals
 * Quote-based model: no public pricing, no third-party checkout.
 * Renders a "Request a Quote" call-to-action band.
 */

interface WheelbaseWidgetProps {
  bookingUrl?: string;
  vehicleName: string;
  price?: string;
  id?: string;
}

export default function WheelbaseWidget({ vehicleName, id = "book" }: WheelbaseWidgetProps) {
  const smsBody = encodeURIComponent(`Hey - I'm interested in the ${vehicleName}. Dates: `);
  return (
    <section id={id} style={{ background: "var(--sd-cream-dark)", padding: "3rem 0" }}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-label mb-3">Reserve</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "0.75rem", color: "var(--sd-charcoal)" }}>
            Check Dates &amp; Get a Quote
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", marginBottom: "2rem", lineHeight: 1.6 }}>
            Tell us your dates and we&apos;ll send a quote within minutes — delivery included, insurance included, no airport counters.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a href="/#contact" className="btn-book" style={{ fontSize: "1rem", padding: "0.875rem 2.25rem" }}>Request a Quote</a>
            <a href={`sms:+19043147650?body=${smsBody}`} className="btn-secondary" style={{ fontSize: "0.95rem", padding: "0.875rem 1.75rem" }}>Text your dates</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="text-sm" style={{ color: "var(--sd-muted)" }}><span style={{ color: "var(--sd-green)" }}>✓</span> Delivered to you</span>
            <span className="text-sm" style={{ color: "var(--sd-muted)" }}><span style={{ color: "var(--sd-green)" }}>✓</span> Insurance included</span>
            <span className="text-sm" style={{ color: "var(--sd-muted)" }}><span style={{ color: "var(--sd-green)" }}>✓</span> Cheaper than Turo</span>
          </div>
          <p className="mt-6" style={{ fontSize: "0.85rem", color: "var(--sd-muted)" }}>
            Questions? Weddings? Shoots?{" "}
            <a href="sms:+19043147650" style={{ color: "var(--sd-green-dark)", fontWeight: 600, textDecoration: "none" }}>Text (904) 314-7650</a>
            {" "}or{" "}
            <a href="mailto:matthew@sunshinedriverentals.com" style={{ color: "var(--sd-green-dark)", fontWeight: 600, textDecoration: "none" }}>email us</a>
          </p>
        </div>
      </div>
    </section>
  );
}
