/*
 * Charger Scat Pack — SunshineDrive Rentals
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

const QUOTE_TEXT =
  "sms:+19043147650?body=Hey%20-%20I%27m%20interested%20in%20the%20Charger%20Scat%20Pack.%20Dates%3A%20";

const SPECS = [
  { label: "485 hp", sub: "6.4L 392 HEMI V8" },
  { label: "RWD", sub: "Rear-wheel drive" },
  { label: "8-speed", sub: "Automatic" },
  { label: "5 seats", sub: "4-door sedan" },
  { label: "F8 Green", sub: "Exterior" },
  { label: "Delivered", sub: "To your door" },
];

const FAQ_ITEMS = [
  { question: "How much does it cost to rent the Charger?", answer: "Text us your dates and we'll send a quote within minutes. Rates vary by season and trip length, and delivery is always included — no airport counters, no surprise fees." },
  { question: "Is insurance included?", answer: "Yes. All rentals include liability and physical damage coverage. Drivers must be 25+, hold a valid license, and pass a quick verification before pickup." },
  { question: "Can I take it on a road trip?", answer: "Absolutely — the Scat Pack is built for Florida road trips. Rentals include 150 miles per day; additional miles are billed at a per-mile rate after your trip." },
  { question: "What's the difference between the Charger and the Challenger?", answer: "The Charger Scat Pack is the 4-door, 485hp 392 HEMI — room for five and a bigger engine than the Challenger R/T's 375hp V8. Same F8 Green. The Charger is the one when you want the muscle and the back seats." },
  { question: "Can I rent it for a photo or video shoot?", answer: "Yes. The F8 Green Scat Pack with the Daytona stripe is one of our most photogenic cars. We offer dedicated content rates and can pair it with the Durango Hellcat for a matched-pair look. Text us for shoot details." },
  { question: "What are the rental requirements?", answer: "Drivers must be 25 or older with a valid U.S. driver's license and complete a quick verification before pickup. A refundable security deposit may apply depending on the trip." },
];

const TURO_URL = TURO_LINKS.charger;
export default function Charger() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Dodge Charger Scat Pack Rental Orlando | F8 Green 392 HEMI"
        description="Rent a 2022 Dodge Charger Scat Pack in Orlando. 485hp 6.4L 392 HEMI V8, F8 Green, four doors. Delivered to MCO or your hotel. Contact us for a quote."
        url="/orlando-charger-rental/"
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
            backgroundImage: `url(${FLEET_IMAGES.chargerHero})`,
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
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Charger Scat Pack</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {["485 HP", "392 HEMI V8", "F8 Green", "4 Doors", "Delivered"].map((s) => (
              <span key={s} className="spec-pill">{s}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
            Dodge Charger Scat Pack.
          </h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "var(--sd-amber)", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            Four doors. No apologies.
          </h1>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href={TURO_URL} target="_blank" rel="noopener noreferrer" className="btn-book">Book on Turo</a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: "520px", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            485 horsepower from a 6.4L 392 HEMI, wrapped in F8 Green with the Daytona stripe. The full muscle-car presence — with a back seat for the crew.
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
            The muscle car that <span style={{ color: "var(--sd-green)" }}>seats the whole crew.</span>
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "700px", marginBottom: "2.5rem" }}>
            The Charger Scat Pack is the one you book when you want a real V8 and four doors. 485 horsepower out of the 6.4L 392 HEMI, F8 Green over the Daytona stripe, and enough room for five. Same head-turning presence as the Challenger and the Durango Hellcat — just more practical when the group rolls deep.
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
              FLEET_IMAGES.chargerHero,
              FLEET_IMAGES.chargerFront,
              FLEET_IMAGES.chargerRear,
              FLEET_IMAGES.chargerDaytona,
            ].map((src, i) => (
              <img key={i} src={src} alt={`Dodge Charger Scat Pack F8 Green view ${i + 1}`} className="rounded-xl w-full object-cover" style={{ aspectRatio: "4/3" }} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO RENTS ── */}
      <section style={{ background: "var(--sd-cream)", padding: "4rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2rem" }}>
            Who rents the Charger?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Groups who still want the V8", desc: "Four doors, five seats, and a 392 HEMI up front. When the Challenger's two-door life won't cut it but you're not giving up the muscle, this is the answer." },
              { title: "Car enthusiasts", desc: "485 naturally-aspirated horsepower with the Scat Pack exhaust note. F8 Green over the Daytona stripe — this one gets noticed in every parking lot on I-Drive." },
              { title: "Content creators & photographers", desc: "The F8 Green Scat Pack is built for golden hour. Pair it with the Durango Hellcat for a matched-pair shoot and the whole feed pops." },
              { title: "Weekend trips & nights out", desc: "Room for the crew, trunk for the bags, and a sound that announces you've arrived. Dinner downtown or a cruise down A1A — it fits the moment." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)", marginBottom: "0.4rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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
