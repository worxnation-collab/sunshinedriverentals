/*
 * Navbar — SunshineDrive Rentals
 * CX improvements: sticky nav, mobile hamburger, always-visible Get a Quote CTA
 */
import { useState, useEffect, useRef, type MouseEvent } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const sunClickCount = useRef(0);
  const sunClickTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/";

  const handleSunClick = (event: MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();

    sunClickCount.current += 1;

    if (sunClickTimer.current) {
      window.clearTimeout(sunClickTimer.current);
    }

    if (sunClickCount.current >= 3) {
      sunClickCount.current = 0;
      window.location.assign(`${window.location.origin}/dashboard`);
      return;
    }

    sunClickTimer.current = window.setTimeout(() => {
      sunClickCount.current = 0;
    }, 2500);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled || mobileOpen
          ? "rgba(245, 240, 232, 0.97)"
          : "transparent",
        backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "none",
        borderBottom: scrolled || mobileOpen ? "1px solid rgba(0,0,0,0.08)" : "none",
        boxShadow: scrolled || mobileOpen ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg" style={{ color: scrolled || mobileOpen ? "var(--sd-charcoal)" : "white", fontFamily: "'Playfair Display', serif" }}>
            <span
              style={{ color: "var(--sd-green)", fontSize: "1.4rem", cursor: "pointer" }}
              onClick={handleSunClick}
              aria-label="SunshineDrive admin shortcut"
              role="button"
            >
              ☀
            </span>
            SunshineDrive
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "Fleet", href: isHome ? "#fleet" : "/#fleet" },
              { label: "Hellcat", href: "/orlando-hellcat-rental/" },
              { label: "Charger", href: "/orlando-charger-rental/" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors duration-150 hover:opacity-70"
                style={{ color: scrolled ? "var(--sd-charcoal)" : "white", textDecoration: "none" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={isHome ? "#contact" : "/#contact"}
              className="btn-primary"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: scrolled || mobileOpen ? "var(--sd-charcoal)" : "white" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 border-t" style={{ borderColor: "var(--sd-border)" }}>
            <div className="flex flex-col gap-1">
              {[
                { label: "Home", href: "/" },
                { label: "Fleet", href: isHome ? "#fleet" : "/#fleet" },
                { label: "Hellcat", href: "/orlando-hellcat-rental/" },
              { label: "Charger", href: "/orlando-charger-rental/" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-2 py-3 text-sm font-medium rounded-lg hover:bg-black/5 transition-colors"
                  style={{ color: "var(--sd-charcoal)", textDecoration: "none" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={isHome ? "#contact" : "/#contact"}
                  className="btn-book w-full justify-center"
                  style={{ display: "flex" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
