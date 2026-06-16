import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Aceternity UI — Card Hover Effect
export function HoverEffect({
  items, className,
}: {
  items: { title: string; description: string; icon?: ReactNode; link?: string }[];
  className?: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4", className)}>
      {items.map((item, idx) => (
        <a
          key={item.title}
          href={item.link ?? "#"}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-navy/10 dark:bg-accent/15 block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-card border border-border/60 relative z-20 transition-all">
            <div className="relative z-50">
              {item.icon && <div className="mb-3 text-navy">{item.icon}</div>}
              <h4 className="text-lg font-bold text-navy dark:text-foreground tracking-tight">{item.title}</h4>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{item.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}