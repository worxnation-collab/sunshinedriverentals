/*
 * SubaruAscent — SunshineDrive Rentals
 * Wheelbase booking URL: https://checkout.wheelbasepro.com/r/reserve/526683?owner_id=5011008&rental_category=auto
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import FaqAccordion from "@/components/FaqAccordion";
import MobileBookBar from "@/components/MobileBookBar";
import WheelbaseWidget from "@/components/WheelbaseWidget";
import TrustBar from "@/components/TrustBar";
import { ChevronRight } from "lucide-react";
import { FLEET_IMAGES } from "@/lib/images";

const BOOKING_URL = "https://checkout.wheelbasepro.com/r/reserve/526683?owner_id=5011008&rental_category=auto";

const SPECS = [
  { label: "8 seats", sub: "3 rows, all real" },
  { label: "AWD", sub: "Symmetrical, standard" },
  { label: "5 LATCH", sub: "Car seat positions" },
  { label: "EyeSight", sub: "Adaptive cruise + safety" },
  { label: "27 mpg", sub: "Highway combined" },
  { label: "Onyx Trim", sub: "Blacked-out package" },
];

const FAQ_ITEMS = [
  { question: "How many people does the Subaru Ascent seat?", answer: "The Ascent Onyx seats up to 8 passengers across three rows, with a bench middle row. The third row genuinely fits adults for short trips — not just kids." },
  { question: "Is the Subaru Ascent all-wheel drive?", answer: "Yes. Symmetrical AWD is standard on every Ascent — rare for a rental at this price. Great for sudden Florida rain, beach trips, and any road trip you might extend out of state." },
  { question: "Will car seats fit?", answer: "Yes — 5 LATCH positions across rows 2 and 3. You can fit up to 5 car seats simultaneously. Tell us how many seats and which type when booking and we'll confirm fit." },
  { question: "Is the Ascent good for Disney/Universal trips?", answer: "It's our top family pick for theme park trips. 8 seats fits multi-generation families, AWD handles afternoon thunderstorms, and the cargo area takes strollers, groceries, and luggage without compromise." },
  { question: "How much does it cost to rent the Subaru Ascent?", answer: "Daily rates start at $69/day — submit the booking form with your dates and pickup location for an exact quote. Multi-day and weekly discounts available." },
  { question: "Can you deliver the Ascent to MCO or our resort?", answer: "Yes. We deliver to MCO, Sanford Airport, all Disney and Universal resort hotels, vacation rentals, and anywhere in Central Florida within our service area." },
  { question: "Is there a mileage limit?", answer: "Standard packages include 200 miles per day. Additional miles are available — text us if you're planning a longer road trip and we'll find the right package." },
];

export default function SubaruAscent() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Subaru Ascent Rental Orlando | 8-Seat AWD Family SUV"
        description="Rent a Subaru Ascent Onyx in Orlando. 8 seats, AWD, 5 LATCH positions. Perfect for Disney family trips. Delivered to MCO. From $69/day."
        url="/subaru-ascent-rental-orlando/"
      />
      <Navbar />

      <section
        className="relative min-h-screen flex items-end pb-12"
        style={{ background: "linear-gradient(135deg, #0a1a2a 0%, #1a3a5a 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FLEET_IMAGES.ascentHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div className="hero-overlay" />
        <div className="container relative z-10 pt-28">
          <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</a>
            <ChevronRight size={12} />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Subaru Ascent Rental Orlando</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {["8 Seats", "AWD Standard", "Family Ready", "From $69/day"].map((s) => (
              <span key={s} className="spec-pill">{s}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
            Subaru Ascent <span style={{ color: "#7ab8f5" }}>Onyx</span>
          </h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            Rental in Orlando
          </h1>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-book">
              Book Now — Check Dates &amp; Pricing
            </a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: "520px", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            8 seats. Standard AWD. 5 car-seat LATCH positions. The family SUV that doesn't feel like a compromise — delivered to MCO, your Disney resort, or vacation rental.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href="#book" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>Check availability</a>
            <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>Call (904) 314-7650</a>
          </div>
          <TrustBar dark />
        </div>
      </section>

      <section style={{ background: "white", padding: "3rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "1.5rem" }}>
            Eight seats. AWD standard. Not a minivan.
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "700px", marginBottom: "2.5rem" }}>
            The Subaru Ascent Onyx is what you actually want for an Orlando family trip. Three rows, eight seats, all-wheel drive, and the Onyx Edition's blacked-out grille and wheels keep it from looking like a soccer-mom appliance. IIHS Top Safety Pick+. Subaru EyeSight standard. 27 mpg combined.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {SPECS.map((spec) => (
              <div key={spec.label} className="p-4 rounded-xl text-center" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--sd-charcoal)", fontFamily: "'Playfair Display', serif" }}>{spec.label}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--sd-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.25rem" }}>{spec.sub}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              FLEET_IMAGES.ascentHero,
              FLEET_IMAGES.ascentSide,
              FLEET_IMAGES.ascent3q,
            ].map((src, i) => (
              <img key={i} src={src} alt={`Subaru Ascent Onyx view ${i + 1}`} className="rounded-xl w-full object-cover" style={{ aspectRatio: "4/3" }} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <WheelbaseWidget bookingUrl={BOOKING_URL} vehicleName="Subaru Ascent Onyx Edition" price="$69" id="book" />

      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="section-label mb-3">FAQ</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2.5rem" }}>Common questions</h2>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <section style={{ background: "var(--sd-charcoal)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Ready for the family trip?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-book">Check Dates &amp; Pricing</a>
            <a href="sms:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Text us</a>
            <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Call (904) 314-7650</a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBookBar vehicleName="Subaru Ascent Onyx" bookingUrl={BOOKING_URL} price="$69" />
    </div>
  );
}
