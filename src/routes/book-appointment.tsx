import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import {
  Whatsapp,
  Sms,
  Lock1,
  TickCircle,
  Clock,
  ShieldTick,
  Profile,
  SecuritySafe,
} from "iconsax-react";
import { ALL_PLANS, WHATSAPP_NUMBER, EMAIL, ADDRESS, PHONE_DISPLAY, ADVISOR_NAME } from "@/lib/site";
import { PageTransition } from "@/components/site/PageTransition";
import { TrustBadges } from "@/components/site/TrustBadges";
import { FAQSection } from "@/components/site/FAQSection";
import { DEFAULT_FAQ } from "@/components/site/FAQSection";
import { ldScript, faqLd, breadcrumbLd, organizationLd, SITE_URL } from "@/lib/seo";

type Search = { plan?: string };

export const Route = createFileRoute("/book-appointment")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    plan: typeof search.plan === "string" ? search.plan : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book a Private LIC Consultation" },
      {
        name: "description",
        content:
          "Reach the advisor directly via WhatsApp or email. Your details never touch a database — communication is processed on your device.",
      },
      { property: "og:title", content: "Book an LIC Consultation" },
      {
        property: "og:description",
        content: "Private, secure, no-database lead capture via WhatsApp or email.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/book-appointment" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Book an LIC Consultation" },
      {
        name: "twitter:description",
        content: "Private WhatsApp or email consultation with a 20-year LIC advisor.",
      },
    ],
    links: [{ rel: "canonical", href: "/book-appointment" }],
    scripts: [
      ldScript(organizationLd()),
      ldScript(faqLd(DEFAULT_FAQ)),
      ldScript(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Book Appointment", path: "/book-appointment" },
        ]),
      ),
      ldScript({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Free LIC insurance consultation",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: ["Agra", "Uttar Pradesh", "India"],
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${SITE_URL}/book-appointment`,
          servicePhone: "+91-9837016351",
        },
      }),
    ],
  }),
  component: AppointmentPage,
});

const planNames: string[] = ALL_PLANS.map((p) => p.name);

const beneficiaries = ["Self", "Spouse", "Child", "Parents", "Dependent"] as const;
const ageGroups = [
  "0-5 years",
  "6-17 years",
  "18-35 years",
  "36-50 years",
  "50+ years",
] as const;

const reasons = [
  { icon: ShieldTick, title: "Honest, IRDAI-compliant advice", desc: "Plans matched to your goals, not commissions." },
  { icon: Clock, title: "Lifetime after-sales service", desc: "Renewals, claims and revivals — handled personally." },
  { icon: SecuritySafe, title: "Absolute privacy", desc: "No CRM, no database, no third-party leak risk." },
  { icon: Profile, title: "1:1 family-style consultation", desc: "Patient listening before any recommendation." },
];

function AppointmentPage() {
  const { plan: planFromUrl } = Route.useSearch();

  const initialPlan = useMemo(() => {
    if (planFromUrl && planNames.includes(planFromUrl)) return planFromUrl;
    return planNames[0];
  }, [planFromUrl]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    beneficiary: beneficiaries[0] as string,
    age: ageGroups[2] as string,
    plan: initialPlan,
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState<{ name?: boolean; phone?: boolean }>({});

  const nameError = !form.name.trim() ? "Please enter your full name." : null;
  const phoneError = !form.phone.trim()
    ? "Please enter a phone number we can reach you on."
    : !/^[0-9+\-\s()]{7,20}$/.test(form.phone.trim())
      ? "That doesn't look like a valid phone number."
      : null;
  const readyToSend = !nameError && !phoneError;
  const filled = [form.name.trim(), form.phone.trim(), form.plan].filter(Boolean).length;

  const update =
    <K extends keyof typeof form>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const buildMessage = () =>
    "Hello, I would like to book a consultation.%0A%0A" +
    `*Name:* ${encodeURIComponent(form.name)}%0A` +
    `*Phone:* ${encodeURIComponent(form.phone)}%0A` +
    `*Email:* ${encodeURIComponent(form.email || "—")}%0A` +
    `*Beneficiary:* ${encodeURIComponent(form.beneficiary)}%0A` +
    `*Age Group:* ${encodeURIComponent(form.age)}%0A` +
    `*Interested Plan:* ${encodeURIComponent(form.plan)}%0A` +
    `*Message:* ${encodeURIComponent(form.message || "—")}`;

  const handleFormSubmit = (e: FormEvent, method: "whatsapp" | "email") => {
    e.preventDefault();
    setTouched({ name: true, phone: true });
    if (nameError || phoneError) {
      setError(nameError ?? phoneError);
      document.getElementById(nameError ? "name" : "phone")?.focus();
      return;
    }
    setError(null);
    const msg = buildMessage();
    if (method === "whatsapp") {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        "New LIC Consultation Request",
      )}&body=${msg}`;
    }
  };

  const fieldCls =
    "w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/30";
  const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-soft";

  return (
    <PageTransition>
      <section className="bg-slate-bg">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <TrustBadges />
        </div>
      </section>
      <section className="bg-slate-bg">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          {/* Left */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
              Book Appointment
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              Why book a consultation?
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              One unhurried call. Honest answers. A plan that fits your family —
              not a script.
            </p>
            <ul className="mt-7 space-y-4">
              {reasons.map((r) => (
                <li key={r.title} className="flex items-start gap-3.5 rounded-xl bg-white p-4 shadow-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy text-gold">
                    <r.icon size={20} variant="Bold" color="#FFC93C" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-navy">{r.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">Direct Contact</p>
              <p className="mt-2 text-sm font-bold text-foreground">{ADVISOR_NAME}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{ADDRESS}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="rounded-md bg-navy px-3 py-1.5 font-semibold text-white hover:bg-navy-deep">{PHONE_DISPLAY}</a>
                <a href={`mailto:${EMAIL}`} className="rounded-md border border-border px-3 py-1.5 font-semibold text-foreground hover:bg-accent/20">Email</a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border bg-white p-6 shadow-xl sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className={labelCls}>Full Name *</label>
                <input id="name" className={fieldCls} placeholder="e.g. Rajesh Kumar"
                  autoComplete="name" enterKeyHint="next"
                  aria-invalid={touched.name && !!nameError}
                  aria-describedby={touched.name && nameError ? "name-error" : undefined}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  value={form.name} onChange={update("name")} required maxLength={80} />
                {touched.name && nameError && (
                  <p id="name-error" className="mt-1.5 text-xs font-medium text-destructive">{nameError}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelCls}>Email Address</label>
                <input id="email" type="email" className={fieldCls} placeholder="you@example.com"
                  autoComplete="email" inputMode="email"
                  value={form.email} onChange={update("email")} maxLength={120} />
                <p className="mt-1.5 text-xs text-ink-soft">Optional — only if you prefer email over WhatsApp.</p>
              </div>

              <div>
                <label htmlFor="phone" className={labelCls}>Phone / WhatsApp *</label>
                <input id="phone" type="tel" className={fieldCls} placeholder="+91 98xxxxxx21"
                  autoComplete="tel" inputMode="tel" enterKeyHint="done"
                  aria-invalid={touched.phone && !!phoneError}
                  aria-describedby={touched.phone && phoneError ? "phone-error" : undefined}
                  onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                  value={form.phone} onChange={update("phone")} required maxLength={20} />
                {touched.phone && phoneError && (
                  <p id="phone-error" className="mt-1.5 text-xs font-medium text-destructive">{phoneError}</p>
                )}
              </div>

              <div>
                <label htmlFor="beneficiary" className={labelCls}>Who is this for?</label>
                <select id="beneficiary" className={fieldCls} value={form.beneficiary} onChange={update("beneficiary")}>
                  {beneficiaries.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="age" className={labelCls}>Age Group of Insured</label>
                <select id="age" className={fieldCls} value={form.age} onChange={update("age")}>
                  {ageGroups.map((a) => <option key={a}>{a}</option>)}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="plan" className={labelCls}>Interested Policy</label>
                <select id="plan" className={fieldCls} value={form.plan} onChange={update("plan")}>
                  {planNames.map((p) => <option key={p}>{p}</option>)}
                </select>
                {planFromUrl && planNames.includes(planFromUrl) && (
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-navy">
                    <TickCircle size={14} variant="Bold" color="#FFC93C" />
                    Auto-selected from your previous page
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelCls}>Additional Note</label>
                <textarea id="message" rows={4} className={fieldCls}
                  placeholder="Anything specific you'd like to discuss?"
                  value={form.message} onChange={update("message")} maxLength={600} />
              </div>
            </div>

            {error && (
              <p className="mt-4 rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
                {error}
              </p>
            )}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                onClick={(e) => handleFormSubmit(e, "whatsapp")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:opacity-95"
              >
                <Whatsapp size={20} variant="Bold" color="#FFFFFF" /> Send via WhatsApp
              </button>
              <button
                type="submit"
                onClick={(e) => handleFormSubmit(e, "email")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-navy-deep"
              >
                <Sms size={20} variant="Bold" color="#FFC93C" /> Send via Email
              </button>
            </div>

            <p className="mt-5 flex items-start gap-2 rounded-lg bg-slate-bg px-3.5 py-3 text-xs leading-relaxed text-ink-soft">
              <Lock1 size={16} variant="Bold" color="#003262" className="mt-0.5 shrink-0" />
              Your data is processed directly on your device and sent via secure
              messaging. We do not store your details on any external database.
            </p>
          </form>
        </div>
        </div>
      </section>
      <FAQSection
        title="Before you book — common questions"
        intro="Read these once; they answer 80% of what first-time clients ask."
      />
    </PageTransition>
  );
}