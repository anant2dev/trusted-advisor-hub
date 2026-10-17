import { describe, expect, it } from "vitest";
import { familySummary, milestoneYear, parseFamilyContext, shortlist, suggestedGoal, validHorizon, validTarget } from "./family-planner";

describe("family planning rules", () => {
  it("suggests a goal for all four stages", () => {
    expect(suggestedGoal("starting")).toBe("savings");
    expect(suggestedGoal("married")).toBe("protection");
    expect(suggestedGoal("children")).toBe("education");
    expect(suggestedGoal("retiring")).toBe("retirement");
  });
  it("allows a goal override independent of the stage suggestion", () => {
    expect(shortlist({ stage: "starting", goal: "protection", horizon: 10 }).map((p) => p.slug)).toEqual(["new-tech-term", "new-jeevan-amar"]);
  });
  it("accepts whole-year horizons from 1 through 40 only", () => {
    expect([1, 10, 40].every(validHorizon)).toBe(true);
    expect([0, 41, 1.5, NaN, Infinity].some(validHorizon)).toBe(false);
  });
  it("uses the chosen horizon, including after edits", () => {
    expect(milestoneYear({ stage: "children", goal: "education", horizon: 10 }, 2026)).toBe(2036);
    expect(milestoneYear({ stage: "children", goal: "education", horizon: 12 }, 2026)).toBe(2038);
  });
  it("never forces options for an unsupported short savings horizon", () => {
    expect(shortlist({ stage: "starting", goal: "savings", horizon: 3 })).toEqual([]);
  });
  it("only shows child-insured options for parents and not short horizons", () => {
    expect(shortlist({ stage: "children", goal: "education", horizon: 10 }).map((p) => p.slug)).toEqual(["jeevan-tarun"]);
    expect(shortlist({ stage: "starting", goal: "education", horizon: 10 })).toEqual([]);
    expect(shortlist({ stage: "children", goal: "education", horizon: 2 })).toEqual([]);
  });
  it("limits savings choices to catalogue term matches", () => {
    expect(shortlist({ stage: "starting", goal: "savings", horizon: 16 }).map((p) => p.slug)).toEqual(["bima-jyoti", "jeevan-labh"]);
    expect(shortlist({ stage: "starting", goal: "savings", horizon: 22 })).toEqual([]);
  });
  it("does not treat immediate pensions as distant accumulation policies", () => {
    expect(shortlist({ stage: "retiring", goal: "retirement", horizon: 2 })).toHaveLength(2);
    expect(shortlist({ stage: "retiring", goal: "retirement", horizon: 20 })).toEqual([]);
    expect(shortlist({ stage: "starting", goal: "retirement", horizon: 2 })).toEqual([]);
  });
  it("keeps target optional and rejects invalid amounts", () => {
    expect(validTarget(undefined)).toBe(true);
    expect(validTarget(1500000)).toBe(true);
    expect([-1, 0, NaN, Infinity, 100000001].some(validTarget)).toBe(false);
  });
  it("validates optional booking context and leaves old links intact", () => {
    expect(parseFamilyContext({ plan: "LIC Jeevan Tarun" })).toBeUndefined();
    expect(parseFamilyContext({ stage: "children", goal: "education", horizon: "10", target: "1500000" })).toEqual({ stage: "children", goal: "education", horizon: 10, target: 1500000 });
    expect(parseFamilyContext({ stage: "wrong", goal: "education", horizon: "10" })).toBeUndefined();
    expect(parseFamilyContext({ stage: "children", goal: "education", horizon: "41" })).toBeUndefined();
  });
  it("preserves goal, horizon and target in both outgoing summaries", () => {
    const input = { stage: "children" as const, goal: "education" as const, horizon: 10, target: 1500000 };
    expect(familySummary(input, "en")).toContain("Horizon: 10 years");
    expect(familySummary(input, "hi")).toContain("अवधि: 10 वर्ष");
    expect(familySummary(input, "en")).toContain("Child's education");
    expect(familySummary(input, "hi")).toContain("बच्चे की शिक्षा");
    expect(familySummary(input, "en")).toContain("₹15,00,000");
    expect(familySummary(input, "hi")).toContain("₹15,00,000");
    expect(familySummary(undefined, "en")).toBe("");
  });
});