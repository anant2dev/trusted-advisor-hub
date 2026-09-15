import { createFileRoute, Link } from "@tanstack/react-router";
import { PageTransition } from "@/components/site/PageTransition";
import { FadeIn } from "@/components/reactbits/FadeIn";
import { EMAIL } from "@/lib/site";
import { ldScript, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy · Bima Suraksha LIC Advisory" },
      {
        name: "description",
        content:
          "How this site handles data: no database, no CRM, no lead store. Forms compose a WhatsApp or email message on your own device, and the plan quiz runs in your browser.",
      },
      { property: "og:title", content: "Privacy Policy · Bima Suraksha" },
      {
        property: "og:description",
        content: "No database, no CRM, no lead store. Read exactly what is and is not collected.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy · Bima Suraksha" },
      {
        name: "twitter:description",
        content: "No database, no CRM, no lead store. What is and is not collected.",
      },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/privacy` },
      { rel: "alternate", type: "text/markdown", href: `${SITE_URL}/privacy.md` },
    ],
    scripts: [
      ldScript(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]),
      ),
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { lang } = useLang();
  const hi = lang === "hi";

  const sections = hi
    ? [
        ["फ़ॉर्म", "बुकिंग और संपर्क फ़ॉर्म आपके अपने डिवाइस पर व्हाट्सएप या ईमेल संदेश बनाते हैं। कोई जानकारी इस साइट के सर्वर पर नहीं भेजी जाती।"],
        ["प्लान फाइंडर क्विज़", "स्कोरिंग पूरी तरह आपके ब्राउज़र में चलती है; आपके उत्तर कहीं संग्रहीत या प्रेषित नहीं होते।"],
        ["प्राथमिकताएँ", "भाषा और थीम का चुनाव केवल आपके ब्राउज़र के लोकल स्टोरेज में रहता है।"],
        ["विश्लेषण", "केवल सामूहिक, गोपनीयता-अनुकूल ट्रैफ़िक और प्रदर्शन माप। कोई विज्ञापन प्रोफ़ाइल नहीं, कोई डेटा बिक्री नहीं।"],
        ["पॉलिसी दस्तावेज़", "सलाहकार को सीधे दिए गए दस्तावेज़ एलआईसी तथा IRDAI नियमों के अनुसार संभाले जाते हैं और विपणन के लिए कभी उपयोग नहीं होते।"],
      ]
    : [
        [
          "Forms",
          "The booking and contact forms compose a WhatsApp or email message on your own device. Nothing is submitted to a server owned by this site, and there is no database, CRM or lead store behind the buttons.",
        ],
        [
          "Plan Finder quiz",
          "Scoring runs entirely inside your browser. Your answers are never transmitted, logged or associated with you, and closing the tab discards them.",
        ],
        [
          "Preferences",
          "Your language and light/dark theme choices are kept in your browser's local storage so the site remembers them on your next visit. They never leave your device.",
        ],
        [
          "Analytics",
          "Aggregate, privacy-friendly traffic and performance measurement only. No advertising profiles are built, and no personal data is sold or shared with advertisers.",
        ],
        [
          "Policy paperwork",
          "Documents you share directly with the advisor during a consultation are handled under LIC of India and IRDAI rules, used only to service your policy, and never used for marketing.",
        ],
        [
          "Your choices",
          "You can ask for correction or deletion of anything you shared with the advisor at any time by writing to the email address below.",
        ],
      ];

  return (
    <PageTransition>
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {hi ? "गोपनीयता" : "Privacy"}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            {hi ? "गोपनीयता नीति" : "Privacy Policy"}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {hi
              ? "यह साइट कोई डेटाबेस, सीआरएम या लीड स्टोर नहीं चलाती। कोई खाता नहीं बनता और कोई भुगतान जानकारी नहीं ली जाती।"
              : "This site does not run a database, CRM or lead store. It creates no accounts and collects no payment information. Below is exactly what happens with anything you type here."}
          </p>
        </FadeIn>

        <div className="mt-10 space-y-8">
          {sections.map(([title, body]) => (
            <div key={title}>
              <h2 className="text-lg font-bold text-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-lg font-bold text-foreground">{hi ? "संपर्क" : "Contact"}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {hi ? "गोपनीयता से जुड़े प्रश्नों के लिए: " : "Privacy questions: "}
          <a href={`mailto:${EMAIL}`} className="font-semibold text-foreground underline">
            {EMAIL}
          </a>{" "}
          ·{" "}
          <Link to="/contact" className="font-semibold text-foreground underline">
            {hi ? "संपर्क पृष्ठ" : "Contact page"}
          </Link>
        </p>
      </section>
    </PageTransition>
  );
}
