import { createFileRoute, Link } from "@tanstack/react-router";
import { Call, Sms, Location, Clock, Whatsapp, ArrowRight } from "iconsax-react";
import { FadeIn } from "@/components/reactbits/FadeIn";
import { PageTransition } from "@/components/site/PageTransition";
import { TrustBadges } from "@/components/site/TrustBadges";
import { ADDRESS, ADVISOR_NAME, EMAIL, PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/lib/site";
import { ldScript, organizationLd, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ram Singh Rathore · LIC Advisor in Agra" },
      {
        name: "description",
        content:
          "Reach Ram Singh Rathore, LIC of India advisor in Agra: phone, WhatsApp, email and office address. Free consultations, Mon–Sat 9am–8pm IST, Hindi and English.",
      },
      { property: "og:title", content: "Contact · Ram Singh Rathore, LIC Advisor" },
      {
        property: "og:description",
        content:
          "Phone, WhatsApp, email and office address for free LIC consultations in Agra and remotely across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact · Ram Singh Rathore, LIC Advisor" },
      {
        name: "twitter:description",
        content: "Phone, WhatsApp, email and office address for free LIC consultations.",
      },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/contact` },
      { rel: "alternate", type: "text/markdown", href: `${SITE_URL}/contact.md` },
    ],
    scripts: [
      ldScript(organizationLd()),
      ldScript(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLang();
  const hi = lang === "hi";
  const tel = `+${WHATSAPP_NUMBER}`;

  const channels = [
    {
      icon: <Whatsapp size={22} variant="Bold" color="#FFC93C" />,
      title: hi ? "व्हाट्सएप" : "WhatsApp",
      value: PHONE_DISPLAY,
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      note: hi ? "सबसे तेज़ जवाब — प्लान पर कोई भी सवाल।" : "Fastest reply — any question about a plan.",
    },
    {
      icon: <Call size={22} variant="Bold" color="#FFC93C" />,
      title: hi ? "फ़ोन" : "Phone",
      value: PHONE_DISPLAY,
      href: `tel:${tel}`,
      note: hi ? "सोम–शनि, सुबह 9 से रात 8 बजे (IST)।" : "Mon–Sat, 9:00am to 8:00pm IST.",
    },
    {
      icon: <Sms size={22} variant="Bold" color="#FFC93C" />,
      title: hi ? "ईमेल" : "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      note: hi ? "प्रीमियम इलस्ट्रेशन और दस्तावेज़ों के लिए।" : "For premium illustrations and documents.",
    },
    {
      icon: <Location size={22} variant="Bold" color="#FFC93C" />,
      title: hi ? "कार्यालय" : "Office",
      value: ADDRESS,
      href: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
      note: hi ? "आगरा, उत्तर प्रदेश 282002 — बैठक के लिए आएं।" : "Agra, Uttar Pradesh 282002 — walk in for a review.",
    },
  ];

  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {hi ? "संपर्क" : "Contact"}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            {hi ? `${ADVISOR_NAME} से बात करें` : `Talk to ${ADVISOR_NAME}`}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {hi
              ? "एलआईसी ऑफ इंडिया के अधिकृत सलाहकार (IRDAI लाइसेंस प्राप्त), आगरा में 20+ वर्षों के अनुभव के साथ। परामर्श निःशुल्क है और खरीदने की कोई बाध्यता नहीं है। हिंदी और अंग्रेज़ी दोनों में बातचीत, और एनआरआई ग्राहकों के लिए व्हाट्सएप, ईमेल तथा वीडियो कॉल पर पूरी सेवा।"
              : "Ram Singh Rathore is an IRDAI-licensed agent of the Life Insurance Corporation of India, practising from Agra for more than 20 years. Consultations are free and carry no obligation to buy. Conversations happen in Hindi or English, and NRI clients are served entirely over WhatsApp, email and video call. Bring an existing policy for a second opinion, ask for a premium illustration, or get help with a claim or a policy servicing request — all of it without a sales script."}
          </p>
        </FadeIn>

        <h2 className="mt-10 text-xl font-bold text-foreground">
          {hi ? "संपर्क के तरीके" : "Ways to reach the advisor"}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-2.5">
                {c.icon}
                <h3 className="text-base font-bold text-foreground">{c.title}</h3>
              </div>
              <p className="mt-2 break-words text-sm font-semibold text-foreground/90">{c.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
            </a>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold text-foreground">
          {hi ? "कार्यालय समय" : "Office hours"}
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Clock size={16} variant="Bold" color="#FFC93C" />
            {hi ? "सोमवार – शनिवार: सुबह 9:00 – रात 8:00 (IST)" : "Monday – Saturday: 9:00am – 8:00pm IST"}
          </li>
          <li className="flex items-center gap-2">
            <Clock size={16} variant="Bold" color="#FFC93C" />
            {hi ? "रविवार: पूर्व अपॉइंटमेंट पर" : "Sunday: by prior appointment"}
          </li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-deep hover:scale-[1.02]"
          >
            {hi ? "निःशुल्क परामर्श बुक करें" : "Book a free consultation"}
            <ArrowRight size={16} variant="Bold" color="#FFC93C" />
          </Link>
          <Link
            to="/plan-finder"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent/20"
          >
            {hi ? "पहले प्लान फाइंडर आज़माएँ" : "Try the Plan Finder first"}
          </Link>
        </div>

        <TrustBadges />
      </section>
    </PageTransition>
  );
}
