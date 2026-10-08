import type { SVGProps } from "react";

interface ShambaCareIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export function ShambaCareIcon({ size = 40, className = "", ...props }: ShambaCareIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient
          id="sc-leaf-primary"
          x1="12"
          y1="36"
          x2="36"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient
          id="sc-leaf-accent"
          x1="20"
          y1="40"
          x2="40"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#166534" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
        <linearGradient id="sc-sun" x1="24" y1="4" x2="36" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <linearGradient
          id="sc-care-arc"
          x1="8"
          y1="24"
          x2="38"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>

      {/* Sun / Morning Dawn */}
      <circle cx="34" cy="14" r="5" fill="url(#sc-sun)" />
      <path
        d="M34 6V8M42 14H40M39.65 8.35L38.24 9.76M39.65 19.65L38.24 18.24"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Shamba Furrows / Soil base */}
      <path
        d="M10 40C14 41.5 20 42 24 42C28 42 34 41.5 38 40"
        stroke="#15803d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14 44C18 45 21 45.2 24 45.2C27 45.2 30 45 34 44"
        stroke="#ca8a04"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Left Sprout Leaf */}
      <path
        d="M23.5 34C23.5 34 14 31 13 21C12.5 16 16.5 12 21.5 13C25 13.8 24 20 23.5 34Z"
        fill="url(#sc-leaf-primary)"
      />
      <path
        d="M15.5 18C18.5 21 21 25.5 23.5 34"
        stroke="#bbf7d0"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Right / Main Sprout Leaf */}
      <path
        d="M24 35C24 35 25.5 22 33 17C38.5 13.5 42 18.5 39 23.5C35 30 27 34 24 35Z"
        fill="url(#sc-leaf-accent)"
      />
      <path d="M37 18C34 22 30 27 24 35" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" />

      {/* Caring Embrace Protection Arc */}
      <path
        d="M8 26C8 18 14 10 23 8"
        stroke="url(#sc-care-arc)"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path d="M7 32C6.5 29 7 24 10 20" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ShambaCareLogo({
  size = 36,
  showTagline = true,
  inverted = false,
  className = "",
}: {
  size?: number;
  showTagline?: boolean;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/10 dark:ring-white/20">
        <ShambaCareIcon size={size} />
      </div>
      <div className="flex flex-col">
        <span
          className={`font-display text-xl leading-tight font-bold tracking-tight ${
            inverted ? "text-white" : "text-foreground"
          }`}
        >
          Shamba<span className="text-emerald-600 dark:text-emerald-400">Care</span>
        </span>
        {showTagline && (
          <span
            className={`text-[10px] font-semibold tracking-wider uppercase ${
              inverted ? "text-white/75" : "text-muted-foreground"
            }`}
          >
            Kilimo Bora Kenya
          </span>
        )}
      </div>
    </div>
  );
}
