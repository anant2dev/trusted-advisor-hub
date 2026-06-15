import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

// MagicUI NumberTicker — counts up to a value when scrolled into view.
export function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  className,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 28, stiffness: 80 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + latest.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
      }
    });
    return () => unsub();
  }, [spring, prefix, suffix, decimals]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}