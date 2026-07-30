/*
 * Honda HR-V EX-L — SunshineDrive Rentals
 * Everyday tier. Contact-for-quote model (no public pricing).
 */
import Navbar from "@/components/Navbar";
import { TURO_LINKS } from "@/lib/turo";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBar from "@/components/TrustBar";
import { ChevronRight } from "lucide-react";
import { FLEET_IMAGES } from "@/lib/images";

const TURO_URL = TURO_LINKS.hrv;

const QUOTE_TEXT =
  "sms:+19043147650?body=Hey%20-%20I%27m%20interested%20in%20the%20Honda%20HR-V.%20Dates%3A%20";

const SPECS = [
  { label: "158 hp", sub: "2.0L 4-cylinder" },
  { label: "29 MPG", sub: "Regular gas" },
  { label: "5 seats", sub: "Compact SUV" },
  { label: "EX-L", sub: "Top trim" },
  { label: "Automatic", sub: "CVT" },
  { label: "Delivered", sub: "To your door" },
];

const FAQ_ITEMS = [
  {
    question: "How much does it cost to rent the HR-V?",
    answer:
      "Text us your dates and we'll send a quote within minutes. This is the most affordable car in our fleet, and delivery is still included — no airport counters, no surprise fees.",
  },
  {
    question: "Is insurance included?",
    answer:
      "Yes. All rentals include liability and physical damage coverage. Drivers must be 25+, hold a valid license, and pass a quick verification before pickup.",
  },
  {
    question: "Will it fit my family and our luggage?",
    answer:
      "Five seats, a wide-opening hatch, and a cargo floor that swallows a full week of suitcases with the rear seats up — more with them folded. It's the easy answer for a family flying into MCO who just needs a clean, reliable car that parks anywhere.",
  },
  {
    question: "How does it compare to the Legacy Touring XT?",
    answer:
      "The HR-V is the value pick — smaller, lighter on gas, and easier to park at the parks. The Legacy Touring XT is the comfort pick, with a 260hp turbo, all-wheel drive, and Nappa leather. Both are the quiet side of our fleet; the HR-V is the one that leaves the most room in the budget.",
  },
  {
    question: "Is it good for theme park trips?",
    answer:
      "It's our best car for it. 29 MPG, a small footprint for tight parking garages, adaptive cruise for the I-4 crawl, and a hatch you can load a stroller into without a fight.",
  },
  {
    question: "What are the rental requirements?",
    answer:
      "Drivers must be 25 or older with a valid U.S. driver's license and complete a quick verification before pickup. A refundable security deposit may apply depending on the trip.",
  },
];

export default function HRV() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Honda HR-V Rental Orlando | Affordable SUV Near MCO Airport"
        description="Rent a 2023 Honda HR-V EX-L in Orlando. 29 MPG, five seats, big hatch, Apple CarPlay. Delivered to MCO or your hotel. The value pick in our fleet — contact us for a quote."
        url="/orlando-hrv-rental/"
      />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-end pb-12"
        style={{ background: "linear-gradient(135deg, #1a2e2e 0%, #2d4a4a 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FLEET_IMAGES.hrvHero})`,
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
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Honda HR-V</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {["29 MPG", "5 SEATS", "EX-L TRIM", "BIG HATCH", "DELIVERED"].map((s) => (
              <span key={s} className="spec-pill">{s}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
            Honda HR-V EX-L.
          </h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "var(--sd-amber)", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            The easy one.
          </h1>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href={TURO_URL} target="_blank" rel="noopener noreferrer" className="btn-book">Book on Turo</a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: "520px", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            29 MPG, five seats, and a hatch that takes the whole family's luggage. Not every trip needs 700 horsepower — sometimes it just needs to be simple.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href={QUOTE_TEXT} className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>Text us your dates</a>
            <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>Call (904) 314-7650</a>
          </div>
          <TrustBar dark />
        </div>
      </section>

      {/* ── SPECS ── */}
      <section style={{ background: "white", padding: "3rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "1.5rem" }}>
            The one you book when the trip <span style={{ color: "var(--sd-green)" }}>isn't about the car.</span>
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "700px", marginBottom: "2.5rem" }}>
            EX-L is the top HR-V trim, so this one came loaded — leather seating, adaptive cruise control, blind spot monitoring, and Apple CarPlay on a clean, simple dash. It returns 29 MPG, fits in the tightest garage on International Drive, and the hatch opens wide enough to load a stroller one-handed. Same hand-detailing and same door-to-door delivery as the Hellcat. A fraction of the fuel bill.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {SPECS.map((spec) => (
              <div key={spec.label} className="p-4 rounded-xl text-center" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--sd-charcoal)", fontFamily: "'Playfair Display', serif" }}>{spec.label}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--sd-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.25rem" }}>{spec.sub}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: FLEET_IMAGES.hrvHero, alt: "White Honda HR-V EX-L front three-quarter view, Orlando rental" },
              { src: FLEET_IMAGES.hrvFront, alt: "Honda HR-V EX-L front profile with black lower trim" },
              { src: FLEET_IMAGES.hrvInterior, alt: "Honda HR-V rear seats in black leather" },
              { src: FLEET_IMAGES.hrvCargo, alt: "Honda HR-V open hatch showing cargo space for luggage" },
            ].map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} className="rounded-xl w-full object-cover" style={{ aspectRatio: "4/3" }} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: "var(--sd-cream)", padding: "4rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2rem" }}>
            What's inside
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Apple CarPlay",
              "Android Auto",
              "Adaptive cruise control",
              "Blind spot warning",
              "Brake assist",
              "Backup camera",
              "Bluetooth + AUX",
              "LATCH car seat anchors",
            ].map((f) => (
              <div key={f} className="p-4 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--sd-charcoal)" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO RENTS ── */}
      <section style={{ background: "white", padding: "4rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2rem" }}>
            Who rents the HR-V?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Families on a theme park week", desc: "Park it anywhere, fill it with strollers and sunscreen, and spend the savings on tickets instead of fuel. Five seats, LATCH anchors, and a hatch that loads easy." },
              { title: "Longer stays", desc: "When you need a car for a week or two rather than a weekend, the daily rate and the 29 MPG matter more than the horsepower. This is the one that keeps a long trip affordable." },
              { title: "Anyone who just needs a car that works", desc: "Clean, reliable, top-trim Honda with leather and CarPlay. No counter line, no upsell, no surprise fees — we bring it to you and hand you the keys." },
              { title: "Groups splitting across two cars", desc: "Pair it with a Challenger or the Durango Hellcat when half the group wants the fun car and the other half wants the luggage space." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)", marginBottom: "0.4rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Ready to roll?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={TURO_URL} target="_blank" rel="noopener noreferrer" className="btn-book">Book on Turo</a>
            <a href={QUOTE_TEXT} className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Text us your dates</a>
            <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Call (904) 314-7650</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
