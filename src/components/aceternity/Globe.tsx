import { useEffect, useRef } from "react";
import createGlobe from "cobe";

// Aceternity-style interactive Globe (cobe). Lightweight, no Three.js.
export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.12, 0.18, 0.36],
      markerColor: [0.96, 0.78, 0.19],
      glowColor: [0.43, 0.63, 0.78],
      markers: [
        { location: [27.1767, 78.0081], size: 0.1 }, // Agra
        { location: [28.6139, 77.209], size: 0.06 }, // Delhi
        { location: [19.076, 72.8777], size: 0.06 }, // Mumbai
        { location: [12.9716, 77.5946], size: 0.05 }, // Bangalore
        { location: [25.2048, 55.2708], size: 0.05 }, // Dubai
        { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
        { location: [40.7128, -74.006], size: 0.05 }, // NYC
        { location: [51.5074, -0.1278], size: 0.05 }, // London
      ],
      onRender: (state) => { state.phi = phi; phi += 0.004; },
    });
    return () => globe.destroy();
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", aspectRatio: 1, maxWidth: 600 }}
    />
  );
}