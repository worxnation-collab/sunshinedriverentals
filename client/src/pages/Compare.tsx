/*
 * Compare — SunshineDrive Rentals
 * Side-by-side vehicle comparison page to help undecided visitors pick faster
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { FLEET_IMAGES } from "@/lib/images";
import { ChevronRight } from "lucide-react";

const VEHICLES = [
  {
    name: "Durango SRT Hellcat",
    shortName: "Hellcat",
    img: FLEET_IMAGES.hellcatHero,
    price: "$199",
    seats: "7",
    drivetrain: "AWD",
    power: "710 hp",
    fuel: "~15 MPG",
    type: "Performance SUV",
    bestFor: "Groups, bachelor parties, families who want power",
    mileage: "150 mi/day",
    href: "/orlando-hellcat-rental/",
    bookingUrl: "https://checkout.wheelbasepro.com/r/reserve/526504?owner_id=5011008&rental_category=auto",
    halfDay: true,
    color: "#6abf4b",
  },
  {
    name: "Challenger R/T",
    shortName: "Challenger",
    img: FLEET_IMAGES.challengerHero,
    price: "$89",
    seats: "4",
    drivetrain: "RWD",
    power: "375 hp",
    fuel: "~22 MPG",
    type: "Muscle Coupe",
    bestFor: "Couples, date nights, car enthusiasts, content",
    mileage: "150 mi/day",
    href: "/challenger-rt-rental/",
    bookingUrl: "https://checkout.wheelbasepro.com/r/reserve/526694?owner_id=5011008&rental_category=auto",
    halfDay: true,
    color: "#6abf4b",
  },
  {
    name: "Ford Bronco",
    shortName: "Bronco",
    img: FLEET_IMAGES.broncoHero,
    price: "$99",
    seats: "5",
    drivetrain: "4x4",
    power: "300 hp",
    fuel: "~21 MPG",
    type: "Adventure SUV",
    bestFor: "Beach trips, outdoors, content creators, road trips",
    mileage: "150 mi/day",
    href: "/orlando-bronco-rental/",
    bookingUrl: "https://checkout.wheelbasepro.com/r/reserve/526695?owner_id=5011008&rental_category=auto",
    halfDay: false,
    color: "#e05c2a",
  },
  {
    name: "Sienna Woodland",
    shortName: "Sienna",
    img: FLEET_IMAGES.siennaHero,
    price: "$79",
    seats: "8",
    drivetrain: "AWD",
    power: "245 hp",
    fuel: "~36 MPG",
    type: "Hybrid Van",
    bestFor: "Large families, road trips, fuel efficiency, cargo",
    mileage: "200 mi/day",
    href: "/#fleet",
    bookingUrl: "https://checkout.wheelbasepro.com/r/reserve/526689?owner_id=5011008&rental_category=auto",
    halfDay: false,
    color: "#3a7bd5",
  },
];

export default function Compare() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Compare Vehicles | SunshineDrive Rentals Orlando"
        description="Compare all 5 SunshineDrive rental vehicles side by side — seats, price, power, fuel economy, and best use case. Find your perfect Orlando rental."
        url="/compare/"
      />
      <Navbar />

      {/* Header */}
      <section style={{ background: "var(--sd-charcoal)", paddingTop: "7rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</a>
            <ChevronRight size={12} />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Compare Vehicles</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white" }}>
            Compare Our Fleet
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", marginTop: "0.75rem", maxWidth: "500px" }}>
            Not sure which car is right for your trip? Here's every vehicle side by side — seats, power, price, and what it's best for.
          </p>
        </div>
      </section>

      {/* ── COMPARISON TABLE (Desktop) ── */}
      <section style={{ background: "white", padding: "4rem 0" }}>
        <div className="container">
          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "1rem 0.75rem", borderBottom: "2px solid var(--sd-border)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--sd-muted)" }}>Vehicle</th>
                  <th style={{ textAlign: "center", padding: "1rem 0.75rem", borderBottom: "2px solid var(--sd-border)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--sd-muted)" }}>Price</th>
                  <th style={{ textAlign: "center", padding: "1rem 0.75rem", borderBottom: "2px solid var(--sd-border)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--sd-muted)" }}>Seats</th>
                  <th style={{ textAlign: "center", padding: "1rem 0.75rem", borderBottom: "2px solid var(--sd-border)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--sd-muted)" }}>Power</th>
                  <th style={{ textAlign: "center", padding: "1rem 0.75rem", borderBottom: "2px solid var(--sd-border)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--sd-muted)" }}>Drivetrain</th>
                  <th style={{ textAlign: "center", padding: "1rem 0.75rem", borderBottom: "2px solid var(--sd-border)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--sd-muted)" }}>Fuel</th>
                  <th style={{ textAlign: "center", padding: "1rem 0.75rem", borderBottom: "2px solid var(--sd-border)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--sd-muted)" }}>Mileage</th>
                  <th style={{ textAlign: "left", padding: "1rem 0.75rem", borderBottom: "2px solid var(--sd-border)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--sd-muted)" }}>Best For</th>
                  <th style={{ textAlign: "center", padding: "1rem 0.75rem", borderBottom: "2px solid var(--sd-border)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--sd-muted)" }}></th>
                </tr>
              </thead>
              <tbody>
                {VEHICLES.map((v) => (
                  <tr key={v.name} style={{ borderBottom: "1px solid var(--sd-border)" }}>
                    <td style={{ padding: "1rem 0.75rem" }}>
                      <div className="flex items-center gap-3">
                        <img src={v.img} alt={v.name} className="rounded-lg object-cover" style={{ width: "60px", height: "40px" }} loading="lazy" />
                        <div>
                          <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--sd-charcoal)" }}>{v.name}</p>
                          <p style={{ fontSize: "0.7rem", color: "var(--sd-muted)" }}>{v.type}</p>
                        </div>
                      </div>
                    </td>
                    <td style={{ textAlign: "center", padding: "1rem 0.75rem", fontWeight: 800, fontSize: "1rem", color: "var(--sd-charcoal)" }}><span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--sd-green-dark)" }}>Contact</span></td>
                    <td style={{ textAlign: "center", padding: "1rem 0.75rem", fontWeight: 600, fontSize: "0.875rem" }}>{v.seats}</td>
                    <td style={{ textAlign: "center", padding: "1rem 0.75rem", fontWeight: 600, fontSize: "0.875rem" }}>{v.power}</td>
                    <td style={{ textAlign: "center", padding: "1rem 0.75rem", fontWeight: 600, fontSize: "0.875rem" }}>{v.drivetrain}</td>
                    <td style={{ textAlign: "center", padding: "1rem 0.75rem", fontSize: "0.85rem", color: "var(--sd-muted)" }}>{v.fuel}</td>
                    <td style={{ textAlign: "center", padding: "1rem 0.75rem", fontSize: "0.85rem", color: "var(--sd-muted)" }}>{v.mileage}</td>
                    <td style={{ padding: "1rem 0.75rem", fontSize: "0.8rem", color: "var(--sd-muted)", maxWidth: "180px" }}>{v.bestFor}</td>
                    <td style={{ textAlign: "center", padding: "1rem 0.75rem" }}>
                      <a href={v.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-book" style={{ fontSize: "0.75rem", padding: "0.4rem 0.8rem", whiteSpace: "nowrap" }}>Book</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-6">
            {VEHICLES.map((v) => (
              <div key={v.name} className="vehicle-card">
                <div className="relative" style={{ aspectRatio: "16/9" }}>
                  <img src={v.img} alt={v.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full text-white" style={{ background: v.color, fontSize: "0.7rem" }}>{v.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--sd-charcoal)" }}>{v.name}</h3>
                    <div className="text-right">
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--sd-green-dark)" }}>Contact for quote</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Seats", value: v.seats },
                      { label: "Power", value: v.power },
                      { label: "Drive", value: v.drivetrain },
                      { label: "Fuel", value: v.fuel },
                      { label: "Miles", value: v.mileage },
                      { label: "Half-day", value: v.halfDay ? "Yes" : "No" },
                    ].map((spec) => (
                      <div key={spec.label} className="text-center p-2 rounded-lg" style={{ background: "var(--sd-cream)" }}>
                        <div style={{ fontSize: "0.65rem", color: "var(--sd-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{spec.label}</div>
                        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--sd-charcoal)" }}>{spec.value}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--sd-muted)", marginBottom: "1rem" }}>
                    <strong style={{ color: "var(--sd-charcoal)" }}>Best for:</strong> {v.bestFor}
                  </p>
                  <div className="flex gap-2">
                    <a href="/#contact" className="btn-book flex-1 justify-center" style={{ display: "flex", fontSize: "0.85rem", padding: "0.625rem" }}>Request a Quote</a>
                    <a href={v.href} className="btn-secondary flex-1 justify-center" style={{ display: "flex", fontSize: "0.85rem", padding: "0.625rem" }}>Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK PICKS ── */}
      <section style={{ background: "var(--sd-cream)", padding: "4rem 0" }}>
        <div className="container">
          <div className="section-label mb-3">Quick Picks</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--sd-charcoal)", marginBottom: "2.5rem" }}>
            Tell us your trip, we'll tell you the car.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { scenario: "Family Disney trip (5+ people)", pick: "Toyota Sienna Woodland", reason: "8 seats, AWD for rain, stroller space, sliding doors", href: "/#fleet" },
              { scenario: "Bachelor/bachelorette weekend", pick: "Durango SRT Hellcat", reason: "710 hp, seats 7, turns heads everywhere, F8 Green", href: "/orlando-hellcat-rental/" },
              { scenario: "Romantic date night", pick: "Challenger R/T", reason: "V8 soundtrack, 2-door coupe, F8 Green", href: "/challenger-rt-rental/" },
              { scenario: "Beach day with the top off", pick: "Ford Bronco", reason: "Removable top, 4x4 for sand, Rapid Red, adventure vibes", href: "/orlando-bronco-rental/" },
              { scenario: "Large family + grandparents", pick: "Toyota Sienna Woodland", reason: "8 seats, 36 MPG hybrid, sliding doors, most cargo space", href: "/#fleet" },
              { scenario: "Content creator shoot", pick: "F8 Green Duo", reason: "Both muscle cars together, maximum visual impact", href: "/f8-duo-wedding/" },
            ].map((item) => (
              <a key={item.scenario} href={item.href} className="p-5 rounded-xl transition-all duration-200 hover:shadow-lg" style={{ background: "white", border: "1px solid var(--sd-border)", textDecoration: "none" }}>
                <p style={{ fontSize: "0.8rem", color: "var(--sd-muted)", marginBottom: "0.5rem" }}>{item.scenario}</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", color: "var(--sd-charcoal)", marginBottom: "0.4rem" }}>→ {item.pick}</p>
                <p style={{ fontSize: "0.78rem", color: "var(--sd-muted)", lineHeight: 1.5 }}>{item.reason}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--sd-charcoal)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "white", marginBottom: "0.75rem" }}>Still not sure?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>Text us your trip details and we'll recommend the perfect car.</p>
          <a href="sms:+19043147650?body=Hey%20-%20I%27m%20not%20sure%20which%20car%20to%20rent.%20Here%27s%20my%20trip%3A%20" className="btn-book">Text us for a recommendation</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
