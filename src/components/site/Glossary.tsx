import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Book1, ArrowDown2 } from "iconsax-react";
import { GLOSSARY } from "@/lib/plan-details";
import { playSfx } from "@/lib/sfx";
import { useLang } from "@/lib/i18n";

/** Plain-English decoder for insurance jargon. */
export function Glossary() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState<string | null>(GLOSSARY[0].term);

  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-foreground">
             <Book1 size={14} variant="Bold" color="#FFC93C" /> {t("glossary.kicker")}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
             {t("glossary.title")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
             {t("glossary.intro")}
          </p>
        </div>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
           {GLOSSARY.map((g, index) => {
            const isOpen = open === g.term;
            return (
              <div key={g.term}>
                <button
                  type="button"
                  data-sfx-skip
                  onClick={() => {
                    playSfx(isOpen ? "close" : "open");
                    setOpen(isOpen ? null : g.term);
                  }}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/60"
                  aria-expanded={isOpen}
                >
                   <span className="text-sm font-semibold text-foreground">{lang === "hi" ? ["बीमा राशि", "प्रीमियम भुगतान अवधि", "पॉलिसी अवधि", "मैच्योरिटी", "उत्तरजीविता लाभ", "सरेंडर मूल्य", "एन्युटी", "गारंटीड एडिशन"][index] ?? g.term : g.term}</span>
                  <ArrowDown2
                    size={16}
                    variant="Bold"
                    color="#003262"
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                         {lang === "hi" ? ["वह मूल राशि जिसके लिए जीवन बीमित है।", "जितने वर्षों तक आपको प्रीमियम देना है।", "कुल समय जितने वर्षों तक पॉलिसी चलती है।", "पॉलिसी अवधि पूरी होने पर मिलने वाली राशि।", "पॉलिसी के दौरान जीवित रहने पर तय समय में मिलने वाला भुगतान।", "पॉलिसी समय से पहले बंद करने पर नियमों के अनुसार मिलने वाली राशि।", "एकमुश्त निवेश के बदले नियमित पेंशन आय।", "पॉलिसी में पहले से तय दर पर जुड़ने वाली अतिरिक्त राशि।"][index] ?? g.meaning : g.meaning}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
