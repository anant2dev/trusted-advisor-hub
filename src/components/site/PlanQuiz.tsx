import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft2,
  TickCircle,
  Refresh2,
  MagicStar,
  Calendar,
} from "iconsax-react";
import { QUIZ_QUESTIONS, scoreQuiz, planDetail, type QuizAnswers } from "@/lib/quiz";
import { playSfx } from "@/lib/sfx";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { ALL_PLANS } from "@/lib/site";

const QUESTION_HI: Record<string, { question: string; helper: string; options: string[]; hints?: string[] }> = {
  goal: { question: "आप पॉलिसी से मुख्य रूप से क्या चाहते हैं?", helper: "अभी आपके लिए सबसे महत्वपूर्ण लक्ष्य चुनें।", options: ["बच्चे की शिक्षा या विवाह सुरक्षित करना", "मेरे बाद परिवार की सुरक्षा", "सुरक्षित बचत और गारंटीड एकमुश्त राशि", "नियमित आय बनाना", "रिटायरमेंट या पेंशन की योजना"], hints: ["तय भविष्य के पड़ाव पर पैसा मिले", "कम प्रीमियम में अधिकतम कवर", "जीवन कवर के साथ अनुशासित बचत", "एकमुश्त राशि के बजाय समय-समय पर भुगतान", "काम बंद होने के बाद आजीवन पेंशन"] },
  age: { question: "जिस व्यक्ति का बीमा होना है उसकी आयु क्या है?", helper: "प्रवेश आयु से वास्तविक पात्रता तय होती है।", options: ["18 वर्ष से कम", "18–30 वर्ष", "31–45 वर्ष", "46–55 वर्ष", "56 वर्ष या अधिक"] },
  horizon: { question: "आप पैसा कब वापस पाना चाहते हैं?", helper: "लंबी अवधि में बोनस बढ़ने की संभावना रहती है।", options: ["तुरंत — पहले दिन से आय", "5–10 वर्ष में", "10–20 वर्ष में", "20 वर्ष बाद या आजीवन कवर"] },
  budget: { question: "आप हर वर्ष लगभग कितना अलग रख सकते हैं?", helper: "ऐसा प्रीमियम चुनें जिसे आप आराम से जारी रख सकें।", options: ["₹25,000 से कम", "₹25,000–₹60,000", "₹60,000–₹1.5 लाख", "₹1.5 लाख से अधिक या एकमुश्त राशि"] },
  priority: { question: "यदि एक चुनना हो, तो आपके लिए क्या अधिक महत्वपूर्ण है?", helper: "हर योजना में सुरक्षा और रिटर्न का संतुलन अलग होता है।", options: ["सबसे बड़ा जीवन बीमा कवर", "गारंटीड और निश्चित पैसा वापसी", "दोनों का संतुलित मिश्रण"] },
  dependents: { question: "आज आपकी आय पर कौन निर्भर है?", helper: "इससे परिवार के लिए जरूरी कवर का अंदाज़ा मिलता है।", options: ["छोटे बच्चे", "जीवनसाथी", "बुज़ुर्ग माता-पिता", "कोई नहीं — यह केवल मेरे लिए है"] },
};

