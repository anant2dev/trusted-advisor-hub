import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowLeft2, People, ShieldTick, Book1, Chart, Calendar, TickCircle, Refresh2, Edit2 } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLang } from "@/lib/i18n";
import { STAGES, GOALS, CHECKLIST, suggestedGoal, shortlist, validHorizon, validTarget, milestoneYear, type Stage, type Goal, type FamilyInput } from "@/lib/family-planner";
import { ALL_PLANS } from "@/lib/site";
import { PLAN_IMAGES } from "@/lib/plan-images";
import { SITE_URL, breadcrumbLd, ldScript } from "@/lib/seo";

const TITLE = "Family Life-stage Planner · Bima Suraksha";
const DESCRIPTION = "Plan your family's next milestone in Hindi or English. Explore an educational roadmap and relevant LIC policy options, then discuss your goals with Ram Singh Rathore.";
export const Route = createFileRoute("/family-planner")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE }, { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/family-planner` }, { rel: "alternate", type: "text/markdown", href: `${SITE_URL}/family-planner.md` }],
    scripts: [ldScript(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Family Planner", path: "/family-planner" }]))],
  }),
  component: FamilyPlannerPage,
});

const goalIcons = [ShieldTick, Book1, Chart, Calendar];
function FamilyPlannerPage() {
  const { lang, pick } = useLang();
  const reduced = useReducedMotion();
  const [stage, setStage] = useState<Stage>("children");
  const [goal, setGoal] = useState<Goal>("education");
  const [horizon, setHorizon] = useState("10");
  const [target, setTarget] = useState("");
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [openPlan, setOpenPlan] = useState<string>();
  const years = Number(horizon);
  const targetValue = target.trim() === "" ? undefined : Number(target);
  const input: FamilyInput = { stage, goal, horizon: years, target: targetValue };
  const year = milestoneYear(input, new Date().getFullYear());
  const selectedStage = STAGES.find((s) => s.id === stage) ?? STAGES[0];
  const selectedGoal = GOALS.find((g) => g.id === goal) ?? GOALS[0];
  const plans = done ? shortlist(input) : [];
  const reset = () => { setStage("children"); setGoal("education"); setHorizon("10"); setTarget(""); setStep(0); setDone(false); setError(false); setOpenPlan(undefined); };
  const showResults = () => {
    if (!validHorizon(years) || !validTarget(targetValue)) { setError(true); return; }
    setError(false); setDone(true);
  };
  const context = { stage, goal, horizon: years, ...(targetValue === undefined ? {} : { target: targetValue }) };

  return (
    <div className="bg-background text-foreground pb-24">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:pt-12">
        <Link to="/plan-finder" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft2 size={16} color="currentColor" />{pick("Plan Finder", "योजना खोजक")}</Link>
        <header className="mt-4 border-b border-border pb-8">
          <p className="flex items-center gap-2 text-sm font-semibold text-primary"><People size={20} color="currentColor" />{pick("Bima Suraksha · Family planning", "बीमा सुरक्षा · परिवार की योजना")}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{pick("Family Life-stage Planner", "परिवार के पड़ावों की योजना")}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{pick("A new chapter. A shared goal. Start with what matters to your family—and build a thoughtful path towards it.", "एक नया पड़ाव। एक साझा लक्ष्य। परिवार के लिए जो सबसे ज़रूरी है, उससे शुरू करें और उसकी तैयारी का रास्ता बनाएं।")}</p>
        </header>

        <div className="grid gap-8 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <section aria-label={pick("Your family goals", "परिवार के लक्ष्य")}>
            <ol className="mb-8 flex gap-2 text-sm" aria-label={pick("Planning progress", "योजना की प्रगति")}>
              {[pick("Family", "परिवार"), pick("Goal", "लक्ष्य"), pick("Timing", "अवधि")].map((label, i) => <li key={i} className={`flex flex-1 items-center gap-2 border-b-2 pb-3 ${step === i && !done ? "border-primary text-primary" : "border-border text-muted-foreground"}`} aria-current={step === i && !done ? "step" : undefined}><span className="font-mono">0{i + 1}</span>{label}</li>)}
            </ol>
            <motion.div key={done ? "done" : step} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.2 }}>
              {done ? <>
                <p className="text-sm font-medium text-primary">{pick("Your planning brief", "आपकी योजना का सार")}</p>
                <h2 className="mt-2 text-2xl font-bold">{selectedGoal.label[lang]} · {year}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{pick("This is a starting point for a family conversation, not a promise of policy benefits or eligibility.", "यह परिवार की चर्चा की शुरुआत है, पॉलिसी लाभ या पात्रता का वादा नहीं।")}</p>
                <Button variant="outline" className="mt-6 min-h-11" onClick={() => { setDone(false); setStep(0); }}><Edit2 size={18} color="currentColor" />{pick("Edit my goals", "लक्ष्य बदलें")}</Button>
              </> : step === 0 ? <>
                <h2 className="text-2xl font-bold">{pick("Where is your family today?", "आज आपका परिवार किस पड़ाव पर है?")}</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {STAGES.map((s) => <Button key={s.id} variant="outline" aria-pressed={stage === s.id} onClick={() => { setStage(s.id); setGoal(suggestedGoal(s.id)); }} className={`h-auto min-h-24 justify-start whitespace-normal p-4 text-left ${stage === s.id ? "border-primary bg-primary/5 ring-1 ring-primary" : ""}`}><span><span className="block text-base font-semibold">{s.label[lang]}</span><span className="mt-1 block text-sm font-normal text-muted-foreground">{s.sub[lang]}</span></span></Button>)}
                </div>
              </> : step === 1 ? <>
                <h2 className="text-2xl font-bold">{pick("Which milestone comes first?", "सबसे पहले किस लक्ष्य की तैयारी करें?")}</h2>
                <p className="mt-3 text-base text-muted-foreground">{pick("A suggested goal is selected. Choose what matters to you.", "एक सुझाया लक्ष्य चुना है। अपनी प्राथमिकता के अनुसार बदल सकते हैं।")}</p>
                <div className="mt-6 grid gap-3">{GOALS.map((g, i) => { const Icon = goalIcons[i]; return <Button key={g.id} variant="outline" aria-pressed={goal === g.id} onClick={() => setGoal(g.id)} className={`min-h-14 justify-start gap-3 whitespace-normal text-left ${goal === g.id ? "border-primary bg-primary/5 ring-1 ring-primary" : ""}`}><Icon size={20} color="currentColor" /><span className="text-base">{g.label[lang]}</span>{goal === g.id && <TickCircle size={18} color="currentColor" className="ml-auto text-primary" />}</Button>; })}</div>
              </> : <>
                <h2 className="text-2xl font-bold">{pick("Give your goal a timeframe", "लक्ष्य के लिए अवधि तय करें")}</h2>
                <div className="mt-6 space-y-6">
                  <div><label className="block text-base font-medium" htmlFor="family-horizon">{pick("Years from now", "आज से कितने वर्ष बाद")}</label><Input id="family-horizon" type="number" min={1} max={40} step={1} value={horizon} onChange={(e) => setHorizon(e.target.value)} aria-invalid={error && !validHorizon(years)} aria-describedby="horizon-hint" className="mt-2 h-12 text-base" /><p id="horizon-hint" className={`mt-2 text-sm ${error && !validHorizon(years) ? "text-destructive" : "text-muted-foreground"}`}>{pick("Choose a whole number from 1 to 40 years.", "1 से 40 वर्ष के बीच पूर्ण संख्या चुनें।")}</p></div>
                  <div><label className="block text-base font-medium" htmlFor="family-target">{pick("Your target amount in ₹ (optional)", "₹ में अपना लक्ष्य (वैकल्पिक)")}</label><Input id="family-target" type="number" min={1} max={100000000} value={target} onChange={(e) => setTarget(e.target.value)} aria-invalid={error && !validTarget(targetValue)} aria-describedby="target-hint" className="mt-2 h-12 text-base" /><p id="target-hint" className="mt-2 text-sm text-muted-foreground">{pick("Your own target in today's rupees—not a premium quote or return estimate. Leave blank if unsure.", "आज की कीमतों में आपका अपना लक्ष्य—प्रीमियम या रिटर्न का अनुमान नहीं। निश्चित न हों तो खाली छोड़ें।")}</p>{error && !validTarget(targetValue) && <p role="alert" className="mt-2 text-sm text-destructive">{pick("Enter a positive amount up to ₹10 crore, or leave it blank.", "₹10 करोड़ तक की सकारात्मक राशि दें या खाली छोड़ें।")}</p>}</div>
                </div>
              </>}
            </motion.div>
            {!done && <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-border pt-6"><Button variant="ghost" className="min-h-11" disabled={step === 0} onClick={() => setStep(step - 1)}><ArrowLeft2 size={18} color="currentColor" />{pick("Back", "पीछे")}</Button><Button className="min-h-11" onClick={() => step < 2 ? setStep(step + 1) : showResults()}>{step < 2 ? pick("Continue", "आगे") : pick("Build my roadmap", "मेरी योजना देखें")}<ArrowRight size={18} color="currentColor" /></Button></div>}
          </section>

          <aside className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0" aria-label={pick("Family roadmap", "परिवार की समयरेखा")}>
            <div className="flex items-center justify-between gap-3"><h2 className="text-lg font-semibold">{pick("Your family roadmap", "परिवार की समयरेखा")}</h2><span className="text-sm text-muted-foreground">{done ? pick("Ready to review", "समीक्षा के लिए तैयार") : pick("In progress", "तैयार हो रही है")}</span></div>
            <img src={PLAN_IMAGES[selectedGoal.image]} alt={selectedGoal.label[lang]} width={640} height={360} className="mt-5 aspect-video w-full rounded-lg object-contain bg-muted/30" />
            <ol className="mt-6 space-y-6 border-l-2 border-primary/25 pl-5">
              <li><p className="text-sm font-semibold text-primary">{pick("Today", "आज")}</p><p className="mt-1 text-lg font-semibold">{selectedStage.label[lang]}</p></li>
              <li><p className="text-sm font-semibold text-primary">{pick("Next step", "अगला कदम")}</p><p className="mt-1 text-base leading-relaxed">{CHECKLIST[goal][0][lang]}</p></li>
              <li><p className="text-sm font-semibold text-primary">{year ?? "—"} · {validHorizon(years) ? `${years} ${pick("years away", "वर्ष बाद")}` : pick("Set a timeframe", "अवधि चुनें")}</p><p className="mt-1 text-lg font-semibold">{selectedGoal.label[lang]}</p>{validTarget(targetValue) && targetValue !== undefined && <p className="mt-1 text-sm text-muted-foreground">{pick("My target", "मेरा लक्ष्य")}: ₹{targetValue.toLocaleString("en-IN")}</p>}</li>
            </ol>
          </aside>
        </div>

        {done && <section className="border-t border-border py-8" aria-label={pick("Planning results", "योजना के परिणाम")}>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div><h2 className="text-xl font-bold">{pick("Before choosing a policy", "पॉलिसी चुनने से पहले")}</h2><ul className="mt-5 space-y-5">{CHECKLIST[goal].map((item, i) => <li key={i} className="flex gap-3 text-base leading-relaxed"><TickCircle size={20} color="currentColor" className="mt-1 shrink-0 text-primary" />{item[lang]}</li>)}</ul><p className="mt-6 text-sm leading-relaxed text-muted-foreground">{pick("Your goal year is a personal milestone—not a policy maturity date. Premiums, eligibility and benefit timing require an official illustration.", "लक्ष्य का वर्ष आपका निजी पड़ाव है—पॉलिसी की मैच्योरिटी तारीख नहीं। प्रीमियम, पात्रता और लाभ के समय के लिए आधिकारिक विवरण जरूरी है।")}</p></div>
            <div><h2 className="text-xl font-bold">{pick("Options to discuss", "चर्चा योग्य विकल्प")}</h2><p className="mt-2 text-base text-muted-foreground">{pick("Educational shortlist, not a purchase recommendation.", "जानकारी के लिए सूची, खरीदने की सलाह नहीं।")}</p>
              {plans.length === 0 ? <div className="mt-6 border-l-2 border-primary pl-5"><h3 className="text-lg font-semibold">{pick("Let's review this goal together", "इस लक्ष्य पर मिलकर चर्चा करें")}</h3><p className="mt-3 text-base leading-relaxed text-muted-foreground">{pick("The available policy timing or family-stage information does not support a clear shortlist. We won't force a match—an advisor can review your exact ages, needs and timeframe.", "उपलब्ध पॉलिसी अवधि या परिवार की जानकारी से स्पष्ट सूची नहीं बनती। जबरन मिलान नहीं करेंगे—सलाहकार सही आयु, जरूरत और अवधि की समीक्षा कर सकते हैं।")}</p><Button asChild className="mt-5 min-h-11"><Link to="/book-appointment" search={context}>{pick("Discuss my family plan", "परिवार की योजना पर चर्चा करें")}<ArrowRight size={18} color="currentColor" /></Link></Button></div> : <div className="mt-5 grid gap-4">{plans.map((p) => {
                const catalogue = ALL_PLANS.find((item) => item.slug === p.slug);
                if (!catalogue) return null;
                const open = openPlan === p.slug;
                return <article key={p.slug} className="rounded-lg border border-border bg-card p-5"><h3 className="text-lg font-bold">{lang === "hi" ? catalogue.nameHi : catalogue.name}</h3><p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.why[lang]}</p><Button variant="ghost" aria-expanded={open} aria-controls={`scope-${p.slug}`} className="mt-3 min-h-11 px-0 text-primary" onClick={() => setOpenPlan(open ? undefined : p.slug)}>{open ? pick("Hide plan details", "विवरण छिपाएं") : pick("View plan details", "योजना का विवरण देखें")}<ArrowRight size={16} color="currentColor" /></Button>{open && <dl id={`scope-${p.slug}`} className="mt-3 space-y-4 border-t border-border pt-4">{[[pick("Premium structure", "प्रीमियम संरचना"), p.premium[lang]], [pick("Payout style", "लाभ भुगतान"), p.payout[lang]], [pick("Keep in mind", "ध्यान रखें"), p.caveat[lang]]].map(([label, value]) => <div key={label}><dt className="text-sm font-semibold text-primary">{label}</dt><dd className="mt-1 text-base leading-relaxed">{value}</dd></div>)}</dl>}<Button asChild className="mt-4 min-h-11 w-full whitespace-normal"><Link to="/book-appointment" search={{ ...context, plan: catalogue.name }}><Calendar size={18} color="currentColor" />{pick("Discuss this plan", "इस योजना पर चर्चा करें")}</Link></Button></article>;
              })}</div>}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3"><Button variant="outline" className="min-h-11" onClick={reset}><Refresh2 size={18} color="currentColor" />{pick("Start again", "फिर से शुरू करें")}</Button><Button variant="ghost" asChild className="min-h-11"><Link to="/plans">{pick("Browse all LIC plans", "सभी एलआईसी योजनाएं देखें")}<ArrowRight size={18} color="currentColor" /></Link></Button></div>
        </section>}
        <p className="border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">{pick("Educational planning only. Not financial advice, an official LIC portal, a quotation or an eligibility guarantee. No planner answers are saved; contact details are only shared when you choose to send a message.", "केवल जानकारी के लिए योजना। वित्तीय सलाह, आधिकारिक एलआईसी पोर्टल, कोटेशन या पात्रता की गारंटी नहीं। जवाब सेव नहीं होते; संपर्क जानकारी तभी साझा होती है जब आप संदेश भेजना चुनते हैं।")}</p>
      </div>
    </div>
  );
}