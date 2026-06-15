import { cn } from "@/lib/utils";

// Aceternity Spotlight — large soft radial highlight, fades in.
export function Spotlight({
  className,
  fill = "#F4C430",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-[1] h-[169%] w-[138%] animate-[spotlight_2.4s_ease_.2s_1_forwards] opacity-0 lg:w-[84rem]",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter id="filter" x="0" y="0" width="3787" height="2842" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}