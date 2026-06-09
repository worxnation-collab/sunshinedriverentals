/*
 * Weddings → Now "Bachelor Parties & Group Experiences"
 * Repositioned to market the two Dodge vehicles to bachelor party groups / boys trips
 * Subtle mention of couple's getaway that implies weddings without making it the focus
 * All imagery references real fleet vehicles (Hellcat + Challenger in F8 Green)
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBar from "@/components/TrustBar";
import { CheckCircle, Users, Zap, ArrowRight } from "lucide-react";
import { FLEET_IMAGES } from "@/lib/images";
import { submitInquiry } from "@/lib/api";

const FAQ_ITEMS = [
  { question: "How many people can ride together?", answer: "The Hellcat seats 7 comfortably. The Challenger seats 4. Together, that's 11 people in matching F8 Green muscle. Most bachelor groups split up — groom in the Challenger, crew in the Hellcat." },
  { question: "Can we get both cars for the whole weekend?", answer: "Absolutely. Multi-day duo rentals are our most popular bachelor party package. Request a Quote through our system, then text us to lock in the Challenger at duo pricing." },
  { question: "Where do bachelor groups usually take them?", answer: "International Drive for the nightlife, Cocoa Beach for a day trip, downtown Orlando for dinner, and Disney Springs for the low-key crew. The cars get attention everywhere." },
  { question: "Is there a security deposit?", answer: "Yes — a hold is placed at booking and released after the cars come back in the same condition. The amount is shown clearly during checkout. Treat them like your own and you're good." },
  { question: "Can we do rolling shots or content?", answer: "Yes. We're flexible with photo and video. Just coordinate with us on routes for rolling shots. Many bachelor groups hire a photographer for the weekend — the cars make incredible content." },
  { question: "What about insurance?", answer: "All rentals include liability and physical damage coverage through Wheelbase. Drivers must be 25+. Each driver needs to be verified through the booking system." },
  { question: "Can we add the Bronco for a bigger group?", answer: "Yes — the Rapid Red Bronco seats 5 and adds a completely different vibe. Three cars, three colors, one crew. Text us for group pricing." },
  { question: "Do you deliver to our Airbnb or hotel?", answer: "We deliver anywhere in Central Florida. Most bachelor groups are in Kissimmee, I-Drive, or Disney-area vacation rentals. Cars show up cleaned, fueled, and ready." },
];

export default function Weddings() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", group_size: "", date: "", location: "", occasion: "", notes: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const ok = await submitInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      pickup_date: formData.date,
      pickup_location: formData.location,
      booking_type: "wedding",
      message: `Occasion: ${formData.occasion || "—"} | Group size: ${formData.group_size || "—"}\n${formData.notes || ""}`.trim(),
    });
    setSubmitting(false);
    if (ok) setSubmitted(true);
    else alert("Something went wrong. Please try again or call us directly.");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Bachelor Party Car Rental Orlando | F8 Green Muscle Cars | SunshineDrive"
        description="Rent matching F8 Green muscle cars for your bachelor party in Orlando. 710-hp Hellcat SUV + 375-hp Challenger R/T. Delivered to your Airbnb. The weekend your crew won't shut up about."
        url="/weddings/"
      />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative py-32 flex items-center"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #1a2e1a 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663560999880/49fKAb8YKmx9TKxZnTNDi6/fleet-hero-TnK5R8bXxY8UACaaXbzTWi.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div className="hero-overlay" />
        <div className="container relative z-10 pt-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Users size={14} style={{ color: "var(--sd-green)" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>
                Group Experiences
              </span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
              Roll up matching.
            </h1>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "var(--sd-green)", lineHeight: 1.05, marginBottom: "1.5rem" }}>
              Turn heads all weekend.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "520px", marginBottom: "2rem" }}>
              Two matching F8 Green muscle cars — a 710-hp Hellcat that seats 7 and a Challenger R/T for the VIP. Bachelor parties, boys trips, milestone birthdays. The weekend your crew won't shut up about for years.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#inquiry" className="btn-book">
                Plan Your Weekend <ArrowRight size={16} />
              </a>
              <a href="sms:+19043147650?body=Hey%20-%20planning%20a%20bachelor%20party%20in%20Orlando.%20Dates%3A%20" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
                Text us about group pricing
              </a>
            </div>
            <TrustBar dark />
          </div>
        </div>
      </section>

      {/* ── THE CARS ── */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">The Fleet</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "1rem" }}>
            Two cars. One color. <span style={{ color: "var(--sd-green)" }}>Maximum impact.</span>
          </h2>
          <p style={{ color: "var(--sd-muted)", fontSize: "0.9rem", maxWidth: "560px", lineHeight: 1.7, marginBottom: "3rem" }}>
            Both in F8 Green — a discontinued Dodge color that turns heads in every parking lot from I-Drive to Cocoa Beach. Pull up to the club, the restaurant, or the beach house in matching muscle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hellcat */}
            <div className="rounded-xl overflow-hidden" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
              <img src={FLEET_IMAGES.hellcatHero} alt="Dodge Durango SRT Hellcat F8 Green" className="w-full object-cover" style={{ aspectRatio: "16/10" }} loading="lazy" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full text-white" style={{ background: "var(--sd-green)", fontSize: "0.7rem" }}>The Crew Car</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "1.3rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>
                  Durango SRT Hellcat
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                  710 hp. 7 seats. The whole squad rides together in the fastest SUV ever built. Supercharger whine at every green light. The bachelor party car that makes the Uber look embarrassing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["710 hp", "7 seats", "AWD", "Supercharged V8", "F8 Green"].map((s) => (
                    <span key={s} className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: "white", color: "var(--sd-muted)", border: "1px solid var(--sd-border)" }}>{s}</span>
                  ))}
                </div>
                <a href="/#contact" className="btn-book w-full justify-center" style={{ display: "flex" }}>
                  Request a Quote
                </a>
              </div>
            </div>

            {/* Challenger */}
            <div className="rounded-xl overflow-hidden" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
              <img src={FLEET_IMAGES.challengerHero} alt="Dodge Challenger R/T F8 Green" className="w-full object-cover" style={{ aspectRatio: "16/10" }} loading="lazy" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full text-white" style={{ background: "var(--sd-amber)", fontSize: "0.7rem" }}>The VIP Car</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "1.3rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>
                  Challenger R/T
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                  375 hp. Classic muscle. The groom's car, the birthday boy's car, or just the one who called dibs first. Hemi V8 soundtrack and a look that stops traffic.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["375 hp", "Hemi V8", "RWD", "2-door coupe", "F8 Green"].map((s) => (
                    <span key={s} className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: "white", color: "var(--sd-muted)", border: "1px solid var(--sd-border)" }}>{s}</span>
                  ))}
                </div>
                <a href="/#contact" className="btn-book w-full justify-center" style={{ display: "flex" }}>
                  Request a Quote
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl text-center" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
            <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)" }}>
              <strong style={{ color: "var(--sd-charcoal)" }}>Book both together?</strong> Text us for duo pricing — it's less than booking separately.{" "}
              <a href="sms:+19043147650?body=Hey%20-%20interested%20in%20the%20F8%20Duo%20for%20a%20group%20trip.%20Dates%3A%20" style={{ color: "var(--sd-green-dark)", fontWeight: 600, textDecoration: "none" }}>Text (904) 314-7650</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">Who It's For</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            Built for <span style={{ color: "var(--sd-green)" }}>the crew.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Users size={22} />, title: "Bachelor parties", desc: "The groom gets the Challenger. The crew piles into the 710-hp Hellcat. Pull up to I-Drive matching. The photos alone are worth it.", color: "var(--sd-green)" },
              { icon: <Zap size={22} />, title: "Boys trips & birthdays", desc: "Milestone birthday? Annual crew trip? Skip the rental Camry. Two V8s, one weekend, zero regrets. This is the upgrade your group deserves.", color: "var(--sd-amber)" },
              { icon: <Users size={22} />, title: "Group content shoots", desc: "Two matching green muscle cars = twice the content. TikTok, Reels, YouTube — the algorithm loves these cars. We offer dedicated shoot rates.", color: "#e05c2a" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: item.color, color: "white" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Subtle couple's getaway mention */}
          <div className="mt-8 p-5 rounded-xl flex items-start gap-4" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--sd-charcoal)", color: "white" }}>
              <span style={{ fontSize: "1.2rem" }}>💍</span>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)", marginBottom: "0.3rem" }}>Couple's getaway package</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--sd-muted)", lineHeight: 1.6 }}>
                Planning something more intimate? The F8 Duo also works as a his-and-hers getaway — matching muscle for a special exit, anniversary weekend, or engagement celebration. Same cars, different energy.{" "}
                <a href="sms:+19043147650?body=Hey%20-%20interested%20in%20the%20couple%27s%20getaway%20package.%20Dates%3A%20" style={{ color: "var(--sd-green-dark)", fontWeight: 600, textDecoration: "none" }}>Text us for couple's pricing →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">How It Works</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            Three steps. Zero hassle.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Tell us your dates & group size", desc: "Fill out the form below or text us. We'll confirm availability and send you duo pricing within hours." },
              { num: "02", title: "We deliver to your spot", desc: "Cars show up at your Airbnb, hotel, or vacation rental — cleaned, fueled, and ready. No pickup location, no counter." },
              { num: "03", title: "Own the weekend", desc: "Keys in hand. Two V8s. One crew. Cruise I-Drive, hit the beach, pull up to dinner. Return when you're done — or we pick them up." },
            ].map((step) => (
              <div key={step.num}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--sd-border)", fontFamily: "'Playfair Display', serif", lineHeight: 1, marginBottom: "0.75rem" }}>{step.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ background: "var(--sd-charcoal)", padding: "4rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="section-label mb-3" style={{ color: "var(--sd-green)" }}>Included</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "white", marginBottom: "2rem" }}>
                Everything your group needs.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Free delivery & pickup",
                  "Full insurance coverage",
                  "Full tank of gas",
                  "150+ miles per day each",
                  "Welcome kit in each car",
                  "Flexible return location",
                  "Multi-day discounts",
                  "Owner on call via text",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} style={{ color: "var(--sd-green)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={FLEET_IMAGES.hellcat3q} alt="Dodge Durango SRT Hellcat three-quarter view" className="rounded-xl w-full object-cover" style={{ aspectRatio: "4/3" }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="section-label mb-3">FAQ</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2.5rem" }}>Common questions.</h2>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM ── */}
      <section id="inquiry" style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="max-w-xl mx-auto">
            <div className="section-label mb-3">Plan Your Trip</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "0.75rem" }}>
              Let's set it up.
            </h2>
            <p style={{ color: "var(--sd-muted)", fontSize: "0.875rem", marginBottom: "0.75rem" }}>
              Tell us about your group and we'll confirm availability and pricing within 24 hours.
            </p>
            <div className="flex gap-3 mb-6">
              <a href="sms:+19043147650?body=Hey%20-%20planning%20a%20group%20trip%20in%20Orlando.%20" className="text-sm font-semibold" style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}>Or just text us</a>
              <span style={{ color: "var(--sd-border)" }}>·</span>
              <a href="tel:+19043147650" className="text-sm font-semibold" style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}>Call (904) 314-7650</a>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl text-center" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <CheckCircle size={40} style={{ color: "var(--sd-green)", margin: "0 auto 1rem" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.25rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>We're on it.</h3>
                <p style={{ color: "var(--sd-muted)", fontSize: "0.875rem" }}>We'll text or email you within 24 hours with availability and duo pricing for your dates.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sd-label">Your Name</label>
                    <input id="name" type="text" placeholder="Full name" className="sd-input" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sd-label">Phone (for texting)</label>
                    <input id="phone" type="tel" placeholder="(555) 555-5555" className="sd-input" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="sd-label">Email</label>
                    <input id="email" type="email" placeholder="you@email.com" className="sd-input" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="group_size" className="sd-label">Group Size</label>
                    <select id="group_size" className="sd-input" value={formData.group_size} onChange={handleChange}>
                      <option value="">How many people?</option>
                      <option value="2-4">2–4 people</option>
                      <option value="5-7">5–7 people</option>
                      <option value="8-11">8–11 people (both cars)</option>
                      <option value="12+">12+ (need 3+ cars)</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="sd-label">Trip Dates</label>
                    <input id="date" type="date" className="sd-input" value={formData.date} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="occasion" className="sd-label">What's the occasion?</label>
                    <select id="occasion" className="sd-input" value={formData.occasion} onChange={handleChange}>
                      <option value="">Select...</option>
                      <option value="bachelor">Bachelor party</option>
                      <option value="boys-trip">Boys trip / group trip</option>
                      <option value="birthday">Milestone birthday</option>
                      <option value="couples">Couple's getaway</option>
                      <option value="content">Content / photo shoot</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="location" className="sd-label">Where are you staying?</label>
                  <input id="location" type="text" placeholder="Airbnb address, hotel name, etc." className="sd-input" value={formData.location} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="notes" className="sd-label">Anything else?</label>
                  <textarea id="notes" placeholder="Plans, timeline, which cars you want..." className="sd-input" rows={3} value={formData.notes} onChange={handleChange} style={{ resize: "vertical" }} />
                </div>
                <button type="submit" className="btn-book w-full justify-center" style={{ display: "flex" }} disabled={submitting}>
                  {submitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
