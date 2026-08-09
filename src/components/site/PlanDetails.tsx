import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown2, InfoCircle, Warning2, Calculator } from "iconsax-react";
import { PLAN_DETAILS } from "@/lib/plan-details";
import { PLAN_PLAIN_HI } from "@/lib/plan-details-hi";
import { useLang } from "@/lib/i18n";
import { playSfx } from "@/lib/sfx";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 rounded-lg bg-muted/60 px-3 py-2">
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="text-[13px] font-semibold leading-snug text-foreground">{value}</span>
    </div>
  );
}

/** Expandable "full scope" panel for a single plan card. */
export function PlanDetails({ slug }: { slug: string }) {
  const [open, setOpen] = useState(false);
  const { lang, t } = useLang();
  const d = PLAN_DETAILS[slug];
  if (!d) return null;
  const plain = lang === "hi" ? (PLAN_PLAIN_HI[slug] ?? d.plainEnglish) : d.plainEnglish;

  return (
    <div className="mt-4 border-t border-border pt-3">
      <button
        type="button"
        data-sfx-skip
        aria-expanded={open}
        onClick={() => {
          playSfx(open ? "close" : "open");
          setOpen((v) => !v);
        }}
        className="flex w-full items-center justify-between gap-2 rounded-lg px-1 py-1 text-left text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:text-foreground"
      >
        {open ? t("details.hide") : t("details.show")}
        <ArrowDown2 size={14} variant="Bold" color="#003262" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pt-3">
              <p className="flex gap-2 text-[13px] leading-relaxed text-foreground/85">
                <InfoCircle size={16} variant="Bold" color="#FFC93C" className="mt-0.5 shrink-0" />
                <span>{plain}</span>
              </p>

              <div className="grid grid-cols-2 gap-2">
                <Row label={t("details.category")} value={d.category} />
                <Row label={t("details.entryAge")} value={d.entryAge} />
                <Row label={t("details.policyTerm")} value={d.policyTerm} />
                <Row label={t("details.premiumTerm")} value={d.premiumTerm} />
                <Row label={t("details.minCover")} value={d.minCover} />
                <Row label={t("details.payout")} value={d.payoutStyle} />
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("details.bestFor")}</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {d.bestFor.map((b) => (
                    <span key={b} className="rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-foreground/80">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <p className="flex gap-2 rounded-lg bg-muted/60 px-3 py-2 text-[12px] leading-relaxed text-muted-foreground">
                <Calculator size={14} variant="Bold" color="#003262" className="mt-0.5 shrink-0" />
                <span><strong className="text-foreground">{t("details.example")}</strong> {d.example}</span>
              </p>

              <p className="flex gap-2 text-[12px] leading-relaxed text-muted-foreground">
                <Warning2 size={14} variant="Bold" color="#FFC93C" className="mt-0.5 shrink-0" />
                <span><strong className="text-foreground">{t("details.notIdeal")}</strong> {d.notIdealFor}</span>
              </p>

              <p className="text-[11px] leading-relaxed text-muted-foreground">{d.tax}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
