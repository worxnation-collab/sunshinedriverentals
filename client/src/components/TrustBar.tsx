/*
 * TrustBar — SunshineDrive Rentals
 * CX improvement: elevate trust signals (insurance, Google rating, owner-operated) to above-the-fold
 */
import { Shield, Star, User } from "lucide-react";

interface TrustBarProps {
  dark?: boolean;
}

export default function TrustBar({ dark = false }: TrustBarProps) {
  const textColor = dark ? "rgba(255,255,255,0.75)" : "var(--sd-muted)";
  const iconColor = dark ? "rgba(255,255,255,0.5)" : "var(--sd-green)";

  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-6">
      <div className="trust-badge" style={{ color: textColor }}>
        <Shield size={14} style={{ color: iconColor }} />
        <span>Insured via Wheelbase</span>
      </div>
      <div className="trust-badge" style={{ color: textColor }}>
        <Star size={14} style={{ color: "#f5c518", fill: "#f5c518" }} />
        <span>5.0 on Google</span>
      </div>
      <div className="trust-badge" style={{ color: textColor }}>
        <User size={14} style={{ color: iconColor }} />
        <span>Owner-operated</span>
      </div>
    </div>
  );
}
