import { motion } from "motion/react";
import type { ReactNode } from "react";

// Smooth premium page-mount transition. Per-route wrapper so it integrates
// cleanly with TanStack Router's file-based routing.
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}