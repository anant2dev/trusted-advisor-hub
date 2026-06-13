import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { PLANS } from "@/lib/site";

export const Route = createFileRoute("/plans")({
  head: () => ({
    meta: [
      { title: "Top LIC Plans · Curated for Every Stage of Life" },
      {
        name: "description",
        content:
          "Hand-picked LIC of India plans — Kanyadan, Jeevan Anand, Jeevan Umang, Jeevan Labh. Compare benefits and request a private eligibility check.",
      },
      { property: "og:title", content: "Curated LIC Plans" },
      {
        property: "og:description",
        content: "Top plans for child, family income, lifetime cover and high-return planning.",
      },
    ],
  }),
  component: PlansPage,
});

function PlansPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-bg to-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" /> LIC of India · Curated Selection
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            Curated LIC Plans for{" "}
            <span className="text-gold">Every Stage of Life.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            From a daughter's first dream to a retiree's peaceful evenings —
            each plan below is hand-picked, time-tested, and personally
            recommended after 20+ years of advisory practice.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((p) => (
              <div
                key={p.slug}
                className="group relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-md transition-all hover:-translate-y-1.5 hover:border-navy/30 hover:shadow-2xl"
              >
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-navy">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{p.tagline}</p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book-appointment"
                  search={{ plan: p.name }}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-deep hover:scale-[1.02]"
                >
                  Check Eligibility / Inquire
                  <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-ink-soft">
            * Plan details are indicative. Final terms, eligibility and bonuses
            follow the official LIC of India policy documents.
          </p>
        </div>
      </section>
    </>
  );
}