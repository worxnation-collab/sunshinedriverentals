/*
 * Blog Article: Hellcat vs Challenger R/T
 * SEO target: "hellcat vs challenger rental", "which muscle car to rent Orlando"
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { FLEET_IMAGES } from "@/lib/images";
import { ChevronRight, CheckCircle } from "lucide-react";

export default function BlogHellcatVsChallenger() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Hellcat vs Challenger R/T: Which Should You Rent? | SunshineDrive"
        description="Both are F8 Green muscle. But the 710-hp Hellcat SUV and 375-hp Challenger coupe are completely different experiences. Here's how to choose."
        url="/blog/hellcat-vs-challenger"
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative py-28"
        style={{ background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663560999880/49fKAb8YKmx9TKxZnTNDi6/fleet-hero-TnK5R8bXxY8UACaaXbzTWi.webp)`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35 }}
        />
        <div className="hero-overlay" />
        <div className="container relative z-10 pt-8">
          <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</a>
            <ChevronRight size={12} />
            <a href="/blog/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Blog</a>
            <ChevronRight size={12} />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Hellcat vs Challenger</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>May 2026</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>·</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>5 min read</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white", maxWidth: "700px", lineHeight: 1.1 }}>
            Hellcat vs Challenger R/T: Which Should You Rent?
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section style={{ background: "white", padding: "4rem 0" }}>
        <div className="container">
          <article className="max-w-3xl mx-auto" style={{ fontSize: "0.95rem", color: "var(--sd-charcoal)", lineHeight: 1.85 }}>
            <p style={{ fontSize: "1.05rem", marginBottom: "2rem" }}>
              We get this question every week: "I want to rent something with a V8 and F8 Green — should I get the Hellcat or the Challenger?" The answer depends entirely on what kind of experience you're after. Here's the honest breakdown from someone who drives both regularly.
            </p>

            {/* Comparison grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <img src={FLEET_IMAGES.hellcatHero} alt="Dodge Durango SRT Hellcat" className="rounded-lg w-full object-cover mb-4" style={{ aspectRatio: "16/10" }} loading="lazy" />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>Durango SRT Hellcat</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--sd-muted)", marginBottom: "0.75rem" }}>The "bring everyone" car</p>
                <div className="space-y-1.5">
                  {["710 hp supercharged V8", "7 seats — bring the crew", "AWD — handles any weather", "0-60 in 3.5 seconds"].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <CheckCircle size={13} style={{ color: "var(--sd-green)" }} />
                      <span style={{ fontSize: "0.82rem" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                <img src={FLEET_IMAGES.challengerHero} alt="Dodge Challenger R/T" className="rounded-lg w-full object-cover mb-4" style={{ aspectRatio: "16/10" }} loading="lazy" />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>Challenger R/T</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--sd-muted)", marginBottom: "0.75rem" }}>The "driver's car" experience</p>
                <div className="space-y-1.5">
                  {["375 hp naturally-aspirated Hemi", "2-door coupe — pure muscle", "RWD — the classic feel", "Looks like a movie car"].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <CheckCircle size={13} style={{ color: "var(--sd-green)" }} />
                      <span style={{ fontSize: "0.82rem" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2.5rem" }}>
              Choose the Hellcat if...
            </h2>
            <ul style={{ paddingLeft: "0", listStyle: "none", marginBottom: "2rem" }}>
              {[
                "You're traveling with a group (bachelor party, family, friends)",
                "You want the most horsepower possible — 710 hp is absurd",
                "You need AWD for Florida's sudden thunderstorms",
                "You want the supercharger whine — it's addictive",
                "You're doing a group content shoot and need space for gear",
                "You want to haul 7 people AND still do 0-60 in 3.5 seconds",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 mb-2">
                  <span style={{ color: "var(--sd-green)", marginTop: "4px" }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2.5rem" }}>
              Choose the Challenger if...
            </h2>
            <ul style={{ paddingLeft: "0", listStyle: "none", marginBottom: "2rem" }}>
              {[
                "You're a couple or solo — this is the date night car",
                "You care about the driving experience more than raw power",
                "You want the classic muscle car look and sound",
                "Budget matters — text us for a quote on either",
                "You're a car enthusiast who appreciates a naturally-aspirated Hemi",
                "You want the most photogenic car for content",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 mb-2">
                  <span style={{ color: "var(--sd-amber)", marginTop: "4px" }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2.5rem" }}>
              Or... get both.
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              The F8 Green Duo is our most popular package for weddings, bachelor parties, and content shoots. Both cars in matching F8 Green — a 710hp SUV and a 375hp coupe. His and hers. Groom and groomsmen. Two cameras, two cars, twice the content.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              Text us about duo pricing — it's less than you'd think.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2.5rem" }}>
              The honest answer
            </h2>
            <p style={{ marginBottom: "2rem" }}>
              If you're asking "which one should I rent?" — the Challenger is probably the right call for most people. It's half the price, it's the more engaging driving experience, and it looks incredible in photos. The Hellcat is for when you need to bring the group, want the most extreme thing on four wheels, or just want to say you drove a 710-hp SUV in Orlando.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              Either way, you're getting a hand-detailed, F8 Green muscle machine delivered to your door with insurance included. No rental counter. No bait-and-switch. Just text us your dates.
            </p>

            {/* CTA */}
            <div className="p-6 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--sd-charcoal)", marginBottom: "0.75rem" }}>Ready to book?</h3>
              <div className="flex flex-wrap gap-3">
                <a href="/#contact" className="btn-book" style={{ fontSize: "0.85rem", padding: "0.5rem 1.25rem" }}>Request a Quote</a>
                <a href="/#contact" className="btn-book" style={{ fontSize: "0.85rem", padding: "0.5rem 1.25rem" }}>Request a Quote</a>
                <a href="/f8-duo-wedding/" className="btn-secondary" style={{ fontSize: "0.85rem", padding: "0.5rem 1.25rem" }}>See the Duo</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
