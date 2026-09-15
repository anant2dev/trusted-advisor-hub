/**
 * Markdown representations of the site's public pages, served through
 * `Accept: text/markdown` content negotiation (acceptmarkdown.com) and at
 * `<path>.md` URLs. Keeps agent-facing copy in one place.
 */

export const SITE_URL = "https://bima-suraksha.vercel.app";

const CONTACT_BLOCK = `**Advisor:** Ram Singh Rathore — LIC of India authorized agent (IRDAI licensed)
**Phone / WhatsApp:** +91 98370 16351
**Email:** ramsinghrathore250@gmail.com
**Address:** Jawahar Nagar, Khandari Road, Agra, Uttar Pradesh 282002, India
**Hours:** Mon–Sat 09:00–20:00 IST, Sunday by appointment`;

const FOOTER = `
---

Machine-readable index: [/llms.txt](${SITE_URL}/llms.txt) · [/llms-full.txt](${SITE_URL}/llms-full.txt) · [/sitemap.xml](${SITE_URL}/sitemap.xml)
Every page is also available as Markdown: send \`Accept: text/markdown\` or append \`.md\` to the path.
`;

export const MARKDOWN_PAGES: Record<string, string> = {
  "/": `# Bima Suraksha — Ram Singh Rathore, LIC Advisor in Agra

Life insurance advisory for LIC of India policies, run by Ram Singh Rathore, a
Distinguished DM Club member with 20+ years of experience who has helped protect
1000+ families. Consultations are free and carry no obligation.

${CONTACT_BLOCK}

## What this site offers

- Plain-English explanations of 18+ LIC plans: entry age, policy term, minimum
  cover, payout style, worked examples, tax notes and honest "not ideal for" caveats.
- A free 6-question Plan Finder quiz that scores every plan and returns the top 2 matches.
- Direct booking of a free consultation over WhatsApp, phone or email. No data is stored.

## Pages

- [Home](${SITE_URL}/) — overview, achievements, featured plans, process.
- [About](${SITE_URL}/about) — background, track record, awards.
- [LIC Plans](${SITE_URL}/plans) — full catalogue with eligibility and examples.
- [Plan Finder](${SITE_URL}/plan-finder) — 60-second quiz, top 2 recommendations.
- [Book Appointment](${SITE_URL}/book-appointment) — free consultation request.
- [Contact](${SITE_URL}/contact) — phone, WhatsApp, email, office address, map.
- [Privacy](${SITE_URL}/privacy) — what is and is not collected.
${FOOTER}`,

  "/about": `# About Ram Singh Rathore — LIC Advisor, Agra

Ram Singh Rathore is an IRDAI-licensed agent of the Life Insurance Corporation of
India, based in Agra, Uttar Pradesh, with more than 20 years of continuous
advisory practice and Distinguished DM Club membership.

## Track record

- 20+ years advising families on LIC life insurance, child, pension and term plans.
- 1000+ families covered across India, plus NRI clients served remotely.
- Multiple LIC club and performance awards; claim and servicing support after purchase.

## How he works

Every recommendation starts with the family's goal — education, retirement income,
income replacement or disciplined savings — not with a product. Plans are explained
in plain language, including what each plan is *not* good for.

${CONTACT_BLOCK}
${FOOTER}`,

  "/plans": `# LIC Plans Catalogue

Plain-English breakdowns of LIC of India policies across categories: child plans,
endowment and savings, whole life, term insurance, pension and annuity, money-back,
ULIPs and micro-insurance.

Each plan entry lists: who it suits, entry age and policy term, minimum sum assured,
premium payment style, payout pattern, a worked example, tax treatment notes, and
an honest "not ideal for" section. An insurance jargon glossary accompanies the list.

Browse: [${SITE_URL}/plans](${SITE_URL}/plans)
Unsure which plan fits? Use the quiz: [${SITE_URL}/plan-finder](${SITE_URL}/plan-finder)

${CONTACT_BLOCK}
${FOOTER}`,

  "/plan-finder": `# LIC Plan Finder Quiz

A free, 6-question quiz (about 60 seconds) that scores every LIC plan in the
catalogue against the visitor's goal, age, horizon, budget and risk comfort, then
returns the top two matches with eligibility details and caveats.

- No sign-up, no account, nothing stored — scoring runs in the browser.
- The chosen plan is pre-selected when moving on to book a consultation.

Start: [${SITE_URL}/plan-finder](${SITE_URL}/plan-finder)

${CONTACT_BLOCK}
${FOOTER}`,

  "/book-appointment": `# Book a Free LIC Consultation

Request a free, no-obligation consultation with Ram Singh Rathore. The booking form
composes a WhatsApp or email message on the visitor's own device — there is no
database, CRM or lead store behind it.

Ways to reach out:

1. WhatsApp: +91 98370 16351 (fastest)
2. Phone: +91 98370 16351, Mon–Sat 09:00–20:00 IST
3. Email: ramsinghrathore250@gmail.com
4. In person: Jawahar Nagar, Khandari Road, Agra, Uttar Pradesh 282002

Book: [${SITE_URL}/book-appointment](${SITE_URL}/book-appointment)
${FOOTER}`,

  "/contact": `# Contact Ram Singh Rathore, LIC Advisor

${CONTACT_BLOCK}

Languages: Hindi and English. NRI clients are served remotely over WhatsApp, email
and video call. Consultations are free; there is no obligation to buy.

Best channel by need:

- Quick question about a plan → WhatsApp +91 98370 16351
- Premium illustration or document request → email ramsinghrathore250@gmail.com
- Claim or policy servicing help → phone during office hours
- Full review meeting → [book a consultation](${SITE_URL}/book-appointment)
${FOOTER}`,

  "/privacy": `# Privacy Policy

This site does not run a database, CRM or lead store. It collects no accounts and
no payment information.

- **Forms:** the booking and contact forms build a WhatsApp or email message on the
  visitor's own device. Nothing is submitted to a server owned by this site.
- **Quiz:** Plan Finder scoring runs entirely in the browser; answers are not transmitted.
- **Preferences:** language and theme choices are stored in the browser's local storage.
- **Analytics:** aggregate, privacy-friendly traffic and performance measurement only;
  no selling or sharing of personal data, and no advertising profiles.
- **Policy paperwork** shared directly with the advisor is handled under LIC of India
  and IRDAI rules and is never used for marketing.

Requests for correction or deletion: ramsinghrathore250@gmail.com
${FOOTER}`,
};

