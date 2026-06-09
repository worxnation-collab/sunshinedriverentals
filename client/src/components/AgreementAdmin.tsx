import { useCallback, useEffect, useState } from "react";
import { Calendar, Car, CheckCircle, Copy, Download, ExternalLink, FileText, Loader2, Mail, Phone, Plus, RefreshCw, User } from "lucide-react";
import {
  Agreement,
  AgreementForm,
  createAgreement,
  getAgreementLink,
  getAgreementPdfUrl,
  getBlankAgreement,
  listAgreements,
} from "@/lib/agreementApi";

const vehiclePresets = [
  { label: "Select vehicle preset", value: "" },
  { label: "Dodge Durango 2021", value: "Dodge Durango 2021", color: "F8 Green" },
  { label: "Dodge Challenger 2018", value: "Dodge Challenger 2018", color: "F8 Green" },
  { label: "Toyota Sienna 2023", value: "Toyota Sienna 2023", color: "Woodland" },
  { label: "Dodge Charger 2022", value: "Dodge Charger 2022", color: "" },
  { label: "Dodge Charger Scat Pack 2022", value: "Dodge Charger Scat Pack 2022", color: "F8 Green" },
  { label: "Ford Bronco 2026", value: "Ford Bronco 2026", color: "Rapid Red" },
];

const sections: Array<{
  title: string;
  fields: Array<{ key: keyof AgreementForm; label: string; type?: string; required?: boolean; textarea?: boolean }>;
}> = [
  {
    title: "Renter Contact",
    fields: [
      { key: "renterName", label: "Renter Name", required: true },
      { key: "email", label: "Email", type: "email", required: true },
      { key: "phone", label: "Phone", type: "tel", required: true },
      { key: "flightNumber", label: "Flight #, if applicable" },
    ],
  },
  {
    title: "Vehicle",
    fields: [
      { key: "vehicleYearMakeModel", label: "Year / Make / Model", required: true },
      { key: "color", label: "Color", required: true },
      { key: "vin", label: "VIN", required: true },
      { key: "licensePlate", label: "License Plate", required: true },
      { key: "odometerOut", label: "Odometer Out", type: "number" },
      { key: "fuelOut", label: "Fuel Out" },
      { key: "mileageAllowance", label: "Mileage Allowance" },
    ],
  },
  {
    title: "Trip",
    fields: [
      { key: "pickupDate", label: "Pickup Date", type: "date", required: true },
      { key: "pickupTime", label: "Pickup Time", type: "time", required: true },
      { key: "pickupLocation", label: "Pickup Location", required: true },
      { key: "returnDate", label: "Return Date", type: "date", required: true },
      { key: "returnTime", label: "Return Time", type: "time", required: true },
      { key: "returnLocation", label: "Return Location", required: true },
    ],
  },
  {
    title: "Pricing",
    fields: [
      { key: "dailyRate", label: "Daily Rate", required: true },
      { key: "totalDays", label: "Total Days", type: "number", required: true },
      { key: "subtotal", label: "Subtotal", required: true },
      { key: "tax", label: "Tax", required: true },
      { key: "discountApplied", label: "Discount Applied" },
      { key: "totalCharged", label: "Total Charged", required: true },
      { key: "securityDepositHold", label: "Security Deposit Hold", required: true },
      { key: "stripeReceiptId", label: "Stripe Receipt / Quote ID" },
    ],
  },
  {
    title: "Agreement Terms",
    fields: [
      { key: "agreementNotes", label: "Terms / Notes", textarea: true },
    ],
  },
];

function statusStyle(status: Agreement["status"]) {
  return status === "signed"
    ? { background: "#e7f7e8", color: "#217a2b" }
    : { background: "#fff3d8", color: "#8a5a00" };
}

function formatSignedDate(value?: string | null) {
  if (!value) return "Not signed yet";
  try {
    return new Date(value).toLocaleString();
  } catch {
    return value;
  }
}

