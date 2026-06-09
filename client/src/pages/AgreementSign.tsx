import { useEffect, useMemo, useState } from "react";
import { useParams } from "wouter";
import { CheckCircle, Download, FileText, Loader2 } from "lucide-react";
import { Agreement, getAgreement, getAgreementPdfUrl, signAgreement } from "@/lib/agreementApi";

const customerFields: Array<{ key: keyof Agreement; label: string; type?: string; required?: boolean }> = [
  { key: "renterName", label: "Legal Name", required: true },
  { key: "email", label: "Email", type: "email", required: true },
  { key: "phone", label: "Phone", type: "tel", required: true },
  { key: "driversLicense", label: "Driver's License #", required: true },
  { key: "licenseStateCountry", label: "License State / Country", required: true },
  { key: "dateOfBirth", label: "Date of Birth", type: "date", required: true },
  { key: "address", label: "Street Address", required: true },
  { key: "cityStateZip", label: "City / State / ZIP", required: true },
  { key: "flightNumber", label: "Flight #, if applicable" },
];

const additionalDriverFields: Array<{ key: keyof Agreement; label: string; type?: string }> = [
  { key: "additionalDriverName", label: "Additional Driver Name" },
  { key: "additionalDriverDob", label: "Additional Driver Date of Birth", type: "date" },
  { key: "additionalDriverLicense", label: "Additional Driver License #" },
  { key: "additionalDriverLicenseStateCountry", label: "Additional Driver License State / Country" },
  { key: "additionalDriverPhone", label: "Additional Driver Phone", type: "tel" },
  { key: "additionalDriverRelationship", label: "Relationship to Renter" },
];

function Detail({ label, value }: { label: string; value?: string | number | null }) {
  return (
    <div className="rounded-lg p-3" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
      <p className="text-[0.68rem] uppercase tracking-[0.12em] font-bold" style={{ color: "var(--sd-muted)" }}>{label}</p>
      <p className="text-sm font-semibold mt-1" style={{ color: "var(--sd-charcoal)" }}>{value || "—"}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4" style={{ color: "var(--sd-charcoal)" }}>{title}</h2>
      {children}
    </section>
  );
}

