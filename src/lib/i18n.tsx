import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

const STORAGE_KEY = "bima-lang";

type Dict = Record<string, { en: string; hi: string }>;

/** Shared UI copy. Keys are grouped by page prefix. */
export const STRINGS: Dict = {
  "nav.consult": { en: "Consult Now", hi: "अभी सलाह लें" },
  "nav.language": { en: "Language", hi: "भाषा" },
  "common.book": { en: "Book Free Consultation", hi: "निःशुल्क परामर्श बुक करें" },
  "common.inquire": { en: "Check Eligibility / Inquire", hi: "पात्रता जाँचें / पूछताछ करें" },
  "common.whatsapp": { en: "Chat on WhatsApp", hi: "व्हाट्सएप पर बात करें" },
  "common.call": { en: "Call Now", hi: "अभी कॉल करें" },
  "common.viewPlans": { en: "View All Plans", hi: "सभी पॉलिसी देखें" },
  "common.takeQuiz": { en: "Take the 60-second quiz", hi: "60 सेकंड की क्विज़ लें" },
  "common.planNo": { en: "Plan No.", hi: "प्लान नं." },

  "plans.badge": { en: "LIC of India · Complete Catalogue", hi: "भारतीय जीवन बीमा निगम · पूरी सूची" },
  "plans.h1a": { en: "Every LIC Plan, Explained in", hi: "हर एलआईसी योजना, सरल भाषा में" },
  "plans.h1b": { en: "Plain Language.", hi: "समझाई गई।" },
  "plans.intro": {
    en: "From a daughter's first dream to a retiree's peaceful evenings — browse the full LIC catalogue with eligibility, examples and honest caveats for each plan.",
    hi: "बेटी के पहले सपने से लेकर सेवानिवृत्ति की शांत शामों तक — हर योजना की पात्रता, उदाहरण और ईमानदार सीमाओं के साथ पूरी सूची देखें।",
  },
  "plans.quizTitle": { en: "Not sure which one? Take the 60-second quiz.", hi: "तय नहीं कर पा रहे? 60 सेकंड की क्विज़ लें।" },
  "plans.quizSub": { en: "Six questions — we score every plan and show your top two matches.", hi: "छह प्रश्न — हम हर योजना को परखकर आपके लिए दो सर्वोत्तम विकल्प बताते हैं।" },
  "plans.disclaimer": {
    en: "* Plan details are indicative. Final terms, eligibility and bonuses follow the official LIC of India policy documents.",
    hi: "* विवरण संकेतात्मक हैं। अंतिम शर्तें, पात्रता और बोनस एलआईसी के आधिकारिक पॉलिसी दस्तावेज़ों के अनुसार होंगे।",
  },

  "details.show": { en: "See full details", hi: "पूरा विवरण देखें" },
  "details.hide": { en: "Hide full details", hi: "विवरण छिपाएँ" },
  "details.category": { en: "Category", hi: "श्रेणी" },
  "details.entryAge": { en: "Entry age", hi: "प्रवेश आयु" },
  "details.policyTerm": { en: "Policy term", hi: "पॉलिसी अवधि" },
  "details.premiumTerm": { en: "You pay for", hi: "भुगतान अवधि" },
  "details.minCover": { en: "Minimum", hi: "न्यूनतम" },
  "details.payout": { en: "Payout", hi: "भुगतान" },
  "details.bestFor": { en: "Best for", hi: "किनके लिए उपयुक्त" },
  "details.example": { en: "Example:", hi: "उदाहरण:" },
  "details.notIdeal": { en: "Not ideal for:", hi: "किनके लिए उपयुक्त नहीं:" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string; pick: (en: string, hi: string) => string };

const LangContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => STRINGS[k]?.en ?? k,
  pick: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as Lang | null) : null;
    if (saved === "hi" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l);
        try {
          localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* ignore */
        }
      },
      t: (key) => {
        const entry = STRINGS[key];
        if (!entry) return key;
        return lang === "hi" ? entry.hi : entry.en;
      },
      pick: (en, hi) => (lang === "hi" ? hi : en),
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
