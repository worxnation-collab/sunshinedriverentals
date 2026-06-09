/*
 * F8Duo — SunshineDrive Rentals
 * F8 Green Duo wedding/events page
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import TrustBar from "@/components/TrustBar";
import { FLEET_IMAGES } from "@/lib/images";

export default function F8Duo() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="F8 Green Duo | Matching Muscle Cars for Rent in Orlando"
        description="Rent both F8 Green muscle cars together — a 710-hp Hellcat SUV and a 375-hp Challenger R/T. Weddings, shoots, or just because."
        url="/f8-duo-wedding/"
      />
      <Navbar />

      <section
        className="relative py-32 flex items-center"
        style={{ background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663560999880/49fKAb8YKmx9TKxZnTNDi6/fleet-hero-TnK5R8bXxY8UACaaXbzTWi.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.45,
          }}
        />
        <div className="hero-overlay" />
        <div className="container relative z-10 pt-8">
          <div className="max-w-2xl">
            <div className="section-label mb-3">The Duo</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: "0.25rem" }}>
              F8 Green Duo.
            </h1>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "var(--sd-green)", lineHeight: 1.05, marginBottom: "1.5rem" }}>
              Matching muscle.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "500px", marginBottom: "2rem" }}>
              A 710-hp Hellcat and a 375-hp Challenger R/T — both in F8 Green. Rent them together for weddings, content shoots, or just because you can.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="/weddings/" className="btn-book">Weddings →</a>
              <a href="/shoots/" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Photo &amp; Video</a>
              <a href="sms:+19043147650?body=Hey%20-%20I%27m%20interested%20in%20the%20F8%20Duo.%20Dates%3A%20" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Text us about the Duo</a>
            </div>
            <TrustBar dark />
          </div>
        </div>
      </section>

      {/* ── THE CARS ── */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">The Cars</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            Meet your getaway cars.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
              <img
                src={FLEET_IMAGES.hellcatHero}
                alt="Dodge Durango SRT Hellcat F8 Green"
                className="rounded-xl w-full object-cover mb-4"
                style={{ aspectRatio: "16/10" }}
                loading="lazy"
              />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>2021 Durango SRT Hellcat</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65, marginBottom: "1rem" }}>
                710 hp, 7 seats, AWD. The most powerful SUV ever made. F8 Green. Nothing sounds like a supercharged 6.2L V8 pulling away from the venue.
              </p>
              <a href="/orlando-hellcat-rental/" className="text-sm font-semibold" style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}>View details →</a>
            </div>
            <div className="p-6 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
              <img
                src={FLEET_IMAGES.challengerHero}
                alt="Dodge Challenger R/T F8 Green"
                className="rounded-xl w-full object-cover mb-4"
                style={{ aspectRatio: "16/10" }}
                loading="lazy"
              />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem" }}>2018 Challenger R/T</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65, marginBottom: "1rem" }}>
                375 hp, 5.7L HEMI V8. Classic American muscle in matching F8 Green. The perfect complement to the Hellcat — and a blast to drive.
              </p>
              <a href="/challenger-rt-rental/" className="text-sm font-semibold" style={{ color: "var(--sd-green-dark)", textDecoration: "none" }}>View details →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section style={{ background: "var(--sd-cream)", padding: "5rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "3rem" }}>
            What the Duo is for.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Weddings & Events", desc: "Two matching green muscle cars as your getaway vehicles. His & hers, bride & groom — the exit everyone remembers.", href: "/weddings/", cta: "See wedding packages" },
              { title: "Photo & Video Shoots", desc: "Content creators, music videos, brand campaigns. Two cars, one look, unlimited angles.", href: "/shoots/", cta: "Book a shoot" },
              { title: "Duo Day Rental", desc: "Road trips, group outings, or just because. Two keys, two V8s, one unforgettable day.", href: "sms:+19043147650?body=Hey%20-%20I%27m%20interested%20in%20the%20F8%20Duo%20for%20a%20day.%20Dates%3A%20", cta: "Text us about pricing" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--sd-charcoal)", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>{item.desc}</p>
                <a href={item.href} className="btn-book" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}>{item.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--sd-charcoal)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>Ready to roll in green?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/weddings/" className="btn-book">Wedding Packages</a>
            <a href="/shoots/" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Shoot Packages</a>
            <a href="sms:+19043147650?body=Hey%20-%20I%27m%20interested%20in%20the%20F8%20Duo.%20Dates%3A%20" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>Text us about the Duo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
