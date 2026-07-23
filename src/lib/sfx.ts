// Lightweight Web Audio SFX — no external files, synthesized on the fly.
// Respects a `sfx:muted` localStorage flag and prefers-reduced-motion.

type Tone = "click" | "hover" | "toggle" | "success" | "open";

let ctx: AudioContext | null = null;
let muted = false;
let ready = false;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor = (window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext);
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  return ctx;
}

export function initSfx() {
  if (ready || typeof window === "undefined") return;
  ready = true;
  try {
    muted = localStorage.getItem("sfx:muted") === "1";
  } catch { /* ignore */ }
  // Unlock AudioContext after first user gesture (browser autoplay policy).
  const unlock = () => {
    const c = getCtx();
    if (c && c.state === "suspended") c.resume().catch(() => {});
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
  };
  window.addEventListener("pointerdown", unlock, { once: true });
  window.addEventListener("keydown", unlock, { once: true });
}

export function isMuted() { return muted; }

export function setMuted(v: boolean) {
  muted = v;
  try { localStorage.setItem("sfx:muted", v ? "1" : "0"); } catch { /* ignore */ }
}

const presets: Record<Tone, { freq: number; freq2?: number; dur: number; type: OscillatorType; gain: number }> = {
  click:   { freq: 720,  freq2: 540, dur: 0.06, type: "triangle", gain: 0.06 },
  hover:   { freq: 1400,             dur: 0.03, type: "sine",     gain: 0.02 },
  toggle:  { freq: 380,  freq2: 880, dur: 0.22, type: "sine",     gain: 0.07 },
  success: { freq: 660,  freq2: 990, dur: 0.28, type: "triangle", gain: 0.08 },
  open:    { freq: 520,  freq2: 720, dur: 0.14, type: "sine",     gain: 0.05 },
};

export function playSfx(tone: Tone) {
  if (muted) return;
  const c = getCtx();
  if (!c) return;
  if (c.state === "suspended") return; // waits for user gesture
  const p = presets[tone];
  const now = c.currentTime;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = p.type;
  osc.frequency.setValueAtTime(p.freq, now);
  if (p.freq2) osc.frequency.exponentialRampToValueAtTime(p.freq2, now + p.dur);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(p.gain, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + p.dur);
  osc.connect(gain).connect(c.destination);
  osc.start(now);
  osc.stop(now + p.dur + 0.02);
}