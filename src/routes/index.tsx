import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldTick,
  ArrowRight,
  Award,
  People,
  Cup,
  Lock1,
  MagicStar,
  TickCircle,
} from "iconsax-react";
import advisorAsset from "@/assets/advisor.jpg.asset.json";
import { PLANS } from "@/lib/site";
import { SplitText } from "@/components/reactbits/SplitText";
import { ShinyText } from "@/components/reactbits/ShinyText";
import { FadeIn } from "@/components/reactbits/FadeIn";
import Aurora from "@/components/reactbits/Aurora";
import { useTheme } from "@/components/site/ThemeProvider";
import { BorderBeam } from "@/components/reactbits/BorderBeam";
import { NumberTicker } from "@/components/reactbits/NumberTicker";
import { Marquee } from "@/components/reactbits/Marquee";
import { Spotlight } from "@/components/reactbits/Spotlight";
import { ShimmerButton } from "@/components/reactbits/ShimmerButton";
import { AnimatedGridPattern } from "@/components/reactbits/AnimatedGridPattern";
import { HoverEffect } from "@/components/aceternity/hover-effect";
import { PageTransition } from "@/components/site/PageTransition";
import { FAQSection } from "@/components/site/FAQSection";
import { AnimeReveal, AnimeBlockReveal } from "@/components/anime/AnimeReveal";

import { cn } from "@/lib/utils";
import { assetUrl } from "@/lib/assets";
import { ldScript, organizationLd, personLd, planCatalogLd, SITE_URL } from "@/lib/seo";
import trophy1 from "@/assets/trophies/1781413121551.asset.json";
import trophy2 from "@/assets/trophies/IMG_20260614_104134.asset.json";
import trophy3 from "@/assets/trophies/IMG_20260614_104441.asset.json";
import trophy4 from "@/assets/trophies/IMG_20260614_104949.asset.json";
import trophy5 from "@/assets/trophies/IMG_20260614_110820.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LIC Advisor · Securing Indian Families for 20+ Years" },
      {
        name: "description",
        content:
          "Veteran LIC advisor with 20+ years of trusted service. Personal, private, transparent financial planning for your family's future.",
      },
      { property: "og:title", content: "LIC Advisor · 20+ Years of Trust" },
      {
        property: "og:description",
        content:
          "Expert life insurance and financial planning. DM Club Member. 1000+ families protected.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "LIC Advisor · 20+ Years of Trust" },
      {
        name: "twitter:description",
        content:
          "Expert life insurance and financial planning. DM Club Member. 1000+ families protected.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      ldScript(organizationLd()),
      ldScript(personLd()),
      ldScript(planCatalogLd()),
      ldScript({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Bima Suraksha — Ram Singh Rathore, LIC Advisor",
        url: `${SITE_URL}/`,
        inLanguage: ["en-IN", "hi-IN"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      }),
    ],
  }),
  component: Index,
});

