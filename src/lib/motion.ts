// Central motion policy: one source of truth for reduced-motion + capability.

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isTouchOnly(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(hover: none)").matches;
}

export function isLowPowerDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const cores = (navigator as unknown as { hardwareConcurrency?: number }).hardwareConcurrency ?? 8;
  const mem = (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 8;
  return cores <= 4 || mem <= 4;
}

/** Duration in seconds, collapsed to ~0 when the user asked for less motion. */
export function dur(seconds: number): number {
  return prefersReducedMotion() ? 0.01 : seconds;
}