// Plain-English scope details for each LIC plan, keyed by slug.
// Written so a first-time buyer understands WHAT the plan does, WHO it fits,
// and WHAT it costs — without needing to call anyone.

export type PlanDetail = {
  /** One-sentence explanation with zero jargon. */
  plainEnglish: string;
  /** Broad family the plan belongs to. */
  category: "Savings" | "Child" | "Pension" | "Term" | "Money Back" | "Whole Life";
  entryAge: string;
  policyTerm: string;
  premiumTerm: string;
  minCover: string;
  payoutStyle: string;
  bestFor: string[];
  /** Honest caveats — what this plan is NOT good at. */
  notIdealFor: string;
  /** Simple, indicative worked example. */
  example: string;
  tax: string;
};

const TAX_STD =
  "Premiums may qualify under Sec 80C; maturity/death proceeds under Sec 10(10D), subject to current rules.";

export const PLAN_DETAILS: Record<string, PlanDetail> = {
  kanyadan: {
    plainEnglish:
      "A father pays a small amount every year while his daughter grows up; a guaranteed lump sum arrives exactly when she needs it for education or marriage.",
    category: "Savings",
    entryAge: "18–50 yrs (father) · daughter min. 1 yr",
    policyTerm: "13–25 years",
    premiumTerm: "Policy term minus 3 years",
    minCover: "₹1,00,000 sum assured",
    payoutStyle: "One guaranteed lump sum at maturity + bonuses",
    bestFor: ["Parents of a daughter", "Marriage & education goals", "Disciplined yearly savers"],
    notIdealFor: "Anyone who may need the money back within 5 years.",
    example:
      "≈ ₹3,600/month for 22 years can build roughly ₹27 lakh at maturity, with ₹11 lakh life cover running throughout.",
    tax: TAX_STD,
  },
  "jeevan-anand": {
    plainEnglish:
      "You save for a fixed number of years, collect a maturity amount — and the life cover still continues for the rest of your life, free of further premiums.",
    category: "Whole Life",
    entryAge: "18–50 yrs",
    policyTerm: "15–35 years",
    premiumTerm: "Same as policy term",
    minCover: "₹1,00,000 sum assured",
    payoutStyle: "Maturity lump sum now + death benefit later, lifelong",
    bestFor: ["Single earners", "People who want one policy for life", "Legacy planning"],
    notIdealFor: "Buyers chasing the highest possible return — protection is priced in.",
    example:
      "₹10 lakh sum assured over 20 years pays maturity + bonuses at year 20, and still pays ₹10 lakh to the family whenever the insured passes away.",
    tax: TAX_STD,
  },
  "jeevan-umang": {
    plainEnglish:
      "Pay for a limited number of years, then receive 8% of your sum assured every single year as income — until age 100.",
    category: "Whole Life",
    entryAge: "90 days – 55 yrs",
    policyTerm: "Up to age 100",
    premiumTerm: "15 / 20 / 25 / 30 years",
    minCover: "₹2,00,000 sum assured",
    payoutStyle: "8% annual survival benefit + lump sum at 100 or on death",
    bestFor: ["Second-income seekers", "Parents buying for a newborn", "Retirement top-up"],
    notIdealFor: "Someone who wants the entire corpus back in one shot early.",
    example:
      "₹10 lakh sum assured → ₹80,000 credited every year after the premium term ends, for decades.",
    tax: TAX_STD,
  },
  "jeevan-labh": {
    plainEnglish:
      "A short paying period with a longer cover period — you finish paying early but the money keeps growing till maturity.",
    category: "Savings",
    entryAge: "8–59 yrs",
    policyTerm: "16 / 21 / 25 years",
    premiumTerm: "10 / 15 / 16 years",
    minCover: "₹2,00,000 sum assured",
    payoutStyle: "Single maturity lump sum + accrued bonuses",
    bestFor: ["Peak-earning professionals", "Goal dates 15–25 years away", "Retirement corpus"],
    notIdealFor: "Anyone needing periodic payouts during the term.",
    example:
      "Pay for 16 years on a 25-year term — 9 premium-free years where the corpus keeps compounding.",
    tax: TAX_STD,
  },
  "new-jeevan-shanti": {
    plainEnglish:
      "You deposit once today and lock in a pension amount that starts on a future date you choose — and never falls, whatever markets do.",
    category: "Pension",
    entryAge: "30–79 yrs",
    policyTerm: "Deferment 1–12 years, then lifelong",
    premiumTerm: "Single premium",
    minCover: "₹1,50,000 purchase price",
    payoutStyle: "Guaranteed annuity for life; purchase price returned to nominee",
    bestFor: ["Pre-retirees aged 45–60", "Couples wanting joint pension", "Lump-sum holders"],
    notIdealFor: "Investors who need liquid access to the deposit.",
    example: "₹10 lakh deposited at 50 can start a fixed lifelong pension from age 60.",
    tax: "Annuity income is taxable as per your income slab.",
  },
  "saral-pension": {
    plainEnglish:
      "Deposit once, and pension starts immediately — the simplest standardised pension product allowed by the regulator.",
    category: "Pension",
    entryAge: "40–80 yrs",
    policyTerm: "Lifelong",
    premiumTerm: "Single premium",
    minCover: "Annuity of ₹12,000/year",
    payoutStyle: "Immediate lifelong annuity; 100% purchase price returned on death",
    bestFor: ["Just-retired individuals", "Anyone with a retirement corpus in hand"],
    notIdealFor: "People below 40 or wanting growth rather than income.",
    example: "₹15 lakh deposited can pay a fixed monthly pension from the very next month.",
    tax: "Annuity income is taxable as per your income slab.",
  },
  "jeevan-akshay": {
    plainEnglish:
      "The most flexible pension option — ten different ways to shape how, and to whom, your income is paid.",
    category: "Pension",
    entryAge: "30–85 yrs",
    policyTerm: "Lifelong",
    premiumTerm: "Single premium",
    minCover: "₹1,00,000 purchase price",
    payoutStyle: "Choice of 10 annuity structures, single or joint life",
    bestFor: ["Retirees with specific spouse/nominee needs", "Estate structuring"],
    notIdealFor: "Anyone uncomfortable comparing multiple options — I help pick.",
    example: "Option F returns the full purchase price to the nominee after lifelong pension.",
    tax: "Annuity income is taxable as per your income slab.",
  },
  "new-children-money-back": {
    plainEnglish:
      "Money arrives in instalments exactly when school and college fees peak — at ages 18, 20 and 22 — with the balance at 25.",
    category: "Child",
    entryAge: "Child 0–12 yrs",
    policyTerm: "Till child turns 25",
    premiumTerm: "Same as policy term",
    minCover: "₹1,00,000 sum assured",
    payoutStyle: "20% at ages 18, 20, 22 + remaining at 25",
    bestFor: ["Parents of young children", "Staggered education costs"],
    notIdealFor: "Families needing the entire fund in one go.",
    example: "₹10 lakh cover → ₹2 lakh released at 18, 20 and 22, ₹4 lakh + bonuses at 25.",
    tax: TAX_STD,
  },
  "jeevan-tarun": {
    plainEnglish:
      "A child plan where you choose how the payouts are split — more early for schooling, or more later for higher studies.",
    category: "Child",
    entryAge: "Child 90 days – 12 yrs",
    policyTerm: "Till child turns 25",
    premiumTerm: "Till child turns 20",
    minCover: "₹75,000 sum assured",
    payoutStyle: "4 selectable payout patterns between ages 20–25",
    bestFor: ["Parents planning abroad education", "Flexible fee schedules"],
    notIdealFor: "Children already above 12 years of age.",
    example: "Option 4 gives 15% each year from age 20 to 24, then 40% at 25.",
    tax: TAX_STD,
  },
  "bima-jyoti": {
    plainEnglish:
      "Every year your policy silently earns a fixed, guaranteed addition — no market risk, no surprises at maturity.",
    category: "Savings",
    entryAge: "90 days – 60 yrs",
    policyTerm: "15–20 years",
    premiumTerm: "Policy term minus 5 years",
    minCover: "₹1,00,000 sum assured",
    payoutStyle: "Sum assured + guaranteed additions at maturity",
    bestFor: ["Conservative savers", "FD alternatives with cover", "Fixed-date goals"],
    notIdealFor: "Anyone wanting bonus upside beyond the guarantee.",
    example: "₹10 lakh sum assured earns ₹50,000 guaranteed addition each year of the term.",
    tax: TAX_STD,
  },
  "bima-ratna": {
    plainEnglish:
      "Guaranteed additions grow the corpus while money-back instalments come to you during the term itself.",
    category: "Money Back",
    entryAge: "90 days – 55 yrs",
    policyTerm: "15 / 20 / 25 years",
    premiumTerm: "Policy term minus 5 years",
    minCover: "₹5,00,000 sum assured",
    payoutStyle: "Periodic survival benefits + maturity lump sum",
    bestFor: ["Families wanting liquidity mid-term", "Business cash-flow planning"],
    notIdealFor: "Buyers who prefer everything compounding till the end.",
    example: "On a 20-year term, 25% of sum assured is released in the 18th and 19th year.",
    tax: TAX_STD,
  },
  "dhan-sanchay": {
    plainEnglish:
      "A savings plan you can shape as regular income or one big lump sum — four presets to pick from.",
    category: "Savings",
    entryAge: "3–65 yrs (option-wise)",
    policyTerm: "10–20 years",
    premiumTerm: "Single or limited",
    minCover: "₹3,30,000 sum assured",
    payoutStyle: "Income benefit over 5 years or lump sum",
    bestFor: ["People wanting choice", "Post-retirement income bridges"],
    notIdealFor: "Someone who wants a single simple structure.",
    example: "Option C pays out a guaranteed income stream for 5 years after maturity.",
    tax: TAX_STD,
  },
  "new-tech-term": {
    plainEnglish:
      "Pure protection: the cheapest way to leave your family a very large amount if something happens to you.",
    category: "Term",
    entryAge: "18–65 yrs",
    policyTerm: "10–40 years",
    premiumTerm: "Single / regular / limited",
    minCover: "₹50,00,000 sum assured",
    payoutStyle: "Death benefit only — no maturity amount",
    bestFor: ["Sole breadwinners", "Home-loan holders", "Young parents"],
    notIdealFor: "Anyone expecting money back if they survive the term.",
    example: "A healthy 30-year-old can hold ₹1 crore cover for roughly ₹800–1,000 a month.",
    tax: TAX_STD,
  },
  "new-jeevan-amar": {
    plainEnglish:
      "The same pure-protection idea as Tech-Term, but issued offline with paperwork handled personally by me.",
    category: "Term",
    entryAge: "18–65 yrs",
    policyTerm: "10–40 years",
    premiumTerm: "Single / regular / limited",
    minCover: "₹25,00,000 sum assured",
    payoutStyle: "Level or increasing death benefit",
    bestFor: ["Those preferring in-person service", "Special female-life rates"],
    notIdealFor: "Buyers who want an instant online purchase.",
    example: "Increasing option raises cover 10% each year from year 6 to year 15.",
    tax: TAX_STD,
  },
  "saral-jeevan-bima": {
    plainEnglish:
      "A regulator-standardised term plan with no fine print — designed so first-time buyers cannot be confused.",
    category: "Term",
    entryAge: "18–65 yrs",
    policyTerm: "5–40 years",
    premiumTerm: "Single / regular / limited",
    minCover: "₹5,00,000 sum assured",
    payoutStyle: "Death benefit only, uniform across insurers",
    bestFor: ["First-time buyers", "Small business owners", "Modest budgets"],
    notIdealFor: "Anyone needing cover above ₹25 lakh — use Tech-Term instead.",
    example: "₹25 lakh cover for a 35-year-old costs a few hundred rupees a month.",
    tax: TAX_STD,
  },
  "jeevan-azad": {
    plainEnglish:
      "Pay premiums for eight fewer years than the policy runs — a short commitment with a guaranteed maturity date.",
    category: "Savings",
    entryAge: "90 days – 50 yrs",
    policyTerm: "15–20 years",
    premiumTerm: "Policy term minus 8 years",
    minCover: "₹2,00,000 sum assured",
    payoutStyle: "Guaranteed maturity lump sum",
    bestFor: ["Short-commitment savers", "Parents with irregular income"],
    notIdealFor: "People wanting bonus-linked upside.",
    example: "On a 18-year term you pay for only 10 years, then wait 8 premium-free years.",
    tax: TAX_STD,
  },
  "new-endowment": {
    plainEnglish:
      "The classic Indian savings policy — protection while you save, a lump sum when the term ends.",
    category: "Savings",
    entryAge: "8–55 yrs",
    policyTerm: "12–35 years",
    premiumTerm: "Same as policy term",
    minCover: "₹1,00,000 sum assured",
    payoutStyle: "Sum assured + bonuses at maturity",
    bestFor: ["Traditional savers", "Loan-against-policy needs", "Long horizons"],
    notIdealFor: "Anyone comparing purely against equity returns.",
    example: "Policy loans of up to 90% of surrender value are available after 3 years.",
    tax: TAX_STD,
  },
  "new-money-back-20": {
    plainEnglish:
      "Every fifth year a fifth of your cover comes back to you in cash, and the policy still pays a maturity amount at the end.",
    category: "Money Back",
    entryAge: "13–50 yrs",
    policyTerm: "20 years",
    premiumTerm: "15 years",
    minCover: "₹1,00,000 sum assured",
    payoutStyle: "20% at years 5, 10, 15 + 40% & bonuses at 20",
    bestFor: ["Recurring expense planning", "Shop and business owners"],
    notIdealFor: "Buyers who want maximum compounding.",
    example: "₹5 lakh cover returns ₹1 lakh in years 5, 10 and 15 — cover stays full throughout.",
    tax: TAX_STD,
  },
};

