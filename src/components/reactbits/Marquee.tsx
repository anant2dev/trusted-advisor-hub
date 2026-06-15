import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// MagicUI Marquee — infinite horizontal scroll. Use [--duration] / [--gap] to tune.
export function Marquee({
  children,
  className,
  pauseOnHover = true,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--duration:35s] [--gap:2rem] [gap:var(--gap)]",
        className,
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)] animate-[marquee_var(--duration)_linear_infinite]",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}