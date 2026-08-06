import { motion, useReducedMotion } from "motion/react";
import { useEffect, type ReactNode } from "react";
import { playSfx } from "@/lib/sfx";

// Smooth premium page-mount transition. Per-route wrapper so it integrates
// cleanly with TanStack Router's file-based routing.
export function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    playSfx("whoosh");
  }, []);

  if (reduce) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}