import { useEffect, useState } from "react";
import { VolumeHigh, VolumeMute } from "iconsax-react";
import { initSfx, isMuted, setMuted, playSfx } from "@/lib/sfx";

// Global click/hover SFX delegation + cursor spotlight + mute FAB.
export function SoundLayer() {
  const [muted, setMutedState] = useState(false);

  useEffect(() => {
    initSfx();
    setMutedState(isMuted());

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
      const now = performance.now();
      if (now - hoverThrottle < 60) return;
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const el = t.closest("button, a, [role='button']") as HTMLElement | null;
      if (!el || el.hasAttribute("data-sfx-skip")) return;
      hoverThrottle = now;
      playSfx("hover");
    };

    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("mouseover", onOver, true);
    window.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("mouseover", onOver, true);
      window.removeEventListener("mousemove", onMove);
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
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[5] hidden lg:block"
        style={{
          background:
            "radial-gradient(320px circle at var(--cursor-x, -200px) var(--cursor-y, -200px), color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%)",
          mixBlendMode: "screen",
          transition: "background 60ms linear",
        }}
      />
      {/* Mute FAB */}
      <button
        type="button"
        data-sfx-skip
        onClick={toggle}
        aria-label={muted ? "Unmute interface sounds" : "Mute interface sounds"}
        className="fixed bottom-44 right-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-card/80 text-foreground shadow-lg backdrop-blur transition hover:scale-105 md:bottom-44"
      >
        {muted ? <VolumeMute size={18} variant="Bold" /> : <VolumeHigh size={18} variant="Bold" color="#FFC93C" />}
      </button>
    </>
  );
}