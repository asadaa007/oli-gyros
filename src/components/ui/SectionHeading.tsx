"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "mb-4 inline-flex items-center gap-2.5",
            align === "center" ? "justify-center" : ""
          )}
        >
          <span className="h-px w-7 bg-gold/70" />
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            {eyebrow}
          </span>
          <span className="h-px w-7 bg-gold/70" />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl",
          light ? "text-ink" : "text-cream"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-ink/70" : "text-muted"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
