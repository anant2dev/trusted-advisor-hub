import { useEffect, useState } from "react";
import { VolumeHigh, VolumeMute } from "iconsax-react";
import { initSfx, isMuted, setMuted, playSfx, hoverSfxEnabled } from "@/lib/sfx";
import { prefersReducedMotion } from "@/lib/motion";

// Global click/hover SFX delegation + cursor spotlight + mute FAB.
export function SoundLayer() {
  const [muted, setMutedState] = useState(false);
  const [spotlight, setSpotlight] = useState(false);

  useEffect(() => {
    initSfx();
    setMutedState(isMuted());
    // Cursor spotlight is decorative: skip it for reduced-motion users.
    setSpotlight(!prefersReducedMotion() && window.matchMedia("(min-width: 1024px)").matches);

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const el = t.closest("button, a, [role='button'], input[type='submit']") as HTMLElement | null;
      if (!el) return;
      if (el.hasAttribute("data-sfx-skip")) return;
      const tone = el.dataset.sfx as "click" | "toggle" | "success" | "open" | undefined;
      playSfx(tone ?? "click");
    };

    let hoverThrottle = 0;
    const onOver = (e: MouseEvent) => {
      if (!hoverSfxEnabled()) return;
      const now = performance.now();
      if (now - hoverThrottle < 140) return;
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const el = t.closest("button, a, [role='button']") as HTMLElement | null;
      if (!el || el.hasAttribute("data-sfx-skip")) return;
      hoverThrottle = now;
      playSfx("hover");
    };

    // rAF-batched so pointer moves never thrash style recalcs.
    let raf = 0;
    let mx = 0;
    let my = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        document.documentElement.style.setProperty("--cursor-x", `${mx}px`);
        document.documentElement.style.setProperty("--cursor-y", `${my}px`);
      });
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("mouseover", onOver, true);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("mouseover", onOver, true);
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toggle = () => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
    if (!next) playSfx("toggle");
  };

  return (
    <>
      {/* Cursor spotlight — subtle glow that follows the cursor (desktop only) */}
      {spotlight && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[5] hidden lg:block"
          style={{
            background:
              "radial-gradient(320px circle at var(--cursor-x, -200px) var(--cursor-y, -200px), color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
      )}
      {/* Mute FAB */}
      <button
        type="button"
        data-sfx-skip
        onClick={toggle}
        aria-pressed={muted}
        aria-label={muted ? "Unmute interface sounds" : "Mute interface sounds"}
        className="fixed bottom-20 left-5 z-50 grid h-11 w-11 place-items-center md:bottom-44 md:left-auto md:right-5 rounded-full border border-border/70 bg-card/90 text-foreground shadow-lg backdrop-blur transition hover:scale-105"
      >
        {muted ? <VolumeMute size={18} variant="Bold" /> : <VolumeHigh size={18} variant="Bold" color="#FFC93C" />}
      </button>
    </>
  );
}