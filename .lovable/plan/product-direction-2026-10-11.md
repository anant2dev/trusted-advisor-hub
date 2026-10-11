- PRD: Bima Suraksha Family Life-stage Planner

## Product direction

Ek standout interactive feature: **Family Life-stage Planner**. Visitor apni family ka current stage aur next milestone select kare, phir ek personal planning timeline aur relevant LIC plan shortlist dekhe.

**Aapke choices:** premium advisory desk presentation, family planning primary goal, aur pehle version mein sirf ek polished feature. Protection check, policy simulator aur comparison desk future phases mein rahenge—abhi unke separate tools nahi banenge.

## Visitor journey

1. **Family stage:** starting out, married, raising children, or approaching retirement.
2. **Priority milestone:** family protection, child's education, long-term savings, or retirement; stage se suggested goal aaye, lekin visitor change kar sake.
3. **Planning horizon:** milestone kitne saal door hai? Optional target amount sirf visitor ka apna goal hoga, policy return ya quote nahi.
4. **Personal roadmap:** current stage → selected goal year → practical planning checklist. Inputs edit karne par roadmap update ho.
5. **Explore relevant plans:** up to two appropriate catalogue options, each with why it may fit, premium/payment structure, payout style, limitations, and a link to details. Missing verified data ko invent nahi karenge.
6. **Discuss my family plan:** selected plan existing booking form mein preselect ho; WhatsApp/email draft mein family stage, goal and horizon include ho. Visitor khud review karke send kare.

## What makes it interesting

- A family milestone timeline is the central experience, not another generic quiz or a new homepage banner.
- Stage selection changes the roadmap and planning checklist, making the outcome feel personal.
- Results explain trade-offs in plain Hindi/English, reducing unnecessary calls while still keeping the advisor available.
- Restart, back and edit actions remain available; a visitor is never trapped in the flow.

## Visual requirements

- Premium advisory desk: clear hierarchy, restrained blue/yellow accents from existing tokens, structured information, and generous readable spacing.
- Preserve current logo, fonts, theme switch, custom effects and existing pages; no whole-site redesign.
- Use existing illustrations where appropriate, Iconsax icons and shadcn controls. No globe, 3D blob, animated blur or additional particle backgrounds.
- Hindi/English parity for every new label, result, validation message and booking summary; current language remains synchronized.
- Dark/light readability, keyboard operation, visible focus and reduced-motion support. Subtle transitions only; no mandatory sound.

## Boundaries and accuracy

- Educational planning aid, not financial advice, an official LIC portal, a premium quotation or an eligibility guarantee.
- No invented maturity amounts, returns, bonuses, affordability scores or “99% fit” claims.
- Match explanations use reviewed catalogue facts; exact age eligibility and underwriting are confirmed by the advisor. Broad age bands in the existing quiz are not proof of eligibility.
- If there is no defensible match, show a consultation path rather than force two recommendations.
- No login, saved customer profiles, automatic messages or collection of phone/email inside the planner. Inputs stay in the active session and leave the site only when the visitor chooses the existing contact flow.

## First-release scope

- One new usable planner page, reachable from the existing Plan Finder page without overcrowding the header.
- A complete stage → milestone → horizon → roadmap → plan details/booking flow.
- Existing Plan Finder and catalogue continue working unchanged.
- No account system, protection-gap calculator, policy cash-flow simulator, side-by-side comparison desk, PDF export or AI chat in this release.

## Technical approach

- TanStack route `/family-planner`, with page-specific metadata and sitemap/agent-resource entries following existing conventions.
- Keep stage/goal matching and timeline logic in a small pure module with a reviewed, explicit plan mapping; do not silently change the existing quiz scorer.
- Reuse current language provider, theme tokens, plan data/assets, details presentation and booking completion paths.
- Keep booking-context additions optional so older booking links remain compatible. Record structural decisions in `AGENTS.md` during implementation.
- No new server functionality or customer-data storage required for this release.

## Acceptance and verification

- Each supported family stage has a goal suggestion that can be overridden.
- Selected milestone year follows the visitor's entered horizon; edits and restart produce consistent results.
- Tests cover stage/goal mapping, horizon validation, no forced matches, and optional booking-summary handoff with concrete inputs.
- Hindi/English results preserve the same plan facts and selected goal.
- End-to-end checks complete a real entered scenario, inspect the roadmap, open plan details and confirm booking preselection plus the WhatsApp/email draft.
- Check desktop and small-screen layouts in both themes, keyboard use, reduced motion, image proportions and no overlapping floating controls.
- Verify metadata, new public page, sitemap and markdown/agent links; run relevant tests and inspect preview build/runtime signals.

## Delivery sequence

1. Build and test the pure planning logic and bilingual content.
2. Build the planner and connect plan details plus booking summary.
3. Add discovery links and machine-readable coverage.
4. Verify the complete visitor flow and accessibility.

## Later phases—not part of this approval

- **Family protection check:** needs an explicit, disclosed cover-needs formula and assumptions.
- **Policy story simulator:** needs verified plan-specific benefit calculations and a clear guaranteed/illustrative split.
- **Comparison desk:** can follow once plan fact coverage is audited for consistent comparisons.

Approving this PRD starts implementation of the Family Life-stage Planner only.

Also we need to make the other features after this is made if credits are left ..... 