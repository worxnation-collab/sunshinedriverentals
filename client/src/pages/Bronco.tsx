/*
 * Bronco — SunshineDrive Rentals
 * Wheelbase booking URL: https://checkout.wheelbasepro.com/r/reserve/526695?owner_id=5011008&rental_category=auto
 */
import Navbar from "@/components/Navbar";
import { TURO_LINKS } from "@/lib/turo";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import FaqAccordion from "@/components/FaqAccordion";
import MobileBookBar from "@/components/MobileBookBar";
import WheelbaseWidget from "@/components/WheelbaseWidget";
import TrustBar from "@/components/TrustBar";
import { ChevronRight } from "lucide-react";
import { FLEET_IMAGES } from "@/lib/images";

const BOOKING_URL = "https://checkout.wheelbasepro.com/r/reserve/526695?owner_id=5011008&rental_category=auto";
const TURO_URL = TURO_LINKS.bronco;

const SPECS = [
  { label: "2026", sub: "Model Year" },
  { label: "4x4", sub: "Drivetrain" },
  { label: "4-Door", sub: "Configuration" },
  { label: "5 seats", sub: "Capacity" },
  { label: "35\"", sub: "All-Terrain Tires" },
  { label: "Badlands", sub: "Trim Level" },
];

const FAQ_ITEMS = [
  { question: "Is insurance included with the Bronco rental?", answer: "All rentals include liability and physical damage coverage through our Wheelbase insurance partner. Drivers must be 25+, hold a valid license, and pass a quick verification." },
  { question: "Can I take the top off?", answer: "Yes. The Bronco has removable roof panels. We'll show you how at pickup — it takes about 5 minutes. Please store the panels in the rear cargo area when removed, and re-install before return." },
  { question: "Can I take it off-road?", answer: "Light trails and packed dirt roads are fine — the Bronco is built for that. We ask that you avoid deep water crossings, mud pits, rock crawling, and anything that could cause undercarriage damage." },
  { question: "How much does it cost?", answer: "Text us your dates and we'll send you a quote within minutes. Rates vary by season and trip length. We're competitive with premium rental agencies and include delivery at no extra charge." },
  { question: "What's the mileage policy?", answer: "All rentals include 150 miles per day. Additional miles are billed at the per-mile overage rate after your trip. Most Orlando vacations stay well within the included mileage." },
  { question: "Can I rent it for a photo or video shoot?", answer: "Absolutely. The Rapid Red color and boxy Bronco silhouette are incredibly photogenic. We offer dedicated content rates and can pair it with our F8 Green muscle cars for contrast shots. Text us for shoot pricing." },
];

export default function Bronco() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Ford Bronco Rental Orlando | 4x4 Adventure SUV"
        description="Rent a 2026 Ford Bronco Badlands in Orlando. Rapid Red, 4x4, removable top. Delivered to MCO Airport or your hotel. Contact us for a quote."
        url="/orlando-bronco-rental/"
      />
      <Navbar />

      <section
        className="relative min-h-screen flex items-end pb-12"
        style={{ background: "linear-gradient(135deg, #2a1a0a 0%, #4a2a10 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FLEET_IMAGES.broncoHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.45,
          }}
        />
        <div className="hero-overlay" />
        <div className="container relative z-10 pt-28">
          <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</a>
            <ChevronRight size={12} />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Ford Bronco Rental</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {["4x4 Adventure", "Removable Top", "Delivered to You"].map((s) => (
              <span key={s} className="spec-pill">{s}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
            2026 Ford Bronco.
          </h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, color: "#e05c2a", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            Go anywhere.
          </h1>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href="/#contact" className="btn-book">
              Book on Turo
            </a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: "520px", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            4-door. 4x4. Removable top. All-terrain tires and trail-ready capability — delivered to MCO, your hotel, or vacation rental anywhere in Central Florida.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href="#book" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>Get a quote below</a>
          </div>
          <TrustBar dark />
        </div>
      </section>

      <section style={{ background: "white", padding: "3rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "1.5rem" }}>
            Red, rugged, and <span style={{ color: "#e05c2a" }}>ready for anything.</span>
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "700px", marginBottom: "2.5rem" }}>
            This isn't a rental counter crossover. The 2026 Ford Bronco is a purpose-built off-road machine with the comfort and tech to be your daily driver through Orlando. Removable roof panels, trail-rated 4x4, and all-terrain tires come standard. The Rapid Red exterior with black roof and black wheels makes this thing impossible to miss.
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
              FLEET_IMAGES.broncoHero,
              FLEET_IMAGES.broncoHero,
              FLEET_IMAGES.broncoHero,
            ].map((src, i) => (
              <img key={i} src={src} alt={`Ford Bronco Rapid Red view ${i + 1}`} className="rounded-xl w-full object-cover" style={{ aspectRatio: "4/3" }} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <WheelbaseWidget bookingUrl={BOOKING_URL} vehicleName="2026 Ford Bronco Badlands" price="$99" id="book" turoUrl={TURO_URL} />

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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Ready for an adventure?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/#contact" className="btn-book">Book on Turo</a>
            <a href="sms:+19043147650?body=Hey%20-%20interested%20in%20the%20Bronco.%20Dates%3A%20" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Text us about the Bronco</a>
            <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Call (904) 314-7650</a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBookBar vehicleName="2026 Ford Bronco" bookingUrl={BOOKING_URL} price="$99" turoUrl={TURO_URL} />
    </div>
  );
}
