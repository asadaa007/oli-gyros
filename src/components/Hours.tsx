"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { getOpenStatus } from "@/lib/hours";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Hours() {
  const { t } = useI18n();
  const [status, setStatus] = useState<{ open: boolean; todayIndex: number } | null>(
    null
  );

  useEffect(() => {
    const update = () => setStatus(getOpenStatus(t.hours.schedule));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [t.hours.schedule]);

  return (
    <section className="section-glow relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.hours.eyebrow} title={t.hours.title} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="card-gold mt-12 overflow-hidden rounded-3xl"
        >
          {/* Status banner */}
          <div className="flex items-center justify-between gap-3 border-b border-gold/10 bg-ink/40 px-6 py-4">
            <span className="flex items-center gap-2.5 text-sm text-cream/80">
              <Clock className="h-5 w-5 text-gold" />
              {t.hours.eyebrow}
            </span>
            {status && (
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold",
                  status.open
                    ? "bg-emerald-500/15 text-emerald-400"
                    : "bg-red-500/15 text-red-400"
                )}
              >
                <span
                  className={cn(
                    "relative flex h-2 w-2",
                    status.open ? "" : ""
                  )}
                >
                  <span
                    className={cn(
                      "absolute inline-flex h-full w-full rounded-full opacity-75",
                      status.open ? "animate-ping bg-emerald-400" : "bg-red-400"
                    )}
                  />
                  <span
                    className={cn(
                      "relative inline-flex h-2 w-2 rounded-full",
                      status.open ? "bg-emerald-400" : "bg-red-400"
                    )}
                  />
                </span>
                {status.open ? t.hours.openNow : t.hours.closedNow}
              </span>
            )}
          </div>

          <ul>
            {t.hours.days.map((day, i) => {
              const slot = t.hours.schedule[i];
              const isToday = status?.todayIndex === i;
              return (
                <li
                  key={day}
                  className={cn(
                    "flex items-center justify-between px-6 py-4 transition-colors",
                    isToday ? "bg-gold/10" : "hover:bg-gold/5",
                    i !== t.hours.days.length - 1 && "border-b border-cream/5"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={cn(
                        "font-medium",
                        isToday ? "text-gold" : "text-cream/90"
                      )}
                    >
                      {day}
                    </span>
                    {isToday && (
                      <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
                        {t.hours.today}
                      </span>
                    )}
                  </span>
                  <span
                    className={cn(
                      "font-medium tabular-nums",
                      slot.closed ? "text-red-400/80" : "text-cream/80"
                    )}
                  >
                    {slot.closed
                      ? t.hours.closedLabel
                      : `${slot.open} – ${slot.close}`}
                  </span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
