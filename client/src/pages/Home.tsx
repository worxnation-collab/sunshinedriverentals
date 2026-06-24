/*
 * Home â SunshineDrive Rentals
 * Design: Refined Warmth â preserving existing visual identity
 * CX improvements:
 *   - Trust bar elevated to hero section
 *   - Sticky mobile booking bar
 *   - Fleet cards with consistent image aspect ratios and clear CTAs
 *   - Improved FAQ accordion
 *   - Email form with validation feedback
 *   - Booking section with clear Wheelbase CTA
 */
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import PageMeta from "@/components/PageMeta";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBar from "@/components/TrustBar";
import { ArrowRight, MapPin, Star, CheckCircle, ChevronRight } from "lucide-react";
import { FLEET_IMAGES } from "@/lib/images";
import { submitInquiry, subscribeEmail } from "@/lib/api";

const FLEET = [
  {
    category: "Performance",
    name: "Durango SRT Hellcat",
    year: "2021",
    subtitle: "F8 Green",
    specs: ["710 hp", "7 seats", "AWD"],
    price: "$199",
    badge: "LAUNCH PRICING",
    href: "/orlando-hellcat-rental/",
    bookingUrl: "https://checkout.wheelbasepro.com/r/reserve/526504?owner_id=5011008&rental_category=auto",
    halfDay: true,
    img: FLEET_IMAGES.hellcatHero,
    categoryColor: "#6abf4b",
  },
  {
    category: "Muscle",
    name: "Dodge Challenger R/T",
    year: "2018",
    subtitle: "F8 Green",
    specs: ["375 hp", "4 seats", "V8"],
    price: "$89",
    badge: "LAUNCH PRICING",
    href: "/challenger-rt-rental/",
    bookingUrl: "https://checkout.wheelbasepro.com/r/reserve/526694?owner_id=5011008&rental_category=auto",
    halfDay: true,
    img: FLEET_IMAGES.challengerHero,
    categoryColor: "#6abf4b",
  },
  {
    category: "Muscle",
    name: "Dodge Charger Scat Pack",
    year: "2022",
    subtitle: "F8 Green Â· 392 HEMI",
    specs: ["485 hp", "5 seats", "6.4L V8"],
    price: "",
    badge: "LAUNCH PRICING",
    href: "/orlando-charger-rental/",
    bookingUrl: "/orlando-charger-rental/",
    halfDay: true,
    img: FLEET_IMAGES.chargerHero,
    categoryColor: "#6abf4b",
  },
  {
    category: "Adventure",
    name: "Ford Bronco",
    year: "2026",
    subtitle: "Rapid Red",
    specs: ["4x4", "5 seats", "Removable Top"],
    price: "$99",
    badge: "LAUNCH PRICING",
    href: "/orlando-bronco-rental/",
    bookingUrl: "https://checkout.wheelbasepro.com/r/reserve/526695?owner_id=5011008&rental_category=auto",
    halfDay: false,
    img: FLEET_IMAGES.broncoHero,
    categoryColor: "#e05c2a",
  },
  ];

