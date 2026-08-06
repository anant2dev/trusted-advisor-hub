import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cup,
  Medal,
  Award,
  ShieldTick,
  ArrowRight,
  MagicStar,
  Star,
  Crown,
  Clock,
  SecuritySafe,
  Profile,
  Verify,
} from "iconsax-react";
import { FadeIn } from "@/components/reactbits/FadeIn";
import { PageTransition } from "@/components/site/PageTransition";
import { HoverEffect } from "@/components/aceternity/hover-effect";
import { TrustBadges } from "@/components/site/TrustBadges";
import { FAQSection } from "@/components/site/FAQSection";
import { assetUrl } from "@/lib/assets";
import { ldScript, personLd, breadcrumbLd } from "@/lib/seo";
import trophy1 from "@/assets/trophies/1781413121551.asset.json";
import trophy2 from "@/assets/trophies/IMG_20260614_104134.asset.json";
import trophy3 from "@/assets/trophies/IMG_20260614_104441.asset.json";
import trophy4 from "@/assets/trophies/IMG_20260614_104949.asset.json";
import trophy5 from "@/assets/trophies/IMG_20260614_110820.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · 20+ Years of LIC Advisory Excellence" },
      {
        name: "description",
        content:
          "Two decades of trusted LIC advisory work. From DM Club Member today to a future Chairman's Club vision — built on quiet, consistent service.",
      },
      { property: "og:title", content: "About the Advisor · LIC" },
      {
        property: "og:description",
        content:
          "Distinguished DM Club Member. Journey, recognitions and the practice behind 1000+ protected families.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About the Advisor · LIC" },
      {
        name: "twitter:description",
        content:
          "20+ years of LIC advisory. DM Club Member. 1000+ families protected.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      ldScript(personLd()),
      ldScript(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ),
    ],
  }),
  component: AboutPage,
});

const clubs = [
  {
    label: "DM Club",
    status: "Current",
    desc: "Distinguished member — recognized for sustained premium excellence and client trust.",
    icon: Award,
    state: "done" as const,
  },
  {
    label: "ZM Club",
    status: "In Progress",
    desc: "Qualifying for Zonal Manager's Club — a tier reserved for the top regional advisors.",
    icon: Star,
    state: "active" as const,
  },
  {
    label: "CM Club",
    status: "Future Vision",
    desc: "Chairman's Club — the pinnacle of LIC advisory recognition in India.",
    icon: Crown,
    state: "future" as const,
  },
];

const trophies = [
  { src: assetUrl(trophy1.url), title: "Ram Singh Rathore Honour Plaque", year: "FY 2017–18", caption: "25-policy flag-bearer recognition by LIC Agra Mandal." },
  { src: assetUrl(trophy5.url), title: "Republic Day Sammaan", year: "2025", caption: "Awarded for utkarsh karya & sustained performance — Agra Mandal." },
  { src: assetUrl(trophy2.url), title: "Mandal Flag-Bearer Shield", year: "FY 2018–19", caption: "Awarded for exemplary 25-policy contribution to the Mandal." },
  { src: assetUrl(trophy4.url), title: "SDM Trophy · North Central Zone", year: "2024–25", caption: "Senior Development Manager Trophy recognising zonal excellence." },
  { src: assetUrl(trophy3.url), title: "Independence Day Memento", year: "Azadi ka Amrit Mahotsav", caption: "Commemorative LIC Independence Day recognition." },
];