export default function AgreementAdmin({ pin }: { pin: string }) {
  const [agreements, setAgreements] = useState<Agreement[]>([]);
  const [form, setForm] = useState<AgreementForm>(() => getBlankAgreement());
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");
  const [lastCreatedLink, setLastCreatedLink] = useState("");
  const [copied, setCopied] = useState("");

  const loadAgreements = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await listAgreements(pin);
      setAgreements(response.agreements);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load agreements.");
    } finally {
      setLoading(false);
    }
  }, [pin]);

  useEffect(() => {
    loadAgreements();
  }, [loadAgreements]);

  const update = (key: keyof AgreementForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: key === "totalDays" || key === "odometerOut" ? Number(value || 0) : value,
    }));
  };

  const applyVehiclePreset = (value: string) => {
    const preset = vehiclePresets.find((item) => item.value === value);
    if (!preset || !preset.value) return;
    setForm((prev) => ({
      ...prev,
      vehicleYearMakeModel: preset.value,
      color: preset.color || prev.color,
    }));
  };

  const copyLink = async (bookingId: string) => {
    const link = getAgreementLink(bookingId);
    await navigator.clipboard.writeText(link);
    setCopied(bookingId);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleCreate = async (event: React.FormEvent) => {
    event.preventDefault();
    setCreating(true);
    setError("");
    setLastCreatedLink("");

    try {
      const response = await createAgreement(pin, form);
      const link = getAgreementLink(response.agreement.bookingId);
      setLastCreatedLink(link);
      setForm(getBlankAgreement());
      setShowForm(false);
      await loadAgreements();
      await navigator.clipboard.writeText(link).catch(() => undefined);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create agreement.");
    } finally {
      setCreating(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--sd-charcoal)", fontFamily: "'Playfair Display', serif" }}>Rental Agreements</h1>
          <p className="text-sm" style={{ color: "var(--sd-muted)" }}>Create booking-specific signing links, track status, and download stored signed PDFs.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={loadAgreements} className="btn-secondary" disabled={loading}>
            {loading ? <Loader2 size={15} className="animate-spin" /> : <RefreshCw size={15} />} Refresh
          </button>
          <button type="button" onClick={() => setShowForm((value) => !value)} className="btn-book">
            <Plus size={15} /> New Agreement
          </button>
        </div>
      </div>

      {lastCreatedLink && (
        <div className="rounded-xl p-4 mb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3" style={{ background: "#eef9ef", border: "1px solid #bfe8c4" }}>
          <div className="flex items-start gap-2">
            <CheckCircle size={20} style={{ color: "#217a2b", marginTop: 2 }} />
            <div>
              <p className="font-bold" style={{ color: "#174f1d" }}>Agreement link created and copied.</p>
              <p className="text-sm break-all" style={{ color: "#2f6b36" }}>{lastCreatedLink}</p>
            </div>
          </div>
          <a href={lastCreatedLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <ExternalLink size={14} /> Open
          </a>
        </div>
      )}

      {error && (
        <div className="rounded-lg p-3 mb-5 text-sm font-semibold" style={{ background: "#fff1ed", color: "#a33b20", border: "1px solid #ffd2c7" }}>
          {error}
        </div>
      )}

      {showForm && (
        <form onSubmit={handleCreate} className="rounded-xl p-5 mb-6" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
          <div className="mb-5">
            <label className="block max-w-md">
              <span className="sd-label">Quick Vehicle Preset</span>
              <select className="sd-input" onChange={(event) => applyVehiclePreset(event.target.value)} defaultValue="">
                {vehiclePresets.map((preset) => (
                  <option key={preset.label} value={preset.value}>{preset.label}</option>
                ))}
              </select>
            </label>
          </div>

          {sections.map((section) => (
            <section key={section.title} className="mb-6">
              <h2 className="font-bold text-lg mb-3" style={{ color: "var(--sd-charcoal)" }}>{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.fields.map((field) => (
                  <label key={String(field.key)} className={field.textarea ? "block md:col-span-2" : "block"}>
                    <span className="sd-label">{field.label}{field.required ? " *" : ""}</span>
                    {field.textarea ? (
                      <textarea
                        className="sd-input min-h-28"
                        value={String(form[field.key] || "")}
                        onChange={(event) => update(field.key, event.target.value)}
                      />
                    ) : (
                      <input
                        type={field.type || "text"}
                        className="sd-input"
                        value={String(form[field.key] ?? "")}
                        onChange={(event) => update(field.key, event.target.value)}
                        required={field.required}
                      />
                    )}
                  </label>
                ))}
              </div>
            </section>
          ))}

          <button type="submit" className="btn-book w-full justify-center" style={{ display: "flex" }} disabled={creating}>
            {creating ? <><Loader2 size={16} className="animate-spin" /> Creating Agreement...</> : "Create Agreement Link"}
          </button>
        </form>
      )}

      {loading && agreements.length === 0 && (
        <p className="text-center py-8" style={{ color: "var(--sd-muted)" }}>Loading agreements...</p>
      )}

      {!loading && agreements.length === 0 && (
        <div className="p-8 rounded-xl text-center" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
          <FileText size={32} style={{ color: "var(--sd-border)", margin: "0 auto 0.75rem" }} />
          <p style={{ color: "var(--sd-muted)", fontSize: "0.875rem" }}>No rental agreements yet. Create one to generate a customer signing link.</p>
        </div>
      )}

      <div className="space-y-4">
        {agreements.map((agreement) => {
          const link = getAgreementLink(agreement.bookingId);
          const pdfUrl = getAgreementPdfUrl(agreement.bookingId);
          return (
            <div key={agreement.bookingId} className="p-4 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <div>
                  <h2 className="text-lg font-bold" style={{ color: "var(--sd-charcoal)" }}>Agreement for {agreement.renterName}</h2>
                  <p className="text-xs break-all" style={{ color: "var(--sd-muted)" }}>{link}</p>
                </div>
                <span className="self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.08em]" style={statusStyle(agreement.status)}>{agreement.status}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm" style={{ color: "var(--sd-charcoal)" }}>
                <p className="flex items-center gap-2"><User size={16} /> <strong>Renter:</strong> {agreement.renterName}</p>
                <p className="flex items-center gap-2"><Mail size={16} /> <strong>Email:</strong> {agreement.email}</p>
                <p className="flex items-center gap-2"><Phone size={16} /> <strong>Phone:</strong> {agreement.phone}</p>
                <p className="flex items-center gap-2"><Car size={16} /> <strong>Vehicle:</strong> {agreement.vehicleYearMakeModel}</p>
                <p className="flex items-center gap-2"><Calendar size={16} /> <strong>Pickup:</strong> {agreement.pickupDate} {agreement.pickupTime}</p>
                <p className="flex items-center gap-2"><CheckCircle size={16} /> <strong>Signed:</strong> {formatSignedDate(agreement.signedAt)}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-sd-border flex flex-wrap gap-2">
                <button type="button" onClick={() => copyLink(agreement.bookingId)} className="btn-secondary">
                  <Copy size={14} /> {copied === agreement.bookingId ? "Copied" : "Copy Link"}
                </button>
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <ExternalLink size={14} /> Open Link
                </a>
                {agreement.pdfAvailable && (
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="btn-book">
                    <Download size={14} /> Download Signed PDF
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
