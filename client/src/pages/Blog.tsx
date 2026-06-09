/*
 * Blog — SunshineDrive Rentals
 * Blog index page with article listings
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { ChevronRight } from "lucide-react";
import { FLEET_IMAGES } from "@/lib/images";

const ARTICLES = [
  {
    slug: "/blog/best-scenic-drives-orlando",
    title: "7 Best Scenic Drives Near Orlando (2026 Guide)",
    excerpt: "From coastal A1A cruises to rural Clermont hills — the best roads to enjoy in a premium rental car, with route details and time estimates.",
    image: FLEET_IMAGES.broncoHero,
    date: "May 2026",
    readTime: "6 min read",
  },
  {
    slug: "/blog/hellcat-vs-challenger",
    title: "Hellcat vs Challenger R/T: Which Should You Rent?",
    excerpt: "Both are F8 Green. Both are muscle. But they're completely different experiences. Here's how to choose between the 710-hp SUV and the 375-hp coupe.",
    image: FLEET_IMAGES.hellcatHero,
    date: "May 2026",
    readTime: "5 min read",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Blog | SunshineDrive Rentals — Orlando Car Rental Tips & Guides"
        description="Orlando driving guides, vehicle comparisons, and rental tips from SunshineDrive Rentals. Plan your perfect Florida road trip."
        url="/blog/"
      />
      <Navbar />

      <section style={{ background: "var(--sd-charcoal)", paddingTop: "7rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</a>
            <ChevronRight size={12} />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Blog</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white" }}>
            SunshineDrive Blog
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", marginTop: "0.75rem", maxWidth: "500px" }}>
            Orlando driving guides, vehicle comparisons, and tips for getting the most out of your rental.
          </p>
        </div>
      </section>

      <section style={{ background: "white", padding: "4rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {ARTICLES.map((article) => (
              <a key={article.slug} href={article.slug} className="vehicle-card block" style={{ textDecoration: "none" }}>
                <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span style={{ fontSize: "0.72rem", color: "var(--sd-muted)" }}>{article.date}</span>
                    <span style={{ fontSize: "0.72rem", color: "var(--sd-muted)" }}>·</span>
                    <span style={{ fontSize: "0.72rem", color: "var(--sd-muted)" }}>{article.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.15rem", color: "var(--sd-charcoal)", marginBottom: "0.5rem", lineHeight: 1.3 }}>
                    {article.title}
                  </h2>
                  <p style={{ fontSize: "0.85rem", color: "var(--sd-muted)", lineHeight: 1.6 }}>
                    {article.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
