import { useLang } from "@/lib/i18n";
import { playSfx } from "@/lib/sfx";

/**
 * Translate glyph (two facing pages: Devanagari "अ" / Latin "A" with a turn arrow).
 * Transparent background; drawn with currentColor so it always inverts against
 * the surface (dark ink on light theme, light ink on dark theme).
 */
export function TranslateIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 112" className={className} aria-hidden fill="none">
      {/* back flaps */}
      <path d="M11 25 V2 L46 14 Z" fill="currentColor" />
      <path d="M48 14 L85 2 V27" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      {/* left page (outline) with अ */}
      <path d="M2 29 L46 15 V80 L2 95 Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      <text x="24" y="66" textAnchor="middle" fontSize="30" fontWeight="800" fill="currentColor"
        fontFamily="'Noto Sans Devanagari','Mukta',system-ui,sans-serif">अ</text>
      {/* right page (solid) with knocked-out A */}
      <path d="M46 15 L94 30 V97 L46 81 Z" fill="currentColor" />
      <text x="71" y="72" textAnchor="middle" fontSize="34" fontWeight="800" fill="var(--background)"
        fontFamily="system-ui,sans-serif">A</text>
      {/* turn arrow */}
      <path d="M20 102 Q46 116 72 101" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M68 96 L78 97 L74 107 Z" fill="currentColor" />
    </svg>
  );
}

/** One-tap English ⇄ Hindi switch shown in the top navigation on every page. */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const next = lang === "en" ? "hi" : "en";

  return (
    <button
      type="button"
      data-sfx-skip
      onClick={() => {
        playSfx("open");
        setLang(next);
      }}
      aria-label={lang === "en" ? "हिंदी में बदलें (Switch to Hindi)" : "Switch to English (अंग्रेज़ी में बदलें)"}
      title={lang === "en" ? "हिंदी" : "English"}
      className={`inline-flex min-h-10 shrink-0 items-center gap-1.5 bg-transparent px-1.5 text-foreground transition-opacity hover:opacity-75 ${className}`}
    >
      <TranslateIcon className="h-7 w-6" />
      <span className="text-xs font-bold">{lang === "en" ? "हिं" : "EN"}</span>
    </button>
  );
}
