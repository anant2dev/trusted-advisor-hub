import { createContext, useContext, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Aceternity UI — 3D Card Effect
const MouseEnterContext = createContext<[boolean, (b: boolean) => void] | undefined>(undefined);

export function CardContainer({ children, className, containerClassName }: { children: ReactNode; className?: string; containerClassName?: string; }) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 18;
    const y = (e.clientY - top - height / 2) / 18;
    ref.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = `rotateY(0deg) rotateX(0deg)`; setEntered(false); };
  return (
    <MouseEnterContext.Provider value={[entered, setEntered]}>
      <div className={cn("flex items-center justify-center", containerClassName)} style={{ perspective: "1000px" }}>
        <div
          ref={ref}
          onMouseEnter={() => setEntered(true)}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className={cn("relative flex items-center justify-center transition-all duration-200 ease-linear", className)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>{children}</div>;
}

export function CardItem({
  as: Tag = "div", children, className, translateZ = 0, translateX = 0, translateY = 0, rotateX = 0, rotateY = 0, rotateZ = 0, ...rest
}: {
  as?: React.ElementType; children: ReactNode; className?: string;
  translateX?: number | string; translateY?: number | string; translateZ?: number | string;
  rotateX?: number | string; rotateY?: number | string; rotateZ?: number | string;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const ctx = useContext(MouseEnterContext);
  const entered = ctx?.[0];
  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.transform = entered
      ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  }, [entered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);
  return <Tag ref={ref as never} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>{children}</Tag>;
}