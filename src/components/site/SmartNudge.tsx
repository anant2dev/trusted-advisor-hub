import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CloseCircle, MagicStar, Whatsapp } from "iconsax-react";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { playSfx } from "@/lib/sfx";
import { useLang } from "@/lib/i18n";

// A quiet, personal nudge — greets by local time, remembers where the visitor
// left off, and only ever appears once per session on non-booking pages.

const DISMISS_KEY = "nudge:dismissed";
const VISITS_KEY = "visits:count";
const LAST_PLAN_KEY = "plan:last";

function greeting(hi: boolean) {
  const h = new Date().getHours();
  if (h < 5) return hi ? "देर रात तक जाग रहे हैं" : "Up late";
  if (h < 12) return hi ? "सुप्रभात" : "Good morning";
  if (h < 17) return hi ? "नमस्कार" : "Good afternoon";
  return hi ? "शुभ संध्या" : "Good evening";
}

export function SmartNudge() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();
  const { lang, pick } = useLang();
  const hi = lang === "hi";
  const [open, setOpen] = useState(false);
  const [visits, setVisits] = useState(1);
  const [lastPlan, setLastPlan] = useState<string | null>(null);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
      const n = Number(localStorage.getItem(VISITS_KEY) ?? "0") + 1;
      localStorage.setItem(VISITS_KEY, String(n));
      setVisits(n);
      setLastPlan(localStorage.getItem(LAST_PLAN_KEY));
    } catch { /* storage may be blocked */ }
    if (dismissed) return;
    const t = window.setTimeout(() => setOpen(true), 14000);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    setOpen(false);
    playSfx("close");
    try { sessionStorage.setItem(DISMISS_KEY, "1"); } catch { /* ignore */ }
  };

  if (pathname.startsWith("/book-appointment")) return null;

  const headline = lastPlan
    ? pick(`Still thinking about ${lastPlan}?`, `क्या आप अभी भी ${lastPlan} के बारे में सोच रहे हैं?`)
    : visits > 1
      ? pick(`${greeting(false)} — welcome back.`, `${greeting(true)} — फिर से स्वागत है।`)
      : pick(`${greeting(false)}. Not sure where to start?`, `${greeting(true)}। समझ नहीं आ रहा कहाँ से शुरू करें?`);

  const body = lastPlan
    ? pick("Ask one specific question about it on WhatsApp — no form, no follow-up calls.", "इसके बारे में WhatsApp पर एक सवाल पूछें — कोई फ़ॉर्म नहीं, कोई बार-बार कॉल नहीं।")
    : pick("Take the 60-second plan finder, or ask a single question directly. Both are free.", "60 सेकंड का प्लान फ़ाइंडर आज़माएँ, या सीधे एक सवाल पूछें। दोनों बिल्कुल मुफ़्त।");

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          key="nudge"
          role="complementary"
          aria-label={pick("Helpful suggestion", "उपयोगी सुझाव")}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: reduce ? 0.12 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-56 left-4 z-40 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur md:left-6"
        >
          <button
            type="button"
            data-sfx-skip
            onClick={dismiss}
            aria-label={pick("Dismiss suggestion", "सुझाव बंद करें")}
            className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-muted"
          >
            <CloseCircle size={18} variant="Bold" color="currentColor" />
          </button>
          <p className="flex items-center gap-2 pr-6 text-sm font-bold text-foreground">
            <MagicStar size={16} variant="Bold" color="#FFC93C" />
            {headline}
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{body}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              to="/plan-finder"
              onClick={dismiss}
              className="inline-flex min-h-10 items-center rounded-lg bg-navy px-3 py-2 text-xs font-bold text-white hover:bg-navy-deep"
            >
              {pick("Find my plan", "मेरा प्लान खोजें")}
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                lastPlan ? pick(`Hi, I have a question about ${lastPlan}.`, `नमस्ते, मेरा ${lastPlan} के बारे में एक सवाल है।`) : pick("Hi, I have a quick question about LIC plans.", "नमस्ते, मेरा LIC प्लान के बारे में एक छोटा सा सवाल है।"),
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={dismiss}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-bold text-foreground hover:bg-accent/20"
            >
              <Whatsapp size={14} variant="Bold" color="#25D366" /> {pick("Ask one question", "एक सवाल पूछें")}
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

/** Call from plan cards so the nudge can personalise itself later. */
export function rememberPlan(name: string) {
  try { localStorage.setItem(LAST_PLAN_KEY, name); } catch { /* ignore */ }
}