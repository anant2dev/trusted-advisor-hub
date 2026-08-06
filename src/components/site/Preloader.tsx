import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { playSfx } from "@/lib/sfx";
import { isLowPowerDevice } from "@/lib/motion";

const BOOT_LINES = [
  "initialising secure session",
  "loading LIC plan catalogue",
  "verifying advisor credentials",
  "preparing your consultation desk",
];

/**
 * Universe.io-style boot loader: monospace log lines + a counter that fills,
 * then wipes away. Shown once per browser session.
 */
export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [pct, setPct] = useState(0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("preload:seen") === "1"; } catch { /* ignore */ }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) return;
    try { sessionStorage.setItem("preload:seen", "1"); } catch { /* ignore */ }

    setVisible(true);
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const DURATION = isLowPowerDevice() ? 700 : 1000;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setPct(Math.round(eased * 100));
      setLine(Math.min(BOOT_LINES.length - 1, Math.floor(eased * BOOT_LINES.length)));
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        playSfx("chime");
        setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
        }, 160);
      }
    };
    raf = requestAnimationFrame(tick);
    playSfx("boot");

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                "linear-gradient(to right, color-mix(in oklab, var(--primary) 30%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--primary) 30%, transparent) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              maskImage: "radial-gradient(circle at 50% 50%, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 10%, transparent 70%)",
            }}
          />

          <div className="relative w-[min(88vw,420px)]">
            <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Bima Suraksha</span>
              <span className="tabular-nums text-foreground">{pct.toString().padStart(3, "0")}%</span>
            </div>

            <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-foreground/10">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-75 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>

            <div className="mt-4 h-5 font-mono text-[11px] text-muted-foreground">
              <motion.span key={line} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                › {BOOT_LINES[line]}…
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
