import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Trophy,
  Medal,
  Award,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Star,
  Crown,
} from "lucide-react";

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
  "Excellence Award Placeholder",
  "Highest Premium Collection Placeholder",
  "Top Performer Placeholder",
  "Million Dollar Round Table Placeholder",
  "Branch Star Performer Placeholder",
  "Decade of Service Medal Placeholder",
];

function AboutPage() {
  return (
    <>
      {/* Profile */}
      <section className="bg-gradient-to-b from-slate-bg to-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" /> About the Advisor
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
              {clubs.map((c) => (
                <div key={c.label} className="relative">
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
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-5 rounded-2xl border border-border bg-white p-5 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      {c.status}
                    </p>
                    <p className="mt-1 text-xl font-bold text-navy">{c.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.desc}</p>
                  </div>
                </div>
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
            <Sparkles className="h-7 w-7 text-gold" />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trophies.map((t, i) => (
              <div
                key={t}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                    {i % 2 === 0 ? <Trophy className="h-6 w-6" /> : <Medal className="h-6 w-6" />}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      Award #{String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 truncate text-base font-bold text-navy">{t}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-2 w-3/4 animate-pulse rounded-full bg-slate-bg" />
                  <div className="h-2 w-1/2 animate-pulse rounded-full bg-slate-bg" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy shadow-sm transition-all hover:border-navy hover:bg-white"
            >
              Load More Achievements <ArrowRight className="h-4 w-4" />
            </button>
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
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}