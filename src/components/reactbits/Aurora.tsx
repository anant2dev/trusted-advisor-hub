import { useEffect, useRef } from "react";

const VERT = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const FRAG = `#version 300 es
precision highp float;
uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
out vec4 fragColor;
vec3 permute(vec3 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy)); vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1; i=mod(i,289.0);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m; m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0; vec3 h=abs(x)-0.5; vec3 ox=floor(x+0.5);
  vec3 a0=x-ox; m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g; g.x=a0.x*x0.x+h.x*x0.y; g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}
struct ColorStop { vec3 color; float position; };
#define COLOR_RAMP(colors, factor, finalColor) { \
  int index = 0; \
  for (int i = 0; i < 2; i++) { \
    ColorStop currentColor = colors[i]; \
    bool isInBetween = currentColor.position <= factor; \
    index = int(mix(float(index), float(i), float(isInBetween))); \
  } \
  ColorStop currentColor = colors[index]; \
  ColorStop nextColor = colors[index + 1]; \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}
void main(){
  vec2 uv = gl_FragCoord.xy / uResolution;
  ColorStop colors[3];
  colors[0]=ColorStop(uColorStops[0],0.0);
  colors[1]=ColorStop(uColorStops[1],0.5);
  colors[2]=ColorStop(uColorStops[2],1.0);
  vec3 rampColor; COLOR_RAMP(colors, uv.x, rampColor);
  float height = snoise(vec2(uv.x*2.0+uTime*0.1, uTime*0.25))*0.5*uAmplitude;
  height = exp(height); height = (uv.y*2.0 - height + 0.2);
  float intensity = 0.6 * height;
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend*0.5, midPoint + uBlend*0.5, intensity);
  vec3 auroraColor = intensity * rampColor;
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

type AuroraProps = {
  colorStops?: [string, string, string];
  amplitude?: number;
  blend?: number;
  speed?: number;
};

function hexToRgb(hex: string): [number, number, number] {
  const raw = hex.replace("#", "");
  const full = raw.length === 3 ? raw.split("").map((x) => x + x).join("") : raw.padEnd(6, "0").slice(0, 6);
  const value = Number.parseInt(full, 16);
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
}

export default function Aurora(props: AuroraProps) {
  const { colorStops = ["#003262", "#FFC93C", "#1a4b8c"], amplitude = 1.0, blend = 0.5 } = props;
  const propsRef = useRef<AuroraProps>(props);
  propsRef.current = props;
  const ctnDom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn || typeof window === "undefined") return;

    const canUseWebGL =
      window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canUseWebGL) return;

    let disposed = false;
    let cleanupWebgl: (() => void) | undefined;

    void import("ogl").then(({ Renderer, Program, Mesh, Triangle }) => {
      if (disposed || !ctn.isConnected) return;

      const renderer = new Renderer({
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, 1.25),
      });
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.canvas.style.backgroundColor = "transparent";

      const geometry = new Triangle(gl);
      if (geometry.attributes.uv) delete geometry.attributes.uv;

      const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uTime: { value: 0 },
          uAmplitude: { value: amplitude },
          uColorStops: { value: colorStops.map(hexToRgb) },
          uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
          uBlend: { value: blend },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });
      ctn.appendChild(gl.canvas);

      const resize = () => {
        const width = ctn.offsetWidth;
        const height = ctn.offsetHeight;
        renderer.setSize(width, height);
        program.uniforms.uResolution.value = [width, height];
      };
      window.addEventListener("resize", resize);

      let animateId = 0;
      let inView = true;
      const io = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
        },
        { threshold: 0.01 },
      );
      io.observe(ctn);

      const update = (t: number) => {
        animateId = requestAnimationFrame(update);
        if (document.hidden || !inView) return;
        const speed = propsRef.current.speed ?? 1.0;
        const time = t * 0.01;
        program.uniforms.uTime.value = time * speed * 0.1;
        program.uniforms.uAmplitude.value = propsRef.current.amplitude ?? 1.0;
        program.uniforms.uBlend.value = propsRef.current.blend ?? blend;
        program.uniforms.uColorStops.value = (propsRef.current.colorStops ?? colorStops).map(hexToRgb);
        renderer.render({ scene: mesh });
      };
      animateId = requestAnimationFrame(update);
      resize();

      cleanupWebgl = () => {
        cancelAnimationFrame(animateId);
        io.disconnect();
        window.removeEventListener("resize", resize);
        if (ctn && gl.canvas.parentNode === ctn) ctn.removeChild(gl.canvas);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    });

    return () => {
      disposed = true;
      cleanupWebgl?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amplitude]);

  return (
    <div
      ref={ctnDom}
      className="aurora-container absolute inset-0 h-full w-full"
      style={{
        background:
          `radial-gradient(circle at 18% 28%, ${colorStops[1]}55, transparent 32%), ` +
          `radial-gradient(circle at 78% 18%, ${colorStops[2]}45, transparent 34%), ` +
          `linear-gradient(115deg, ${colorStops[0]}40, ${colorStops[1]}22, ${colorStops[2]}35)`,
      }}
    />
  );
}