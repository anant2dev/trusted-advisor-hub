import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cup,
  Medal,
  Award,
  ShieldTick,
  ArrowRight,
  MagicStar,
  Star,
  Crown,
  Clock,
  SecuritySafe,
  Profile,
  Verify,
} from "iconsax-react";
import { FadeIn } from "@/components/reactbits/FadeIn";
import { PageTransition } from "@/components/site/PageTransition";
import { HoverEffect } from "@/components/aceternity/hover-effect";
import { TrustBadges } from "@/components/site/TrustBadges";
import { FAQSection } from "@/components/site/FAQSection";
import { assetUrl } from "@/lib/assets";
import { ldScript, personLd, breadcrumbLd } from "@/lib/seo";
import { useLang } from "@/lib/i18n";
import trophy1 from "@/assets/trophies/1781413121551.asset.json";
import trophy2 from "@/assets/trophies/IMG_20260614_104134.asset.json";
import trophy3 from "@/assets/trophies/IMG_20260614_104441.asset.json";
import trophy4 from "@/assets/trophies/IMG_20260614_104949.asset.json";
import trophy5 from "@/assets/trophies/IMG_20260614_110820.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · 20+ Years of LIC Advisory Excellence" },
      {
        name: "description",
        content:
          "Two decades of trusted LIC advisory work. From DM Club Member today to a future Chairman's Club vision — built on quiet, consistent service.",
      },
      { property: "og:title", content: "About the Advisor · LIC" },
      {
        property: "og:description",
        content:
          "Distinguished DM Club Member. Journey, recognitions and the practice behind 1000+ protected families.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About the Advisor · LIC" },
      {
        name: "twitter:description",
        content:
          "20+ years of LIC advisory. DM Club Member. 1000+ families protected.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      ldScript(personLd()),
      ldScript(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ),
    ],
  }),
  component: AboutPage,
});

const clubs = [
  {
    label: "DM Club",
    status: "Current",
    desc: "Distinguished member — recognized for sustained premium excellence and client trust.",
    icon: Award,
    state: "done" as const,
  },
  {
    label: "ZM Club",
    status: "In Progress",
    desc: "Qualifying for Zonal Manager's Club — a tier reserved for the top regional advisors.",
    icon: Star,
    state: "active" as const,
  },
  {
    label: "CM Club",
    status: "Future Vision",
    desc: "Chairman's Club — the pinnacle of LIC advisory recognition in India.",
    icon: Crown,
    state: "future" as const,
  },
];

const trophies = [
  { src: assetUrl(trophy1.url), title: "Ram Singh Rathore Honour Plaque", year: "FY 2017–18", caption: "25-policy flag-bearer recognition by LIC Agra Mandal." },
  { src: assetUrl(trophy5.url), title: "Republic Day Sammaan", year: "2025", caption: "Awarded for utkarsh karya & sustained performance — Agra Mandal." },
  { src: assetUrl(trophy2.url), title: "Mandal Flag-Bearer Shield", year: "FY 2018–19", caption: "Awarded for exemplary 25-policy contribution to the Mandal." },
  { src: assetUrl(trophy4.url), title: "SDM Trophy · North Central Zone", year: "2024–25", caption: "Senior Development Manager Trophy recognising zonal excellence." },
  { src: assetUrl(trophy3.url), title: "Independence Day Memento", year: "Azadi ka Amrit Mahotsav", caption: "Commemorative LIC Independence Day recognition." },
];

