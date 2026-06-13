export const WHATSAPP_NUMBER = "919999999999"; // TODO: replace with advisor number
export const EMAIL = "advisor@example.com"; // TODO: replace with advisor email
export const ADVISOR_NAME = "Shri Advisor Ji";

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