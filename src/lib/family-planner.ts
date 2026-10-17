export type Lang = "en" | "hi";
export type Text = { en: string; hi: string };
const text = (en: string, hi: string): Text => ({ en, hi });

export const STAGES = [
  { id: "starting", label: text("Starting out", "नई शुरुआत"), sub: text("Build a strong foundation", "मज़बूत आधार बनाएं"), goal: "savings" },
  { id: "married", label: text("Married / partners", "विवाहित / जीवनसाथी"), sub: text("Plan a shared future", "मिलकर भविष्य की योजना"), goal: "protection" },
  { id: "children", label: text("Raising children", "बच्चों की परवरिश"), sub: text("Make room for their dreams", "उनके सपनों के लिए तैयारी"), goal: "education" },
  { id: "retiring", label: text("Approaching retirement", "रिटायरमेंट की तैयारी"), sub: text("Prepare for your next chapter", "अगले पड़ाव की तैयारी"), goal: "retirement" },
] as const;
export type Stage = typeof STAGES[number]["id"];
export const GOALS = [
  { id: "protection", label: text("Family protection", "परिवार की सुरक्षा"), image: "term" },
  { id: "education", label: text("Child's education", "बच्चे की शिक्षा"), image: "child" },
  { id: "savings", label: text("Long-term savings", "लंबी अवधि की बचत"), image: "savings" },
  { id: "retirement", label: text("Retirement", "रिटायरमेंट"), image: "pension" },
] as const;
export type Goal = typeof GOALS[number]["id"];
export type FamilyInput = { stage: Stage; goal: Goal; horizon: number; target?: number };

export function suggestedGoal(stage: Stage): Goal {
  return STAGES.find((s) => s.id === stage)?.goal ?? "savings";
}
export function validHorizon(value: number) { return Number.isInteger(value) && value >= 1 && value <= 40; }
export function validTarget(value: number | undefined) { return value === undefined || (Number.isFinite(value) && value > 0 && value <= 100000000); }
export function parseFamilyContext(raw: Record<string, unknown>): FamilyInput | undefined {
  const stage = STAGES.find((s) => s.id === raw.stage)?.id;
  const goal = GOALS.find((g) => g.id === raw.goal)?.id;
  const horizon = typeof raw.horizon === "string" || typeof raw.horizon === "number" ? Number(raw.horizon) : NaN;
  const target = raw.target === undefined || raw.target === "" ? undefined : Number(raw.target);
  if (!stage || !goal || !validHorizon(horizon) || !validTarget(target)) return undefined;
  return { stage, goal, horizon, target };
}

export const CHECKLIST: Record<Goal, Text[]> = {
  protection: [text("List who relies on your income and your existing life cover.", "आपकी आय पर निर्भर लोगों और मौजूदा जीवन कवर की सूची बनाएं।"), text("Discuss cover needs, exclusions and affordability with the advisor.", "सलाहकार से कवर की जरूरत, अपवाद और वहनीय प्रीमियम पर बात करें।"), text("Review nominees and cover after major family changes.", "परिवार में बड़े बदलाव के बाद नामांकित व्यक्ति और कवर की समीक्षा करें।")],
  education: [text("Set an education year and a target in today's rupees.", "शिक्षा का वर्ष और आज की कीमतों में अपना लक्ष्य तय करें।"), text("Discuss inflation, child entry age and payout timing before choosing a policy.", "पॉलिसी चुनने से पहले महंगाई, बच्चे की प्रवेश आयु और भुगतान के समय पर चर्चा करें।"), text("Review the goal each year as education costs change.", "शिक्षा की लागत बदलने पर हर वर्ष लक्ष्य की समीक्षा करें।")],
  savings: [text("Keep an emergency reserve separate from long-term policies.", "आपातकालीन बचत को लंबी अवधि की पॉलिसियों से अलग रखें।"), text("Ask for an official benefit illustration and premium schedule.", "आधिकारिक लाभ विवरण और प्रीमियम की समय-सारणी मांगें।"), text("Check surrender terms, liquidity and guaranteed versus bonus benefits.", "सरेंडर की शर्तें, निकासी और गारंटीड तथा बोनस लाभों का अंतर जांचें।")],
  retirement: [text("List expected retirement expenses and existing income sources.", "रिटायरमेंट के खर्च और मौजूदा आय स्रोतों की सूची बनाएं।"), text("Compare annuity options, joint-life needs and when income begins.", "पेंशन विकल्प, जीवनसाथी के कवर और आय शुरू होने के समय की तुलना करें।"), text("Keep accessible savings for emergencies and inflation.", "आपातकाल और महंगाई के लिए आसानी से उपलब्ध बचत रखें।")],
};

