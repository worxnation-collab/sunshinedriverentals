/*
 * Hellcat — SunshineDrive Rentals
 * Vehicle detail page for Dodge Durango SRT Hellcat
 * Wheelbase booking URL: https://checkout.wheelbasepro.com/r/reserve/526504?owner_id=5011008&rental_category=auto
 * CX improvements: sticky mobile book bar, trust bar in hero, clear booking CTA
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

const BOOKING_URL = "https://checkout.wheelbasepro.com/r/reserve/526504?owner_id=5011008&rental_category=auto";
const TURO_URL = TURO_LINKS.durango;

const SPECS = [
  { label: "710 hp", sub: "Supercharged 6.2L V8" },
  { label: "3.5 sec", sub: "0–60 mph" },
  { label: "180 mph", sub: "Top speed" },
  { label: "7 seats", sub: "Family-ready" },
  { label: "AWD", sub: "All-wheel drive" },
  { label: "F8 Green", sub: "Discontinued color" },
];

const FAQ_ITEMS = [
  { question: "How fast is the Durango SRT Hellcat?", answer: "0–60 in 3.5 seconds, top speed 180 mph. It's the fastest, most powerful three-row SUV ever built, with a supercharged 6.2L HEMI V8 producing 710 horsepower." },
  { question: "Can you deliver the Hellcat to MCO airport?", answer: "Yes. We deliver to Orlando International (MCO) and Sanford (SFB) airports, your hotel, vacation rental, or convention venue anywhere in Central Florida." },
  { question: "How much does it cost to rent the Durango Hellcat?", answer: "Select your dates in the booking widget above to see real-time pricing. Rates vary by dates, mileage package, and delivery location. You can also text us at (904) 314-7650 for a custom quote." },
  { question: "Is insurance included?", answer: "All rentals include liability and physical damage coverage. Drivers must be 25+, hold a valid license, and pass a quick verification. Additional coverage options available at booking." },
  { question: "Is there a mileage limit?", answer: "Standard packages include 150 miles per day. Unlimited mileage available for an additional fee — tell us your itinerary and we'll find the right package." },
  { question: "Can I rent it for content / photo / video?", answer: "Absolutely. The F8 Green Hellcat is one of our most-photographed vehicles. We offer dedicated content rates and can pair it with the Challenger R/T for the full F8 Duo look. Text us for duo shoot pricing." },
];

export default function Hellcat() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Dodge Durango Hellcat Rental Orlando | 710hp F8 Green SUV"
        description="Rent a 710-hp Dodge Durango SRT Hellcat in Orlando. F8 Green, 7 seats, AWD. Delivered to MCO Airport, your hotel, or vacation rental. Contact us for a quote."
        url="/orlando-hellcat-rental/"
      />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-end pb-12"
        style={{
          background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FLEET_IMAGES.hellcatHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div className="hero-overlay" />

        <div className="container relative z-10 pt-28">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</a>
            <ChevronRight size={12} />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Orlando Hellcat Rental</span>
          </div>

          {/* Spec pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {["710 HP", "Supercharged V8", "AWD", "Delivered"].map((s) => (
              <span key={s} className="spec-pill">{s}</span>
            ))}
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
            }}
          >
            Rent a Dodge <span style={{ color: "var(--sd-green)" }}>Hellcat</span> in Orlando
          </h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href={TURO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book"
              style={{ fontSize: "1rem" }}
            >
              Book on Turo
            </a>
          </div>

          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", maxWidth: "560px", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            710 horsepower. 7 seats. F8 Green. The fastest 3-row SUV ever built — delivered to MCO, your hotel, or vacation rental anywhere in Central Florida.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a href="#book" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>
              Get a quote below
            </a>
            <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>
              Call (904) 314-7650
            </a>
          </div>

          <TrustBar dark />
        </div>
      </section>

      {/* ── SPECS ── */}
      <section style={{ background: "white", padding: "3rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2rem" }}>
            The fastest 3-row SUV ever built. Yours for the weekend.
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "700px", marginBottom: "2.5rem" }}>
            The Durango SRT Hellcat is not a car you rent at the airport counter. It's a 710-horsepower, supercharged V8, AWD muscle SUV that hauls a family of seven and runs the quarter mile in under 12 seconds. We have one in F8 Green — a discontinued color that turns heads in every parking lot from International Drive to Cocoa Beach. And we'll deliver it directly to you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {SPECS.map((spec) => (
              <div key={spec.label} className="p-4 rounded-xl text-center" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--sd-charcoal)", fontFamily: "'Playfair Display', serif" }}>{spec.label}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--sd-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.25rem" }}>{spec.sub}</div>
              </div>
            ))}
          </div>

          {/* Photo gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              FLEET_IMAGES.hellcatHero,
              FLEET_IMAGES.hellcatFront,
              FLEET_IMAGES.hellcat3q,
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Dodge Durango SRT Hellcat F8 Green view ${i + 1}`}
                className="rounded-xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── F8 DUO UPSELL ── */}
      <section
        className="relative py-16"
        style={{ background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)", overflow: "hidden" }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-label mb-3">Double the muscle</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "white", marginBottom: "0.5rem" }}>
                Add the Challenger R/T.
              </h2>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--sd-green)", marginBottom: "1.25rem" }}>
                Make it the F8 Duo.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Both cars in F8 Green. A 710hp Hellcat SUV and a 375hp Challenger coupe — matching muscle that turns any weekend into a scene.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="sms:+19043147650?body=Hey%20-%20I%27m%20interested%20in%20the%20F8%20Duo%20(Hellcat%20%2B%20Challenger).%20Dates%3A%20" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
                  Text us about the Duo
                </a>
                <a href="/f8-duo-wedding/" className="btn-book">See Duo packages</a>
              </div>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663560999880/49fKAb8YKmx9TKxZnTNDi6/fleet-hero-TnK5R8bXxY8UACaaXbzTWi.webp"
              alt="F8 Green Dodge Challenger R/T rental Orlando"
              className="rounded-xl w-full object-cover"
              style={{ aspectRatio: "4/3" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── WHO RENTS ── */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2.5rem" }}>
            Who rents the Hellcat in Orlando?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Bachelor & bachelorette parties", desc: "Pulling up to International Drive in a 710hp green Hellcat is the photo your group will text about for years. 7 seats means the whole crew rides together." },
              { title: "Anniversary & milestone weekends", desc: "Anniversary dinner at Victoria & Albert's, birthday weekend in Winter Park, or a milestone birthday treat. Trade the rental Camry for something memorable." },
              { title: "Content creators & photographers", desc: "The F8 Green color and Hellcat badging make this a content magnet. Add the matching Challenger R/T for the F8 Duo — two green muscle machines, twice the content." },
              { title: "Families who don't want to compromise", desc: "Most family SUVs are appliances. The Durango Hellcat seats 7 in leather, tows 8,700 lbs, and goes 0-60 faster than most sports cars." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING WIDGET ── */}
      <WheelbaseWidget
        bookingUrl={BOOKING_URL}
        vehicleName="Dodge Durango SRT Hellcat"
        price="$199"
        id="book"
        turoUrl={TURO_URL}
      />

      {/* ── FAQ ── */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="section-label mb-3">FAQ</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2.5rem" }}>
              Frequently Asked Questions
            </h2>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "var(--sd-charcoal)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>
            Ready to roll?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={TURO_URL} target="_blank" rel="noopener noreferrer" className="btn-book">Book on Turo</a>
            <a href="sms:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
              Questions? Text us
            </a>
            <a href="sms:+19043147650?body=Hey%20-%20I%27m%20interested%20in%20the%20F8%20Duo%20(Hellcat%20%2B%20Challenger).%20Dates%3A%20" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
              Text us about the Duo
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBookBar vehicleName="Dodge Durango SRT Hellcat" bookingUrl={BOOKING_URL} price="$199" turoUrl={TURO_URL} />
    </div>
  );
}
