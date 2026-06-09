/*
 * P&L tool — SunshineDrive Rentals dashboard tab.
 * Editable monthly figures; persists to Supabase (pnl_settings) via the dashboard function.
 */
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";
import { Plus, Trash2, Save } from "lucide-react";
import { dash } from "@/lib/api";

interface Vehicle { name: string; payment: number; insurance: number; revenue: number; }
interface LineItem { label: string; amount: number; }
interface PnlData { vehicles: Vehicle[]; overhead: LineItem[]; }

const DEFAULTS: PnlData = {
  vehicles: [
    { name: "Durango SRT Hellcat", payment: 980, insurance: 133, revenue: 0 },
    { name: "Charger Scat Pack", payment: 905, insurance: 133, revenue: 0 },
    { name: "Challenger R/T", payment: 662, insurance: 133, revenue: 0 },
    { name: "Toyota Sienna Woodland", payment: 856, insurance: 133, revenue: 0 },
    { name: "Subaru Ascent", payment: 0, insurance: 133, revenue: 0 },
    { name: "Ford Bronco", payment: 0, insurance: 133, revenue: 0 },
  ],
  overhead: [
    { label: "Website / hosting (Netlify)", amount: 19 },
    { label: "Bouncie GPS (fleet)", amount: 35 },
  ],
};

const n = (v: string) => (v === "" ? 0 : Number(v) || 0);
const usd = (v: number) => `$${Math.round(v).toLocaleString()}`;

