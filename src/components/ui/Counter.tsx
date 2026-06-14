"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
};

export default function Counter({
  value,
  suffix = "",
  duration = 2200,
  decimals = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(eased * value);
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}