const REVIEWS = [
  {
    text: "Perfect! Car was incredible, very clean and like new, easy to pick up and drop off. The host is very kind and communicative. I recommend!",
    author: "Ocean",
    context: "Dodge Challenger 2018 â¢ June 4, 2026",
  },
      {
    text: "The car was perfect and everything I dreamed of and my host was phenomenal I will definitely be renting again",
    author: "Sony",
    context: "Dodge Durango 2021 â¢ May 24, 2026",
  },
    {
    text: "Great Host Easy pick and drop off will be renting again !",
    author: "James",
    context: "Dodge Durango 2021 â¢ May 11, 2026",
  },
  {
    text: "Daysi was exceptional!!! Very responsive and reliable. Communication was the best I have ever experience all tâs crossed and iâs dotted! I will be renting again!",
    author: "Katrina",
    context: "Dodge Durango 2021 â¢ May 4, 2026",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is every rental insured?",
    answer: "Yes. All rentals include liability and physical damage coverage through our Wheelbase insurance partner. Drivers must be 25+, hold a valid license, and pass a quick verification. Additional coverage options are available at booking.",
  },
  {
    question: "Is there a security deposit?",
    answer: "A security deposit hold is placed at booking and released after the vehicle is returned in the same condition. The amount varies by vehicle â it's shown clearly during checkout.",
  },
  {
    question: "What's the mileage policy?",
    answer: "Standard packages include 150â200 miles per day depending on the vehicle. Unlimited mileage is available for an additional fee. Any overage is billed at the per-mile rate after your trip.",
  },
  {
    question: "Where do you deliver?",
    answer: "We deliver to Orlando International (MCO) and Sanford (SFB) airports, all Disney and Universal resort hotels, Airbnbs and vacation rentals, and convention venues throughout Central Florida. Delivery is included within 30 miles of downtown Orlando.",
  },
  {
    question: "What's the cancellation policy?",
    answer: "Cancellations made 48+ hours before pickup receive a full refund. Cancellations within 48 hours may be subject to a fee. See the booking confirmation for full details.",
  },
  {
    question: "What's the minimum age to rent?",
    answer: "Drivers must be 25 or older with a valid U.S. driver's license. All drivers must complete a quick verification through our booking system.",
  },
  {
    question: "What if my flight is delayed or I arrive late?",
    answer: "Text us when you land â we'll adjust the delivery time. We're flexible and understand travel delays. Just keep us in the loop and we'll make it work.",
  },
  {
    question: "Do I need my own car insurance?",
    answer: "No. All rentals include liability and physical damage coverage through Wheelbase. You don't need to use your personal auto insurance or purchase additional coverage, though optional upgrades are available at checkout.",
  },
];

