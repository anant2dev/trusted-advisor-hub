import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

// MagicUI BentoGrid — modular feature grid with hover lift.
export function BentoGrid({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("grid w-full auto-rows-[20rem] grid-cols-3 gap-4", className)}>{children}</div>
  );
}

export function BentoCard({
  name, className, background, Icon, description, href, cta,
}: {
  name: string; className?: string; background?: ReactNode;
  Icon: React.ComponentType<{ className?: string }>;
  description: string; href?: string; cta?: string;
}) {
  return (
    <div
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl",
        "bg-card border border-border/60",
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "transform-gpu transition-all duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div className="absolute inset-0">{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <Icon className="h-10 w-10 origin-left transform-gpu text-navy transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-xl font-bold text-navy dark:text-foreground">{name}</h3>
        <p className="max-w-lg text-ink-soft">{description}</p>
      </div>
      {href && cta && (
        <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a href={href} className="pointer-events-auto text-sm font-semibold text-navy hover:underline">
            {cta} →
          </a>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-foreground/[.03]" />
    </div>
  );
}