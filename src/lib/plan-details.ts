// Plain-English scope details for each LIC plan, keyed by slug.
// Written so a first-time buyer understands WHAT the plan does, WHO it fits,
// and WHAT it costs — without needing to call anyone.

export type PlanDetail = {
  /** One-sentence explanation with zero jargon. */
  plainEnglish: string;
  /** Broad family the plan belongs to. */
  category: "Savings" | "Child" | "Pension" | "Term" | "Money Back" | "Whole Life" | "Market Linked" | "Micro";
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
  "jeevan-lakshya": {
    plainEnglish:
      "If you are not there, your family still receives a yearly income until the policy ends — and then the full sum assured on top of it.",
    category: "Savings",
    entryAge: "18-50 yrs",
    policyTerm: "13-25 years",
    premiumTerm: "Policy term minus 3 years",
    minCover: "₹1,00,000 sum assured",
    payoutStyle: "10% yearly income to family + 110% sum assured at maturity",
    bestFor: ["Single-income families", "Parents with school-going children", "Home-loan holders"],
    notIdealFor: "People who need money back during their own lifetime.",
    example:
      "On ₹10 lakh cover, the family receives ₹1 lakh every year till the term ends, then ₹11 lakh plus bonuses.",
    tax: TAX_STD,
  },
  "jeevan-utsav": {
    plainEnglish:
      "You pay premiums for a limited number of years and then draw a guaranteed 10% of your sum assured every year for the rest of your life.",
    category: "Whole Life",
    entryAge: "90 days - 65 yrs",
    policyTerm: "Whole life (up to age 100)",
    premiumTerm: "5-16 years",
    minCover: "₹5,00,000 sum assured",
    payoutStyle: "Regular income benefit from a chosen year, lifelong",
    bestFor: ["Second income in retirement", "Parents creating a lifelong gift", "Business owners with lumpy income"],
    notIdealFor: "Anyone who needs the entire corpus back as a single lump sum.",
    example:
      "₹10 lakh sum assured pays ₹1 lakh every year from the chosen income year, for life, with guaranteed additions accrued earlier.",
    tax: TAX_STD,
  },
  "jeevan-utsav-sp": {
    plainEnglish:
      "The single-premium version of Jeevan Utsav: invest once and a lifelong yearly income begins after the deferment period.",
    category: "Whole Life",
    entryAge: "90 days - 65 yrs",
    policyTerm: "Whole life (up to age 100)",
    premiumTerm: "Single premium",
    minCover: "₹5,00,000 sum assured",
    payoutStyle: "Lifelong yearly income after deferment + death benefit",
    bestFor: ["Retirement lump sums", "Sale proceeds or bonus money", "Grandparents gifting income"],
    notIdealFor: "Buyers who prefer spreading payments over many years.",
    example:
      "A one-time investment creating ₹10 lakh sum assured produces ₹1 lakh a year for life once income starts.",
    tax: TAX_STD,
  },
  "single-premium-endowment": {
    plainEnglish:
      "Pay once, stay insured for the whole term and collect a guaranteed maturity amount with bonuses at the end.",
    category: "Savings",
    entryAge: "90 days - 65 yrs",
    policyTerm: "10-25 years",
    premiumTerm: "Single premium",
    minCover: "₹50,000 sum assured",
    payoutStyle: "One lump sum at maturity + bonuses",
    bestFor: ["People with idle savings", "Those who forget renewals", "Gift policies for children"],
    notIdealFor: "Buyers who cannot spare a lump sum today.",
    example:
      "A single payment for ₹5 lakh cover over 15 years returns the sum assured plus accrued bonuses at maturity.",
    tax: TAX_STD,
  },
  "nav-jeevan-shree": {
    plainEnglish:
      "A newer endowment plan that adds a guaranteed amount to your policy every year, so the maturity value is visible from day one.",
    category: "Savings",
    entryAge: "18-55 yrs",
    policyTerm: "10-25 years",
    premiumTerm: "Limited or single",
    minCover: "₹2,00,000 sum assured",
    payoutStyle: "Sum assured + guaranteed additions at maturity",
    bestFor: ["Predictable savers", "People who dislike market risk", "Medium-term goals"],
    notIdealFor: "Investors who want equity-style returns.",
    example:
      "₹5 lakh sum assured accumulates guaranteed additions each policy year, paid together at maturity.",
    tax: TAX_STD,
  },
  "new-jeevan-sathi": {
    plainEnglish:
      "One policy covers husband and wife together; if one passes away the other stops paying premiums but the cover continues.",
    category: "Savings",
    entryAge: "18-50 yrs (both lives)",
    policyTerm: "10-25 years",
    premiumTerm: "Same as policy term",
    minCover: "₹5,00,000 sum assured",
    payoutStyle: "Death benefit on each life + maturity to the survivor",
    bestFor: ["Newly married couples", "Dual-income households", "Couples wanting one simple policy"],
    notIdealFor: "Single people or partners with very different cover needs.",
    example:
      "On ₹10 lakh joint cover, the family receives ₹10 lakh on the first death, premiums stop, and maturity is still paid later.",
    tax: TAX_STD,
  },
  "new-money-back-25": {
    plainEnglish:
      "The 25-year version of the money-back plan: cash comes back every five years and a larger balance waits at the end.",
    category: "Money Back",
    entryAge: "13-45 yrs",
    policyTerm: "25 years",
    premiumTerm: "20 years",
    minCover: "₹1,00,000 sum assured",
    payoutStyle: "15% at years 5, 10, 15, 20 + 40% & bonuses at 25",
    bestFor: ["Long-horizon savers", "Families planning school-to-college expenses"],
    notIdealFor: "Anyone who wants the money in under a decade.",
    example: "₹5 lakh cover returns ₹75,000 four times and pays ₹2 lakh plus bonuses at year 25.",
    tax: TAX_STD,
  },
  "bima-shree": {
    plainEnglish:
      "A high-value money-back plan for well-off families: guaranteed additions build up while cash instalments come back near the end of the term.",
    category: "Money Back",
    entryAge: "8-55 yrs",
    policyTerm: "14, 16, 18 or 20 years",
    premiumTerm: "Policy term minus 4 years",
    minCover: "₹10,00,000 sum assured",
    payoutStyle: "Survival benefits in later years + maturity with guaranteed additions",
    bestFor: ["Business owners", "High-income professionals", "Large-ticket savers"],
    notIdealFor: "Buyers who cannot commit to a ₹10 lakh minimum cover.",
    example:
      "₹20 lakh cover pays periodic survival benefits in the final years, then maturity with guaranteed additions and loyalty addition.",
    tax: TAX_STD,
  },
  "amrit-baal": {
    plainEnglish:
      "A child plan taken by a parent or grandparent that adds a guaranteed amount every year and hands the child a corpus when studies get expensive.",
    category: "Child",
    entryAge: "Child 0-13 yrs",
    policyTerm: "Until child is 18-25",
    premiumTerm: "5, 6, 7 years or single",
    minCover: "₹2,00,000 sum assured",
    payoutStyle: "Lump sum at maturity with guaranteed additions",
    bestFor: ["Young parents", "Grandparents gifting education money", "Single-premium gifting"],
    notIdealFor: "Families needing money before the child turns 18.",
    example:
      "₹5 lakh sum assured earns ₹80 per ₹1,000 every year, paid together when the child reaches the chosen age.",
    tax: TAX_STD,
  },
  "smart-pension": {
    plainEnglish:
      "A modern immediate annuity: hand over a lump sum and start receiving pension, with the flexibility to withdraw part of it later.",
    category: "Pension",
    entryAge: "18-100 yrs",
    policyTerm: "Lifelong annuity",
    premiumTerm: "Single premium",
    minCover: "₹1,00,000 purchase price",
    payoutStyle: "Monthly / quarterly / yearly pension for life",
    bestFor: ["Retirees with a PF or gratuity corpus", "Couples wanting joint pension", "Existing LIC policyholders (better rates)"],
    notIdealFor: "People who need the entire corpus back immediately.",
    example: "A ₹20 lakh purchase price can generate a guaranteed monthly pension for life, with return of purchase price to the nominee.",
    tax: "Annuity income is taxable as per your slab; purchase may qualify under Sec 80CCC.",
  },
  "yuva-term": {
    plainEnglish:
      "A low-cost pure term plan for young earners: very large cover for a small yearly premium, locked at a young age.",
    category: "Term",
    entryAge: "18-45 yrs",
    policyTerm: "10-40 years",
    premiumTerm: "Single, regular or limited",
    minCover: "₹50,00,000 sum assured",
    payoutStyle: "Death benefit only — no maturity amount",
    bestFor: ["First jobbers", "Young parents", "Anyone with a home loan"],
    notIdealFor: "People who want their premiums back at the end.",
    example: "A healthy 28-year-old can hold ₹1 crore cover for roughly the cost of a monthly dinner out.",
    tax: TAX_STD,
  },
  "bima-kavach": {
    plainEnglish:
      "Term protection with a refund: if you outlive the policy, the premiums you paid come back to you.",
    category: "Term",
    entryAge: "18-65 yrs",
    policyTerm: "10-40 years",
    premiumTerm: "Regular or limited",
    minCover: "₹5,00,000 sum assured",
    payoutStyle: "Death benefit during term + return of premiums on survival",
    bestFor: ["People who dislike 'wasting' term premiums", "Cautious first-time buyers"],
    notIdealFor: "Buyers who want the absolute lowest premium — pure term is cheaper.",
    example: "₹25 lakh cover for 25 years pays the family on death, or returns all premiums paid if you survive the term.",
    tax: TAX_STD,
  },
  "bima-lakshmi": {
    plainEnglish:
      "A savings plan made only for women, adding a guaranteed amount every year and paying cash benefits during the term itself.",
    category: "Savings",
    entryAge: "18-55 yrs (women only)",
    policyTerm: "13-20 years",
    premiumTerm: "Limited premium",
    minCover: "₹2,00,000 sum assured",
    payoutStyle: "Survival benefits during term + maturity with guaranteed additions",
    bestFor: ["Working women", "Homemakers building an independent corpus", "Women-headed households"],
    notIdealFor: "Male proposers — the plan is restricted to female lives.",
    example: "₹5 lakh sum assured earns guaranteed additions each year and pays cash benefits at fixed points during the term.",
    tax: TAX_STD,
  },
  "micro-bachat": {
    plainEnglish:
      "A small, no-medical policy for modest incomes: a low yearly premium buys real cover plus a maturity amount with a loyalty addition.",
    category: "Micro",
    entryAge: "18-55 yrs",
    policyTerm: "10-15 years",
    premiumTerm: "Same as policy term",
    minCover: "₹50,000 sum assured",
    payoutStyle: "Maturity lump sum + loyalty addition",
    bestFor: ["Daily-wage and small-shop families", "First-time policy buyers", "People who cannot do medicals"],
    notIdealFor: "Anyone needing cover above ₹2 lakh.",
    example: "₹1 lakh cover for 15 years costs a few hundred rupees a month and returns the sum assured plus loyalty addition.",
    tax: TAX_STD,
  },
  "jan-suraksha": {
    plainEnglish:
      "The simplest, cheapest LIC cover for a household — minimal paperwork, small premium, real protection for the family.",
    category: "Micro",
    entryAge: "18-55 yrs",
    policyTerm: "10-15 years",
    premiumTerm: "Same as policy term",
    minCover: "₹30,000 sum assured",
    payoutStyle: "Death benefit + small maturity amount",
    bestFor: ["Rural households", "Self-help group members", "Very tight budgets"],
    notIdealFor: "Families who need a large sum assured.",
    example: "A premium of a few hundred rupees a year keeps a modest but genuine cover alive for the household.",
    tax: TAX_STD,
  },
  "index-plus": {
    plainEnglish:
      "A unit-linked plan where your money follows Nifty index funds, with life cover attached and guaranteed additions credited to the fund.",
    category: "Market Linked",
    entryAge: "90 days - 60 yrs",
    policyTerm: "10-25 years",
    premiumTerm: "Regular premium",
    minCover: "7-10x annualised premium",
    payoutStyle: "Fund value at maturity; higher of fund value or sum assured on death",
    bestFor: ["Investors comfortable with market ups and downs", "Long horizons of 10+ years"],
    notIdealFor: "Anyone who needs a guaranteed maturity amount.",
    example: "₹1 lakh a year invested in an index fund option, with guaranteed additions credited from the sixth year onwards.",
    tax: TAX_STD,
  },
  "protection-plus": {
    plainEnglish:
      "A unit-linked plan that leans towards protection: higher life cover than a typical ULIP, with your premiums still invested in market funds.",
    category: "Market Linked",
    entryAge: "90 days - 60 yrs",
    policyTerm: "10-25 years",
    premiumTerm: "Regular premium",
    minCover: "Higher multiple of annualised premium",
    payoutStyle: "Fund value at maturity; sum assured plus fund value pattern on death",
    bestFor: ["Investors wanting cover and growth in one policy", "Mid-career earners"],
    notIdealFor: "Buyers who want the cheapest possible protection.",
    example: "Premiums buy both a larger sum assured and units in your chosen fund, switchable free of cost.",
    tax: TAX_STD,
  },
  siip: {
    plainEnglish:
      "A disciplined monthly or yearly investment plan with insurance built in — like an SIP that also protects your family.",
    category: "Market Linked",
    entryAge: "90 days - 65 yrs",
    policyTerm: "10-25 years",
    premiumTerm: "Regular premium",
    minCover: "7-10x annualised premium",
    payoutStyle: "Fund value at maturity; higher of fund value or sum assured on death",
    bestFor: ["Salaried investors", "People already doing SIPs", "Long-term wealth building"],
    notIdealFor: "Short horizons under 5 years — the lock-in applies.",
    example: "₹10,000 a month across four fund choices, with guaranteed additions credited from the sixth policy year.",
    tax: TAX_STD,
  },
  "nivesh-plus": {
    plainEnglish:
      "A one-time unit-linked investment: pay a single premium, choose your fund, and let it grow with life cover attached.",
    category: "Market Linked",
    entryAge: "90 days - 70 yrs",
    policyTerm: "10-25 years",
    premiumTerm: "Single premium",
    minCover: "1.25x or 10x single premium",
    payoutStyle: "Fund value at maturity; higher of fund value or sum assured on death",
    bestFor: ["Lump sums from bonuses or property sales", "Investors who dislike recurring commitments"],
    notIdealFor: "People who may need the money within the 5-year lock-in.",
    example: "A single ₹5 lakh investment allocated across chosen funds, with guaranteed additions credited to the fund value.",
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
