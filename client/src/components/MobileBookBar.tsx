/*
 * MobileBookBar — SunshineDrive Rentals
 * Sticky bottom bar on mobile. Primary action books on Turo when a link is
 * provided; falls back to the quote request otherwise.
 */
import { useState, useEffect } from "react";

interface MobileBookBarProps {
  vehicleName: string;
  bookingUrl?: string;
  price?: string;
  turoUrl?: string;
}

export default function MobileBookBar({ vehicleName, turoUrl }: MobileBookBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`mobile-book-bar md:hidden ${visible ? "visible" : ""}`} role="complementary" aria-label="Quick book bar">
      <div className="flex flex-col">
        <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>{vehicleName}</span>
        <span className="text-sm font-bold" style={{ color: "white" }}>Delivered to your door</span>
      </div>
      {turoUrl ? (
        <a href={turoUrl} target="_blank" rel="noopener noreferrer" className="btn-book" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
          Book on Turo
        </a>
      ) : (
        <a href="/#contact" className="btn-book" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
          Request a Quote
        </a>
      )}
    </div>
  );
}
