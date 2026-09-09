import { Link } from "@tanstack/react-router";
import { Call, Sms, Location, Clock, Whatsapp } from "iconsax-react";
import { NAV_LINKS, WHATSAPP_NUMBER, EMAIL, ADVISOR_NAME, ADDRESS, PHONE_DISPLAY } from "@/lib/site";
import logo from "@/assets/bima-secure-logo.asset.json";
import { assetUrl } from "@/lib/assets";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="bg-navy-deep text-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={assetUrl(logo.url)} alt="Bima Secure logo" className="h-12 w-12 object-contain" />
            <div>
              <p className="text-sm font-bold text-white">{ADVISOR_NAME}</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                 {lang === "hi" ? "एलआईसी के अधिकृत एजेंट" : "Authorized LIC of India Agent"}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
             {t("footer.about")}
          </p>
        </div>

        <div>
           <h4 className="text-sm font-semibold text-gold">{t("footer.links")}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 transition-colors hover:text-gold">
                   {lang === "hi" ? l.labelHi : l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="text-sm font-semibold text-gold">{t("footer.hours")}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
             <li className="flex items-center gap-2"><Clock size={16} variant="Bold" color="#FFC93C" /> {t("footer.weekdays")}</li>
             <li className="flex items-center gap-2"><Clock size={16} variant="Bold" color="#FFC93C" /> {t("footer.sunday")}</li>
            <li className="flex items-start gap-2"><Location size={16} variant="Bold" color="#FFC93C" className="mt-0.5 shrink-0" /> {ADDRESS}</li>
          </ul>
        </div>

        <div>
           <h4 className="text-sm font-semibold text-gold">{t("footer.contact")}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-gold">
                <Call size={16} variant="Bold" color="#FFC93C" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 break-all hover:text-gold">
                <Sms size={16} variant="Bold" color="#FFC93C" /> {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-gold"
              >
                 <Whatsapp size={16} variant="Bold" color="#FFC93C" /> {t("common.whatsapp")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:px-6 lg:px-8">
           <p>© {new Date().getFullYear()} {ADVISOR_NAME} · {t("footer.copyright")}</p>
           <p>{t("footer.disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}