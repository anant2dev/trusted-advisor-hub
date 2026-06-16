import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// MagicUI-style Particles — animated floating dots reacting to cursor.
type ParticlesProps = {
  className?: string;
  quantity?: number;
  color?: string;
  size?: number;
  staticity?: number;
  ease?: number;
};

type Circle = {
  x: number; y: number; translateX: number; translateY: number;
  size: number; alpha: number; targetAlpha: number; dx: number; dy: number; magnetism: number;
};

export function Particles({
  className,
  quantity = 80,
  color = "#ffffff",
  size = 0.6,
  staticity = 50,
  ease = 50,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    const canvas = canvasRef.current; const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;

    const rgb = hexToRgb(color);
    let w = 0, h = 0, raf = 0;

    const resize = () => {
      w = container.offsetWidth; h = container.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      circles.current = Array.from({ length: quantity }, () => spawn(w, h, size));
    };

    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      mouse.current.x = e.clientX - r.left - w / 2;
      mouse.current.y = e.clientY - r.top - h / 2;
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      circles.current.forEach((c, i) => {
        const edge = [c.x + c.translateX, w - c.x - c.translateX, c.y + c.translateY, h - c.y - c.translateY];
        const closest = Math.min(...edge);
        const remap = Math.max(0, Math.min(1, closest / 20));
        c.alpha += remap === 1 ? 0.02 : -0.02;
        c.alpha = Math.max(0, Math.min(c.targetAlpha, c.alpha));
        c.x += c.dx; c.y += c.dy;
        c.translateX += (mouse.current.x / (staticity / c.magnetism) - c.translateX) / ease;
        c.translateY += (mouse.current.y / (staticity / c.magnetism) - c.translateY) / ease;

        ctx.beginPath();
        ctx.arc(c.x + c.translateX, c.y + c.translateY, c.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${c.alpha})`;
        ctx.fill();

        if (c.x < -c.size || c.x > w + c.size || c.y < -c.size || c.y > h + c.size) {
          circles.current[i] = spawn(w, h, size);
        }
      });
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [quantity, color, size, staticity, ease, dpr]);

  return (
    <div ref={containerRef} className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      <canvas ref={canvasRef} />
    </div>
  );
}

function spawn(w: number, h: number, baseSize: number): Circle {
  return {
    x: Math.random() * w, y: Math.random() * h,
    translateX: 0, translateY: 0,
    size: Math.random() * 2 + baseSize,
    alpha: 0, targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
    dx: (Math.random() - 0.5) * 0.2, dy: (Math.random() - 0.5) * 0.2,
    magnetism: 0.1 + Math.random() * 4,
  };
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(v, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}