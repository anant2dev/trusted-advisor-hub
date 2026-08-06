import { createFileRoute } from "@tanstack/react-router";
import { ShieldTick, Timer1, Lock1, Judge } from "iconsax-react";
import { PageTransition } from "@/components/site/PageTransition";
import { PlanQuiz } from "@/components/site/PlanQuiz";
import { TrustBadges } from "@/components/site/TrustBadges";
import { FAQSection } from "@/components/site/FAQSection";
import { ldScript, faqLd, breadcrumbLd, organizationLd } from "@/lib/seo";

const QUIZ_FAQ = [
  {
    q: "How does the LIC plan finder quiz work?",
    a: "You answer six short questions — your main goal, the age of the person to be insured, when you want the money back, your yearly budget, whether you value cover or guaranteed returns, and who depends on your income. Each answer scores the 18 LIC plans in our catalogue, and the two highest-scoring plans are shown with eligibility details and a plain-English explanation.",
  },
  {
    q: "Is the recommendation a formal quotation?",
    a: "No. The quiz is guidance based on typical eligibility rules. Actual premium, sum assured and eligibility are confirmed by the advisor on a free call, using LIC of India's official rate tables.",
  },
  {
    q: "Do I have to share personal details to use the quiz?",
    a: "No. The quiz runs entirely in your browser. Nothing is stored or sent anywhere. You only share details if you choose to book a consultation afterwards.",
  },
  {
    q: "Which LIC plans can the quiz recommend?",
    a: "All 18 plans we advise on, including Kanyadan, Jeevan Anand, Jeevan Umang, Jeevan Labh, Bima Jyoti, Bima Ratna, Dhan Sanchay, New Tech-Term, New Jeevan Amar, Saral Jeevan Bima, Jeevan Azad, New Endowment, New Money Back 20 Years, New Children's Money Back, Jeevan Tarun, New Jeevan Shanti, Saral Pension and Jeevan Akshay VII.",
  },
  {
    q: "How long does the quiz take?",
    a: "About 60 seconds. There are six questions and you can go back and change any answer before seeing your result.",
  },
];

const TITLE = "LIC Plan Finder Quiz · Get Your Top 2 Plans in 60 Seconds";
const DESC =
  "Answer 6 quick questions about your goal, age, budget and horizon — get the two best-matched LIC of India plans instantly, with eligibility details and one-tap booking.";

export const Route = createFileRoute("/plan-finder")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/plan-finder" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/plan-finder" }],
    scripts: [
      ldScript(organizationLd()),
      ldScript(faqLd(QUIZ_FAQ)),
      ldScript(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Plan Finder", path: "/plan-finder" },
        ]),
      ),
      ldScript({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to find the right LIC plan for your family",
        totalTime: "PT1M",
        step: [
          { "@type": "HowToStep", name: "Pick your main goal", text: "Choose whether you want child savings, family protection, guaranteed savings, regular income or a pension." },
          { "@type": "HowToStep", name: "Enter age and horizon", text: "Tell us the age band of the person to be insured and when you want the money back." },
          { "@type": "HowToStep", name: "Set a realistic budget", text: "Choose the yearly premium you can comfortably sustain." },
          { "@type": "HowToStep", name: "Review your top 2 plans", text: "See the two best-matched LIC plans with eligibility, payout style and honest caveats." },
          { "@type": "HowToStep", name: "Book a free consultation", text: "Tap to open the booking form with your chosen plan already selected." },
        ],
      }),
    ],
  }),
  component: PlanFinderPage,
});

const points = [
  { icon: Timer1, title: "60 seconds", desc: "Six questions, no sign-up, instant result." },
  { icon: Lock1, title: "Fully private", desc: "Runs in your browser — nothing is stored." },
  { icon: Judge, title: "Honest scoring", desc: "Every plan shows what it is NOT good at too." },
  { icon: ShieldTick, title: "18 LIC plans", desc: "Scored against the full advised catalogue." },
];

function PlanFinderPage() {
  return (
    <PageTransition>
      <section className="bg-gradient-to-b from-slate-bg to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm">
              <ShieldTick size={14} variant="Bold" color="#FFC93C" /> Free · No sign-up
            </span>
            <h1 className="mt-5 text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
              Which LIC plan actually fits{" "}
              <span className="text-gold">your family?</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Six honest questions about your goal, age, horizon and budget. We score all
              18 LIC plans we advise on and show you the top two — with eligibility, payout
              style and the caveats most agents skip.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {points.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10">
                  <p.icon size={20} variant="Bold" color="#FFC93C" />
                </span>
                <p className="mt-3 text-sm font-bold text-foreground">{p.title}</p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl scroll-mt-24" id="quiz">
            <PlanQuiz />
          </div>

          <TrustBadges className="mt-14" />
        </div>
      </section>

      <FAQSection
        items={QUIZ_FAQ}
        title="About the plan finder"
        intro="What the quiz does, what it doesn't, and what happens next."
      />
    </PageTransition>
  );
}
