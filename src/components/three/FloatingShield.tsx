import { Suspense, lazy } from "react";
import { ClientOnly } from "@tanstack/react-router";

// Lazy-load r3f only in the browser to keep SSR clean and initial bundle light.
const Scene = lazy(async () => {
  const [{ Canvas }, drei] = await Promise.all([
    import("@react-three/fiber"),
    import("@react-three/drei"),
  ]);
  const { Float, MeshDistortMaterial, Icosahedron, Environment } = drei;

  function Inner() {
    return (
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} color="#F4C430" />
        <directionalLight position={[-4, -2, -3]} intensity={0.6} color="#3E8FD6" />
        <Float speed={1.6} rotationIntensity={0.9} floatIntensity={1.4}>
          <Icosahedron args={[1.35, 1]}>
            <MeshDistortMaterial
              color="#003262"
              emissive="#0a1929"
              distort={0.35}
              speed={2}
              roughness={0.15}
              metalness={0.85}
            />
          </Icosahedron>
        </Float>
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
          <mesh position={[1.9, 1.2, -1]}>
            <torusGeometry args={[0.35, 0.11, 24, 60]} />
            <meshStandardMaterial color="#F4C430" metalness={0.9} roughness={0.2} />
          </mesh>
        </Float>
        <Environment preset="city" />
      </Canvas>
    );
  }

  return { default: Inner };
});

export function FloatingShield({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <ClientOnly>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </ClientOnly>
    </div>
  );
}