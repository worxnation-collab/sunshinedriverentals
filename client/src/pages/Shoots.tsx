/*
 * Shoots — SunshineDrive Rentals
 * Photo & Video shoots page with inquiry form
 * CX improvements: clearer pricing tiers, improved form UX
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import FaqAccordion from "@/components/FaqAccordion";
import { CheckCircle } from "lucide-react";
import { submitInquiry } from "@/lib/api";

const FAQ_ITEMS = [
  { question: "Can I do rolling shots?", answer: "Yes. We'll coordinate a safe route. For highway rolling shots, we recommend bringing your own chase vehicle — we can discuss logistics when you book." },
  { question: "What about commercial use rights?", answer: "All shoots include full commercial usage rights. Use the content for paid campaigns, brand deals, or commercial projects — no additional licensing fee." },
  { question: "Can I rent for a music video?", answer: "Absolutely. Music videos are one of our most popular shoot types. We can accommodate multi-location shoots with advance planning." },
  { question: "How does the free collab work?", answer: "You shoot content featuring the cars and deliver agreed-upon assets (photos, video clips, posts). We get content, you get cars — no money changes hands. Portfolio required." },
  { question: "What locations can we shoot at?", answer: "Anywhere in Central Florida. Popular spots include downtown Orlando, Lake Eola, I-Drive corridor, rural roads in Windermere/Clermont, and the coast. We can suggest locations based on your vision." },
  { question: "Can I bring my own team?", answer: "Of course. Bring your photographer, videographer, stylist, models — whatever the shoot needs. We just ask everyone treats the cars with respect." },
];

export default function Shoots() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", shoot_type: "", date: "", hours: "", location: "", portfolio: "", notes: ""
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
      booking_type: "shoot",
      message: `Shoot type: ${formData.shoot_type || "—"} | Hours: ${formData.hours || "—"} | Portfolio: ${formData.portfolio || "—"}\n${formData.notes || ""}`.trim(),
    });
    setSubmitting(false);
    if (ok) setSubmitted(true);
    else alert("Something went wrong. Please try again or call us directly.");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Car Photoshoot & Video Rental Orlando — Muscle Cars for Content"
        description="F8 Green Hellcat and Challenger R/T for photo shoots, music videos, and brand campaigns in Orlando. Rent or collab for free."
        url="/shoots/"
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
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663560999880/49fKAb8YKmx9TKxZnTNDi6/fleet-hero-TnK5R8bXxY8UACaaXbzTWi.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="hero-overlay" />
        <div className="container relative z-10 pt-8">
          <div className="max-w-2xl">
            <div className="section-label mb-3">Photo &amp; Video</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
              Your content.
            </h1>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "#e05c2a", lineHeight: 1.05, marginBottom: "1.5rem" }}>
              Our muscle.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "500px", marginBottom: "2rem" }}>
              F8 Green Hellcat and Challenger R/T available for photo shoots, music videos, brand campaigns, and social content in Orlando. Rent them or collab for free.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#shoot-inquiry" className="btn-book">Book a Shoot →</a>
              <a href="#shoot-inquiry" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Free Collab</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">Who It's For</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            Built for <span style={{ color: "#e05c2a" }}>creators.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "📷", title: "Photography", desc: "Automotive photographers, lifestyle brands, portrait sessions with a performance backdrop." },
              { icon: "🎬", title: "Video Production", desc: "Music videos, commercial spots, cinematic reels. Rolling shots, static, whatever your vision needs." },
              { icon: "📱", title: "Social Media", desc: "TikTok, Instagram Reels, YouTube — content that stops the scroll. Green muscle = engagement gold." },
              { icon: "🤝", title: "Collabs", desc: "Got an audience? Pitch a collab — you create content, we provide the cars. Free for qualified creators." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)", marginBottom: "0.4rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--sd-muted)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">Pricing</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            Simple rates. No hidden fees.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div className="p-6 rounded-xl" style={{ background: "var(--sd-charcoal)", color: "white" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>F8 Green Duo</h3>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>Shoot Package</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Both cars, any location in Orlando",
                  "Freshly detailed",
                  "Full commercial usage rights",
                  "Owner on-site for support",
                  "Rolling shots OK with coordination",
                  "Extra hours: $100/hr",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                    <CheckCircle size={14} style={{ color: "var(--sd-green)", marginTop: "2px", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#shoot-inquiry" className="btn-book w-full justify-center" style={{ display: "flex" }}>Book a Shoot</a>
            </div>
            <div className="p-6 rounded-xl" style={{ background: "white", border: "2px solid var(--sd-green)" }}>
              <div className="inline-block px-2 py-0.5 rounded text-xs font-bold mb-3" style={{ background: "var(--sd-green)", color: "white" }}>FREE</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>Collab</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Both cars provided at no cost",
                  "You deliver agreed-upon content",
                  "Photos, video clips, or social posts",
                  "Portfolio review required",
                  "Limited monthly availability",
                  "Great for building your portfolio",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--sd-muted)" }}>
                    <CheckCircle size={14} style={{ color: "var(--sd-green)", marginTop: "2px", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#shoot-inquiry" className="btn-secondary w-full justify-center" style={{ display: "flex" }}>Apply for Collab</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="section-label mb-3">FAQ</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2.5rem" }}>Common questions.</h2>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM ── */}
      <section id="shoot-inquiry" style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
        <div className="container">
          <div className="max-w-xl mx-auto">
            <div className="section-label mb-3">Inquire</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "0.75rem" }}>
              Let's create.
            </h2>
            <p style={{ color: "var(--sd-muted)", fontSize: "0.875rem", marginBottom: "0.75rem" }}>
              Tell us about your shoot and we'll get back to you within 24 hours.
            </p>
            <div className="flex gap-3 mb-6">
              <a href="mailto:matthew@sunshinedriverentals.com?subject=Shoot%20Inquiry" className="text-sm font-semibold" style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}>Just email us a question</a>
              <span style={{ color: "var(--sd-border)" }}>·</span>
              <a href="tel:+19043147650" className="text-sm font-semibold" style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}>Call or text</a>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl text-center" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                <CheckCircle size={40} style={{ color: "var(--sd-green)", margin: "0 auto 1rem" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.25rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>Inquiry received!</h3>
                <p style={{ color: "var(--sd-muted)", fontSize: "0.875rem" }}>We'll be in touch within 24 hours to discuss your shoot.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sd-label">Your Name</label>
                    <input id="name" type="text" placeholder="Full name" className="sd-input" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="sd-label">Email</label>
                    <input id="email" type="email" placeholder="you@email.com" className="sd-input" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="sd-label">Phone</label>
                    <input id="phone" type="tel" placeholder="(555) 555-5555" className="sd-input" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="shoot_type" className="sd-label">Shoot Type</label>
                    <select id="shoot_type" className="sd-input" value={formData.shoot_type} onChange={handleChange}>
                      <option value="">Select...</option>
                      <option value="photography">Photography</option>
                      <option value="video">Video / Music Video</option>
                      <option value="social">Social Media Content</option>
                      <option value="brand">Brand Campaign</option>
                      <option value="collab">Collab (free)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="sd-label">Preferred Date</label>
                    <input id="date" type="date" className="sd-input" value={formData.date} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="hours" className="sd-label">How Many Hours</label>
                    <select id="hours" className="sd-input" value={formData.hours} onChange={handleChange}>
                      <option value="">Select...</option>
                      <option value="2">2 hours</option>
                      <option value="4">4 hours</option>
                      <option value="6">6 hours</option>
                      <option value="full">Full day</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="location" className="sd-label">Location / Concept</label>
                  <input id="location" type="text" placeholder="Where and what you have in mind" className="sd-input" value={formData.location} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="portfolio" className="sd-label">Portfolio / Social Link</label>
                  <input id="portfolio" type="text" placeholder="Instagram, website, etc." className="sd-input" value={formData.portfolio} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="notes" className="sd-label">Additional details</label>
                  <textarea id="notes" placeholder="Concept, team size, special needs..." className="sd-input" rows={4} value={formData.notes} onChange={handleChange} style={{ resize: "vertical" }} />
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
