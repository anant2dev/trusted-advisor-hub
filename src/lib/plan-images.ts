import child from "@/assets/plans/child.jpg.asset.json";
import savings from "@/assets/plans/savings.jpg.asset.json";
import wholelife from "@/assets/plans/wholelife.jpg.asset.json";
import term from "@/assets/plans/term.jpg.asset.json";
import pension from "@/assets/plans/pension.jpg.asset.json";
import moneyback from "@/assets/plans/moneyback.jpg.asset.json";
import ulip from "@/assets/plans/ulip.jpg.asset.json";
import micro from "@/assets/plans/micro.jpg.asset.json";
import { assetUrl } from "./assets";

export type PlanImageKey =
  | "child" | "savings" | "wholelife" | "term"
  | "pension" | "moneyback" | "ulip" | "micro";

export const PLAN_IMAGES: Record<PlanImageKey, string> = {
  child: assetUrl(child.url),
  savings: assetUrl(savings.url),
  wholelife: assetUrl(wholelife.url),
  term: assetUrl(term.url),
  pension: assetUrl(pension.url),
  moneyback: assetUrl(moneyback.url),
  ulip: assetUrl(ulip.url),
  micro: assetUrl(micro.url),
};

export const PLAN_IMAGE_ALT: Record<PlanImageKey, string> = {
  child: "Illustration of a parent and child walking toward a school",
  savings: "Illustration of growing coin stacks beside a shield",
  wholelife: "Illustration of a family under a lifelong protective dome",
  term: "Illustration of a shield protecting a home and family",
  pension: "Illustration of a retired couple receiving steady income",
  moneyback: "Illustration of periodic coin payouts along a timeline",
  ulip: "Illustration of a rising market chart with a shield",
  micro: "Illustration of a woman holding savings with a shield behind",
};
