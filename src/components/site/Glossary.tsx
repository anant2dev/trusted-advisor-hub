import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Book1, ArrowDown2 } from "iconsax-react";
import { GLOSSARY } from "@/lib/plan-details";
import { playSfx } from "@/lib/sfx";

/** Plain-English decoder for insurance jargon. */
export function Glossary() {
  const [open, setOpen] = useState<string | null>(GLOSSARY[0].term);

  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-foreground">
            <Book1 size={14} variant="Bold" color="#FFC93C" /> Jargon decoder
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
            Every insurance word, in plain English.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Read this once and you will understand any LIC brochure — including the ones I did not write.
          </p>
        </div>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {GLOSSARY.map((g) => {
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
                  <span className="text-sm font-semibold text-foreground">{g.term}</span>
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
                        {g.meaning}
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
