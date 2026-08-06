import { ShieldTick, Verify, People, Award, Lock1 } from "iconsax-react";

const BADGES = [
  { icon: ShieldTick, label: "IRDAI Licensed", sub: "Since 2003" },
  { icon: Award, label: "DM Club", sub: "Distinguished Member" },
  { icon: People, label: "1000+ Families", sub: "Protected & Served" },
  { icon: Verify, label: "20+ Years", sub: "Of Advisory Practice" },
  { icon: Lock1, label: "Zero-Database", sub: "Private by Design" },
];

export function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <div
      className={
        "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 " + className
      }
    >
      {BADGES.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-3 rounded-xl border border-border bg-card px-3.5 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-md"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy text-gold">
            <b.icon size={18} variant="Bold" color="#FFC93C" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-bold text-foreground">{b.label}</p>
            <p className="truncate text-[11px] text-muted-foreground">{b.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}