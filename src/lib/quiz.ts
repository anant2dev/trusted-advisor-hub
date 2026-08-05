// Eligibility + goal quiz engine.
// Pure scoring logic — no UI, no side effects. Each answer contributes weights
// to plan slugs; the top scoring slugs become the recommendation.

import { ALL_PLANS } from "./site";
import { PLAN_DETAILS } from "./plan-details";

export type QuizOption = {
  id: string;
  label: string;
  hint?: string;
  /** slug -> weight */
  weights: Record<string, number>;
};

export type QuizQuestion = {
  id: string;
  question: string;
  helper: string;
  options: QuizOption[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "goal",
    question: "What is the main thing you want this policy to do?",
    helper: "Pick the goal that matters most right now — we optimise for it.",
    options: [
      {
        id: "child",
        label: "Secure my child's education or marriage",
        hint: "Money arrives at a fixed future milestone",
        weights: { kanyadan: 6, "new-children-money-back": 5, "jeevan-tarun": 5, "bima-jyoti": 2 },
      },
      {
        id: "protect",
        label: "Protect my family if something happens to me",
        hint: "Maximum cover, lowest premium",
        weights: { "new-tech-term": 6, "new-jeevan-amar": 5, "saral-jeevan-bima": 4, "jeevan-anand": 2 },
      },
      {
        id: "save",
        label: "Save safely and get a guaranteed lump sum",
        hint: "Disciplined savings with life cover attached",
        weights: { "bima-jyoti": 6, "jeevan-labh": 5, "new-endowment": 4, "jeevan-azad": 4 },
      },
      {
        id: "income",
        label: "Create a regular income stream",
        hint: "Money back periodically instead of one lump sum",
        weights: { "jeevan-umang": 6, "new-money-back-20": 5, "bima-ratna": 4, "dhan-sanchay": 4 },
      },
      {
        id: "retire",
        label: "Plan my retirement / pension",
        hint: "Lifelong annuity after you stop working",
        weights: { "new-jeevan-shanti": 6, "saral-pension": 5, "jeevan-akshay": 5, "jeevan-umang": 2 },
      },
    ],
  },
  {
    id: "age",
    question: "How old is the person to be insured?",
    helper: "Entry age decides which plans you are actually eligible for.",
    options: [
      { id: "0-17", label: "Under 18 (a child)", weights: { "jeevan-tarun": 5, "new-children-money-back": 5, kanyadan: 3 } },
      { id: "18-30", label: "18 – 30 years", weights: { "new-tech-term": 3, "jeevan-labh": 3, "jeevan-umang": 3, "bima-jyoti": 2 } },
      { id: "31-45", label: "31 – 45 years", weights: { "jeevan-anand": 3, "jeevan-labh": 3, "new-tech-term": 2, "bima-ratna": 2 } },
      { id: "46-55", label: "46 – 55 years", weights: { "new-endowment": 3, "jeevan-azad": 2, "new-jeevan-shanti": 3, "dhan-sanchay": 2 } },
      { id: "56+", label: "56 years and above", weights: { "saral-pension": 5, "jeevan-akshay": 5, "new-jeevan-shanti": 4, "new-tech-term": -4 } },
    ],
  },
  {
    id: "horizon",
    question: "When would you like the money back?",
    helper: "Longer horizons allow stronger bonus accumulation.",
    options: [
      { id: "now", label: "Immediately — I want income from day one", weights: { "saral-pension": 6, "jeevan-akshay": 5, "new-jeevan-shanti": 2 } },
      { id: "5-10", label: "In 5 – 10 years", weights: { "new-money-back-20": 3, "bima-ratna": 3, "dhan-sanchay": 3, "jeevan-azad": 2 } },
      { id: "10-20", label: "In 10 – 20 years", weights: { "jeevan-labh": 4, "bima-jyoti": 3, kanyadan: 3, "jeevan-tarun": 3 } },
      { id: "20+", label: "After 20 years / lifelong cover", weights: { "jeevan-anand": 4, "jeevan-umang": 4, "new-endowment": 3 } },
    ],
  },
  {
    id: "budget",
    question: "Roughly how much can you set aside each year?",
    helper: "Be honest — a premium you can sustain beats a bigger one you cannot.",
    options: [
      { id: "u25k", label: "Under ₹25,000", weights: { "saral-jeevan-bima": 4, "new-tech-term": 4, "new-endowment": 2 } },
      { id: "25-60k", label: "₹25,000 – ₹60,000", weights: { kanyadan: 3, "jeevan-labh": 3, "bima-jyoti": 3, "jeevan-tarun": 2 } },
      { id: "60k-1.5l", label: "₹60,000 – ₹1.5 lakh", weights: { "jeevan-anand": 3, "jeevan-umang": 3, "dhan-sanchay": 3, "bima-ratna": 3 } },
      { id: "1.5l+", label: "Above ₹1.5 lakh (or a one-time amount)", weights: { "new-jeevan-shanti": 4, "jeevan-akshay": 3, "jeevan-umang": 3, "dhan-sanchay": 2 } },
    ],
  },
  {
    id: "priority",
    question: "If you had to choose one, which matters more?",
    helper: "Every plan trades protection against returns somewhere.",
    options: [
      { id: "cover", label: "The biggest possible life cover", weights: { "new-tech-term": 6, "new-jeevan-amar": 4, "saral-jeevan-bima": 3 } },
      { id: "guarantee", label: "Guaranteed, predictable money back", weights: { "bima-jyoti": 5, "new-money-back-20": 4, "jeevan-azad": 3, "saral-pension": 3 } },
      { id: "both", label: "A sensible balance of both", weights: { "jeevan-anand": 5, "jeevan-labh": 4, "new-endowment": 3, "bima-ratna": 3 } },
    ],
  },
  {
    id: "dependents",
    question: "Who depends on your income today?",
    helper: "This shapes how much cover the family actually needs.",
    options: [
      { id: "kids", label: "Young children", weights: { kanyadan: 4, "jeevan-tarun": 3, "new-tech-term": 3, "new-children-money-back": 3 } },
      { id: "spouse", label: "Spouse / partner", weights: { "jeevan-anand": 3, "new-tech-term": 2, "new-jeevan-shanti": 2 } },
      { id: "parents", label: "Elderly parents", weights: { "jeevan-umang": 3, "new-money-back-20": 2, "saral-pension": 2 } },
      { id: "none", label: "Nobody — this is purely for me", weights: { "bima-jyoti": 3, "jeevan-akshay": 3, "dhan-sanchay": 2, "new-tech-term": -2 } },
    ],
  },
];