export function PlanQuiz({ className }: { className?: string }) {
  const { lang, t, pick } = useLang();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [done, setDone] = useState(false);

  const total = QUIZ_QUESTIONS.length;
  const q = QUIZ_QUESTIONS[step];
  const qHi = QUESTION_HI[q.id];
  const results = useMemo(() => (done ? scoreQuiz(answers) : []), [done, answers]);
  const progress = done ? 100 : Math.round((step / total) * 100);

  const choose = (optionId: string) => {
    playSfx("pop");
    const next = { ...answers, [q.id]: optionId };
    setAnswers(next);
    if (step + 1 >= total) {
      playSfx("chime");
      setDone(true);
    } else {
      setStep(step + 1);
    }
  };

  const back = () => {
    playSfx("tick");
    if (done) {
      setDone(false);
      setStep(total - 1);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const restart = () => {
    playSfx("whoosh");
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-xl sm:p-8",
        className,
      )}
      role="group"
      aria-label="LIC plan finder quiz"
    >
      {/* editor-style header strip */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10">
            <MagicStar size={18} variant="Bold" color="#FFC93C" />
          </span>
          <div>
             <p className="text-sm font-bold text-foreground">{t("quiz.finder")}</p>
            <p className="font-mono text-[11px] text-muted-foreground">
               {done ? (lang === "hi" ? "परिणाम" : "result.json") : `${lang === "hi" ? "प्रश्न" : "question"} ${step + 1} / ${total}`}
            </p>
          </div>
        </div>
        {(step > 0 || done) && (
          <button
            type="button"
            onClick={back}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent/20"
          >
             <ArrowLeft2 size={14} variant="Bold" color="currentColor" /> {t("quiz.back")}
          </button>
        )}
      </div>

      {/* progress */}
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        aria-label="Quiz progress"
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-gold"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className="mt-6"
          >
            <h3 className="text-balance text-xl font-extrabold leading-snug tracking-tight text-foreground sm:text-2xl">
               {lang === "hi" ? qHi.question : q.question}
            </h3>
             <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lang === "hi" ? qHi.helper : q.helper}</p>
            <div className="mt-6 grid gap-3">
               {q.options.map((o, optionIndex) => {
                const active = answers[q.id] === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => choose(o.id)}
                    aria-pressed={active}
                    className={cn(
                      "group flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border px-4 py-4 text-left transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]",
                      active
                        ? "border-primary bg-primary/10 ring-1 ring-primary/30"
                        : "border-border bg-background hover:border-primary/60",
                    )}
                  >
                    <span className="min-w-0">
                       <span className="block text-sm font-semibold text-foreground">{lang === "hi" ? qHi.options[optionIndex] : o.label}</span>
                      {o.hint && (
                         <span className="mt-0.5 block text-xs text-muted-foreground">{lang === "hi" ? qHi.hints?.[optionIndex] : o.hint}</span>
                      )}
                    </span>
                    <ArrowRight
                      size={18}
                      variant="Bold"
                      color="currentColor"
                      className="shrink-0 text-muted-foreground transition-transform motion-safe:group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <h3 className="text-lg font-extrabold text-foreground sm:text-xl">
               {t("quiz.matches")}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
               {pick("Based on your goal, age, horizon, budget and dependents. This is guidance, not a quotation — final eligibility is confirmed on the call.", "आपके लक्ष्य, आयु, अवधि, बजट और आश्रितों के आधार पर। यह मार्गदर्शन है, अंतिम पात्रता बातचीत में तय होगी।")}
            </p>

            <div className="mt-5 grid gap-4">
              {results.map((r, i) => {
                const d = planDetail(r.slug);
                const plan = ALL_PLANS.find((item) => item.slug === r.slug);
                return (
                  <motion.div
                    key={r.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.12 }}
                    className="relative overflow-hidden rounded-2xl border border-border bg-background p-5 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                         {i === 0 ? t("quiz.best") : t("quiz.alternative")}
                      </span>
                      <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                         {lang === "hi" ? plan?.tagHi : r.tag}
                      </span>
                      <span className="ml-auto font-mono text-xs font-bold text-gold">
                        {r.match}% fit
                      </span>
                    </div>
                     <p className="mt-3 text-base font-extrabold text-foreground">{lang === "hi" ? plan?.nameHi : r.name}</p>
                     <p className="text-sm text-muted-foreground">{lang === "hi" ? plan?.taglineHi : r.tagline}</p>

                    {d && (
                      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                        {d.plainEnglish}
                      </p>
                    )}

                    <ul className="mt-3 grid gap-1.5">
                       {(lang === "hi" ? plan?.benefitsHi ?? r.benefits : r.benefits).slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <TickCircle
                            size={16}
                            variant="Bold"
                            color="#FFC93C"
                            className="mt-0.5 shrink-0"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {d && (
                      <div className="mt-4 grid gap-2 rounded-xl bg-muted/50 p-3 text-xs sm:grid-cols-2">
                        <p><span className="font-semibold text-foreground">{t("details.entryAge")}:</span> <span className="text-muted-foreground">{d.entryAge}</span></p>
                        <p><span className="font-semibold text-foreground">{t("details.policyTerm")}:</span> <span className="text-muted-foreground">{d.policyTerm}</span></p>
                        <p><span className="font-semibold text-foreground">{t("details.minCover")}:</span> <span className="text-muted-foreground">{d.minCover}</span></p>
                        <p><span className="font-semibold text-foreground">{t("details.payout")}:</span> <span className="text-muted-foreground">{d.payoutStyle}</span></p>
                        <p className="sm:col-span-2">
                          <span className="font-semibold text-foreground">{t("details.notIdeal")}</span>{" "}
                          <span className="text-muted-foreground">{d.notIdealFor}</span>
                        </p>
                      </div>
                    )}

                    {r.reasons.length > 0 && (
                      <p className="mt-3 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">{pick("Why this came up:", "यह विकल्प क्यों आया:")}</span>{" "}
                        {r.reasons.join(" · ")}
                      </p>
                    )}

                    <Link
                      to="/book-appointment"
                      search={{ plan: r.name }}
                      onClick={() => playSfx("success")}
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-transform hover:scale-[1.02]"
                    >
                      <Calendar size={18} variant="Bold" color="currentColor" />
                       {t("quiz.book")}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={restart}
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent/20"
            >
               <Refresh2 size={16} variant="Bold" color="currentColor" /> {t("quiz.retake")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
