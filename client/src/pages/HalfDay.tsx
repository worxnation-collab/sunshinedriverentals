/*
 * HalfDay — SunshineDrive Rentals
 * Dedicated Half-Day Experience page for Hellcat and Challenger
 * Targets impulse bookings from tourists who want a taste without a full-day commitment
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBar from "@/components/TrustBar";
import { FLEET_IMAGES } from "@/lib/images";
import { Clock, Zap, ArrowRight, CheckCircle } from "lucide-react";

const HELLCAT_BOOKING = "https://checkout.wheelbasepro.com/r/reserve/526504?owner_id=5011008&rental_category=auto";
const CHALLENGER_BOOKING = "https://checkout.wheelbasepro.com/r/reserve/526694?owner_id=5011008&rental_category=auto";

const FAQ_ITEMS = [
  { question: "How long is a half-day experience?", answer: "Up to 4 hours from pickup to return. That's enough for a scenic drive, a dinner outing, a photo session, or just cruising International Drive with the windows down." },
  { question: "Where can I pick up and return?", answer: "We deliver to your hotel, resort, Airbnb, or any location in Central Florida. Same free delivery as our full-day rentals — no extra charge within 30 miles of downtown Orlando." },
  { question: "Can I extend to a full day?", answer: "Yes — text us during your experience and we'll extend it to a full day if the car is available. You'll just pay the difference in rate." },
  { question: "Is insurance included?", answer: "Yes. All experiences include the same liability and physical damage coverage as our full-day rentals through our Wheelbase insurance partner." },
  { question: "What's the mileage limit for a half-day?", answer: "Half-day experiences include 75 miles. That's more than enough for any Orlando-area drive. Additional miles are available if you need them." },
  { question: "Can I book a half-day for a photo shoot?", answer: "Absolutely. A 4-hour window is perfect for a focused photo or video session. We offer dedicated shoot rates — text us for a custom quote." },
  { question: "What time slots are available?", answer: "We're flexible. Morning (8am–12pm), afternoon (1pm–5pm), and evening (5pm–9pm) slots are typical, but we'll work with your schedule." },
  { question: "Do I need to be 25?", answer: "Yes. Same requirements as all our rentals — 25+, valid U.S. license, and quick verification through our booking system." },
];

export default function HalfDay() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Half-Day Car Experience Orlando | Drive a Hellcat or Challenger"
        description="4-hour muscle car experience in Orlando. Drive a 710-hp Hellcat or 375-hp Challenger R/T. Delivered to you, insurance included. The perfect Orlando thrill."
        url="/half-day-experience/"
      />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative py-32 flex items-center"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FLEET_IMAGES.hellcatHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
          }}
        />
        <div className="hero-overlay" />
        <div className="container relative z-10 pt-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={14} style={{ color: "var(--sd-amber)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>
                Half-Day Experience
              </span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
              Just want a taste?
            </h1>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "var(--sd-amber)", lineHeight: 1.05, marginBottom: "1.5rem" }}>
              4 hours of muscle.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "500px", marginBottom: "2rem" }}>
              Don't need a full day? Drive a 710-hp Hellcat or a classic Challenger R/T for up to 4 hours. Delivered to you, insurance included, no strings attached. The most fun you'll have on four wheels in Orlando.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#choose" className="btn-book">
                Choose Your Car <ArrowRight size={16} />
              </a>
              <a href="sms:+19043147650?body=Hey%20-%20interested%20in%20a%20half-day%20experience.%20Dates%3A%20" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
                Text us for availability
              </a>
            </div>
            <TrustBar dark />
          </div>
        </div>
      </section>

      {/* ── WHY HALF DAY ── */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">Why Half-Day</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            Perfect for <span style={{ color: "var(--sd-amber)" }}>a taste of the experience.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Zap size={22} />, title: "Tourists & thrill-seekers", desc: "You're in Orlando for the parks, but you want one unforgettable driving experience. 4 hours is all you need to feel 710 horsepower." },
              { icon: <Clock size={22} />, title: "Date night or dinner", desc: "Pick up the Challenger at 5pm, cruise to dinner on I-Drive, turn heads all night, and return by 9pm. The ultimate date night upgrade." },
              { icon: <Zap size={22} />, title: "Content creators", desc: "4 hours is the perfect window for a focused photo or video session. Golden hour + muscle car = content that stops the scroll." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: "var(--sd-amber)", color: "white" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHOOSE YOUR CAR ── */}
      <section id="choose" style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">Choose Your Experience</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            Two cars. One decision.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hellcat */}
            <div className="vehicle-card overflow-hidden">
              <div className="relative" style={{ aspectRatio: "16/10" }}>
                <img src={FLEET_IMAGES.hellcatHero} alt="Dodge Durango SRT Hellcat" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white" style={{ background: "var(--sd-amber)" }}>
                    Half-Day Available
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "1.4rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>
                  Durango SRT Hellcat
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--sd-muted)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                  710 horsepower. 7 seats. F8 Green. The fastest 3-row SUV ever built. Feel the supercharger whine as you pull away from every stoplight. Bring the whole crew — it seats 7.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["710 hp", "7 seats", "AWD", "Supercharged V8"].map((spec) => (
                    <span key={spec} className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: "var(--sd-cream)", color: "var(--sd-muted)", border: "1px solid var(--sd-border)" }}>
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--sd-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Half-day from</span>
                    <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "var(--sd-charcoal)", fontFamily: "'Playfair Display', serif" }}>
                      Contact for pricing
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="/#contact" className="btn-book w-full justify-center" style={{ display: "flex" }}>
                    Request a Quote
                  </a>
                  <a href="/orlando-hellcat-rental/" className="text-center text-sm font-semibold py-2 hover:opacity-70 transition-opacity" style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}>
                    Full-day details →
                  </a>
                </div>
              </div>
            </div>

            {/* Challenger */}
            <div className="vehicle-card overflow-hidden">
              <div className="relative" style={{ aspectRatio: "16/10" }}>
                <img src={FLEET_IMAGES.challengerHero} alt="Dodge Challenger R/T" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white" style={{ background: "var(--sd-amber)" }}>
                    Half-Day Available
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "1.4rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>
                  Challenger R/T
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--sd-muted)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                  375 horsepower. Hemi V8. F8 Green. Classic American muscle that sounds as good as it looks. The driver's car — for the person who wants to feel every gear change.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["375 hp", "Hemi V8", "RWD", "F8 Green"].map((spec) => (
                    <span key={spec} className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: "var(--sd-cream)", color: "var(--sd-muted)", border: "1px solid var(--sd-border)" }}>
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--sd-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Half-day from</span>
                    <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "var(--sd-charcoal)", fontFamily: "'Playfair Display', serif" }}>
                      Contact for pricing
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="/#contact" className="btn-book w-full justify-center" style={{ display: "flex" }}>
                    Request a Quote
                  </a>
                  <a href="/challenger-rt-rental/" className="text-center text-sm font-semibold py-2 hover:opacity-70 transition-opacity" style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}>
                    Full-day details →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">What's Included</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            Everything you need. Nothing you don't.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
            {[
              "Up to 4 hours of drive time",
              "75 miles included",
              "Free delivery & pickup",
              "Full insurance coverage",
              "Full tank of gas",
              "Welcome kit (water, charger, guide)",
              "Extend to full day if available",
              "No hidden fees",
              "Owner on call via text",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={16} style={{ color: "var(--sd-green)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", color: "var(--sd-charcoal)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">Popular Routes</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            Where to take your 4 hours.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "International Drive cruise", desc: "Pick up at your I-Drive hotel, cruise the strip, stop at Icon Park for photos, grab dinner at a rooftop spot, and return." },
              { title: "Cocoa Beach run", desc: "45 minutes to the coast. Top down (Bronco) or windows down (Challenger). Beach sunset, then back. Perfect golden-hour content." },
              { title: "Winter Park dinner date", desc: "Cruise Park Avenue in a Hellcat, valet at a restaurant, turn heads all evening. The ultimate date night flex." },
              { title: "Disney Springs loop", desc: "Pick up at your Disney resort, cruise to Disney Springs for shopping and dinner, return to valet. Magical and muscular." },
            ].map((route) => (
              <div key={route.title} className="delivery-card">
                <h4 style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--sd-charcoal)", marginBottom: "0.3rem" }}>{route.title}</h4>
                <p style={{ fontSize: "0.82rem", color: "var(--sd-muted)", lineHeight: 1.6 }}>{route.desc}</p>
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2.5rem" }}>
              Half-Day Questions
            </h2>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "var(--sd-charcoal)", padding: "5rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "0.75rem" }}>
            Ready for the experience?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            Text us your dates and which car you want. We'll confirm availability and get you booked in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/#contact" className="btn-book">Request a Quote</a>
            <a href="/#contact" className="btn-book">Request a Quote</a>
            <a href="sms:+19043147650?body=Hey%20-%20interested%20in%20a%20half-day%20experience.%20Dates%3A%20" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
              Text us for availability
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