export default function AgreementSign() {
  const { bookingId } = useParams();
  const [agreement, setAgreement] = useState<Agreement | null>(null);
  const [form, setForm] = useState<Partial<Agreement>>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadAgreement() {
      if (!bookingId) return;
      setLoading(true);
      setError("");
      try {
        const response = await getAgreement(bookingId);
        if (!active) return;
        setAgreement(response.agreement);
        setForm(response.agreement);
        setSuccess(response.agreement.status === "signed");
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err.message : "Unable to load this agreement.");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadAgreement();
    return () => { active = false; };
  }, [bookingId]);

  const pdfUrl = useMemo(() => (agreement?.bookingId ? getAgreementPdfUrl(agreement.bookingId) : ""), [agreement?.bookingId]);

  const update = (key: keyof Agreement, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!agreement?.bookingId) return;

    const missing = customerFields
      .filter((field) => field.required)
      .filter((field) => !String(form[field.key] || "").trim())
      .map((field) => field.label);

    if (!String(form.renterSignatureText || "").trim()) {
      missing.push("Typed Legal Signature");
    }

    if (missing.length) {
      setError(`Please complete: ${missing.join(", ")}.`);
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await signAgreement({
        ...form,
        bookingId: agreement.bookingId,
        renterSignatureText: String(form.renterSignatureText || ""),
      });
      setAgreement(response.agreement);
      setForm(response.agreement);
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign the agreement.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--sd-cream)" }}>
        <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--sd-muted)" }}>
          <Loader2 size={18} className="animate-spin" /> Loading rental agreement...
        </div>
      </div>
    );
  }

  if (error && !agreement) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--sd-cream)" }}>
        <div className="w-full max-w-lg p-8 rounded-2xl text-center" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
          <FileText size={32} style={{ color: "var(--sd-muted)", margin: "0 auto 1rem" }} />
          <h1 className="text-2xl font-bold mb-3" style={{ color: "var(--sd-charcoal)" }}>Agreement Not Found</h1>
          <p style={{ color: "var(--sd-muted)" }}>{error}</p>
          <a href="/" className="btn-book mt-6 inline-flex">Back to SunshineDrive</a>
        </div>
      </div>
    );
  }

  if (!agreement) return null;

  return (
    <div className="min-h-screen py-10 px-4" style={{ background: "var(--sd-cream)" }}>
      <div className="container max-w-4xl">
        <div className="rounded-2xl p-6 md:p-8" style={{ background: "white", border: "1px solid var(--sd-border)", boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] mb-2" style={{ color: "var(--sd-green-dark)" }}>SunshineDrive Rentals</p>
              <h1 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--sd-charcoal)", fontFamily: "'Playfair Display', serif" }}>Rental Agreement</h1>
              <p className="text-sm mt-2" style={{ color: "var(--sd-muted)" }}>Agreement ID: {agreement.bookingId}</p>
            </div>
            <span className="self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.08em]" style={{ background: agreement.status === "signed" ? "#e7f7e8" : "#fff3d8", color: agreement.status === "signed" ? "#217a2b" : "#8a5a00" }}>
              {agreement.status === "signed" ? "Signed" : "Pending Signature"}
            </span>
          </div>

          {success && (
            <div className="rounded-xl p-5 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4" style={{ background: "#eef9ef", border: "1px solid #bfe8c4" }}>
              <div className="flex items-start gap-3">
                <CheckCircle size={22} style={{ color: "#217a2b", marginTop: 2 }} />
                <div>
                  <h2 className="font-bold" style={{ color: "#174f1d" }}>Agreement signed successfully.</h2>
                  <p className="text-sm" style={{ color: "#2f6b36" }}>A signed PDF has been stored and is available for download.</p>
                </div>
              </div>
              {agreement.pdfAvailable && (
                <a href={pdfUrl} className="btn-book inline-flex" target="_blank" rel="noopener noreferrer">
                  <Download size={16} /> Download Signed PDF
                </a>
              )}
            </div>
          )}

          <Section title="Trip and Vehicle Details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Detail label="Vehicle" value={agreement.vehicleYearMakeModel} />
              <Detail label="Color" value={agreement.color} />
              <Detail label="VIN" value={agreement.vin} />
              <Detail label="License Plate" value={agreement.licensePlate} />
              <Detail label="Pickup" value={`${agreement.pickupDate} at ${agreement.pickupTime}`} />
              <Detail label="Pickup Location" value={agreement.pickupLocation} />
              <Detail label="Return" value={`${agreement.returnDate} at ${agreement.returnTime}`} />
              <Detail label="Return Location" value={agreement.returnLocation} />
              <Detail label="Odometer Out" value={agreement.odometerOut} />
              <Detail label="Fuel Out" value={agreement.fuelOut} />
              <Detail label="Mileage Allowance" value={agreement.mileageAllowance} />
            </div>
          </Section>

          <Section title="Pricing">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Detail label="Daily Rate" value={agreement.dailyRate} />
              <Detail label="Total Days" value={agreement.totalDays} />
              <Detail label="Subtotal" value={agreement.subtotal} />
              <Detail label="Tax" value={agreement.tax} />
              <Detail label="Discount" value={agreement.discountApplied} />
              <Detail label="Total Charged" value={agreement.totalCharged} />
              <Detail label="Security Deposit Hold" value={agreement.securityDepositHold} />
              <Detail label="Stripe Receipt" value={agreement.stripeReceiptId} />
            </div>
          </Section>

          <Section title="Agreement Terms">
            <div className="rounded-xl p-4 text-sm leading-7" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)", color: "var(--sd-charcoal)" }}>
              {agreement.agreementNotes || "Renter agrees to return the vehicle in the same condition received, follow all applicable laws, avoid unauthorized drivers, remain responsible for tolls, tickets, fuel, excess mileage, late returns, damage, cleaning charges, and any agreed security deposit terms."}
            </div>
          </Section>

          <form onSubmit={handleSubmit}>
            <Section title="Renter Details">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {customerFields.map((field) => (
                  <label key={String(field.key)} className="block">
                    <span className="sd-label">{field.label}{field.required ? " *" : ""}</span>
                    <input
                      type={field.type || "text"}
                      className="sd-input"
                      value={String(form[field.key] || "")}
                      onChange={(event) => update(field.key, event.target.value)}
                      disabled={success}
                    />
                  </label>
                ))}
              </div>
            </Section>

            <Section title="Additional Driver, If Any">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalDriverFields.map((field) => (
                  <label key={String(field.key)} className="block">
                    <span className="sd-label">{field.label}</span>
                    <input
                      type={field.type || "text"}
                      className="sd-input"
                      value={String(form[field.key] || "")}
                      onChange={(event) => update(field.key, event.target.value)}
                      disabled={success}
                    />
                  </label>
                ))}
              </div>
            </Section>

            <Section title="Electronic Signature">
              <label className="block">
                <span className="sd-label">Type your full legal name to sign *</span>
                <input
                  type="text"
                  className="sd-input"
                  value={String(form.renterSignatureText || "")}
                  onChange={(event) => update("renterSignatureText", event.target.value)}
                  disabled={success}
                  placeholder={form.renterName ? `Type ${form.renterName}` : "Type your full legal name"}
                />
              </label>
              <p className="text-xs mt-3 leading-5" style={{ color: "var(--sd-muted)" }}>
                By signing electronically, you confirm that the renter, trip, vehicle, pricing, deposit, and agreement terms above are accurate for this booking.
              </p>
            </Section>

            {error && (
              <div className="rounded-lg p-3 mt-6 text-sm font-semibold" style={{ background: "#fff1ed", color: "#a33b20", border: "1px solid #ffd2c7" }}>
                {error}
              </div>
            )}

            {!success && (
              <button type="submit" className="btn-book w-full justify-center mt-8" style={{ display: "flex" }} disabled={submitting}>
                {submitting ? <><Loader2 size={16} className="animate-spin" /> Signing...</> : "Sign Rental Agreement"}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
