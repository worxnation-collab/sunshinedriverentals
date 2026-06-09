/*
 * Terms — SunshineDrive Rentals
 * Rental terms and conditions page
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <Navbar />

      {/* Header */}
      <section style={{ background: "var(--sd-charcoal)", paddingTop: "7rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</a>
            <ChevronRight size={12} />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Terms &amp; Conditions</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white" }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginTop: "0.75rem" }}>
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "white", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto" style={{ fontSize: "0.9rem", color: "var(--sd-charcoal)", lineHeight: 1.8 }}>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              1. Rental Agreement
            </h2>
            <p>
              By booking a vehicle through SunshineDrive Rentals, you agree to these terms and conditions. All reservations are subject to availability and confirmation. A valid booking confirmation constitutes a binding rental agreement between you (the "Renter") and SunshineDrive Rentals (the "Company").
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              2. Driver Requirements
            </h2>
            <p>All drivers must meet the following requirements:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>Be at least 25 years of age</li>
              <li style={{ marginBottom: "0.4rem" }}>Hold a valid U.S. driver's license</li>
              <li style={{ marginBottom: "0.4rem" }}>Pass identity and driving record verification through our booking platform</li>
              <li style={{ marginBottom: "0.4rem" }}>Be listed as an approved driver on the reservation</li>
            </ul>
            <p>
              Unauthorized drivers are not covered by insurance. Only drivers listed on the reservation may operate the vehicle.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              3. Insurance &amp; Coverage
            </h2>
            <p>
              All rentals include liability and physical damage coverage through our Wheelbase insurance partner. This coverage is active for the duration of the rental period and applies only to approved drivers. Additional coverage options may be available at checkout.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Coverage does not apply in cases of: driving under the influence, unauthorized drivers, use of the vehicle for illegal purposes, off-road use beyond approved trails (Bronco only), or intentional damage.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              4. Security Deposit
            </h2>
            <p>
              A security deposit hold is placed on your payment method at the time of booking. The amount varies by vehicle and is clearly displayed during checkout. The hold is released within 5–7 business days after the vehicle is returned in the same condition it was delivered, subject to inspection.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              5. Mileage Policy
            </h2>
            <p>
              Each rental includes a daily mileage allowance (typically 150–200 miles per day, depending on the vehicle). Additional miles beyond the included allowance are billed at the per-mile overage rate specified in your booking confirmation. Unlimited mileage packages are available for select vehicles upon request.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              6. Fuel Policy
            </h2>
            <p>
              All vehicles are delivered with a full tank of fuel. Renters are expected to return the vehicle with a full tank. If the vehicle is returned with less than a full tank, a refueling fee will be charged at the prevailing local rate plus a service fee.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              7. Cancellation Policy
            </h2>
            <p>
              Cancellations made 48 or more hours before the scheduled pickup time receive a full refund. Cancellations made within 48 hours of pickup may be subject to a cancellation fee. No-shows forfeit the full rental amount. Modifications to existing reservations are subject to availability.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              8. Vehicle Use Restrictions
            </h2>
            <p>The following uses are prohibited and may void insurance coverage:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>Racing, stunts, or reckless driving</li>
              <li style={{ marginBottom: "0.4rem" }}>Driving under the influence of alcohol or drugs</li>
              <li style={{ marginBottom: "0.4rem" }}>Transporting illegal substances</li>
              <li style={{ marginBottom: "0.4rem" }}>Towing (unless specifically authorized)</li>
              <li style={{ marginBottom: "0.4rem" }}>Leaving the state of Florida without prior approval</li>
              <li style={{ marginBottom: "0.4rem" }}>Off-road use (except light trails in the Ford Bronco)</li>
              <li style={{ marginBottom: "0.4rem" }}>Smoking or vaping inside the vehicle</li>
              <li style={{ marginBottom: "0.4rem" }}>Transporting pets without prior approval and protective seat covers</li>
            </ul>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              9. Delivery &amp; Return
            </h2>
            <p>
              Delivery and pickup within 30 miles of downtown Orlando is included at no additional charge. Deliveries beyond this radius may incur a delivery fee. The Renter must be present at the agreed-upon delivery location and time. Late returns may be charged at the daily rate.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              10. Damage &amp; Liability
            </h2>
            <p>
              The Renter is responsible for any damage to the vehicle during the rental period that is not covered by insurance. This includes damage resulting from prohibited use, negligence, or failure to report an incident. All accidents and damage must be reported immediately to SunshineDrive Rentals and local law enforcement where applicable.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              11. Tolls &amp; Traffic Violations
            </h2>
            <p>
              The Renter is responsible for all tolls, parking tickets, traffic violations, and fines incurred during the rental period. Florida uses electronic toll collection (SunPass/E-PASS). Toll charges will be billed to the Renter after the trip if not paid directly.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              12. Privacy
            </h2>
            <p>
              SunshineDrive Rentals collects personal information necessary to process your reservation, verify your identity, and communicate about your rental. We do not sell or share your personal information with third parties for marketing purposes. Your data is processed in accordance with applicable privacy laws.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              13. Contact
            </h2>
            <p>
              For questions about these terms, your reservation, or any aspect of your rental experience:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>Phone/Text: <a href="tel:+19043147650" style={{ color: "var(--sd-green-dark)", textDecoration: "none", fontWeight: 600 }}>(904) 314-7650</a></li>
              <li style={{ marginBottom: "0.4rem" }}>Email: <a href="mailto:matthew@sunshinedriverentals.com" style={{ color: "var(--sd-green-dark)", textDecoration: "none", fontWeight: 600 }}>matthew@sunshinedriverentals.com</a></li>
            </ul>

            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--sd-border)" }}>
              <p style={{ fontSize: "0.8rem", color: "var(--sd-muted)" }}>
                SunshineDrive Rentals · Orlando, Florida · © 2026 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