function Index() {
  const { theme } = useTheme();
  const auroraStops: [string, string, string] =
    theme === "dark"
      ? ["#0a1929", "#2A6BB0", "#FFC93C"]
      : ["#7FB5E6", "#3E8FD6", "#FFC93C"];
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-slate-bg to-background">
        <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-70">
          <Aurora colorStops={auroraStops} amplitude={0.7} blend={0.5} speed={0.5} />
        </div>
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#FFC93C" />
        {/* Readability scrim: lifts text contrast over aurora */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/0 dark:from-background/80 dark:via-background/40" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-navy/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm">
              <MagicStar size={14} variant="Bold" color="#FFC93C" />
              Authorized LIC of India Advisor
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
              <SplitText text="Securing Families for Over" />{" "}
              <span className="relative inline-block">
                <span className="relative z-10">
                  <SplitText text="20 Years" delay={0.4} />
                </span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-gold/40" />
              </span>{" "}
              <SplitText text="with Trust & Transparency." delay={0.6} />
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Expert financial planning and life insurance solutions tailored to
              your family's future — honest advice, zero pressure, and absolute
              privacy.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/book-appointment">
                <ShimmerButton className="group">
                  Secure Your Future
                  <ArrowRight size={16} variant="Bold" color="#FFC93C" className="ml-2 transition-transform group-hover:translate-x-1" />
                </ShimmerButton>
              </Link>
              <Link
                to="/plans"
                className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-sm transition-all hover:border-navy hover:bg-slate-bg"
              >
                Explore Plans
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs text-ink-soft">
              <ShieldTick size={16} variant="Bold" color="#003262" />
              IRDAI-compliant · Strictly confidential consultations
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-navy/20 via-gold/30 to-transparent blur-2xl" />
            <div className="clay relative overflow-hidden p-2 ring-1 ring-black/5">
              <img
                src={assetUrl(advisorAsset.url)}
                alt="Senior LIC advisor portrait"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <BorderBeam size={260} duration={10} colorFrom="#FFC93C" colorTo="#003262" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-lg backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                  <Cup size={20} variant="Bold" color="#FFC93C" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-navy">Distinguished DM Club Member</p>
                  <p className="truncate text-xs text-ink-soft">A rare recognition of trust &amp; excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-navy text-white">
        <div className="relative">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 py-12 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:px-6 sm:py-14 lg:px-8">
          {[
            { icon: Award, value: 20, suffix: "+", label: "Years of Experience" },
            { icon: People, value: 1000, suffix: "+", label: "Families Protected" },
            { icon: Cup, value: 0, suffix: "DM", label: "Club Member · LIC", text: true },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex items-center gap-5 px-2 py-5 sm:justify-center sm:py-0">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-gold">
                <s.icon size={28} variant="Bold" color="#FFC93C" />
              </span>
              <div className="min-w-0">
                <p className="text-3xl font-extrabold tracking-tight text-gold sm:text-4xl">
                  {s.text ? (
                    <ShinyText text={s.suffix} className="text-gold" />
                  ) : (
                    <NumberTicker value={s.value} suffix={s.suffix} />
                  )}
                </p>
                <p className="text-sm text-white/75">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        </div>
        {/* Trust Marquee */}
        <div className="border-t border-white/10 bg-navy-deep py-3">
          <Marquee className="[--duration:38s] [--gap:3rem] text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            {[
              "IRDAI Compliant",
              "DM Club Member",
              "20+ Years Service",
              "1000+ Families",
              "100% Confidential",
              "Trusted Across India",
              "Personal Advisory",
              "Zero Pressure Consults",
            ].map((t) => (
              <span key={t} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {t}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Achievements / Trophies */}
      <section className="relative overflow-hidden bg-slate-bg">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">Recognition</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Awards &amp; Achievements</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Over two decades there have been many — we have kept things minimal here to let the work speak. A small selection is shown below; the rest sit quietly on the shelf.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              { src: assetUrl(trophy1.url), name: "DM Club Member", desc: "Distinguished Member recognition by LIC of India.", span: "md:col-span-2" },
              { src: assetUrl(trophy2.url), name: "Top Advisor", desc: "Year-on-year top advisor citations.", span: "md:col-span-1" },
              { src: assetUrl(trophy3.url), name: "Service Excellence", desc: "Awarded for client retention and service standards.", span: "md:col-span-1" },
              { src: assetUrl(trophy4.url), name: "Branch Honour", desc: "Branch-level honours across multiple years.", span: "md:col-span-1" },
              { src: assetUrl(trophy5.url), name: "Premium Achiever", desc: "Premium business milestones consistently met.", span: "md:col-span-1" },
            ].map((t) => (
              <div
                key={t.name}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/60 bg-navy-deep/5 transition-all hover:-translate-y-1 hover:shadow-xl",
                )}
              >
                <div className="flex items-center justify-center bg-white p-3">
                  <img
                    src={t.src}
                    alt={t.name}
                    loading="lazy"
                    className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-navy">{t.name}</h3>
                  <p className="mt-1 text-xs text-ink-soft">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Finder quiz CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-xl sm:p-10">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  <MagicStar size={13} variant="Bold" color="#FFC93C" /> New · 60-second quiz
                </span>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
                  Not sure which LIC plan fits you?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Answer six honest questions — goal, age, horizon, budget, priorities and
                  dependents. We score all 18 plans and show your top two matches, then carry
                  your choice straight into the booking form.
                </p>
              </div>
              <Link
                to="/plan-finder"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]"
              >
                Find my plan <ArrowRight size={18} variant="Bold" color="currentColor" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plans */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
                Featured Plans
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
                Built for every milestone of life.
              </h2>
            </div>
            <Link
              to="/plans"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-deep"
            >
              View All Plans <ArrowRight size={16} variant="Bold" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PLANS.slice(0, 3).map((p, idx) => (
              <FadeIn key={p.slug} delay={idx * 0.08}>
              <Link
                key={p.slug}
                to="/book-appointment"
                search={{ plan: p.name }}
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:border-navy/30 hover:shadow-xl"
              >
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{p.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{p.tagline}</p>
                <ul className="mt-4 space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                      <TickCircle size={16} variant="Bold" color="#003262" className="mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                  Check Eligibility / Inquire
                  <ArrowRight size={16} variant="Bold" className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Testimonial */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <AnimatedGridPattern
          numSquares={18}
          maxOpacity={0.08}
          duration={5}
          className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] text-gold/40 inset-x-0 inset-y-[-30%] h-[160%] skew-y-12"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-14 lg:px-8 lg:py-24">
          <div className="flex lg:block">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/30">
              <Lock1 size={36} variant="Bold" color="#FFC93C" />
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              The Privacy Pledge
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Why You Won't Find{" "}
              <span className="text-gold">Client Reviews</span> Here.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-[1.75] text-white/80 sm:text-[17px]">
              Financial planning is deeply personal. I respect my clients'
              privacy too much to turn their life savings, family structures, or
              private assets into a public marketing gimmick. My 20+ years of
              unblemished service, DM Club recognition, and the absolute silence
              of <span className="font-semibold text-gold">1000+ peacefully sleeping families</span>{" "}
              are the only proofs I need. Your financial data stays secure with
              me — permanently.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-navy shadow-lg transition-all hover:scale-[1.02]"
              >
                Book a Private Consultation <ArrowRight size={16} variant="Bold" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                About My Practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me — Aceternity HoverEffect cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">Why Families Choose Us</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              <AnimeReveal text="A practice built on quiet competence." />
            </h2>
          </div>
          <HoverEffect
            className="mt-8"
            items={[
              { title: "IRDAI-Compliant Advice", description: "Every recommendation follows IRDAI guidelines — no exotic, opaque products." },
              { title: "Zero-Pressure Consults", description: "I share the math, you decide. No upsells, no scripts, no rushed signatures." },
              { title: "Lifelong Service", description: "Annual reviews, claim assistance, nominee updates — for as long as the policy runs." },
              { title: "Privacy First", description: "Your financial data never leaves my office. No CRM lists, no marketing emails." },
              { title: "Pan-India Reach", description: "Servicing families across India and NRIs in the GCC, UK, and North America." },
              { title: "20+ Years, One Desk", description: "Two decades of unbroken service from a single trusted advisor — not a call centre." },
            ]}
          />
        </div>
      </section>

      {/* CTA showcase */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-navy-deep text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,196,48,0.18),transparent_55%)]" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Trusted Advisory</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            <AnimeReveal text="Protection built on two decades of trust." />
          </h2>
          <AnimeBlockReveal delay={200} className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Every policy is a promise. Ram Singh Rathore shapes yours with the same care a jeweller gives a stone — examined from every angle, then set to last a lifetime.
          </AnimeBlockReveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/plans"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-navy shadow-lg transition-all hover:scale-[1.02]"
            >
              Explore Plans <ArrowRight size={16} variant="Bold" />
            </Link>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />
    </PageTransition>
  );
}
