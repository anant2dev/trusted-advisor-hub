import { Global } from "iconsax-react";
import { useLang } from "@/lib/i18n";
import { playSfx } from "@/lib/sfx";

/** Compact EN / हिं switch shown in the top navigation on every page. */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Select language / भाषा चुनें"
      className={`inline-flex shrink-0 items-center gap-1 rounded-lg border border-border bg-card/70 p-0.5 ${className}`}
    >
      <Global size={14} variant="Bold" color="#FFC93C" className="ml-1.5 hidden shrink-0 sm:block" aria-hidden />
      {(["en", "hi"] as const).map((l) => (
        <button
          key={l}
          type="button"
          data-sfx-skip
          aria-pressed={lang === l}
          onClick={() => {
            if (l !== lang) playSfx("open");
            setLang(l);
          }}
          className={`min-h-9 min-w-9 rounded-md px-1.5 text-xs font-bold transition-colors sm:min-w-10 sm:px-2 ${
            lang === l
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l === "en" ? "EN" : "हिं"}
        </button>
      ))}
    </div>
  );
}
