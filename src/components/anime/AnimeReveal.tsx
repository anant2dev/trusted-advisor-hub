import { useEffect, useRef, type ReactNode } from "react";
import { animate, stagger } from "animejs";
import { cn } from "@/lib/utils";

// anime.js v4 word-by-word reveal. Triggers once on scroll into view.
export function AnimeReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-anime-word]");
    if (!targets.length) return;

    const play = () => {
      animate(targets, {
        opacity: [0, 1],
        y: [24, 0],
        filter: ["blur(8px)", "blur(0px)"],
        duration: 700,
        delay: stagger(60, { start: delay }),
        ease: "outExpo",
      });
    };

    if (typeof IntersectionObserver === "undefined") {
      play();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            play();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, delay]);

  const words = text.split(" ");
  return (
    <Tag ref={ref as never} className={cn("inline-block", className)}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          data-anime-word
          className="inline-block will-change-transform opacity-0"
          style={{ marginRight: "0.28em" }}
        >
          {w}
        </span>
      ))}
    </Tag>
  );
}

// Renders a child ReactNode wrapped and revealed as one block.
export function AnimeBlockReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const play = () =>
      animate(el, {
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.96, 1],
        duration: 900,
        delay,
        ease: "outExpo",
      });
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            play();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
}