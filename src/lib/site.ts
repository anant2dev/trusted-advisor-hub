export const WHATSAPP_NUMBER = "919837016351";
export const PHONE_DISPLAY = "+91 98370 16351";
export const EMAIL = "ramsinghrathore250@gmail.com";
export const ADVISOR_NAME = "Ram Singh Rathore";
export const ADDRESS = "Jawahar Nagar, Khandari Road, Agra, Uttar Pradesh";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/plans", label: "Plans" },
  { to: "/book-appointment", label: "Book Appointment" },
] as const;

export const PLANS = [
  {
    slug: "kanyadan",
    name: "LIC Kanyadan Plan",
    tag: "Most Recommended",
    tagline: "Child Education & Marriage Security",
    benefits: [
      "Designed for a daughter's secure future",
      "Premium waiver on unfortunate events",
      "Maturity aligned to marriage milestones",
    ],
  },
  {
    slug: "jeevan-anand",
    name: "LIC Jeevan Anand",
    tag: "Dual Benefit",
    tagline: "Lifetime Cover + Endowment",
    benefits: [
      "Endowment payout at policy term end",
      "Whole-life risk cover continues",
      "Loan facility & bonus participation",
    ],
  },
  {
    slug: "jeevan-umang",
    name: "LIC Jeevan Umang",
    tag: "Regular Income",
    tagline: "Guaranteed Whole-Life Income",
    benefits: [
      "8% guaranteed annual survival benefit",
      "Cover till age 100",
      "Lump sum on maturity to the family",
    ],
  },
  {
    slug: "jeevan-labh",
    name: "LIC Jeevan Labh",
    tag: "High Returns",
    tagline: "Limited Premium, Higher Maturity",
    benefits: [
      "Pay for fewer years, cover for longer",
      "Strong bonus accumulation",
      "Ideal for goal-based planning",
    ],
  },
] as const;

export const ALL_PLANS = [
  ...[
    { slug: "kanyadan", name: "LIC Kanyadan Plan", tag: "Most Recommended", tagline: "Child Education & Marriage Security",
      benefits: ["Designed for a daughter's secure future", "Premium waiver on unfortunate events", "Maturity aligned to marriage milestones"] },
    { slug: "jeevan-anand", name: "LIC Jeevan Anand", tag: "Dual Benefit", tagline: "Lifetime Cover + Endowment",
      benefits: ["Endowment payout at policy term end", "Whole-life risk cover continues", "Loan facility & bonus participation"] },
    { slug: "jeevan-umang", name: "LIC Jeevan Umang", tag: "Regular Income", tagline: "Guaranteed Whole-Life Income",
      benefits: ["8% guaranteed annual survival benefit", "Cover till age 100", "Lump sum on maturity to the family"] },
    { slug: "jeevan-labh", name: "LIC Jeevan Labh", tag: "High Returns", tagline: "Limited Premium, Higher Maturity",
      benefits: ["Pay for fewer years, cover for longer", "Strong bonus accumulation", "Ideal for goal-based planning"] },
    { slug: "new-jeevan-shanti", name: "LIC New Jeevan Shanti", tag: "Retirement", tagline: "Deferred Annuity Pension",
      benefits: ["Guaranteed lifelong annuity", "Single premium pension plan", "Joint-life option for couples"] },
    { slug: "saral-pension", name: "LIC Saral Pension", tag: "Immediate Income", tagline: "Immediate Annuity from Day One",
      benefits: ["Pension starts immediately", "100% return of purchase price option", "Standardised IRDAI product"] },
    { slug: "jeevan-akshay", name: "LIC Jeevan Akshay VII", tag: "Annuity", tagline: "Flexible Immediate Annuity",
      benefits: ["10 annuity options to choose", "Single-life or joint-life", "Loan facility after 3 months"] },
    { slug: "new-children-money-back", name: "LIC New Children's Money Back", tag: "Child Plan", tagline: "Education Milestone Payouts",
      benefits: ["Survival benefits at age 18, 20, 22", "Maturity at age 25", "Optional premium waiver rider"] },
    { slug: "jeevan-tarun", name: "LIC Jeevan Tarun", tag: "Child Plan", tagline: "Higher Education Planning",
      benefits: ["Flexible payout from age 20", "Strong bonus addition", "Premium for limited term"] },
    { slug: "bima-jyoti", name: "LIC Bima Jyoti", tag: "Guaranteed", tagline: "Guaranteed Additions Endowment",
      benefits: ["₹50 per ₹1000 GA each year", "Limited premium paying term", "Goal-based wealth creation"] },
    { slug: "bima-ratna", name: "LIC Bima Ratna", tag: "Money Back", tagline: "Guaranteed Money-Back Plan",
      benefits: ["Periodic survival benefits", "Guaranteed additions throughout", "Strong family protection"] },
    { slug: "dhan-sanchay", name: "LIC Dhan Sanchay", tag: "Wealth", tagline: "Savings + Insurance Combo",
      benefits: ["Income benefits + lump sum", "4 plan options to choose from", "Long-term wealth creation"] },
    { slug: "new-tech-term", name: "LIC New Tech-Term", tag: "Pure Term", tagline: "Online Pure Risk Cover",
      benefits: ["High sum assured at low premium", "Level / increasing options", "Online application, paperless"] },
    { slug: "new-jeevan-amar", name: "LIC New Jeevan Amar", tag: "Pure Term", tagline: "Offline Pure Term Cover",
      benefits: ["Two benefit options", "Single / regular / limited premium", "Special female-life rates"] },
    { slug: "saral-jeevan-bima", name: "LIC Saral Jeevan Bima", tag: "Standard Term", tagline: "Standardised Term Plan",
      benefits: ["IRDAI-mandated simple term", "Sum assured up to ₹25 lakh", "No exclusions except suicide (1 yr)"] },
    { slug: "jeevan-azad", name: "LIC Jeevan Azad", tag: "Limited Premium", tagline: "Short-Pay Endowment",
      benefits: ["Pay 8 years less than term", "Guaranteed maturity", "Family income on absence"] },
    { slug: "new-endowment", name: "LIC New Endowment Plan", tag: "Classic", tagline: "Time-Tested Savings + Protection",
      benefits: ["Bonus participation", "Loan & surrender facility", "Family protection + maturity lump sum"] },
    { slug: "new-money-back-20", name: "LIC New Money Back 20 Years", tag: "Money Back", tagline: "20-Year Periodic Returns",
      benefits: ["20% sum assured every 5 years", "Maturity + accrued bonuses", "Risk cover throughout term"] },
  ],
] as const;

export type Trophy = {
  src: string;
  title: string;
  year?: string;
  caption: string;
};