export type PlannerPlan = { slug: string; why: Text; premium: Text; payout: Text; caveat: Text };
export const PLANNER_PLANS: Record<string, PlannerPlan> = {
  "new-tech-term": { slug: "new-tech-term", why: text("Pure life protection rather than a savings payout.", "बचत के भुगतान के बजाय शुद्ध जीवन सुरक्षा।"), premium: text("Regular, limited or single premium; subject to chosen option.", "चुने विकल्प के अनुसार नियमित, सीमित या एकमुश्त प्रीमियम।"), payout: text("Death benefit during the policy term; no maturity benefit.", "पॉलिसी अवधि में मृत्यु लाभ; मैच्योरिटी लाभ नहीं।"), caveat: text("Medical underwriting and entry-age rules apply. It does not fund the goal at maturity.", "स्वास्थ्य जांच और प्रवेश आयु की शर्तें लागू हैं। मैच्योरिटी पर लक्ष्य के लिए राशि नहीं मिलती।") },
  "new-jeevan-amar": { slug: "new-jeevan-amar", why: text("Term cover to discuss for income-dependent family members.", "आय पर निर्भर परिवार के लिए चर्चा योग्य टर्म कवर।"), premium: text("Regular, limited or single premium; option-dependent.", "विकल्प के अनुसार नियमित, सीमित या एकमुश्त प्रीमियम।"), payout: text("Death benefit only; no maturity savings payout.", "केवल मृत्यु लाभ; मैच्योरिटी पर बचत राशि नहीं।"), caveat: text("Eligibility and cover must be confirmed. Not a savings or education corpus.", "पात्रता और कवर की पुष्टि जरूरी है। यह बचत या शिक्षा निधि नहीं है।") },
  "jeevan-tarun": { slug: "jeevan-tarun", why: text("A child-focused policy with benefits linked to the child's age.", "बच्चे की आयु से जुड़े लाभों वाली बाल योजना।"), premium: text("Premiums payable until the child reaches age 20.", "बच्चे की 20 वर्ष की आयु तक प्रीमियम।"), payout: text("Selected survival benefits at ages 20–24; maturity at 25, with applicable bonuses.", "चुने विकल्प के अनुसार 20–24 वर्ष में लाभ; 25 वर्ष पर मैच्योरिटी और लागू बोनस।"), caveat: text("Child entry age and chosen benefit option matter. Your goal year may not align with these age-linked payments.", "बच्चे की प्रवेश आयु और लाभ विकल्प महत्वपूर्ण हैं। आपके लक्ष्य का वर्ष इन भुगतानों से अलग हो सकता है।") },
  "bima-jyoti": { slug: "bima-jyoti", why: text("Defined-term savings with guaranteed additions under policy terms.", "पॉलिसी की शर्तों के अनुसार गारंटीड एडिशन के साथ तय अवधि की बचत।"), premium: text("Policy term minus five years; policy terms 15–20 years.", "पॉलिसी अवधि से पांच वर्ष कम प्रीमियम; अवधि 15–20 वर्ष।"), payout: text("Maturity benefit with guaranteed additions; life cover during the term.", "गारंटीड एडिशन सहित मैच्योरिटी लाभ; अवधि के दौरान जीवन कवर।"), caveat: text("Not an early-access savings account. Confirm the current policy terms and official illustration.", "यह जल्दी निकासी वाला बचत खाता नहीं है। वर्तमान शर्तों और आधिकारिक लाभ विवरण की पुष्टि करें।") },
  "jeevan-labh": { slug: "jeevan-labh", why: text("Limited premium payments for a longer savings policy term.", "लंबी बचत अवधि के लिए सीमित वर्षों तक प्रीमियम।"), premium: text("16/10, 21/15 or 25/16 years: policy term / premium term.", "16/10, 21/15 या 25/16 वर्ष: पॉलिसी अवधि / प्रीमियम अवधि।"), payout: text("Maturity sum assured plus applicable bonuses; bonuses are not guaranteed.", "मैच्योरिटी बीमा राशि और लागू बोनस; बोनस गारंटीड नहीं हैं।"), caveat: text("Term choices may not match your exact goal year. Early exit can reduce value.", "अवधि विकल्प आपके लक्ष्य वर्ष से अलग हो सकते हैं। जल्दी बाहर निकलने से मूल्य घट सकता है।") },
  "saral-pension": { slug: "saral-pension", why: text("An immediate pension option to review nearer retirement.", "रिटायरमेंट के नजदीक विचार करने योग्य तत्काल पेंशन विकल्प।"), premium: text("Single purchase payment, not yearly savings premiums.", "एकमुश्त खरीद भुगतान, वार्षिक बचत प्रीमियम नहीं।"), payout: text("Lifelong annuity under the chosen single/joint-life option.", "चुने एकल / संयुक्त जीवन विकल्प में आजीवन पेंशन।"), caveat: text("This is not a future savings projection. Entry-age rules, liquidity and inflation need review.", "यह भविष्य की बचत का अनुमान नहीं है। प्रवेश आयु, निकासी और महंगाई की समीक्षा जरूरी है।") },
  "jeevan-akshay": { slug: "jeevan-akshay", why: text("Immediate annuity with different pension benefit options.", "विभिन्न लाभ विकल्पों के साथ तत्काल पेंशन।"), premium: text("Single purchase payment; annuity depends on the chosen option.", "एकमुश्त खरीद भुगतान; पेंशन चुने विकल्प पर निर्भर।"), payout: text("Annuity income according to the selected payment frequency and option.", "चुनी भुगतान आवृत्ति और विकल्प के अनुसार पेंशन आय।"), caveat: text("Not every option returns the purchase price. Review spouse protection and access to capital.", "हर विकल्प में खरीद राशि वापस नहीं मिलती। जीवनसाथी की सुरक्षा और राशि की उपलब्धता की समीक्षा करें।") },
};

