import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  withRing?: boolean;
};

/**
 * Oli Gyros emblem — a stylized vertical gyros/döner spit with stacked layers
 * and a flame accent, inside an optional gold ring.
 */
export default function BrandMark({ className, withRing = true }: Props) {
  const id = "oligyros";
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="Oli Gyros"
    >
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0c46a" />
          <stop offset="50%" stopColor="#d4a23c" />
          <stop offset="100%" stopColor="#b07d22" />
        </linearGradient>
        <linearGradient id={`${id}-flame`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#b07d22" />
          <stop offset="60%" stopColor="#f5a623" />
          <stop offset="100%" stopColor="#f0c46a" />
        </linearGradient>
      </defs>

      {withRing && (
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke={`url(#${id}-gold)`}
          strokeWidth="2"
          opacity="0.9"
        />
      )}

      {/* top knob + skewer */}
      <circle cx="32" cy="12" r="3" fill={`url(#${id}-gold)`} />
      <rect x="31" y="13" width="2" height="40" rx="1" fill={`url(#${id}-gold)`} />

      {/* meat stack (barrel shape) */}
      <path
        d="M32 16
           C 23 18, 20 27, 21 36
           C 21.6 42, 26 45, 32 45
           C 38 45, 42.4 42, 43 36
           C 44 27, 41 18, 32 16 Z"
        fill={`url(#${id}-gold)`}
        opacity="0.95"
      />
      {/* layer striations */}
      <g stroke="#0e0e10" strokeWidth="1.4" opacity="0.55" strokeLinecap="round">
        <line x1="23" y1="24" x2="41" y2="24" />
        <line x1="21.6" y1="30" x2="42.4" y2="30" />
        <line x1="21.4" y1="36" x2="42.6" y2="36" />
      </g>

      {/* flame accent */}
      <path
        d="M32 47
           c -3 2 -5 4 -5 7
           c 0 2.8 2.2 5 5 5
           c 2.8 0 5 -2.2 5 -5
           c 0 -2 -1 -3.6 -2.4 -5
           c .2 1.6 -.6 2.6 -1.6 2.8
           c .8 -2.4 -.4 -4.8 -1 -6.6 Z"
        fill={`url(#${id}-flame)`}
      />
    </svg>
  );
}