export const NOT_FOUND_MARKDOWN = `# 404 — Page not found

That path does not exist on ${SITE_URL}.

## Where to look next

- [Home](${SITE_URL}/) — advisory overview
- [About](${SITE_URL}/about) — advisor background and credentials
- [LIC Plans](${SITE_URL}/plans) — full plan catalogue
- [Plan Finder](${SITE_URL}/plan-finder) — 60-second plan recommendation quiz
- [Book Appointment](${SITE_URL}/book-appointment) — free consultation
- [Contact](${SITE_URL}/contact) — phone, WhatsApp, email, address
- [Privacy](${SITE_URL}/privacy) — data practices

## Machine-readable index

- [/llms.txt](${SITE_URL}/llms.txt) — site summary and when to use this site
- [/llms-full.txt](${SITE_URL}/llms-full.txt) — full content dump
- [/sitemap.xml](${SITE_URL}/sitemap.xml) — canonical URL list

Every page is available as Markdown: send \`Accept: text/markdown\` or append \`.md\`.
`;

/** True when the client explicitly prefers markdown over HTML. */
export function wantsMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  return /\btext\/markdown\b/i.test(accept);
}

/** Resolves a request path (with or without a `.md` suffix) to a markdown page. */
export function resolveMarkdownPath(pathname: string): string | null {
  let p = pathname.replace(/\/+$/, "") || "/";
  if (p.endsWith(".md")) {
    p = p.slice(0, -3) || "/";
    if (p === "/index") p = "/";
  }
  return p in MARKDOWN_PAGES ? p : null;
}

export function markdownResponse(body: string, status = 200): Response {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      vary: "Accept, Accept-Encoding",
      "cache-control": "public, max-age=3600",
    },
  });
}