export function shortlist(input: FamilyInput): PlannerPlan[] {
  if (!validHorizon(input.horizon) || !validTarget(input.target)) return [];
  let slugs: string[] = [];
  if (input.goal === "protection") slugs = ["new-tech-term", "new-jeevan-amar"];
  if (input.goal === "education" && input.stage === "children" && input.horizon >= 5) slugs = ["jeevan-tarun"];
  if (input.goal === "savings") {
    if (input.horizon >= 15 && input.horizon <= 20) slugs.push("bima-jyoti");
    if ([16, 21, 25].includes(input.horizon)) slugs.push("jeevan-labh");
  }
  if (input.goal === "retirement" && input.stage === "retiring" && input.horizon <= 5) slugs = ["saral-pension", "jeevan-akshay"];
  return slugs.flatMap((slug) => PLANNER_PLANS[slug] ? [PLANNER_PLANS[slug]] : []).slice(0, 2);
}
export function milestoneYear(input: FamilyInput, year: number) {
  return validHorizon(input.horizon) ? year + input.horizon : undefined;
}
export function familySummary(input: FamilyInput | undefined, lang: Lang): string {
  if (!input) return "";
  const stage = STAGES.find((s) => s.id === input.stage);
  const goal = GOALS.find((g) => g.id === input.goal);
  if (!stage || !goal || !validHorizon(input.horizon) || !validTarget(input.target)) return "";
  const target = input.target === undefined ? "" : `\n${lang === "hi" ? "मेरा लक्ष्य (अनुमानित रिटर्न नहीं)" : "My target (not a return estimate)"}: ₹${input.target.toLocaleString("en-IN")}`;
  return lang === "hi" ? `परिवार की योजना\nपारिवारिक पड़ाव: ${stage.label.hi}\nलक्ष्य: ${goal.label.hi}\nअवधि: ${input.horizon} वर्ष${target}` : `Family planning brief\nFamily stage: ${stage.label.en}\nGoal: ${goal.label.en}\nHorizon: ${input.horizon} years${target}`;
}