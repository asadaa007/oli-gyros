"use client";

import { motion } from "framer-motion";
import {
  Check,
  HandHeart,
  Sparkles,
  Timer,
  Trophy,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: LucideIcon[] = [
  UtensilsCrossed,
  Sparkles,
  Timer,
  HandHeart,
  Wallet,
  Trophy,
];

export default function WhyLoveUs() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 section-glow" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.love.eyebrow}
          title={t.love.title}
          subtitle={t.love.subtitle}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.love.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card-gold group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" strokeWidth={3} />
                      <h3 className="font-display text-lg font-semibold text-cream">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/5 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
