import { rememberPlan } from "@/components/site/SmartNudge";
import { createFileRoute, Link } from "@tanstack/react-router";
import { TickCircle, ArrowRight, ShieldTick, Global, Verify, People, Clock } from "iconsax-react";
import { ALL_PLANS } from "@/lib/site";
import { FadeIn } from "@/components/reactbits/FadeIn";
import { PageTransition } from "@/components/site/PageTransition";
import { HoverEffect } from "@/components/aceternity/hover-effect";
import { TrustBadges } from "@/components/site/TrustBadges";
import { FAQSection } from "@/components/site/FAQSection";
import { PlanDetails } from "@/components/site/PlanDetails";
import { Glossary } from "@/components/site/Glossary";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { PlanQuiz } from "@/components/site/PlanQuiz";
import { ldScript, planCatalogLd, breadcrumbLd, faqLd } from "@/lib/seo";
import { DEFAULT_FAQ } from "@/components/site/FAQSection";

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
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/plans" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Curated LIC Plans" },
      {
        name: "twitter:description",
        content: "Top LIC plans for child, family income, lifetime cover and high-return planning.",
      },
    ],
    links: [{ rel: "canonical", href: "/plans" }],
    scripts: [
      ldScript(planCatalogLd()),
      ldScript(faqLd(DEFAULT_FAQ)),
      ldScript(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "LIC Plans", path: "/plans" },
        ]),
      ),
    ],
  }),
  component: PlansPage,
});

function PlansPage() {
  return (
    <PageTransition>
      <section className="bg-gradient-to-b from-slate-bg to-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm">
            <ShieldTick size={14} variant="Bold" color="#FFC93C" /> LIC of India · Curated Selection
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
          <TrustBadges className="mt-10 text-left" />
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Not sure which one? Take the 60-second quiz.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Six questions — we score all 18 plans and show your top two matches.
            </p>
          </div>
          <PlanQuiz />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          {PLAN_GROUP_ORDER.map((group) => {
            const plans = ALL_PLANS.filter((p) => p.group === group);
            if (plans.length === 0) return null;
            return (
              <div key={group} className="pt-14 first:pt-0">
                <div className="mb-6 flex items-baseline gap-3 border-b border-border pb-3">
                  <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                    {lang === "hi" ? PLAN_GROUP_HI[group] : group}
                  </h2>
                  <span className="font-mono text-xs text-muted-foreground">{plans.length} plans</span>
                </div>
                <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {plans.map((p, i) => (
                    <FadeIn key={p.slug} delay={Math.min(i, 4) * 0.05}>
                      <PlanCard plan={p} />
                    </FadeIn>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="mt-12 text-center text-xs text-muted-foreground">{t("plans.disclaimer")}</p>
        </div>
      </section>

      {/* Why these particular plans */}
      <section className="bg-slate-bg">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
              Why this short list
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              LIC has 30+ plans. These are the four I trust most.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              The shortlist below survived 20 years of real-world claims, surrenders and maturities — not marketing material.
            </p>
          </div>
          <HoverEffect
            className="mt-8"
            items={[
              { title: "Survived 20 Years of Claims", description: "Every plan here has paid out maturity or claim benefits in my own client base — these aren't theoretical recommendations.", icon: <Verify size={24} variant="Bold" color="#003262" /> },
              { title: "Goal-Mapped, Not Product-Pushed", description: "Each plan answers a specific life question — child's education, retirement, lifetime cover, family income — not a sales target.", icon: <ShieldTick size={24} variant="Bold" color="#003262" /> },
              { title: "Transparent Surrender Behaviour", description: "I'll walk you through worst-case surrender and lapse maths before you sign — never after.", icon: <Clock size={24} variant="Bold" color="#003262" /> },
              { title: "Tax & Loan Friendly", description: "Each shortlisted plan qualifies for Sec 80C, 10(10D) benefits and supports policy loans when life surprises you.", icon: <TickCircle size={24} variant="Bold" color="#003262" /> },
              { title: "NRI-Friendly Issuance", description: "All four plans accept NRI proposers with digital medicals and FATCA paperwork handled by my office.", icon: <Global size={24} variant="Bold" color="#003262" /> },
              { title: "Backed by 1000+ Families", description: "Real Indian and diaspora families have already chosen these exact plans through my advisory.", icon: <People size={24} variant="Bold" color="#003262" /> },
            ]}
          />
        </div>
      </section>

      {/* Global Coverage */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-gold backdrop-blur">
              <Global size={14} variant="Bold" color="#FFC93C" /> Pan-India · NRI Coverage
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              From Agra to your time-zone — one advisor, lifelong.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Whether you live in Delhi, Dubai or Detroit, the same person who issues the policy
              will be the person who answers when your nominee calls. Digital KYC, medicals and
              signatures are handled in your time-zone.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2.5 text-sm">
              {["Agra · HQ", "Delhi · Mumbai", "Dubai · GCC", "Singapore", "London · UK", "New York · USA"].map((c) => (
                <li key={c} className="flex items-center gap-2 text-white/85">
                  <TickCircle size={16} variant="Bold" color="#FFC93C" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <Glossary />

      <FAQSection
        title="About the plans — and how I work"
        intro="The questions families ask before choosing a specific LIC plan."
      />
    </PageTransition>
  );
}