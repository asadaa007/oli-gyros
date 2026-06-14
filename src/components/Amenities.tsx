"use client";

import { motion } from "framer-motion";
import {
  Accessibility,
  Armchair,
  Coffee,
  CreditCard,
  Heart,
  Nfc,
  ParkingCircle,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: LucideIcon[] = [
  Armchair,
  Truck,
  ShoppingBag,
  UtensilsCrossed,
  Coffee,
  ParkingCircle,
  Accessibility,
  Heart,
  Nfc,
  CreditCard,
];

export default function Amenities() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 section-glow" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.amenities.eyebrow}
          title={t.amenities.title}
          subtitle={t.amenities.subtitle}
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {t.amenities.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: (i % 5) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="card-gold group flex flex-col items-center justify-center gap-3 rounded-2xl px-3 py-7 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-ink">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-cream/90">{item}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
