import { useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// MagicUI AnimatedGridPattern — subtle grid background with twinkling squares.
export function AnimatedGridPattern({
  width = 40, height = 40, x = -1, y = -1, strokeDasharray = 0,
  numSquares = 40, className, maxOpacity = 0.5, duration = 4, repeatDelay = 0.5,
}: {
  width?: number; height?: number; x?: number; y?: number;
  strokeDasharray?: number; numSquares?: number; className?: string;
  maxOpacity?: number; duration?: number; repeatDelay?: number;
}) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dim, setDim] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generate(numSquares, { width: 0, height: 0 }, width, height));

  useEffect(() => {
    if (dim.width && dim.height) setSquares(generate(numSquares, dim, width, height));
  }, [dim, numSquares, width, height]);

  useEffect(() => {
    const el = containerRef.current; if (!el) return;
    const ro = new ResizeObserver(([e]) => setDim({ width: e.contentRect.width, height: e.contentRect.height }));
    ro.observe(el); return () => ro.disconnect();
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full fill-current/30 stroke-current/30", className)}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [sx, sy], id: sid }, i) => (
          <motion.rect
            key={`${sx}-${sy}-${sid}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{ duration, repeat: Infinity, delay: i * 0.1, repeatType: "reverse", repeatDelay }}
            width={width - 1} height={height - 1} x={sx * width + 1} y={sy * height + 1} fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}

function generate(count: number, dim: { width: number; height: number }, w: number, h: number) {
  return Array.from({ length: count }, (_, id) => ({
    id,
    pos: [
      Math.floor((Math.random() * dim.width) / w),
      Math.floor((Math.random() * dim.height) / h),
    ] as [number, number],
  }));
}