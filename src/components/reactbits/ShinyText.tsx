import { cn } from "@/lib/utils";

// ReactBits-style ShinyText: animated metallic shimmer over text.
export function ShinyText({
  text,
  className,
  speed = 4,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  return (
    <span
      className={cn("inline-block bg-clip-text text-transparent", className)}
      style={{
        backgroundImage:
          "linear-gradient(110deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.35) 40%, #ffffff 50%, rgba(255,255,255,0.35) 60%, rgba(255,255,255,0.35) 100%)",
        backgroundSize: "200% 100%",
        animation: `shiny ${speed}s linear infinite`,
      }}
    >
      {text}
      <style>{`@keyframes shiny { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
    </span>
  );
}