import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { HambergerMenu, CloseSquare, Call, Location } from "iconsax-react";
import { NAV_LINKS, ADVISOR_NAME, ADDRESS, PHONE_DISPLAY } from "@/lib/site";
import logo from "@/assets/bima-secure-logo.asset.json";
import { assetUrl } from "@/lib/assets";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, t } = useLang();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      {/* Top contact strip */}
      <div className="hidden border-b border-border/60 bg-navy text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-[11px] sm:px-6 lg:px-8">
          <span className="flex items-center gap-1.5 text-white/85">
            <Location size={13} variant="Bold" color="#FFC93C" /> {ADDRESS}
          </span>
          <a href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`} className="flex items-center gap-1.5 font-medium hover:text-gold">
            <Call size={13} variant="Bold" color="#FFC93C" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={assetUrl(logo.url)} alt="Bima Secure logo" className="h-12 w-12 object-contain" />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold tracking-tight text-foreground">{ADVISOR_NAME}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              LIC of India · Authorized Advisor
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent/20 hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-foreground bg-accent/20" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {lang === "hi" ? l.labelHi : l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <ThemeToggle />
          <Link
            to="/book-appointment"
            className="group hidden items-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-deep hover:scale-[1.02] active:scale-100 md:inline-flex"
          >
            <Call size={16} variant="Bold" color="#FFC93C" className="transition-transform group-hover:rotate-12" />
            {t("nav.consult")}
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md text-foreground lg:hidden"
          >
            {open ? <CloseSquare size={22} variant="Linear" /> : <HambergerMenu size={22} variant="Linear" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            <div className="mb-1 flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t("nav.language")}
              </span>
              <LanguageToggle />
            </div>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent/20 hover:text-foreground"
                activeProps={{ className: "rounded-md px-3 py-2.5 text-sm font-semibold text-foreground bg-accent/20" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {lang === "hi" ? l.labelHi : l.label}
              </Link>
            ))}
            <Link
              to="/book-appointment"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white shadow-md"
            >
              <Call size={16} variant="Bold" color="#FFC93C" />
              {t("nav.consult")}
            </Link>
            <a href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`} className="mt-1 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Call size={12} variant="Bold" color="#FFC93C" /> {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}