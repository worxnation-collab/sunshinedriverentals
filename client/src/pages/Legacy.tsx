/*
 * Subaru Legacy Touring XT — SunshineDrive Rentals
 * Contact-for-quote model (no public pricing).
 */
import Navbar from "@/components/Navbar";
import { TURO_LINKS } from "@/lib/turo";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBar from "@/components/TrustBar";
import { ChevronRight } from "lucide-react";
import { FLEET_IMAGES } from "@/lib/images";

const TURO_URL = TURO_LINKS.legacy;

const QUOTE_TEXT =
  "sms:+19043147650?body=Hey%20-%20I%27m%20interested%20in%20the%20Subaru%20Legacy%20Touring%20XT.%20Dates%3A%20";

const SPECS = [
  { label: "260 hp", sub: "2.4L Turbo Boxer" },
  { label: "AWD", sub: "Symmetrical all-wheel drive" },
  { label: "28 MPG", sub: "Regular gas" },
  { label: "5 seats", sub: "4-door sedan" },
  { label: "Nappa leather", sub: "Heated + ventilated" },
  { label: "Delivered", sub: "To your door" },
];

const FAQ_ITEMS = [
  {
    question: "How much does it cost to rent the Legacy Touring XT?",
    answer:
      "Text us your dates and we'll send a quote within minutes. Rates move with the season and trip length, and delivery is always included — no airport counters, no surprise fees.",
  },
  {
    question: "Is insurance included?",
    answer:
      "Yes. All rentals include liability and physical damage coverage. Drivers must be 25+, hold a valid license, and pass a quick verification before pickup.",
  },
  {
    question: "Is this a good car for a long Florida road trip?",
    answer:
      "It's the best one we have for it. 28 MPG, a huge trunk, adaptive cruise control, and a cabin quiet enough to hold a conversation at 80. Rentals include 150 miles per day; extra miles are billed at a per-mile rate after your trip.",
  },
  {
    question: "How is this different from your muscle cars?",
    answer:
      "The Hellcat, Charger, and Challenger are loud on purpose. The Legacy is the opposite — turbocharged AWD comfort with Nappa leather and a full safety suite. Same premium condition and same door-to-door delivery, just a quieter way to get there.",
  },
  {
    question: "Does it have Apple CarPlay and car seat anchors?",
    answer:
      "Yes to both. Wireless-friendly Apple CarPlay and Android Auto on the big vertical screen, plus LATCH anchors in the rear seats. It's a genuinely easy car to land at MCO and drive straight to the parks in.",
  },
  {
    question: "What are the rental requirements?",
    answer:
      "Drivers must be 25 or older with a valid U.S. driver's license and complete a quick verification before pickup. A refundable security deposit may apply depending on the trip.",
  },
];

export default function Legacy() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Subaru Legacy Touring XT Rental Orlando | AWD Turbo Sedan Near MCO"
        description="Rent a 2022 Subaru Legacy Touring XT in Orlando. 260hp turbo, symmetrical AWD, 28 MPG, Nappa leather. Delivered to MCO or your hotel. Contact us for a quote."
        url="/orlando-subaru-legacy-rental/"
      />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-end pb-12"
        style={{ background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FLEET_IMAGES.legacyHero})`,
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
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Legacy Touring XT</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {["260 HP TURBO", "AWD", "28 MPG", "NAPPA LEATHER", "DELIVERED"].map((s) => (
              <span key={s} className="spec-pill">{s}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
            Subaru Legacy Touring XT.
          </h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "var(--sd-amber)", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            The quiet flex.
          </h1>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href={TURO_URL} target="_blank" rel="noopener noreferrer" className="btn-book">Book on Turo</a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: "520px", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            260 turbocharged horsepower, symmetrical all-wheel drive, and a Nappa leather cabin that stays quiet at 80. Every bit of the premium — none of the noise.
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
            Turbocharged where it counts. <span style={{ color: "var(--sd-green)" }}>Quiet everywhere else.</span>
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "700px", marginBottom: "2.5rem" }}>
            The Touring XT is the top of the Legacy line — a 2.4L turbo boxer making 260 horsepower, Subaru's symmetrical all-wheel drive, and a Java Brown Nappa leather interior with heated and ventilated front seats. It merges onto I-4 without drama, holds 28 MPG on the highway, and swallows a full family's luggage. If the Hellcat is the trip you brag about, this is the trip you actually enjoy.
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
              FLEET_IMAGES.legacyHero,
              FLEET_IMAGES.legacyFront,
              FLEET_IMAGES.legacyInterior,
              FLEET_IMAGES.legacyRear,
            ].map((src, i) => (
              <img key={i} src={src} alt={`Subaru Legacy Touring XT Crimson Red view ${i + 1}`} className="rounded-xl w-full object-cover" style={{ aspectRatio: "4/3" }} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH & COMFORT ── */}
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
              "Backup camera",
              "Heated + ventilated seats",
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
            Who rents the Legacy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Families landing at MCO", desc: "Five seats, LATCH anchors, a trunk that fits the stroller and the suitcases, and a car seat-friendly back seat in real leather. We meet you at the terminal — no shuttle, no counter line." },
              { title: "Long-haul road trippers", desc: "28 MPG, adaptive cruise, and 260 turbocharged horses when you need to pass. Orlando to Miami or up to St. Augustine without a single fuel-stop calculation." },
              { title: "Business travelers", desc: "Shows up clean at the client's office and stays quiet on the phone call. All-wheel drive for the Florida afternoon downpour that shows up at 4pm every day." },
              { title: "Anyone who doesn't want the attention", desc: "Not every trip calls for a Hellcat. Crimson Red over Java Brown Nappa leather is understated and still looks expensive in the valet line." },
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
