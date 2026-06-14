"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Car,
  ChefHat,
  Leaf,
  Truck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ABOUT_IMAGE } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: LucideIcon[] = [Leaf, ChefHat, Zap, Users, Truck, Car];

export default function About() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="section-glow relative overflow-hidden bg-charcoal py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold/15 shadow-luxury sm:aspect-square">
              <Image
                src={ABOUT_IMAGE}
                alt="Oli Gyros konyha és ételek"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl glass-strong px-5 py-4 shadow-gold-soft sm:-right-6"
            >
              <span className="font-display text-4xl font-bold gold-text">
                30+
              </span>
              <span className="text-xs leading-tight text-cream/80">
                {t.stats.items[3].label}
              </span>
            </motion.div>
          </Reveal>

          {/* Text */}
          <div>
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              align="left"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 font-accent text-xl italic text-gold-light">
                {t.about.lead}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {t.about.body}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.features.map((feature, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card-gold group rounded-2xl p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-ink">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-cream">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
