// Tiny, dependency-free A/B test for the homepage hero.
// Sticky per visitor (localStorage), SSR-safe, reported to Vercel Analytics.

import { track } from "@vercel/analytics";

export type HeroVariant = "a" | "b";

export const HERO_COPY: Record<
  HeroVariant,
  { lead: string; highlight: string; tail: string; sub: string; primaryCta: string }
> = {
  a: {
    lead: "Securing Families for Over",
    highlight: "20 Years",
    tail: "with Trust & Transparency.",
    sub: "Expert financial planning and life insurance solutions tailored to your family's future — honest advice, zero pressure, and absolute privacy.",
    primaryCta: "Find My Plan in 60 Seconds",
  },
  b: {
    lead: "Know Exactly Which LIC Plan",
    highlight: "Fits Your Family",
    tail: "— in under a minute.",
    sub: "Answer six honest questions and see the two plans that actually match your goal, age and budget. No sign-up, no sales call, nothing stored.",
    primaryCta: "Start the Free Plan Finder",
  },
};

const KEY = "ab:hero";

export function getHeroVariant(): HeroVariant {
  if (typeof window === "undefined") return "a";
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "a" || saved === "b") return saved;
    const assigned: HeroVariant = Math.random() < 0.5 ? "a" : "b";
    localStorage.setItem(KEY, assigned);
    return assigned;
  } catch {
    return "a";
  }
}

export function trackAb(event: string, variant: HeroVariant, extra?: Record<string, string>) {
  try {
    track(event, { variant, ...extra });
  } catch { /* analytics is best-effort */ }
}