export default function Home() {
  const [emailValue, setEmailValue] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [mobileBarVisible, setMobileBarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setMobileBarVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue && emailValue.includes("@")) {
      await subscribeEmail(emailValue);
      setEmailSubmitted(true);
    }
  };

  // ââ Contact / quote request ââ
  const [contactForm, setContactForm] = useState({
    name: "", email: "", phone: "", vehicle: "", pickup_date: "", return_date: "", pickup_location: "", message: "",
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setContactForm({ ...contactForm, [e.target.id]: e.target.value });
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    const ok = await submitInquiry({ ...contactForm, booking_type: "general" });
    setContactSubmitting(false);
    if (ok) setContactSubmitted(true);
    else alert("Something went wrong. Please text us at (904) 314-7650.");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="SunshineDrive Rentals â Orlando Car Rentals Near MCO Airport"
        description="Premium car rentals delivered to MCO Airport, your hotel, or vacation rental. Performance SUVs, muscle cars, and family-ready vehicles â no airport counters, no surprise fees."
        url="/"
      />
      <Navbar />

      {/* ââ HERO ââ */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 40%, #3a5a3a 100%)",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663560999880/49fKAb8YKmx9TKxZnTNDi6/fleet-hero-TnK5R8bXxY8UACaaXbzTWi.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            opacity: 0.45,
          }}
        />
        <div className="hero-overlay" />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Location badge */}
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={13} style={{ color: "var(--sd-green)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>
                Locally owned in Orlando
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.8rem, 7vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                color: "white",
                marginBottom: "0.25rem",
              }}
            >
              Land in Orlando.
            </h1>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.8rem, 7vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                color: "var(--sd-green)",
                marginBottom: "1.5rem",
              }}
            >
              Drive into Sunshine.
            </h1>

            <p
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.65,
                maxWidth: "520px",
                marginBottom: "2.5rem",
              }}
            >
              Premium car rentals delivered to MCO Airport, your hotel, or vacation rental. Performance SUVs, muscle cars, and family-ready vehicles â no airport counters, no surprise fees.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#contact" className="btn-book" style={{ fontSize: "1rem" }}>
                Reserve Now <ArrowRight size={16} />
              </a>
              <a href="#fleet" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}>
                Browse Fleet
              </a>
            </div>

            {/* Trust signals */}
            <TrustBar dark />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div
            style={{
              width: 1,
              height: 40,
              background: "linear-gradient(to bottom, transparent, white)",
            }}
          />
        </div>
      </section>

      {/* ââ NEW TO FLEET: BRONCO SPOTLIGHT ââ */}
      <section
        className="relative py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 100%)",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${FLEET_IMAGES.broncoHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-label mb-3">New to the Fleet</div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  color: "white",
                  lineHeight: 1.1,
                  marginBottom: "0.5rem",
                }}
              >
                2026 Ford Bronco.
              </h2>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  color: "#e05c2a",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                }}
              >
                Go anywhere.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Rapid Red. Badlands 4x4. Removable top. The adventure side of SunshineDrive â red against our green fleet.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/orlando-bronco-rental/" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
                  See the Bronco
                </a>
                <a
                  href="/#contact"
                  className="btn-book"
                >
                  Get a Quote
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={FLEET_IMAGES.broncoHero}
                alt="2026 Ford Bronco Rapid Red"
                className="rounded-xl w-full object-cover"
                style={{ aspectRatio: "4/3", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
                loading="lazy"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="spec-pill">4x4 Adventure</span>
                <span className="spec-pill">Removable Top</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ââ FLEET ââ */}
      <section id="fleet" style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="mb-10">
            <div className="section-label mb-3">Our Fleet</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--sd-charcoal)",
                marginBottom: "0.75rem",
              }}
            >
              Find your <span style={{ color: "var(--sd-green)" }}>perfect ride.</span>
            </h2>
            <p style={{ color: "var(--sd-muted)", fontSize: "0.95rem", maxWidth: "480px", lineHeight: 1.6 }}>
              From 710-hp Hellcats to rugged Broncos â every car hand-detailed and delivered to your door. Launch pricing available now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEET.map((car) => (
              <div key={car.name} className="vehicle-card">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full text-white"
                      style={{ background: car.categoryColor, fontSize: "0.7rem" }}
                    >
                      {car.category}
                    </span>
                  </div>
                  {car.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full" style={{ background: "var(--sd-amber)", color: "white", fontSize: "0.65rem" }}>
                        {car.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--sd-charcoal)" }}>
                        {car.name}
                      </h3>
                      <p style={{ fontSize: "0.8rem", color: "var(--sd-muted)" }}>{car.year} Â· {car.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--sd-green-dark)" }}>Contact for quote</span>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-semibold px-2 py-1 rounded-full"
                        style={{ background: "var(--sd-cream)", color: "var(--sd-muted)", border: "1px solid var(--sd-border)" }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-2">
                    <a
                      href="/#contact"
                      className="btn-book w-full justify-center"
                      style={{ display: "flex", padding: "0.625rem 1rem", fontSize: "0.875rem" }}
                    >
                      Contact for a Quote
                    </a>
                    <a
                      href={car.href}
                      className="text-center text-sm font-semibold py-2 transition-colors hover:opacity-70"
                      style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}
                    >
                      View Details â
                    </a>
                    {car.halfDay && (
                      <a
                        href="/half-day-experience/"
                        className="text-center text-xs py-1 transition-colors hover:opacity-70"
                        style={{ color: "var(--sd-muted)", textDecoration: "none" }}
                      >
                        Half-day experiences available
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ââ REVIEWS ââ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="star-rating">âââââ</div>
                <span className="text-sm font-bold" style={{ color: "var(--sd-charcoal)" }}>5.0 on Google</span>
              </div>
              <div className="section-label mb-2">What Our Guests Say</div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  color: "var(--sd-charcoal)",
                }}
              >
                Real reviews from real trips.
              </h2>
            </div>
            <a
              href="https://g.page/r/sunshinedriverentals/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity"
              style={{ color: "var(--sd-green-dark)", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              Leave a review <ChevronRight size={14} />
            </a>
          </div>

          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", marginBottom: "2.5rem", fontStyle: "italic" }}>
            Every rental is a relationship â not just a transaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="p-6 rounded-xl"
                style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}
              >
                <div className="star-rating mb-3">âââââ</div>
                <p style={{ fontSize: "0.9rem", color: "var(--sd-charcoal)", lineHeight: 1.7, marginBottom: "1rem", fontStyle: "italic" }}>
                  "{review.text}"
                </p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--sd-charcoal)" }}>{review.author}</p>
                  <p style={{ fontSize: "0.78rem", color: "var(--sd-muted)" }}>â {review.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ââ ABOUT MATTHEW ââ */}
      <Reviews />

      <section style={{ background: "var(--sd-charcoal)", padding: "5rem 0" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-3" style={{ color: "var(--sd-green)" }}>The Owner</div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: "1.25rem",
                }}
              >
                Locally owned. Personally delivered.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                SunshineDrive is a family-run rental business based in Kissimmee, Florida. Every car in our fleet is personally maintained, hand-detailed, and delivered by the owner. No corporate counters, no bait-and-switch â just premium vehicles and real communication.
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
                Founded by Matthew Â· Serving Orlando, Kissimmee &amp; Central Florida
              </p>
              <div className="flex flex-col gap-2">
                {["Owner-operated", "Insured via Wheelbase", "Driver verified"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={15} style={{ color: "var(--sd-green)" }} />
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-bold"
                style={{ background: "var(--sd-green)", color: "white", fontFamily: "'Playfair Display', serif" }}
              >
                M
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ââ F8 DUO ââ */}
      <section style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">The Duo</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--sd-charcoal)",
              marginBottom: "0.75rem",
            }}
          >
            F8 Green Duo. Matching muscle.
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.95rem", maxWidth: "520px", lineHeight: 1.65, marginBottom: "3rem" }}>
            A Charger Scat Pack and a Challenger R/T â both in F8 Green. Rent them together for the ultimate Orlando experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Dodge Charger Scat Pack",
                desc: "485 hp, 392 HEMI, F8 Green. Four doors and a back seat — muscle that fits the whole crew.",
                href: "/orlando-charger-rental/",
                cta: "View the Charger",
              },
              {
                title: "Dodge Challenger R/T",
                desc: "The Charger's two-door twin in matching F8 Green. Pure V8 muscle for cruising Orlando.",
                href: "/challenger-rt-rental/",
                cta: "View the Challenger",
              },
              {
                title: "Duo Day Rental",
                desc: "Road trips, group outings, or just because. Two keys, two V8s, one unforgettable day.",
                href: "#contact",
                cta: "Book now",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl"
                style={{ background: "white", border: "1px solid var(--sd-border)" }}
              >
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--sd-charcoal)", marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  {item.desc}
                </p>
                <a
                  href={item.href}
                  className="text-sm font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity"
                  style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}
                >
                  {item.cta} <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ââ FAQ ââ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="section-label mb-3">FAQ</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--sd-charcoal)",
                marginBottom: "2.5rem",
              }}
            >
              Common questions.
            </h2>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* ââ EMAIL LIST ââ */}
      <section style={{ background: "var(--sd-cream)", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--sd-charcoal)",
                marginBottom: "0.5rem",
              }}
            >
              New vehicles. Deals. First dibs.
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", marginBottom: "1.5rem" }}>
              Join our list and be the first to know when we add new cars, run specials, or open peak-season availability.
            </p>
            {emailSubmitted ? (
              <div className="flex items-center justify-center gap-2 py-3">
                <CheckCircle size={18} style={{ color: "var(--sd-green)" }} />
                <span style={{ color: "var(--sd-green-dark)", fontWeight: 600 }}>You're on the list!</span>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex gap-2 max-w-sm mx-auto">
                <input
                  id="sd-email-input"
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="your@email.com"
                  className="sd-input flex-1"
                  required
                  aria-label="Email address"
                />
                <button type="submit" className="btn-primary" style={{ padding: "0.75rem 1.25rem", borderRadius: "0.5rem" }}>
                  Join the List
                </button>
              </form>
            )}
            <p style={{ fontSize: "0.75rem", color: "var(--sd-muted)", marginTop: "0.75rem" }}>
              No spam. Just cars. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ââ BOOKING / CONTACT ââ */}
      <section id="contact" style={{ background: "var(--sd-charcoal)", padding: "5rem 0" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-label mb-3" style={{ color: "var(--sd-green)" }}>Reserve</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              Ready to ride?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", marginBottom: "2.5rem", lineHeight: 1.65 }}>
              Tell us your dates and which car caught your eye. We'll text you a quote â usually within the hour. Delivery's included.
            </p>

            {contactSubmitted ? (
              <div className="p-6 rounded-xl mb-6 text-center" style={{ background: "rgba(45,90,61,0.25)", border: "1px solid var(--sd-green)" }}>
                <p style={{ color: "white", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.25rem" }}>Got it â thanks!</p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>We'll be in touch shortly. Need us now? Text (904) 314-7650.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="text-left mb-6" style={{ display: "grid", gap: "0.75rem" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input id="name" type="text" placeholder="Full name" className="sd-input" value={contactForm.name} onChange={handleContactChange} required />
                  <input id="phone" type="tel" placeholder="Phone" className="sd-input" value={contactForm.phone} onChange={handleContactChange} />
                </div>
                <input id="email" type="email" placeholder="you@email.com" className="sd-input" value={contactForm.email} onChange={handleContactChange} required />
                <select id="vehicle" className="sd-input" value={contactForm.vehicle} onChange={handleContactChange}>
                  <option value="">Which vehicle? (optional)</option>
                  {FLEET.map((car) => (
                    <option key={car.name} value={car.name}>{car.name}</option>
                  ))}
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input id="pickup_date" type="date" className="sd-input" value={contactForm.pickup_date} onChange={handleContactChange} />
                  <input id="return_date" type="date" className="sd-input" value={contactForm.return_date} onChange={handleContactChange} />
                </div>
                <input id="pickup_location" type="text" placeholder="Delivery spot (MCO, hotel, Airbnb...)" className="sd-input" value={contactForm.pickup_location} onChange={handleContactChange} />
                <textarea id="message" placeholder="Anything else we should know?" className="sd-input" rows={3} value={contactForm.message} onChange={handleContactChange} style={{ resize: "vertical" }} />
                <button type="submit" className="btn-book w-full justify-center" style={{ display: "flex" }} disabled={contactSubmitting}>
                  {contactSubmitting ? "Sending..." : "Request a Quote"}
                </button>
              </form>
            )}

            <div
              className="p-5 rounded-xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", marginBottom: "1rem" }}>
                Questions? Weddings? Shoots? Custom packages?
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="sms:+19043147650"
                  className="btn-secondary"
                  style={{ color: "white", borderColor: "rgba(255,255,255,0.3)", fontSize: "0.875rem" }}
                >
                  Text (904) 314-7650
                </a>
                <a
                  href="mailto:matthew@sunshinedriverentals.com"
                  className="btn-secondary"
                  style={{ color: "white", borderColor: "rgba(255,255,255,0.3)", fontSize: "0.875rem" }}
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky mobile booking bar */}
      <div
        className={`mobile-book-bar md:hidden ${mobileBarVisible ? "visible" : ""}`}
        role="complementary"
        aria-label="Quick booking"
      >
        <div className="flex flex-col">
          <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>SunshineDrive Rentals</span>
          <span className="text-sm font-bold" style={{ color: "white" }}>Delivered to your door Â· Get a quote</span>
        </div>
        <a href="#fleet" className="btn-book" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
          Browse Fleet
        </a>
      </div>
    </div>
  );
}
