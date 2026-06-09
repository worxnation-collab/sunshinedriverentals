/*
 * MobileBookBar — SunshineDrive Rentals
 * Sticky bottom bar on mobile; quote-based (no pricing, no third-party checkout).
 */
import { useState, useEffect } from "react";

interface MobileBookBarProps {
  vehicleName: string;
  bookingUrl?: string;
  price?: string;
}

export default function MobileBookBar({ vehicleName }: MobileBookBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`mobile-book-bar md:hidden ${visible ? "visible" : ""}`} role="complementary" aria-label="Quick quote bar">
      <div className="flex flex-col">
        <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>{vehicleName}</span>
        <span className="text-sm font-bold" style={{ color: "white" }}>Delivered to your door</span>
      </div>
      <a href="/#contact" className="btn-book" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
        Request a Quote
      </a>
    </div>
  );
}
