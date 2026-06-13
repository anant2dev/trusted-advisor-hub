import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  ArrowRight,
  Award,
  Users,
  Trophy,
  Lock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import advisorImg from "@/assets/advisor.jpg";
import { PLANS } from "@/lib/site";

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
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-bg to-white">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-navy/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Authorized LIC of India Advisor
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
              Securing Families for Over{" "}
              <span className="relative inline-block">
                <span className="relative z-10">20 Years</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-gold/40" />
              </span>{" "}
              with Trust &amp; Transparency.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Expert financial planning and life insurance solutions tailored to
              your family's future — honest advice, zero pressure, and absolute
              privacy.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/book-appointment"
                className="group inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy/20 transition-all hover:bg-navy-deep hover:scale-[1.02]"
              >
                Secure Your Future
                <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/plans"
                className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-sm transition-all hover:border-navy hover:bg-slate-bg"
              >
                Explore Plans
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs text-ink-soft">
              <ShieldCheck className="h-4 w-4 text-navy" />
              IRDAI-compliant · Strictly confidential consultations
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-navy/20 via-gold/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-2xl ring-1 ring-black/5">
              <img
                src={advisorImg}
                alt="Senior LIC advisor portrait"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-lg backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold">
                  <Trophy className="h-5 w-5" />
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 py-12 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:px-6 sm:py-14 lg:px-8">
          {[
            { icon: Award, value: "20+", label: "Years of Experience" },
            { icon: Users, value: "1000+", label: "Families Protected" },
            { icon: Trophy, value: "DM", label: "Club Member · LIC" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-5 px-2 py-5 sm:justify-center sm:py-0">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-gold">
                <s.icon className="h-7 w-7" />
              </span>
              <div className="min-w-0">
                <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  <span className="text-gold">{s.value}</span>
                </p>
                <p className="text-sm text-white/75">{s.label}</p>
              </div>
            </div>
          ))}
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
              View All Plans <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PLANS.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                to="/book-appointment"
                search={{ plan: p.name }}
                className="group relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:border-navy/30 hover:shadow-xl"
              >
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{p.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{p.tagline}</p>
                <ul className="mt-4 space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                  Check Eligibility / Inquire
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Testimonial */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-14 lg:px-8 lg:py-24">
          <div className="flex lg:block">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/30">
              <Lock className="h-9 w-9" />
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
                Book a Private Consultation <ArrowRight className="h-4 w-4" />
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
    </>
  );
}
