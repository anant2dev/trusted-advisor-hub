import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShieldCheck, PhoneCall } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-white shadow-md">
            <ShieldCheck className="h-5 w-5 text-gold" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-navy">LIC Advisor</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink-soft">
              Trust · Since 20+ Yrs
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-slate-bg hover:text-navy"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-navy bg-slate-bg" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/book-appointment"
            className="group inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-deep hover:scale-[1.02] active:scale-100"
          >
            <PhoneCall className="h-4 w-4 text-gold transition-transform group-hover:rotate-12" />
            Consult Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md text-navy md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-ink hover:bg-slate-bg hover:text-navy"
                activeProps={{ className: "rounded-md px-3 py-2.5 text-sm font-semibold text-navy bg-slate-bg" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/book-appointment"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white shadow-md"
            >
              <PhoneCall className="h-4 w-4 text-gold" />
              Consult Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}