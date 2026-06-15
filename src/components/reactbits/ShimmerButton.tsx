import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

// MagicUI ShimmerButton — perimeter-traveling shimmer.
export function ShimmerButton({
  children,
  className,
  ...rest
}: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": "#F4C430",
          "--radius": "12px",
          "--speed": "2.6s",
          "--cut": "0.08em",
          "--bg": "rgba(0, 50, 98, 1)",
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-[var(--radius)] border border-white/10 bg-[var(--bg)] px-6 py-3.5 text-sm font-semibold text-white [background:var(--bg)] [box-shadow:inset_0_-8px_10px_#f4c43030] transition-transform active:translate-y-px",
        className,
      )}
    >
      <div className="absolute inset-0 -z-30 overflow-visible blur-[2px] [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-[shimmer-slide_var(--speed)_ease-in-out_infinite_alternate] [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="absolute -inset-full w-auto rotate-0 animate-[spin-around_calc(var(--speed)*2)_infinite_linear] [translate:0_0] [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
        </div>
      </div>
      {children}
      <div className="absolute inset-0 -z-20 rounded-[var(--radius)] [background:var(--bg)] [mask:linear-gradient(black,black)_content-box,linear-gradient(black,black)] [padding:var(--cut)]" />
    </button>
  );
}