/*
 * SiennaWoodland — SunshineDrive Rentals
 * Wheelbase booking URL: https://checkout.wheelbasepro.com/r/reserve/526689?owner_id=5011008&rental_category=auto
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

const BOOKING_URL = "https://checkout.wheelbasepro.com/r/reserve/526689?owner_id=5011008&rental_category=auto";

const SPECS = [
  { label: "8 seats", sub: "Three rows" },
  { label: "Hybrid", sub: "36 MPG combined" },
  { label: "AWD", sub: "All-wheel drive" },
  { label: "2023", sub: "Model Year" },
  { label: "Woodland", sub: "Edition" },
  { label: "Delivered", sub: "To your door" },
];

const FAQ_ITEMS = [
  { question: "Is insurance included?", answer: "All rentals include liability and physical damage coverage through our Wheelbase insurance partner. Drivers must be 25+, hold a valid license, and pass a quick verification." },
  { question: "How much does it cost?", answer: "Text us your dates and we'll send you a quote within minutes. The Sienna is our most affordable multi-passenger vehicle and is competitive with airport rental counters — without the lines or surprise fees." },
  { question: "Does it fit car seats?", answer: "Yes. The second and third row have LATCH anchors for child seats. We recommend bringing your own car seats for the best fit, but let us know if you need help sourcing one." },
  { question: "How's the fuel economy?", answer: "The Sienna Hybrid gets approximately 36 MPG combined. On a full tank, you can drive from Orlando to Miami and back without refueling. It's the most fuel-efficient vehicle in our fleet." },
  { question: "What's the cargo space like?", answer: "With all seats up, you still get a full trunk. With the third row folded, the cargo area is massive — enough for a full family's luggage, strollers, and beach gear." },
];

export default function SiennaWoodland() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Toyota Sienna Woodland Rental Orlando | 8-Seat Hybrid AWD"
        description="Rent a Toyota Sienna Woodland in Orlando. 8 seats, hybrid AWD, 36 MPG. Perfect for family vacations. Delivered to MCO. Contact us for a quote."
        url="/sienna-woodland-rental/"
      />
      <Navbar />

      <section
        className="relative min-h-screen flex items-end pb-12"
        style={{ background: "linear-gradient(135deg, #0a2a1a 0%, #1a4a2a 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FLEET_IMAGES.siennaHero})`,
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
            <a href="/#fleet" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Fleet</a>
            <ChevronRight size={12} />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Toyota Sienna Woodland</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {["8 Seats", "Hybrid AWD", "Woodland Edition", "Delivered"].map((s) => (
              <span key={s} className="spec-pill">{s}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
            Toyota Sienna <span style={{ color: "var(--sd-green)" }}>Woodland.</span>
          </h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            Room for everyone.
          </h1>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href="/#contact" className="btn-book">
              Request a Quote
            </a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: "520px", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            8 seats. Hybrid efficiency. All-wheel drive. The family hauler that doesn't look or drive like a minivan — delivered to MCO, your hotel, or vacation rental.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href="#book" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>Get a quote below</a>
            <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>Call (904) 314-7650</a>
          </div>
          <TrustBar dark />
        </div>
      </section>

      <section style={{ background: "white", padding: "3rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "1.5rem" }}>
            The smartest way to <span style={{ color: "var(--sd-green)" }}>move your crew.</span>
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "700px", marginBottom: "2.5rem" }}>
            The Sienna Woodland Edition is Toyota's answer to the family road trip. Eight seats, hybrid AWD, and enough cargo space for a week's worth of luggage and theme park souvenirs. It drives like a car, parks like a car, and gets 36 mpg while doing it. The Woodland Edition adds rugged exterior styling, a roof rack, and all-weather capability.
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
              FLEET_IMAGES.siennaFront,
              FLEET_IMAGES.siennaDoor,
              FLEET_IMAGES.siennaHero,
            ].map((src, i) => (
              <img key={i} src={src} alt={`Toyota Sienna Woodland view ${i + 1}`} className="rounded-xl w-full object-cover" style={{ aspectRatio: "4/3" }} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <WheelbaseWidget bookingUrl={BOOKING_URL} vehicleName="Toyota Sienna Woodland Edition" price="$79" id="book" />

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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Need room for the whole crew?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/#contact" className="btn-book">Request a Quote</a>
            <a href="sms:+19043147650?body=Hey%20-%20interested%20in%20the%20Sienna%20Woodland.%20Dates%3A%20" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Text us about the Sienna</a>
            <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Call (904) 314-7650</a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBookBar vehicleName="Toyota Sienna Woodland" bookingUrl={BOOKING_URL} price="$79" />
    </div>
  );
}
