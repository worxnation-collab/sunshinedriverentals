/*
 * Challenger R/T — B5 Blue — SunshineDrive Rentals
 * Second Challenger in the fleet. The F8 Green car lives at /challenger-rt-rental/.
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

const TURO_URL = TURO_LINKS.challengerB5;

const QUOTE_TEXT =
  "sms:+19043147650?body=Hey%20-%20I%27m%20interested%20in%20the%20B5%20Blue%20Challenger%20R%2FT.%20Dates%3A%20";

const SPECS = [
  { label: "372 hp", sub: "5.7L 345 HEMI V8" },
  { label: "RWD", sub: "Rear-wheel drive" },
  { label: "8-speed", sub: "Automatic" },
  { label: "5 seats", sub: "2-door coupe" },
  { label: "B5 Blue", sub: "Exterior" },
  { label: "Delivered", sub: "To your door" },
];

const FAQ_ITEMS = [
  {
    question: "How much does it cost to rent the B5 Blue Challenger?",
    answer:
      "Text us your dates and we'll send a quote within minutes. Rates move with the season and trip length, and delivery is always included — no airport counters, no surprise fees.",
  },
  {
    question: "What's the difference between your two Challengers?",
    answer:
      "Same car, two very different looks. This one is B5 Blue on blacked-out 20s with a dark cabin — the aggressive one. The F8 Green R/T is the matte-military look that pairs with the Hellcat and the Charger. Mechanically they're twins: 5.7L HEMI, rear-wheel drive, 8-speed auto.",
  },
  {
    question: "Is insurance included?",
    answer:
      "Yes. All rentals include liability and physical damage coverage. Drivers must be 25+, hold a valid license, and pass a quick verification before pickup.",
  },
  {
    question: "Can I rent it for a photo or video shoot?",
    answer:
      "This is arguably our best shoot car. B5 Blue pops against every Florida backdrop — palms, water, concrete, golden hour. We offer dedicated content rates and can pair it with any other car in the fleet for a two-car setup. Text us for shoot details.",
  },
  {
    question: "Can I take it on a road trip?",
    answer:
      "You can, though the Legacy Touring XT is the smarter pick for long highway miles. Rentals include 150 miles per day; additional miles are billed at a per-mile rate after your trip.",
  },
  {
    question: "What are the rental requirements?",
    answer:
      "Drivers must be 25 or older with a valid U.S. driver's license and complete a quick verification before pickup. A refundable security deposit may apply depending on the trip.",
  },
];

export default function ChallengerB5() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="B5 Blue Dodge Challenger R/T Rental Orlando | 5.7L HEMI V8"
        description="Rent a 2018 Dodge Challenger R/T in B5 Blue in Orlando. 372hp 5.7L HEMI V8, blacked-out 20s, rear-wheel drive. Delivered to MCO or your hotel. Contact us for a quote."
        url="/challenger-rt-b5-rental/"
      />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-end pb-12"
        style={{ background: "linear-gradient(135deg, #0f2033 0%, #1c3a5c 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FLEET_IMAGES.challengerB5Hero})`,
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
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Challenger R/T · B5 Blue</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {["372 HP", "5.7L HEMI V8", "B5 BLUE", "RWD", "DELIVERED"].map((s) => (
              <span key={s} className="spec-pill">{s}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
            Challenger R/T in B5 Blue.
          </h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "var(--sd-amber)", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            Loud in every sense.
          </h1>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href={TURO_URL} target="_blank" rel="noopener noreferrer" className="btn-book">Book on Turo</a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: "520px", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            372 horsepower of 5.7L HEMI, wrapped in B5 Blue over blacked-out 20s. The color Dodge built for people who were never trying to blend in.
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
            Two Challengers. <span style={{ color: "var(--sd-green)" }}>Pick your personality.</span>
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "700px", marginBottom: "2.5rem" }}>
            Under the hood it's the same story as our F8 Green R/T — a 5.7L 345 HEMI making 372 horsepower through an 8-speed auto to the rear wheels, with the hood scoop and the exhaust note that come standard with the badge. Above the hood it's a completely different car. B5 Blue is one of the loudest colors Dodge has ever put on a Challenger, and on gloss-black 20s with a blacked-out grille it reads far more aggressive than the green car. If you're deciding between them, this is the one that photographs best and turns the most heads.
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
              { src: FLEET_IMAGES.challengerB5Hero, alt: "B5 Blue Dodge Challenger R/T front three-quarter view, Orlando rental" },
              { src: FLEET_IMAGES.challengerB5Side, alt: "B5 Blue Dodge Challenger R/T profile with blacked-out 20-inch wheels" },
              { src: FLEET_IMAGES.challengerB5Interior, alt: "Dodge Challenger R/T black interior with Apple CarPlay and 8-speed automatic" },
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
              "Backup camera",
              "Blind spot warning",
              "Brake assist",
              "Bluetooth + AUX",
              "Sport pedals",
              "Paddle shifters",
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
            Who rents the blue one?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Content creators & photographers", desc: "B5 Blue against Florida palms, water, or bare concrete is the whole shot. Blacked-out wheels keep it from reading soft. If you're shooting one car, shoot this one." },
              { title: "Anyone who wanted a muscle car as a kid", desc: "Hood scoop, 5.7L HEMI, rear-wheel drive, and a color straight off a Hot Wheels card. This is the rental you book because you finally can." },
              { title: "Date nights and nights out", desc: "Two doors, a back seat that actually holds people, and an exhaust note that announces the reservation before you reach the valet." },
              { title: "Groups who booked another car already", desc: "Pair it with the F8 Green Challenger for a two-tone matched set, or with the Durango Hellcat when half the group wants space and the other half wants noise." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)", marginBottom: "0.4rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIBLING CROSS-LINK ── */}
      <section style={{ background: "var(--sd-cream)", padding: "3rem 0" }}>
        <div className="container">
          <div className="p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
            <img
              src={FLEET_IMAGES.challengerHero}
              alt="F8 Green Dodge Challenger R/T rental Orlando"
              className="rounded-xl object-cover w-full md:w-64"
              style={{ aspectRatio: "16/10" }}
              loading="lazy"
            />
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>
                Prefer the green one?
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65, marginBottom: "0.75rem" }}>
                Same 5.7L HEMI, same rear-wheel drive, different attitude. The F8 Green R/T is the understated pick — and it's the one that pairs with the Durango Hellcat and the Charger Scat Pack.
              </p>
              <a href="/challenger-rt-rental/" className="text-sm font-semibold" style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}>
                See the F8 Green Challenger →
              </a>
            </div>
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
