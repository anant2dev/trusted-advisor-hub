import { Link } from "@tanstack/react-router";
import { ShieldTick, Call, Sms, Location, Clock, Whatsapp } from "iconsax-react";
import { NAV_LINKS, WHATSAPP_NUMBER, EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
              <ShieldTick size={20} variant="Bold" color="#F4C430" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">LIC Advisor</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                Authorized LIC Agent
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Two decades of honest, transparent financial protection for Indian families — at home and abroad.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold">Office Hours</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li className="flex items-center gap-2"><Clock size={16} variant="Bold" color="#F4C430" /> Mon – Sat · 10:00 – 19:00</li>
            <li className="flex items-center gap-2"><Clock size={16} variant="Bold" color="#F4C430" /> Sun · By appointment</li>
            <li className="flex items-center gap-2"><Location size={16} variant="Bold" color="#F4C430" /> India · Serving NRIs worldwide</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-gold">
                <Call size={16} variant="Bold" color="#F4C430" /> +91 99999 99999
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-gold">
                <Sms size={16} variant="Bold" color="#F4C430" /> {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-gold"
              >
                <Whatsapp size={16} variant="Bold" color="#F4C430" /> WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} LIC Advisor · Authorized Life Insurance Corporation of India Agent.</p>
          <p>Insurance is the subject matter of solicitation. Information is indicative — please verify policy T&amp;C.</p>
        </div>
      </div>
    </footer>
  );
}