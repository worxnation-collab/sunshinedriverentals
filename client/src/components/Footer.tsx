/*
 * Footer — SunshineDrive Rentals
 * Preserves existing footer structure with improved link organization
 */
export default function Footer() {
  return (
    <footer style={{ background: "var(--sd-charcoal)", color: "rgba(255,255,255,0.85)" }} className="pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span style={{ color: "var(--sd-green)", fontSize: "1.4rem" }}>☀</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "white" }}>SunshineDrive</span>
            </div>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}>
              Orlando's destination for performance, luxury, and family car rentals. Locally owned. Hand-delivered to MCO, your hotel, or vacation rental.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="tel:+19043147650" className="text-sm font-semibold" style={{ color: "var(--sd-green)", textDecoration: "none" }}>
                (904) 314-7650
              </a>
            </div>
          </div>

          {/* Fleet */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Fleet</h4>
            <ul className="space-y-2">
              {[
                { label: "All Vehicles", href: "/#fleet" },
                { label: "Hellcat SUV", href: "/orlando-hellcat-rental/" },
                { label: "Challenger R/T", href: "/challenger-rt-rental/" },
                { label: "Ford Bronco", href: "/orlando-bronco-rental/" },
                { label: "Charger Scat Pack", href: "/orlando-charger-rental/" },
                { label: "Toyota Sienna", href: "/sienna-woodland-rental/" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Events</h4>
            <ul className="space-y-2">
              {[
                { label: "Group Trips", href: "/weddings/" },
                { label: "Photo & Video", href: "/shoots/" },
                { label: "F8 Green Duo", href: "/f8-duo-wedding/" },
                { label: "Custom Events", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Info</h4>
            <ul className="space-y-2">
              {[
                { label: "MCO Delivery", href: "/mco-car-delivery/" },
                { label: "Contact Us", href: "/#contact" },
                { label: "Call Us", href: "tel:+19043147650" },
                { label: "Text Us", href: "sms:+19043147650" },
                { label: "Email", href: "mailto:matthew@sunshinedriverentals.com" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>
            © 2026 SunshineDrive Rentals. All rights reserved. Orlando, Florida
          </p>
          <div className="flex items-center gap-4">
            <a href="/terms/" className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Terms</a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <a href="/privacy/" className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Privacy</a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <a href="https://g.page/r/sunshinedriverentals/review" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Leave a Review</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
