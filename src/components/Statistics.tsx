"use client";

import { motion } from "framer-motion";
import { MessageSquare, Star, Smile, CalendarClock, type LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import Counter from "@/components/ui/Counter";

const ICONS: LucideIcon[] = [MessageSquare, Star, Smile, CalendarClock];

export default function Statistics() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="absolute inset-0 section-glow" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {t.stats.items.map((stat, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-gold group flex flex-col items-center rounded-2xl px-4 py-8 text-center"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="font-display text-4xl font-bold gold-text sm:text-5xl">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
