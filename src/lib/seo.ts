// Structured-data helpers (schema.org JSON-LD) for search + AI answer engines.
import { ADDRESS, ADVISOR_NAME, EMAIL, PHONE_DISPLAY, ALL_PLANS } from "./site";
import { PLAN_DETAILS } from "./plan-details";

export const SITE_URL = "https://bima-suraksha.vercel.app";

const TEL = "+91-9837016351";

export const ORG_ID = `${SITE_URL}/#organization`;

export function ldScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": ORG_ID,
    name: `Bima Suraksha — ${ADVISOR_NAME}, LIC Advisor`,
    url: `${SITE_URL}/`,
    telephone: TEL,
    email: EMAIL,
    areaServed: ["Agra", "Uttar Pradesh", "India"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jawahar Nagar, Khandari Road",
      addressLocality: "Agra",
      addressRegion: "Uttar Pradesh",
      postalCode: "282002",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 27.1975, longitude: 78.0081 },
    openingHours: "Mo-Sa 09:00-20:00",
    priceRange: "Free consultation",
  };
}

export function personLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: ADVISOR_NAME,
    jobTitle: "LIC of India Insurance Advisor",
    telephone: TEL,
    email: EMAIL,
    url: `${SITE_URL}/about`,
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "Life insurance",
      "LIC of India policies",
      "Retirement and pension planning",
      "Child education planning",
      "Term insurance",
    ],
    address: { "@type": "PostalAddress", addressLocality: "Agra", addressCountry: "IN" },
    description: `${ADVISOR_NAME} is a Distinguished DM Club member and LIC of India advisor with 20+ years of experience, based at ${ADDRESS}. Reachable on ${PHONE_DISPLAY}.`,
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}

/** Every LIC plan as a schema.org ItemList of financial products. */
export function planCatalogLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "LIC of India plans advised by " + ADVISOR_NAME,
    numberOfItems: ALL_PLANS.length,
    itemListElement: ALL_PLANS.map((p, i) => {
      const d = PLAN_DETAILS[p.slug];
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "FinancialProduct",
          name: p.name,
          category: d?.category ?? "Life Insurance",
          description: d?.plainEnglish ?? p.tagline,
          provider: { "@type": "Organization", name: "Life Insurance Corporation of India" },
          brokerageAccount: undefined,
          url: `${SITE_URL}/plans#${p.slug}`,
        },
      };
    }),
  };
}

/** Marks the key answer text as speakable for voice assistants. */
export function speakableLd(paths: string[] = ["h1", ".seo-answer"]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: { "@type": "SpeakableSpecification", cssSelector: paths },
    url: `${SITE_URL}/`,
  };
}

/**
 * Short Q&A block for AI answer engines.
 * Emitted as FAQPage (not QAPage): QAPage requires a single user-submitted
 * question with answerCount/upvoteCount, which Google flags as invalid here.
 */
export function qaLd(items: { q: string; a: string }[]) {
  return faqLd(items);
}