/** Jargon decoder shown on the plans page. */
export const GLOSSARY = [
  { term: "Sum Assured", meaning: "The guaranteed amount your family receives if something happens to you. Everything else is added on top of this." },
  { term: "Premium", meaning: "What you pay — yearly, half-yearly, quarterly or monthly. It never increases once the policy is issued." },
  { term: "Policy Term", meaning: "How long the policy protects you." },
  { term: "Premium Paying Term", meaning: "How long you actually pay. It is often shorter than the policy term." },
  { term: "Maturity", meaning: "The day the policy ends successfully and pays you the accumulated money." },
  { term: "Bonus", meaning: "A share of LIC's yearly surplus added to your policy. Declared annually, not guaranteed in advance." },
  { term: "Survival / Money-Back Benefit", meaning: "Cash paid to you during the term while the policy still continues." },
  { term: "Rider", meaning: "An optional add-on such as accident cover or premium waiver, bought for a small extra premium." },
  { term: "Surrender Value", meaning: "What you get if you exit early. It is always lower than what you paid in the first few years." },
  { term: "Nominee", meaning: "The person who receives the claim. Keep this updated after marriage or a birth in the family." },
  { term: "Grace Period", meaning: "30 days (15 for monthly mode) to pay a late premium without losing cover." },
  { term: "Revival", meaning: "Restarting a lapsed policy — possible within 5 years, with interest on the missed premiums." },
];

/** Step-by-step "how it works" shown as an infographic timeline. */
export const PROCESS_STEPS = [
  { step: "01", title: "Tell me the goal", body: "A 10-minute call. No product names yet — only what you're protecting: a child, a loan, a retirement, a business." },
  { step: "02", title: "Get a written comparison", body: "You receive 2–3 plans on paper with premium, maturity and worst-case surrender figures side by side." },
  { step: "03", title: "Paperwork done for you", body: "KYC, medicals and forms are arranged near your home or online if you're abroad. You sign once." },
  { step: "04", title: "Policy issued & explained", body: "I walk you and your nominee through the bond document, so your family knows what to do without me." },
  { step: "05", title: "Lifetime servicing", body: "Premium reminders, address and nominee changes, loans, revivals and — when the day comes — claim support." },
];
