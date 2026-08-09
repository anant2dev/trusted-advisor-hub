import { Link } from "@tanstack/react-router";
import { TickCircle, ArrowRight } from "iconsax-react";
import { rememberPlan } from "@/components/site/SmartNudge";
import { PlanDetails } from "@/components/site/PlanDetails";
import { PLAN_IMAGES, PLAN_IMAGE_ALT } from "@/lib/plan-images";
import { useLang } from "@/lib/i18n";
import type { PlanEntry } from "@/lib/site";

/** Catalogue card: illustration header, plan number, benefits and inline deep details. */
export function PlanCard({ plan }: { plan: PlanEntry }) {
  const { lang, t } = useLang();
  const hi = lang === "hi";
  const benefits = hi ? plan.benefitsHi : plan.benefits;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all hover:-translate-y-1.5 hover:border-navy/30 hover:shadow-2xl">
      <div className="relative aspect-[16/9] overflow-hidden bg-navy">
        <img
          src={PLAN_IMAGES[plan.img]}
          alt={PLAN_IMAGE_ALT[plan.img]}
          loading="lazy"
          width={1024}
          height={576}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-navy shadow">
          {hi ? plan.tagHi : plan.tag}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-navy/85 px-2.5 py-1 font-mono text-[11px] font-bold text-white backdrop-blur">
          {t("common.planNo")} {plan.planNo}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-foreground">{hi ? plan.nameHi : plan.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{hi ? plan.taglineHi : plan.tagline}</p>

        <ul className="mt-5 flex-1 space-y-2.5">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
              <TickCircle size={16} variant="Bold" color="#003262" className="mt-0.5 shrink-0" />
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        <PlanDetails slug={plan.slug} />

        <Link
          to="/book-appointment"
          search={{ plan: plan.name }}
          onClick={() => rememberPlan(plan.name)}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-deep hover:scale-[1.02]"
        >
          {t("common.inquire")}
          <ArrowRight size={16} variant="Bold" color="#FFC93C" className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
