/*
 * Blog Article: Best Scenic Drives Near Orlando
 * SEO target: "scenic drives near Orlando", "best drives Orlando Florida"
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { FLEET_IMAGES } from "@/lib/images";
import { ChevronRight, Clock, MapPin } from "lucide-react";

export default function BlogScenicDrives() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="7 Best Scenic Drives Near Orlando (2026 Guide) | SunshineDrive"
        description="From A1A coastal cruises to Clermont hills — the 7 best scenic drives near Orlando for your rental car. Route details, distances, and which car to take."
        url="/blog/best-scenic-drives-orlando"
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative py-28"
        style={{ background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2d 100%)", overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${FLEET_IMAGES.broncoHero})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.3 }}
        />
        <div className="hero-overlay" />
        <div className="container relative z-10 pt-8">
          <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</a>
            <ChevronRight size={12} />
            <a href="/blog/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Blog</a>
            <ChevronRight size={12} />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Scenic Drives</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>May 2026</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>·</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>6 min read</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white", maxWidth: "700px", lineHeight: 1.1 }}>
            7 Best Scenic Drives Near Orlando (2026 Guide)
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section style={{ background: "white", padding: "4rem 0" }}>
        <div className="container">
          <article className="max-w-3xl mx-auto" style={{ fontSize: "0.95rem", color: "var(--sd-charcoal)", lineHeight: 1.85 }}>
            <p style={{ fontSize: "1.05rem", marginBottom: "2rem" }}>
              Orlando is known for theme parks, but the real Florida starts the moment you leave the tourist corridor. Within an hour of MCO, you'll find coastal highways, rolling hills, canopy roads, and lakeside routes that most visitors never discover. Here are the 7 best scenic drives near Orlando — and which SunshineDrive car to take on each.
            </p>

            {[
              { num: 1, title: "A1A Coastal Highway — Cocoa Beach to Melbourne", distance: "45 min from Orlando", miles: "~30 miles one way", desc: "The classic Florida coastal drive. A1A hugs the Atlantic coast with ocean views, beach access points, and small-town charm. Start at Cocoa Beach pier, cruise south through Satellite Beach and Indialantic to Melbourne. Windows down, salt air, no traffic.", car: "Ford Bronco — removable top, beach-ready, all-terrain tires handle sand parking lots" },
              { num: 2, title: "Sugarloaf Mountain Road — Clermont Hills", distance: "35 min from Orlando", miles: "~15 miles loop", desc: "Florida has hills — and Clermont has the best of them. Sugarloaf Mountain Road winds through citrus groves and rolling terrain with elevation changes you won't believe exist in Florida. Tight curves, canopy trees, and zero traffic.", car: "Challenger R/T — rear-wheel drive, Hemi V8, winding roads = pure driving joy" },
              { num: 3, title: "Black Bear Scenic Byway — Ocala National Forest", distance: "1 hour from Orlando", miles: "~25 miles", desc: "Deep into Ocala National Forest, this byway cuts through old-growth pine flatwoods and spring-fed lakes. You might see deer, wild turkeys, or the occasional black bear. Bring a cooler and stop at Alexander Springs for a swim.", car: "Ford Bronco — 4x4 capability, rugged styling, perfect for forest roads" },
              { num: 4, title: "International Drive to Disney Springs Loop", distance: "In Orlando", miles: "~12 miles", desc: "Not scenic in the nature sense, but iconic in the Orlando sense. I-Drive at night with the neon, the Eye, and the energy — then cruise down to Disney Springs for a waterfront dinner. The tourist drive done right.", car: "Durango SRT Hellcat — 710 hp, 7 seats, turns heads on I-Drive like nothing else" },
              { num: 5, title: "Lake Apopka Loop — West Orange Trail", distance: "25 min from Orlando", miles: "~20 miles", desc: "Circle Florida's fourth-largest lake through Windermere's mansion-lined streets, past citrus groves, and along the quiet western shore. Early morning is best — the light on the lake is golden and the roads are empty.", car: "Challenger R/T — quiet morning, empty roads, V8 exhaust echoing off the trees" },
              { num: 6, title: "New Smyrna Beach via SR 44", distance: "50 min from Orlando", miles: "~55 miles one way", desc: "State Road 44 cuts straight east through DeLand and into New Smyrna Beach — a surfer town with better vibes than Daytona. The drive itself is flat and fast, but the destination is worth it. Park on the beach (yes, you can drive on it).", car: "Ford Bronco — drive on the beach, all-terrain tires, removable top for the coast" },
              { num: 7, title: "Winter Park Chain of Lakes", distance: "15 min from Orlando", miles: "~8 miles", desc: "The shortest drive on this list, but arguably the most beautiful per mile. Palmer Avenue through Winter Park passes under live oaks, past lakefront estates, and through the charming Park Avenue shopping district. End with dinner at a sidewalk café.", car: "Challenger R/T — the coupe looks incredible under the oak canopy, perfect for a date" },
            ].map((drive) => (
              <div key={drive.num} style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--sd-border)" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                  {drive.num}. {drive.title}
                </h2>
                <div className="flex flex-wrap gap-4 mb-3">
                  <div className="flex items-center gap-1.5" style={{ fontSize: "0.8rem", color: "var(--sd-muted)" }}>
                    <MapPin size={13} /> {drive.distance}
                  </div>
                  <div className="flex items-center gap-1.5" style={{ fontSize: "0.8rem", color: "var(--sd-muted)" }}>
                    <Clock size={13} /> {drive.miles}
                  </div>
                </div>
                <p style={{ marginBottom: "1rem" }}>{drive.desc}</p>
                <div className="p-3 rounded-lg" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
                  <p style={{ fontSize: "0.82rem", color: "var(--sd-muted)" }}>
                    <strong style={{ color: "var(--sd-green-dark)" }}>Our pick:</strong> {drive.car}
                  </p>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-xl" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--sd-charcoal)", marginBottom: "0.75rem" }}>Ready to hit the road?</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--sd-muted)", marginBottom: "1rem" }}>
                Every SunshineDrive rental includes 150+ miles per day, free delivery to your hotel, and a full tank of gas. Pick your car and your route — we'll handle the rest.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/compare/" className="btn-book" style={{ fontSize: "0.85rem", padding: "0.5rem 1.25rem" }}>Compare vehicles</a>
                <a href="/#fleet" className="btn-secondary" style={{ fontSize: "0.85rem", padding: "0.5rem 1.25rem" }}>Browse fleet</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
