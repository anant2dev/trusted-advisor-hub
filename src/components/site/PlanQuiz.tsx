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

export function PlanQuiz({ className }: { className?: string }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [done, setDone] = useState(false);

  const total = QUIZ_QUESTIONS.length;
  const q = QUIZ_QUESTIONS[step];
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
        "relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8",
        className,
      )}
    >
      {/* editor-style header strip */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10">
            <MagicStar size={18} variant="Bold" color="#F4C430" />
          </span>
          <div>
            <p className="text-sm font-bold text-foreground">Plan Finder</p>
            <p className="font-mono text-[11px] text-muted-foreground">
              {done ? "result.json" : `question ${step + 1} / ${total}`}
            </p>
          </div>
        </div>
        {(step > 0 || done) && (
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-accent/20"
          >
            <ArrowLeft2 size={14} variant="Bold" color="currentColor" /> Back
          </button>
        )}
      </div>

      {/* progress */}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
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
            <h3 className="text-lg font-extrabold leading-snug text-foreground sm:text-xl">
              {q.question}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{q.helper}</p>
            <div className="mt-5 grid gap-2.5">
              {q.options.map((o) => {
                const active = answers[q.id] === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => choose(o.id)}
                    className={cn(
                      "group flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition-all hover:-translate-y-0.5 hover:shadow-md",
                      active
                        ? "border-primary bg-primary/10"
                        : "border-border bg-background hover:border-primary/50",
                    )}
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-foreground">{o.label}</span>
                      {o.hint && (
                        <span className="mt-0.5 block text-xs text-muted-foreground">{o.hint}</span>
                      )}
                    </span>
                    <ArrowRight
                      size={18}
                      variant="Bold"
                      color="currentColor"
                      className="mt-0.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
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
              Your top {results.length} matches
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Based on your goal, age band, horizon, budget and dependents. This is guidance,
              not a quotation — the final eligibility check happens on the call.
            </p>

            <div className="mt-5 grid gap-4">
              {results.map((r, i) => {
                const d = planDetail(r.slug);
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
                        {i === 0 ? "Best match" : "Strong alternative"}
                      </span>
                      <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                        {r.tag}
                      </span>
                      <span className="ml-auto font-mono text-xs font-bold text-gold">
                        {r.match}% fit
                      </span>
                    </div>
                    <p className="mt-3 text-base font-extrabold text-foreground">{r.name}</p>
                    <p className="text-sm text-muted-foreground">{r.tagline}</p>

                    {d && (
                      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                        {d.plainEnglish}
                      </p>
                    )}

                    <ul className="mt-3 grid gap-1.5">
                      {r.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <TickCircle
                            size={16}
                            variant="Bold"
                            color="#F4C430"
                            className="mt-0.5 shrink-0"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {d && (
                      <div className="mt-4 grid gap-2 rounded-xl bg-muted/50 p-3 text-xs sm:grid-cols-2">
                        <p><span className="font-semibold text-foreground">Entry age:</span> <span className="text-muted-foreground">{d.entryAge}</span></p>
                        <p><span className="font-semibold text-foreground">Policy term:</span> <span className="text-muted-foreground">{d.policyTerm}</span></p>
                        <p><span className="font-semibold text-foreground">Min. cover:</span> <span className="text-muted-foreground">{d.minCover}</span></p>
                        <p><span className="font-semibold text-foreground">Payout:</span> <span className="text-muted-foreground">{d.payoutStyle}</span></p>
                        <p className="sm:col-span-2">
                          <span className="font-semibold text-foreground">Not ideal for:</span>{" "}
                          <span className="text-muted-foreground">{d.notIdealFor}</span>
                        </p>
                      </div>
                    )}

                    {r.reasons.length > 0 && (
                      <p className="mt-3 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Why this came up:</span>{" "}
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
                      Book with {r.name} preselected
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
              <Refresh2 size={16} variant="Bold" color="currentColor" /> Retake the quiz
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
