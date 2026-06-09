/*
 * SmsWidget — SunshineDrive Rentals
 * Floating SMS chat button in the bottom-right corner
 * Opens a pre-filled SMS to (904) 314-7650
 * CX improvement: reduces friction for visitors with quick questions
 */
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function SmsWidget() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" style={{ pointerEvents: "none" }}>
      {/* Expanded bubble */}
      {expanded && (
        <div
          className="rounded-2xl p-5 shadow-2xl"
          style={{
            background: "white",
            border: "1px solid var(--sd-border)",
            maxWidth: "280px",
            pointerEvents: "auto",
            animation: "fadeIn 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--sd-green)", color: "white", fontSize: "0.8rem", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
                M
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: "0.8rem", color: "var(--sd-charcoal)" }}>Matthew</p>
                <p style={{ fontSize: "0.65rem", color: "var(--sd-green)" }}>Usually replies in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setExpanded(false)}
              style={{ color: "var(--sd-muted)", background: "none", border: "none", padding: "4px" }}
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>
          <p style={{ fontSize: "0.82rem", color: "var(--sd-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
            Have a question about a car, dates, or pricing? Text me — I respond within minutes.
          </p>
          <a
            href="sms:+19043147650?body=Hey%20-%20I%20have%20a%20question%20about%20renting%20from%20SunshineDrive.%20"
            className="btn-book w-full justify-center"
            style={{ display: "flex", fontSize: "0.85rem", padding: "0.625rem 1rem" }}
          >
            <MessageCircle size={16} />
            Text (904) 314-7650
          </a>
          <p style={{ fontSize: "0.65rem", color: "var(--sd-muted)", textAlign: "center", marginTop: "0.5rem" }}>
            Or call anytime
          </p>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
        style={{
          width: expanded ? "48px" : "56px",
          height: expanded ? "48px" : "56px",
          background: expanded ? "var(--sd-charcoal)" : "var(--sd-green)",
          color: "white",
          border: "none",
          pointerEvents: "auto",
          boxShadow: "0 4px 20px rgba(106, 191, 75, 0.4)",
        }}
        aria-label={expanded ? "Close chat" : "Text us a question"}
      >
        {expanded ? <X size={20} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