function AboutPage() {
  const { t, pick } = useLang();
  const localizedClubs = clubs.map((club, index) => ({
    ...club,
    status: index === 0 ? t("about.current") : index === 1 ? t("about.progress") : t("about.future"),
    desc: pick(club.desc, ["निरंतर उत्कृष्ट कार्य और ग्राहक विश्वास के लिए विशिष्ट सदस्य।", "ज़ोनल मैनेजर क्लब की पात्रता की ओर प्रगति।", "एलआईसी सलाहकार सम्मान का सर्वोच्च लक्ष्य।"][index]),
  }));
  return (
    <PageTransition>
      {/* Profile */}
      <section className="bg-gradient-to-b from-slate-bg to-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm">
             <ShieldTick size={14} variant="Bold" color="#FFC93C" /> {t("about.badge")}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
             {t("about.h1a")} <span className="text-gold">{t("about.h1b")}</span>
          </h1>
          <div className="mt-6 grid gap-6 text-[15px] leading-[1.75] text-ink sm:text-base">
             <p>{t("about.p1")}</p>
             <p>{t("about.p2")}</p>
          </div>
          <TrustBadges className="mt-10" />
        </div>
      </section>

      {/* Club Journey */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
               {t("about.journey")}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
               {t("about.journeyTitle")}
            </h2>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-1/2 top-7 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-gold via-navy/40 to-white md:block" />
            <div className="grid gap-8 md:grid-cols-3">
               {localizedClubs.map((c, idx) => (
                <FadeIn key={c.label} delay={idx * 0.1} className="relative">
                  <div
                    className={
                      "mx-auto grid h-14 w-14 place-items-center rounded-full ring-4 ring-white shadow-md " +
                      (c.state === "done"
                        ? "bg-navy text-gold"
                        : c.state === "active"
                          ? "bg-gold text-navy"
                          : "bg-white text-navy/60 ring-border")
                    }
                  >
                    <c.icon size={24} variant="Bold" color={c.state === "active" ? "#003262" : c.state === "done" ? "#FFC93C" : "#003262"} />
                  </div>
                  <div className="mt-5 rounded-2xl border border-border bg-white p-5 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      {c.status}
                    </p>
                    <p className="mt-1 text-xl font-bold text-navy">{c.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trophies */}
      <section className="bg-slate-bg">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
                 {t("about.recognitions")}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
                 {t("about.trophyWall")}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-ink-soft">
                 {t("about.trophyIntro")}
              </p>
            </div>
            <MagicStar size={28} variant="Bold" color="#FFC93C" />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trophies.map((t, i) => (
              <FadeIn
                key={t.title}
                delay={i * 0.05}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-bg">
                  <img
                    src={t.src}
                    alt={t.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-navy/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                    {i % 2 === 0 ? <Cup size={12} variant="Bold" color="#FFC93C" /> : <Medal size={12} variant="Bold" color="#FFC93C" />}
                    {t.year}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-base font-bold text-foreground">{t.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.caption}</p>
                </div>
              </FadeIn>
            ))}

            {/* Humble note */}
            <FadeIn delay={trophies.length * 0.05}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gold/40 bg-gradient-to-br from-gold/10 via-transparent to-navy/5 p-8 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold">
                  <MagicStar size={26} variant="Bold" color="#FFC93C" />
                </span>
                <p className="mt-4 text-base font-bold text-foreground">
                    {t("about.moreCabinet")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                   {t("about.moreCabinetSub")}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-navy p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h3 className="text-2xl font-extrabold sm:text-3xl">
                 {t("about.ctaTitle")}
              </h3>
              <p className="mt-2 text-sm text-white/75">
                 {t("about.ctaSub")}
              </p>
            </div>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-navy shadow-lg transition-all hover:scale-[1.02]"
            >
               {t("about.bookAppt")} <ArrowRight size={16} variant="Bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* What you actually get */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
               {t("about.promise")}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
               {t("about.promiseTitle")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
               {t("about.promiseSub")}
            </p>
          </div>
           <HoverEffect
            className="mt-8"
            items={[
               { title: pick("IRDAI-Compliant Advice", "IRDAI अनुरूप सलाह"), description: pick("Recommendations matched to your goals, never a commission slab.", "सुझाव आपके लक्ष्यों के अनुसार, कमीशन के अनुसार नहीं।"), icon: <ShieldTick size={24} variant="Bold" color="#003262" /> },
               { title: pick("Lifetime After-Sales Service", "आजीवन बिक्री-पश्चात सेवा"), description: pick("Premium reminders, revivals, loans and claims handled personally.", "प्रीमियम, पुनर्जीवन, लोन और क्लेम में व्यक्तिगत सहायता।"), icon: <Clock size={24} variant="Bold" color="#003262" /> },
               { title: pick("Absolute Privacy", "पूर्ण गोपनीयता"), description: pick("Your financial details are never used for third-party marketing.", "आपकी वित्तीय जानकारी तीसरे पक्ष के प्रचार में उपयोग नहीं होती।"), icon: <SecuritySafe size={24} variant="Bold" color="#003262" /> },
               { title: pick("Family-Style 1:1 Consultation", "परिवार जैसा व्यक्तिगत परामर्श"), description: pick("Patient listening before any recommendation, with no pressure.", "बिना दबाव, किसी सुझाव से पहले धैर्य से आपकी बात।"), icon: <Profile size={24} variant="Bold" color="#003262" /> },
               { title: pick("Verified Track Record", "सत्यापित उपलब्धियाँ"), description: pick("DM Club member with 1000+ Indian and NRI families served.", "डीएम क्लब सदस्य और 1000+ भारतीय एवं प्रवासी परिवारों की सेवा।"), icon: <Verify size={24} variant="Bold" color="#003262" /> },
               { title: pick("Pan-India & NRI Reach", "भारत और विदेश में सेवा"), description: pick("Digital KYC, medicals and signatures handled end-to-end.", "डिजिटल KYC, मेडिकल और हस्ताक्षर में पूरी सहायता।"), icon: <Award size={24} variant="Bold" color="#003262" /> },
            ]}
          />
        </div>
      </section>

      <FAQSection
         title={pick("Questions families ask before our first call", "पहली बातचीत से पहले परिवार क्या पूछते हैं")}
         intro={pick("Twenty years of conversations distilled into the questions that come up the most.", "बीस वर्षों की बातचीत में सबसे अधिक पूछे गए प्रश्नों के सरल उत्तर।")}
      />
    </PageTransition>
  );
}