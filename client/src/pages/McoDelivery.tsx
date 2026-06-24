/*
 * MCO Car Delivery — SunshineDrive Rentals
 * Dedicated landing page for MCO airport car delivery service
 * Targets high-intent search traffic: "MCO car rental delivery", "Orlando airport car delivery"
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBar from "@/components/TrustBar";
import { FLEET_IMAGES } from "@/lib/images";
import { MapPin, CheckCircle, ArrowRight, Clock, Car, Plane } from "lucide-react";

const FLEET = [
  { name: "Durango SRT Hellcat", price: "$199", specs: "710 hp · 7 seats · AWD", img: FLEET_IMAGES.hellcatHero, href: "/orlando-hellcat-rental/", bookingUrl: "https://checkout.wheelbasepro.com/r/reserve/526504?owner_id=5011008&rental_category=auto" },
  { name: "Dodge Challenger R/T", price: "$89", specs: "375 hp · V8 · F8 Green", img: FLEET_IMAGES.challengerHero, href: "/challenger-rt-rental/", bookingUrl: "https://checkout.wheelbasepro.com/r/reserve/526694?owner_id=5011008&rental_category=auto" },
  { name: "2026 Ford Bronco", price: "$99", specs: "4x4 · Removable Top", img: FLEET_IMAGES.broncoHero, href: "/orlando-bronco-rental/", bookingUrl: "https://checkout.wheelbasepro.com/r/reserve/526695?owner_id=5011008&rental_category=auto" },
];

const FAQ_ITEMS = [
  { question: "How does MCO delivery work?", answer: "Book your vehicle online, then text us your flight number and arrival time. When you land, text us again — we'll meet you at the curb within minutes. No shuttle buses, no waiting in line. Walk out, keys in hand, drive away." },
  { question: "Where exactly do you meet me at MCO?", answer: "We meet you at the curbside pickup area outside baggage claim at any terminal. Just text us when you have your bags and we'll direct you to the exact spot." },
  { question: "What if my flight is delayed?", answer: "No problem. We track your flight and adjust automatically. If you land late, just text us — we'll be there when you arrive. No extra fees for flight delays." },
  { question: "Do you deliver to Sanford Airport (SFB) too?", answer: "Yes. We deliver to both Orlando International (MCO) and Orlando Sanford International (SFB), including Allegiant and Avelo arrivals." },
  { question: "Is delivery included in the rental price?", answer: "Yes. Delivery and pickup within 30 miles of downtown Orlando is included at no extra charge. MCO and SFB airports are both within our free delivery zone." },
  { question: "How do I return the car?", answer: "We're flexible. Drop it at your hotel, the airport, or we pick it up from wherever you are. Just text us your return location and time — we'll handle the rest." },
  { question: "What about after-hours arrivals?", answer: "We accommodate late flights. Whether you land at 6am or midnight, we'll be there. Just let us know your arrival time when booking." },
  { question: "Do you deliver to hotels and vacation rentals too?", answer: "Absolutely. We deliver to Disney resort hotels, Universal hotels, I-Drive resorts, Kissimmee vacation rentals, Airbnbs, and anywhere in Central Florida." },
];

export default function McoDelivery() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="MCO Airport Car Delivery Orlando | Skip the Rental Counter"
        description="Premium car rental delivered to MCO Airport curbside. No shuttle buses, no lines. Text us when you land, keys in hand in 2 minutes. Contact us for a quote."
        url="/mco-car-delivery/"
      />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative py-32 flex items-center"
        style={{ background: "linear-gradient(135deg, #0a1a2a 0%, #1a3a5a 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663560999880/49fKAb8YKmx9TKxZnTNDi6/mco-delivery-hwsxgeKCrhfGiT9nG2w7jv.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
          }}
        />
        <div className="hero-overlay" />
        <div className="container relative z-10 pt-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Plane size={14} style={{ color: "var(--sd-green)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>
                MCO Airport Delivery
              </span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
              Skip the counter.
            </h1>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "var(--sd-green)", lineHeight: 1.05, marginBottom: "1.5rem" }}>
              We come to you.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "500px", marginBottom: "2rem" }}>
              Your car is cleaned, fueled, and waiting at the curb when you walk out of baggage claim. No shuttle buses. No long lines. No surprise fees. Just text us when you land.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#fleet" className="btn-book">
                Browse Fleet <ArrowRight size={16} />
              </a>
              <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
                Call (904) 314-7650
              </a>
            </div>
            <TrustBar dark />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">How It Works</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            Three steps. <span style={{ color: "var(--sd-green)" }}>Zero hassle.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", icon: <Car size={24} />, title: "Book your car", desc: "Choose your vehicle, select your dates, and complete your reservation online. Takes 2 minutes." },
              { num: "02", icon: <Plane size={24} />, title: "Text us when you land", desc: "Send us a quick text when your plane touches down. We'll meet you at the curb within minutes." },
              { num: "03", icon: <MapPin size={24} />, title: "Walk out, drive away", desc: "Your car is cleaned, fueled, and waiting at curbside pickup. Keys in hand, you're on your way." },
            ].map((step) => (
              <div key={step.num} className="relative p-6 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--sd-green)", color: "white" }}>
                    {step.icon}
                  </div>
                  <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--sd-border)", fontFamily: "'Playfair Display', serif" }}>{step.num}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SKIP THE COUNTER ── */}
      <section style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">Why Skip the Counter</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            The airport rental counter experience is broken.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--sd-charcoal)", marginBottom: "1.5rem" }}>The rental counter way:</h3>
              <div className="space-y-3">
                {[
                  "Wait for the shuttle bus (15–30 min)",
                  "Stand in line at the counter (20–45 min)",
                  "Get upsold on insurance you don't need",
                  "Walk to a random car in a parking garage",
                  "Discover it's not the car you booked",
                  "Drive a generic sedan that smells like air freshener",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span style={{ color: "#e05c2a", fontSize: "0.9rem", marginTop: "2px" }}>✗</span>
                    <span style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--sd-charcoal)", marginBottom: "1.5rem" }}>The SunshineDrive way:</h3>
              <div className="space-y-3">
                {[
                  "Walk out of baggage claim, car is at the curb",
                  "Keys handed to you in under 2 minutes",
                  "Insurance already included — no upselling",
                  "You booked a Hellcat? You're getting a Hellcat",
                  "Hand-detailed, fueled, and ready to go",
                  "Welcome kit with water, charger, and local guide",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} style={{ color: "var(--sd-green)", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.875rem", color: "var(--sd-charcoal)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY AREAS ── */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">Delivery Areas</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            We deliver <span style={{ color: "var(--sd-green)" }}>everywhere</span> in Central Florida.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Orlando International (MCO)", desc: "Curbside at any terminal. Just text when you land." },
              { title: "Sanford Airport (SFB)", desc: "Including Allegiant and Avelo arrivals." },
              { title: "Disney Resort Hotels", desc: "Grand Floridian, Polynesian, Boardwalk, Yacht Club — all of them." },
              { title: "Universal & Epic Universe", desc: "Hard Rock, Portofino, Royal Pacific, Aventura, Endless Summer." },
              { title: "OCCC Convention Hotels", desc: "Hyatt, Hilton, Rosen, Peabody. Quick handoff before or after sessions." },
              { title: "Vacation Rentals", desc: "Reunion, ChampionsGate, Windsor Hills, Davenport, Kissimmee." },
              { title: "I-Drive Corridor", desc: "All hotels and resorts along International Drive." },
              { title: "Downtown Orlando", desc: "Lake Eola area, Thornton Park, and surrounding neighborhoods." },
              { title: "Kissimmee & Celebration", desc: "Our home base. We're minutes away from most Kissimmee addresses." },
            ].map((area) => (
              <div key={area.title} className="delivery-card">
                <h4 style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--sd-charcoal)", marginBottom: "0.3rem" }}>{area.title}</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--sd-muted)", lineHeight: 1.5 }}>{area.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl flex items-center gap-3" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
            <Clock size={18} style={{ color: "var(--sd-green)", flexShrink: 0 }} />
            <p style={{ fontSize: "0.85rem", color: "var(--sd-muted)" }}>
              <strong style={{ color: "var(--sd-charcoal)" }}>Free delivery</strong> within 30 miles of downtown Orlando. That covers MCO, SFB, all Disney/Universal properties, and most vacation rental areas.
            </p>
          </div>
        </div>
      </section>

      {/* ── FLEET ── */}
      <section id="fleet" style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">Available for MCO Delivery</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            Choose your ride.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEET.map((car) => (
              <div key={car.name} className="vehicle-card">
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img src={car.img} alt={car.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", color: "var(--sd-charcoal)" }}>{car.name}</h3>
                    <div className="text-right">
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--sd-green-dark)" }}>Contact for quote</span>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--sd-muted)", marginBottom: "1rem" }}>{car.specs}</p>
                  <div className="flex flex-col gap-2">
                    <a href="/#contact" className="btn-book w-full justify-center" style={{ display: "flex", padding: "0.625rem 1rem", fontSize: "0.85rem" }}>
                      Request a Quote
                    </a>
                    <a href={car.href} className="text-center text-sm font-semibold py-1 hover:opacity-70 transition-opacity" style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}>
                      View Details →
                    </a>
                  </div>
                </div>
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
              MCO Delivery Questions
            </h2>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "var(--sd-charcoal)", padding: "5rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "0.75rem" }}>
            Landing at MCO soon?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            Book your car now and we'll be waiting at the curb when you walk out. Text us your flight number and we'll handle the rest.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <a href="/#fleet" className="btn-book">Browse Fleet &amp; Book</a>
            <a href="sms:+19043147650?body=Hey%20-%20I%27m%20flying%20into%20MCO%20and%20need%20a%20car.%20Flight%3A%20" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
              Text us your flight info
            </a>
            <a href="tel:+19043147650" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
              Call (904) 314-7650
            </a>
          </div>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            Based in Kissimmee — just minutes from MCO. Serving Orlando, Central Florida &amp; beyond.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
