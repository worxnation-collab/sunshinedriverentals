/*
 * Challenger — SunshineDrive Rentals
 * Wheelbase booking URL: https://checkout.wheelbasepro.com/r/reserve/526694?owner_id=5011008&rental_category=auto
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

const BOOKING_URL = "https://checkout.wheelbasepro.com/r/reserve/526694?owner_id=5011008&rental_category=auto";

const SPECS = [
  { label: "375 hp", sub: "Hemi V8" },
  { label: "RWD", sub: "Rear-wheel drive" },
  { label: "8-speed", sub: "Automatic" },
  { label: "4 seats", sub: "2-door coupe" },
  { label: "F8 Green", sub: "Exterior" },
  { label: "Delivered", sub: "To your door" },
];

const FAQ_ITEMS = [
  { question: "Is insurance included?", answer: "All rentals include liability and physical damage coverage through our Wheelbase insurance partner. Drivers must be 25+, hold a valid license, and pass a quick verification." },
  { question: "How much does it cost to rent the Challenger?", answer: "Text us your dates and we'll send you a quote within minutes. Rates vary by season and trip length. We're consistently cheaper than Turo and include delivery at no extra charge." },
  { question: "Can I take it on a road trip?", answer: "Yes — the Challenger is perfect for road trips within Florida. All rentals include 150 miles per day. Additional miles are billed at the per-mile overage rate after your trip." },
  { question: "What's the difference between this and the Hellcat?", answer: "The Hellcat is a 710hp supercharged SUV with 7 seats. The Challenger is a 375hp naturally-aspirated V8 coupe with 4 seats. The Hellcat is about raw power and hauling the group. The Challenger is about the driving experience. Both are F8 Green." },
  { question: "Can I rent it for a photo or video shoot?", answer: "Yes. The F8 Green Challenger is one of our most-photographed vehicles. We offer dedicated content rates and can pair it with the Hellcat for the full Duo look. Text us for shoot pricing." },
  { question: "What are the rental requirements?", answer: "Drivers must be 25 or older with a valid U.S. driver's license. All drivers must complete a quick verification through our booking system before pickup. A security deposit may apply depending on the trip." },
];

export default function Challenger() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Dodge Challenger R/T Rental Orlando | F8 Green Muscle Car"
        description="Rent a Dodge Challenger R/T in Orlando. 375hp Hemi V8, F8 Green, classic American muscle. Delivered to MCO or your hotel. Contact us for a quote."
        url="/challenger-rt-rental/"
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
            backgroundImage: `url(${FLEET_IMAGES.challengerHero})`,
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
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Challenger R/T</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {["375 HP", "Hemi V8", "F8 Green", "Delivered"].map((s) => (
              <span key={s} className="spec-pill">{s}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
            Dodge Challenger R/T.
          </h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "var(--sd-amber)", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            Pure muscle.
          </h1>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href="/#contact" className="btn-book">
              Request a Quote
            </a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: "520px", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            375 horsepower. Hemi V8. F8 Green. The car that started the muscle car era, still turning heads on every Orlando boulevard.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href="#book" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>Get a quote below</a>
            <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>Call (904) 314-7650</a>
          </div>
          <TrustBar dark />
        </div>
      </section>

      {/* ── SPECS ── */}
      <section style={{ background: "white", padding: "3rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "1.5rem" }}>
            The other half of the <span style={{ color: "var(--sd-green)" }}>F8 Green Duo.</span>
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "700px", marginBottom: "2.5rem" }}>
            The Challenger R/T is the driver's car in the Sunshine fleet. Where the Durango Hellcat hauls the crew, the Challenger is for the person who wants to feel every gear change, hear every exhaust note, and arrive somewhere looking like they meant it. Same F8 Green as the Hellcat. Same presence. Different energy.
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
              FLEET_IMAGES.challengerHero,
              FLEET_IMAGES.challengerFront,
              FLEET_IMAGES.challengerGrass,
            ].map((src, i) => (
              <img key={i} src={src} alt={`Dodge Challenger R/T F8 Green view ${i + 1}`} className="rounded-xl w-full object-cover" style={{ aspectRatio: "4/3" }} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO RENTS ── */}
      <section style={{ background: "var(--sd-cream)", padding: "4rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2rem" }}>
            Who rents the Challenger?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Couples & date nights", desc: "Two seats that matter, a V8 soundtrack, and a car that looks like it was built for a movie. Pull up to dinner on I-Drive or cruise down A1A with the windows down." },
              { title: "Car enthusiasts", desc: "If you know what a Hemi sounds like at 4,000 RPM, this is your rental. The Challenger R/T is the real thing — no turbo-four pretending to be a muscle car." },
              { title: "Content creators & photographers", desc: "F8 Green on a Challenger body is one of the most photogenic combinations on the road. Golden hour, palm trees, and this car — that's the shot." },
              { title: "Bachelor & bachelorette trips", desc: "The groom gets the Challenger, the crew gets the Hellcat. Or book the full F8 Duo and roll up matching." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)", marginBottom: "0.4rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WheelbaseWidget bookingUrl={BOOKING_URL} vehicleName="Dodge Challenger R/T" price="$89" id="book" />

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
            <a href="/#contact" className="btn-book">Request a Quote</a>
            <a href="sms:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Questions? Text us</a>
            <a href="sms:+19043147650?body=Hey%20-%20I%27m%20interested%20in%20the%20F8%20Duo%20(Hellcat%20%2B%20Challenger).%20Dates%3A%20" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Text us about the Duo</a>
            <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Call (904) 314-7650</a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBookBar vehicleName="Dodge Challenger R/T" bookingUrl={BOOKING_URL} price="$89" />
    </div>
  );
}