export default function PnlTool({ token }: { token: string }) {
  const [data, setData] = useState<PnlData>(DEFAULTS);
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await dash.pnl(token);
        if (res.data && res.data.vehicles) setData(res.data as PnlData);
      } catch { /* use defaults */ } finally { setLoaded(true); }
    })();
  }, [token]);

  const save = async () => {
    setSaving(true);
    try {
      await dash.savePnl(token, data);
      setSavedAt(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    } catch { alert("Couldn't save. Try again."); } finally { setSaving(false); }
  };

  const setVeh = (i: number, key: keyof Vehicle, val: string) => {
    const vehicles = [...data.vehicles];
    vehicles[i] = { ...vehicles[i], [key]: key === "name" ? val : n(val) };
    setData({ ...data, vehicles });
  };
  const addVeh = () => setData({ ...data, vehicles: [...data.vehicles, { name: "New vehicle", payment: 0, insurance: 0, revenue: 0 }] });
  const delVeh = (i: number) => setData({ ...data, vehicles: data.vehicles.filter((_, x) => x !== i) });

  const setOh = (i: number, key: keyof LineItem, val: string) => {
    const overhead = [...data.overhead];
    overhead[i] = { ...overhead[i], [key]: key === "label" ? val : n(val) };
    setData({ ...data, overhead });
  };
  const addOh = () => setData({ ...data, overhead: [...data.overhead, { label: "New expense", amount: 0 }] });
  const delOh = (i: number) => setData({ ...data, overhead: data.overhead.filter((_, x) => x !== i) });

  const totalRevenue = data.vehicles.reduce((s, v) => s + v.revenue, 0);
  const totalPayments = data.vehicles.reduce((s, v) => s + v.payment, 0);
  const totalInsurance = data.vehicles.reduce((s, v) => s + v.insurance, 0);
  const totalOverhead = data.overhead.reduce((s, o) => s + o.amount, 0);
  const totalCost = totalPayments + totalInsurance + totalOverhead;
  const net = totalRevenue - totalCost;
  const margin = totalRevenue > 0 ? (net / totalRevenue) * 100 : 0;

  const chart = data.vehicles.map((v) => ({ name: v.name.split(" ")[0], Revenue: v.revenue, Cost: v.payment + v.insurance }));

  const inputStyle: React.CSSProperties = { padding: "0.4rem 0.5rem", border: "1px solid var(--sd-border)", borderRadius: "0.4rem", fontSize: "0.85rem", width: "100%", background: "white" };
  const th: React.CSSProperties = { textAlign: "left", fontSize: "0.7rem", color: "var(--sd-muted)", fontWeight: 600, padding: "0 0.4rem 0.4rem", textTransform: "uppercase", letterSpacing: "0.04em" };

  if (!loaded) return <p style={{ color: "var(--sd-muted)", fontSize: "0.85rem" }}>Loading P&L…</p>;

  return (
    <div>
      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Monthly Revenue", value: usd(totalRevenue), color: "var(--sd-green)" },
          { label: "Monthly Cost", value: usd(totalCost), color: "#e05c2a" },
          { label: "Net / month", value: usd(net), color: net >= 0 ? "var(--sd-green)" : "#e05c2a" },
          { label: "Margin", value: `${margin.toFixed(0)}%`, color: "var(--sd-charcoal)" },
        ].map((c) => (
          <div key={c.label} className="p-4 rounded-xl" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: c.color, fontFamily: "'Playfair Display', serif" }}>{c.value}</div>
            <div style={{ fontSize: "0.72rem", color: "var(--sd-muted)" }}>{c.label}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="p-4 rounded-xl mb-6" style={{ background: "white", border: "1px solid var(--sd-border)", height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chart} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--sd-border)" />
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip formatter={(v: number) => usd(v)} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="Revenue" fill="#2d5a3d" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Cost" fill="#e05c2a" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Vehicles table */}
      <div className="p-4 rounded-xl mb-6" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
        <div className="flex items-center justify-between mb-3">
          <h3 style={{ fontWeight: 700, color: "var(--sd-charcoal)" }}>Per-vehicle (monthly)</h3>
          <button onClick={addVeh} className="flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--sd-green)", background: "none", border: "none", cursor: "pointer" }}><Plus size={14} /> Add</button>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
            <thead><tr><th style={th}>Vehicle</th><th style={th}>Payment</th><th style={th}>Insurance</th><th style={th}>Revenue</th><th style={th}></th></tr></thead>
            <tbody>
              {data.vehicles.map((v, i) => (
                <tr key={i}>
                  <td style={{ padding: "0.25rem 0.4rem" }}><input style={inputStyle} value={v.name} onChange={(e) => setVeh(i, "name", e.target.value)} /></td>
                  <td style={{ padding: "0.25rem 0.4rem", width: 110 }}><input style={inputStyle} type="number" value={v.payment} onChange={(e) => setVeh(i, "payment", e.target.value)} /></td>
                  <td style={{ padding: "0.25rem 0.4rem", width: 110 }}><input style={inputStyle} type="number" value={v.insurance} onChange={(e) => setVeh(i, "insurance", e.target.value)} /></td>
                  <td style={{ padding: "0.25rem 0.4rem", width: 110 }}><input style={inputStyle} type="number" value={v.revenue} onChange={(e) => setVeh(i, "revenue", e.target.value)} /></td>
                  <td style={{ padding: "0.25rem 0.4rem", width: 36, textAlign: "center" }}><button onClick={() => delVeh(i)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--sd-muted)" }}><Trash2 size={14} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Overhead */}
      <div className="p-4 rounded-xl mb-6" style={{ background: "white", border: "1px solid var(--sd-border)" }}>
        <div className="flex items-center justify-between mb-3">
          <h3 style={{ fontWeight: 700, color: "var(--sd-charcoal)" }}>Overhead (monthly)</h3>
          <button onClick={addOh} className="flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--sd-green)", background: "none", border: "none", cursor: "pointer" }}><Plus size={14} /> Add</button>
        </div>
        {data.overhead.map((o, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input style={inputStyle} value={o.label} onChange={(e) => setOh(i, "label", e.target.value)} />
            <input style={{ ...inputStyle, width: 120 }} type="number" value={o.amount} onChange={(e) => setOh(i, "amount", e.target.value)} />
            <button onClick={() => delOh(i)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--sd-muted)" }}><Trash2 size={14} /></button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button onClick={save} disabled={saving} className="btn-book flex items-center gap-2" style={{ display: "inline-flex" }}>
          <Save size={16} /> {saving ? "Saving…" : "Save P&L"}
        </button>
        {savedAt && <span style={{ fontSize: "0.78rem", color: "var(--sd-muted)" }}>Saved at {savedAt}</span>}
      </div>
    </div>
  );
}