function AboutPage() {
  return (
    <PageTransition>
      {/* Profile */}
      <section className="bg-gradient-to-b from-slate-bg to-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm">
            <ShieldTick size={14} variant="Bold" color="#FFC93C" /> About the Advisor
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            Two decades of quiet, consistent service —{" "}
            <span className="text-gold">one family at a time.</span>
          </h1>
          <div className="mt-6 grid gap-6 text-[15px] leading-[1.75] text-ink sm:text-base">
            <p>
              For over 20 years, my practice has been built on a single
              principle: a life insurance policy is a promise to a family that
              must outlive the policyholder. That promise demands honesty
              before commission, clarity before complexity, and discretion
              above all else.
            </p>
            <p>
              I serve over a thousand Indian families — across hometowns,
              metros, and the diaspora — with custom-fit LIC of India plans.
              No cold calls, no pressure, no pushy upselling. Just careful
              listening, transparent paperwork, and lifelong after-sales
              service.
            </p>
          </div>
          <TrustBadges className="mt-10" />
        </div>
      </section>

      {/* Club Journey */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
              Club Membership Journey
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              A career measured in milestones.
            </h2>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-1/2 top-7 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-gold via-navy/40 to-white md:block" />
            <div className="grid gap-8 md:grid-cols-3">
              {clubs.map((c, idx) => (
                <FadeIn key={c.label} delay={idx * 0.1} className="relative">
                  <div
                    className={
                      "mx-auto grid h-14 w-14 place-items-center rounded-full ring-4 ring-white shadow-md " +
                      (c.state === "done"
                        ? "bg-navy text-gold"
                        : c.state === "active"
                          ? "bg-gold text-navy"
                          : "bg-white text-navy/60 ring-border")
                    }
                  >
                    <c.icon size={24} variant="Bold" color={c.state === "active" ? "#003262" : c.state === "done" ? "#FFC93C" : "#003262"} />
                  </div>
                  <div className="mt-5 rounded-2xl border border-border bg-white p-5 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      {c.status}
                    </p>
                    <p className="mt-1 text-xl font-bold text-navy">{c.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trophies */}
      <section className="bg-slate-bg">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
                Recognitions
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
                Trophies &amp; Medals Wall
              </h2>
              <p className="mt-2 max-w-xl text-sm text-ink-soft">
                Holding 20–30 trophies and 10–12 medals across two decades of
                LIC excellence — quietly earned, never advertised.
              </p>
            </div>
            <MagicStar size={28} variant="Bold" color="#FFC93C" />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trophies.map((t, i) => (
              <FadeIn
                key={t.title}
                delay={i * 0.05}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-bg">
                  <img
                    src={t.src}
                    alt={t.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-navy/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                    {i % 2 === 0 ? <Cup size={12} variant="Bold" color="#FFC93C" /> : <Medal size={12} variant="Bold" color="#FFC93C" />}
                    {t.year}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-base font-bold text-foreground">{t.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.caption}</p>
                </div>
              </FadeIn>
            ))}

            {/* Humble note */}
            <FadeIn delay={trophies.length * 0.05}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gold/40 bg-gradient-to-br from-gold/10 via-transparent to-navy/5 p-8 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold">
                  <MagicStar size={26} variant="Bold" color="#FFC93C" />
                </span>
                <p className="mt-4 text-base font-bold text-foreground">
                  …and many more in the cabinet.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Photographing every trophy from 20+ years takes time — so only a
                  handful are shown here. We prefer quiet service over loud display.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-navy p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h3 className="text-2xl font-extrabold sm:text-3xl">
                Ready for a quiet, expert conversation?
              </h3>
              <p className="mt-2 text-sm text-white/75">
                No sales pitch. Just clarity for your family's future.
              </p>
            </div>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-navy shadow-lg transition-all hover:scale-[1.02]"
            >
              Book Appointment <ArrowRight size={16} variant="Bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* What you actually get */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
              The Promise
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              What you actually get — not what brochures promise.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Six things every family I serve receives, written down so we both stay honest.
            </p>
          </div>
          <HoverEffect
            className="mt-8"
            items={[
              { title: "IRDAI-Compliant Advice", description: "Recommendations matched to your goals — never to a commission slab. Paperwork stays in your name, never a nominee proxy.", icon: <ShieldTick size={24} variant="Bold" color="#003262" /> },
              { title: "Lifetime After-Sales Service", description: "Premium reminders, NACH fixes, revivals, loans and claim filing — handled personally, decades after the policy is issued.", icon: <Clock size={24} variant="Bold" color="#003262" /> },
              { title: "Absolute Privacy", description: "No CRM, no third-party leak risk. Your financial details never sit on a server, only on the LIC of India portal.", icon: <SecuritySafe size={24} variant="Bold" color="#003262" /> },
              { title: "Family-Style 1:1 Consultation", description: "Patient listening before any recommendation. No slide decks, no scripts, no closing pressure on a first call.", icon: <Profile size={24} variant="Bold" color="#003262" /> },
              { title: "Verified Track Record", description: "DM Club Distinguished Member · multiple Zonal & Mandal trophies · 1000+ Indian and NRI families served.", icon: <Verify size={24} variant="Bold" color="#003262" /> },
              { title: "Pan-India & NRI Reach", description: "From Agra to the GCC, UK, Singapore and the USA — digital KYC, medicals and signatures handled end-to-end.", icon: <Award size={24} variant="Bold" color="#003262" /> },
            ]}
          />
        </div>
      </section>

      <FAQSection
        title="Questions families ask before our first call"
        intro="Twenty years of conversations distilled into the questions that come up the most."
      />
    </PageTransition>
  );
}