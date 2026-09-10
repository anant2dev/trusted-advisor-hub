import { ShieldTick, Verify, People, Award, Lock1 } from "iconsax-react";
import { useLang } from "@/lib/i18n";

const BADGES = [
  { icon: ShieldTick, label: "IRDAI Licensed", sub: "Since 2003" },
  { icon: Award, label: "DM Club", sub: "Distinguished Member" },
  { icon: People, label: "1000+ Families", sub: "Protected & Served" },
  { icon: Verify, label: "20+ Years", sub: "Of Advisory Practice" },
  { icon: Lock1, label: "Zero-Database", sub: "Private by Design" },
];

export function TrustBadges({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const hindi = [
    ["IRDAI लाइसेंस", "2003 से"],
    ["डीएम क्लब", "विशिष्ट सदस्य"],
    ["1000+ परिवार", "सुरक्षित एवं सेवारत"],
    ["20+ वर्ष", "सलाहकारी अनुभव"],
    ["जानकारी सेव नहीं", "गोपनीयता के लिए"],
  ];
  return (
    <div
      className={
        "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 " + className
      }
    >
       {BADGES.map((b, index) => (
        <div
          key={b.label}
          className="flex items-center gap-3 rounded-xl border border-border bg-card px-3.5 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-md"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy text-gold">
            <b.icon size={18} variant="Bold" color="#FFC93C" />
          </span>
          <div className="min-w-0">
             <p className="text-[13px] font-bold leading-snug text-foreground">{lang === "hi" ? hindi[index][0] : b.label}</p>
             <p className="text-[11px] leading-snug text-muted-foreground">{lang === "hi" ? hindi[index][1] : b.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}