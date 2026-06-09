/*
 * Privacy Policy — SunshineDrive Rentals
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { ChevronRight } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <PageMeta
        title="Privacy Policy | SunshineDrive Rentals"
        description="SunshineDrive Rentals privacy policy — how we collect, use, and protect your personal information."
        url="/privacy/"
      />
      <Navbar />

      {/* Header */}
      <section style={{ background: "var(--sd-charcoal)", paddingTop: "7rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</a>
            <ChevronRight size={12} />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Privacy Policy</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginTop: "0.75rem" }}>
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "white", padding: "4rem 0" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto" style={{ fontSize: "0.9rem", color: "var(--sd-charcoal)", lineHeight: 1.8 }}>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              1. Introduction
            </h2>
            <p>
              SunshineDrive Rentals ("we," "us," or "our") operates the website sunshinedriverentals.com and provides premium car rental services in the Orlando, Florida area. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              By using our website or services, you consent to the data practices described in this policy. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              2. Information We Collect
            </h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            <p style={{ marginTop: "0.75rem" }}><strong>Personal Data:</strong> When you fill out an inquiry form, subscribe to our email list, or contact us directly, we may collect personally identifiable information such as your name, email address, phone number, wedding/event date, venue location, and group size.</p>
            <p style={{ marginTop: "0.75rem" }}><strong>Booking Data:</strong> When you complete a reservation through our booking partner (Wheelbase), they collect payment information, driver's license details, and identity verification data. We do not directly store your payment card information — this is handled entirely by Wheelbase's secure checkout system.</p>
            <p style={{ marginTop: "0.75rem" }}><strong>Usage Data:</strong> We may automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. This data is collected through analytics tools to help us improve our website experience.</p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>Respond to your inquiries and provide quotes</li>
              <li style={{ marginBottom: "0.4rem" }}>Process and manage your vehicle reservations</li>
              <li style={{ marginBottom: "0.4rem" }}>Communicate with you about your rental (delivery times, pickup details, etc.)</li>
              <li style={{ marginBottom: "0.4rem" }}>Send you promotional emails about new vehicles, deals, or availability (only if you opted in via our email list)</li>
              <li style={{ marginBottom: "0.4rem" }}>Improve our website and customer experience</li>
              <li style={{ marginBottom: "0.4rem" }}>Comply with legal obligations</li>
            </ul>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              4. Third-Party Services
            </h2>
            <p>We use the following third-party services that may collect or process your data:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.4rem" }}><strong>Wheelbase</strong> — Our fleet management and booking platform. When you complete a reservation, Wheelbase processes your payment, identity verification, and insurance coverage. Their privacy policy governs data collected during the booking process.</li>
              <li style={{ marginBottom: "0.4rem" }}><strong>Analytics</strong> — We use website analytics to understand how visitors use our site. This collects anonymized usage data (pages visited, time on site, device type) but does not collect personally identifiable information.</li>
              <li style={{ marginBottom: "0.4rem" }}><strong>Facebook/Meta</strong> — If you interact with our ads on Facebook or Instagram, Meta's privacy policy governs that data. We may use Meta Pixel for ad performance tracking.</li>
            </ul>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              5. Data Storage &amp; Security
            </h2>
            <p>
              Your inquiry form submissions are stored in a secure database. We implement commercially reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              6. Data Sharing
            </h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>With Wheelbase to process your vehicle reservation</li>
              <li style={{ marginBottom: "0.4rem" }}>With our insurance provider to verify coverage eligibility</li>
              <li style={{ marginBottom: "0.4rem" }}>If required by law, court order, or governmental authority</li>
              <li style={{ marginBottom: "0.4rem" }}>To protect our rights, property, or safety</li>
            </ul>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              7. Email Communications
            </h2>
            <p>
              If you subscribe to our email list, you will receive occasional emails about new vehicles, special offers, and availability updates. You can unsubscribe at any time by clicking the "unsubscribe" link in any email we send, or by contacting us directly. We will never send you spam or share your email address with third parties for marketing purposes.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              8. Cookies
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to improve your browsing experience. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              9. Your Rights
            </h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>The right to access the personal information we hold about you</li>
              <li style={{ marginBottom: "0.4rem" }}>The right to request correction of inaccurate data</li>
              <li style={{ marginBottom: "0.4rem" }}>The right to request deletion of your data</li>
              <li style={{ marginBottom: "0.4rem" }}>The right to opt out of marketing communications</li>
              <li style={{ marginBottom: "0.4rem" }}>The right to data portability</li>
            </ul>
            <p>To exercise any of these rights, contact us using the information below.</p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              10. Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 25 (the minimum age to rent a vehicle). We do not knowingly collect personal information from anyone under 18 years of age.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              11. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. The updated version will be indicated by the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
            </p>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem", marginTop: "2rem" }}>
              12. Contact Us
            </h2>
            <p>If you have questions about this Privacy Policy or wish to exercise your data rights, contact us at:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>Phone/Text: <a href="tel:+19043147650" style={{ color: "var(--sd-green-dark)", textDecoration: "none", fontWeight: 600 }}>(904) 314-7650</a></li>
              <li style={{ marginBottom: "0.4rem" }}>Email: <a href="mailto:matthew@sunshinedriverentals.com" style={{ color: "var(--sd-green-dark)", textDecoration: "none", fontWeight: 600 }}>matthew@sunshinedriverentals.com</a></li>
              <li style={{ marginBottom: "0.4rem" }}>Website: <a href="https://sunshinedriverentals.com" style={{ color: "var(--sd-green-dark)", textDecoration: "none", fontWeight: 600 }}>sunshinedriverentals.com</a></li>
            </ul>

            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--sd-border)" }}>
              <p style={{ fontSize: "0.8rem", color: "var(--sd-muted)" }}>
                SunshineDrive Rentals · Kissimmee, Florida · © 2026 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