export type QuizAnswers = Record<string, string>;

export type Recommendation = {
  slug: string;
  name: string;
  tagline: string;
  tag: string;
  benefits: readonly string[];
  score: number;
  /** 0–100 confidence relative to the best possible score. */
  match: number;
  reasons: string[];
};

const PLAN_BY_SLUG = new Map(ALL_PLANS.map((p) => [p.slug, p]));

export function scoreQuiz(answers: QuizAnswers): Recommendation[] {
  const totals = new Map<string, number>();
  const reasons = new Map<string, string[]>();

  for (const q of QUIZ_QUESTIONS) {
    const chosenId = answers[q.id];
    if (!chosenId) continue;
    const option = q.options.find((o) => o.id === chosenId);
    if (!option) continue;
    for (const [slug, weight] of Object.entries(option.weights)) {
      totals.set(slug, (totals.get(slug) ?? 0) + weight);
      if (weight >= 4) {
        const list = reasons.get(slug) ?? [];
        list.push(option.label);
        reasons.set(slug, list);
      }
    }
  }

  const ranked = [...totals.entries()]
    .filter(([slug, score]) => score > 0 && PLAN_BY_SLUG.has(slug))
    .sort((a, b) => b[1] - a[1]);

  const best = ranked[0]?.[1] ?? 1;

  return ranked.slice(0, 2).map(([slug, score]) => {
    const plan = PLAN_BY_SLUG.get(slug)!;
    return {
      slug,
      name: plan.name,
      tagline: plan.tagline,
      tag: plan.tag,
      benefits: plan.benefits,
      score,
      match: Math.min(99, Math.round((score / best) * 92) + 7),
      reasons: (reasons.get(slug) ?? []).slice(0, 3),
    };
  });
}

export function planDetail(slug: string) {
  return PLAN_DETAILS[slug];
}
