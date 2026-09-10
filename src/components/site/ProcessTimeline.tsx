import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/plan-details";
import { useLang } from "@/lib/i18n";

/** Infographic timeline explaining exactly how working together unfolds. */
export function ProcessTimeline() {
  const { lang, t } = useLang();
  const hindiSteps = [
    ["अपना लक्ष्य बताएँ", "परिवार, आय, समय और बजट की जानकारी साझा करें।"],
    ["स्पष्ट तुलना पाएँ", "उपयुक्त योजनाओं की लाभ, सीमाओं और लागत सहित लिखित तुलना पाएँ।"],
    ["अपनी योजना चुनें", "पूरा समय लेकर निर्णय लें — कोई दबाव या जल्दबाज़ी नहीं।"],
    ["कागज़ात पूरे करें", "KYC, मेडिकल और हस्ताक्षर में व्यक्तिगत सहायता मिलेगी।"],
    ["आजीवन सेवा", "प्रीमियम से क्लेम तक वही सलाहकार आपके साथ रहेगा।"],
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
             {t("process.kicker")}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
             {t("process.title")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
             {t("process.intro")}
          </p>
        </div>

        <ol className="relative mt-12 space-y-6 border-l border-border pl-6 sm:pl-10">
          {PROCESS_STEPS.map((s, i) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="relative rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="absolute -left-[31px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background sm:-left-[47px]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-primary">{s.step}</span>
                 <h3 className="text-base font-bold text-foreground">{lang === "hi" ? hindiSteps[i]?.[0] : s.title}</h3>
              </div>
               <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lang === "hi" ? hindiSteps[i]?.[1] : s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
