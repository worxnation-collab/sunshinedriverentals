/*
 * Owner Dashboard — SunshineDrive Rentals
 * PIN-protected (triple-tap the sun → /dashboard). Talks to /.netlify/functions/dashboard.
 * Tabs: Inquiries, Bookings, Quotes, Fleet, P&L.
 */
import { useState, useEffect, useCallback } from "react";
import { Inbox, Users, BarChart3, Lock, Clock, Calendar, Car, DollarSign, FileText } from "lucide-react";
import { dashboardLogin, dash } from "@/lib/api";
import PnlTool from "@/components/PnlTool";

type Tab = "inquiries" | "bookings" | "quotes" | "fleet" | "pnl";
type StatusFilter = "all" | "new" | "contacted" | "booked" | "archived";

const fmtDate = (v?: string) => (v ? new Date(v).toLocaleDateString() : "—");
const fmtDateTime = (v?: string) =>
  v ? `${new Date(v).toLocaleDateString()} ${new Date(v).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "—";
const money = (v: unknown) => (v == null || v === "" ? "—" : `$${Number(v).toLocaleString()}`);

const STATUS_COLOR: Record<string, string> = {
  new: "#e05c2a", contacted: "var(--sd-amber)", booked: "var(--sd-green)", archived: "var(--sd-muted)",
};

export default function Dashboard() {
  const [pin, setPin] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [authError, setAuthError] = useState(false);
  const [tab, setTab] = useState<Tab>("inquiries");

  const [stats, setStats] = useState<Record<string, number> | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [quotes, setQuotes] = useState<any[]>([]);
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(false);
    const res = await dashboardLogin(pin);
    if (res.valid && res.token) setToken(res.token);
    else setAuthError(true);
  };

  const loadStats = useCallback(async (t: string) => {
    try { setStats(await dash.stats(t)); } catch { /* ignore */ }
  }, []);

  const loadTab = useCallback(async (t: string, which: Tab, filter: StatusFilter) => {
    setLoading(true);
    try {
      if (which === "inquiries") setInquiries((await dash.inquiries(t, filter)).inquiries || []);
      else if (which === "bookings") setBookings((await dash.bookings(t)).bookings || []);
      else if (which === "quotes") setQuotes((await dash.quotes(t)).quotes || []);
      else if (which === "fleet") setVehicles((await dash.vehicles(t)).vehicles || []);
    } catch { /* ignore */ } finally { setLoading(false); }
  }, []);

  useEffect(() => { if (token) loadStats(token); }, [token, loadStats]);
  useEffect(() => { if (token) loadTab(token, tab, statusFilter); }, [token, tab, statusFilter, loadTab]);

  const setInquiryStatus = async (id: string, status: string) => {
    if (!token) return;
    await dash.updateInquiryStatus(token, id, status);
    loadTab(token, "inquiries", statusFilter);
    loadStats(token);
  };

  // ── PIN SCREEN ──
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--sd-charcoal)" }}>
        <div className="w-full max-w-sm p-8 rounded-2xl" style={{ background: "white" }}>
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--sd-cream)", border: "1px solid var(--sd-border)" }}>
              <Lock size={24} style={{ color: "var(--sd-charcoal)" }} />
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--sd-charcoal)" }}>Owner Dashboard</h1>
            <p style={{ fontSize: "0.82rem", color: "var(--sd-muted)", marginTop: "0.5rem" }}>Enter your PIN to access</p>
          </div>
          <form onSubmit={login}>
            <input
              type="password" inputMode="numeric" maxLength={4} value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
              placeholder="• • • •" autoFocus
              className="sd-input text-center text-2xl tracking-[0.5em] mb-4"
              style={{ letterSpacing: "0.5em", fontWeight: 700 }}
            />
            <button type="submit" className="btn-book w-full justify-center" style={{ display: "flex" }}>Access Dashboard</button>
            {authError && <p style={{ color: "#e05c2a", fontSize: "0.8rem", textAlign: "center", marginTop: "0.75rem" }}>Invalid PIN. Try again.</p>}
          </form>
        </div>
      </div>
    );
  }

  // ── DASHBOARD ──
  const tabs: { id: Tab; label: string; icon: JSX.Element }[] = [
    { id: "inquiries", label: "Inquiries", icon: <Inbox size={14} /> },
    { id: "bookings", label: "Bookings", icon: <Calendar size={14} /> },
    { id: "quotes", label: "Quotes", icon: <FileText size={14} /> },
    { id: "fleet", label: "Fleet", icon: <Car size={14} /> },
    { id: "pnl", label: "P&L", icon: <DollarSign size={14} /> },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--sd-cream)" }}>
      <header className="sticky top-0 z-30" style={{ background: "var(--sd-charcoal)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <span style={{ color: "var(--sd-green)", fontSize: "1.2rem" }}>☀</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "0.95rem", color: "white" }}>SunshineDrive Dashboard</span>
            </div>
            <a href="/" className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>← Back to site</a>
          </div>
        </div>
      </header>

      <div className="container py-6">
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {[
              { label: "New Inquiries", value: stats.newInquiries, icon: <Inbox size={18} />, color: "#e05c2a" },
              { label: "This Week", value: stats.recentInquiries, icon: <Clock size={18} />, color: "var(--sd-amber)" },
              { label: "Total Inquiries", value: stats.totalInquiries, icon: <BarChart3 size={18} />, color: "var(--sd-green)" },
              { label: "Bookings", value: stats.totalBookings, icon: <Calendar size={18} />, color: "#3a7bd5" },
              { label: "Subscribers", value: stats.totalSubscribers, icon: <Users size={18} />, color: "var(--sd-charcoal)" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${s.color}15`, color: s.color }}>{s.icon}</div>
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--sd-charcoal)", fontFamily: "'Playfair Display', serif" }}>{s.value ?? 0}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--sd-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 mb-6 p-1 rounded-lg overflow-x-auto" style={{ background: "white", border: "1px solid var(--sd-border)", width: "fit-content", maxWidth: "100%" }}>
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold whitespace-nowrap"
              style={{ background: tab === t.id ? "var(--sd-charcoal)" : "transparent", color: tab === t.id ? "white" : "var(--sd-muted)", border: "none", cursor: "pointer" }}>
              {t.icon}{t.label}
            </button>
          ))}
        </div>

        {loading && <p style={{ color: "var(--sd-muted)", fontSize: "0.85rem", marginBottom: "1rem" }}>Loading…</p>}

        {/* INQUIRIES */}
        {tab === "inquiries" && (
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {(["all", "new", "contacted", "booked", "archived"] as const).map((s) => (
                <button key={s} onClick={() => setStatusFilter(s)} className="px-3 py-1.5 rounded-lg text-xs font-semibold capitalize"
                  style={{ background: statusFilter === s ? "var(--sd-charcoal)" : "white", color: statusFilter === s ? "white" : "var(--sd-muted)", border: "1px solid var(--sd-border)", cursor: "pointer" }}>{s}</button>
              ))}
            </div>
            <div className="space-y-3">
              {inquiries.length === 0 && !loading && (
                <div className="p-8 rounded-xl text-center" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                  <p style={{ color: "var(--sd-muted)", fontSize: "0.875rem" }}>No inquiries here yet. They'll appear when someone submits a form on the site.</p>
                </div>
              )}
              {inquiries.map((q) => (
                <div key={q.id} className="p-4 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sd-charcoal)" }}>{q.name}</span>
                        {q.booking_type && <span className="px-2 py-0.5 rounded-full text-white text-xs font-semibold" style={{ background: "var(--sd-green)", fontSize: "0.65rem" }}>{q.booking_type}</span>}
                        <span className="px-2 py-0.5 rounded-full text-white text-xs font-semibold capitalize" style={{ background: STATUS_COLOR[q.status] || "var(--sd-muted)", fontSize: "0.65rem" }}>{q.status || "new"}</span>
                      </div>
                      <p style={{ fontSize: "0.72rem", color: "var(--sd-muted)" }}>{fmtDateTime(q.created_at)}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                    {q.email && <Field label="Email" value={q.email} />}
                    {q.phone && <Field label="Phone" value={q.phone} />}
                    {q.vehicle && <Field label="Vehicle" value={q.vehicle} />}
                    {q.pickup_date && <Field label="Pickup" value={fmtDate(q.pickup_date)} />}
                    {q.return_date && <Field label="Return" value={fmtDate(q.return_date)} />}
                    {q.pickup_location && <Field label="Location" value={q.pickup_location} />}
                  </div>
                  {q.message && <p style={{ fontSize: "0.8rem", color: "var(--sd-charcoal)", background: "var(--sd-cream)", padding: "0.5rem 0.75rem", borderRadius: "0.5rem", marginBottom: "0.75rem", whiteSpace: "pre-wrap" }}>{q.message}</p>}
                  <div className="flex flex-wrap gap-2 pt-2" style={{ borderTop: "1px solid var(--sd-border)" }}>
                    {(["new", "contacted", "booked", "archived"] as const).map((s) => (
                      <button key={s} onClick={() => setInquiryStatus(q.id, s)} disabled={(q.status || "new") === s} className="px-2.5 py-1 rounded-lg text-xs font-semibold capitalize"
                        style={{ background: (q.status || "new") === s ? "var(--sd-charcoal)" : "var(--sd-cream)", color: (q.status || "new") === s ? "white" : "var(--sd-muted)", border: "1px solid var(--sd-border)", cursor: (q.status || "new") === s ? "default" : "pointer" }}>{s}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BOOKINGS */}
        {tab === "bookings" && (
          <div className="space-y-3">
            {bookings.length === 0 && !loading && <Empty text="No bookings yet." />}
            {bookings.map((b) => (
              <div key={b.id} className="p-4 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <span style={{ fontWeight: 700, color: "var(--sd-charcoal)" }}>{b.customer_name}</span>
                  <span className="px-2 py-0.5 rounded-full text-white text-xs font-semibold capitalize" style={{ background: STATUS_COLOR[b.status] || "var(--sd-green)", fontSize: "0.65rem" }}>{b.status}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Field label="Vehicle" value={b.vehicle_id} />
                  <Field label="Pickup" value={fmtDate(b.pickup_date)} />
                  <Field label="Return" value={fmtDate(b.return_date)} />
                  <Field label="Total" value={money(b.total_amount)} />
                  {b.customer_email && <Field label="Email" value={b.customer_email} />}
                  {b.customer_phone && <Field label="Phone" value={b.customer_phone} />}
                  {b.pickup_location && <Field label="Location" value={b.pickup_location} />}
                  {b.stripe_payment_intent && <Field label="Stripe" value={b.stripe_payment_intent} />}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* QUOTES */}
        {tab === "quotes" && (
          <div className="space-y-3">
            {quotes.length === 0 && !loading && <Empty text="No saved quotes yet." />}
            {quotes.map((qt) => (
              <div key={qt.id} className="p-4 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <span style={{ fontWeight: 700, color: "var(--sd-charcoal)" }}>{qt.customer_name}</span>
                  <span style={{ fontWeight: 800, color: "var(--sd-green-dark)" }}>{money(qt.quoted_amount)}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {qt.vehicle_id && <Field label="Vehicle" value={qt.vehicle_id} />}
                  {qt.pickup_date && <Field label="Pickup" value={fmtDate(qt.pickup_date)} />}
                  {qt.return_date && <Field label="Return" value={fmtDate(qt.return_date)} />}
                  {qt.status && <Field label="Status" value={qt.status} />}
                  {qt.customer_email && <Field label="Email" value={qt.customer_email} />}
                  {qt.customer_phone && <Field label="Phone" value={qt.customer_phone} />}
                </div>
                {qt.notes && <p style={{ fontSize: "0.8rem", color: "var(--sd-charcoal)", marginTop: "0.5rem", whiteSpace: "pre-wrap" }}>{qt.notes}</p>}
              </div>
            ))}
          </div>
        )}

        {/* FLEET */}
        {tab === "fleet" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehicles.length === 0 && !loading && <Empty text="No vehicles in the database yet." />}
            {vehicles.map((v) => (
              <div key={v.id} className="p-4 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
                <div className="flex items-center justify-between mb-1">
                  <span style={{ fontWeight: 700, color: "var(--sd-charcoal)" }}>{v.name}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: v.active ? "var(--sd-green)" : "var(--sd-muted)", color: "white", fontSize: "0.65rem" }}>{v.active ? "Active" : "Off"}</span>
                </div>
                <p style={{ fontSize: "0.75rem", color: "var(--sd-muted)", marginBottom: "0.5rem" }}>{v.category}</p>
                <div className="flex gap-3 text-xs" style={{ color: "var(--sd-charcoal)" }}>
                  <span>{money(v.daily_rate)}/day</span><span>· {v.passengers} pax</span><span>· {v.bags} bags</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* P&L */}
        {tab === "pnl" && <PnlTool token={token} />}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="text-xs">
      <span style={{ color: "var(--sd-muted)" }}>{label}:</span>{" "}
      <span style={{ color: "var(--sd-charcoal)", fontWeight: 500 }}>{value}</span>
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <div className="p-8 rounded-xl text-center" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
      <p style={{ color: "var(--sd-muted)", fontSize: "0.875rem" }}>{text}</p>
    </div>
  );
}
