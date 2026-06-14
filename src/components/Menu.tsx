"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { MENU_CATEGORY_IMAGES } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Menu() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const category = t.menu.categories[active];

  return (
    <section
      id="menu"
      className="section-glow relative overflow-hidden bg-charcoal py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.menu.eyebrow}
          title={t.menu.title}
          subtitle={t.menu.subtitle}
        />

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {t.menu.categories.map((cat, i) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                active === i ? "text-ink" : "text-cream/70 hover:text-cream"
              )}
            >
              {active === i && (
                <motion.span
                  layoutId="menu-tab"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-gold-light to-gold"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid gap-8 lg:grid-cols-5"
          >
            {/* Image panel */}
            <div className="relative lg:col-span-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gold/15 shadow-luxury lg:aspect-[3/4]">
                <Image
                  src={MENU_CATEGORY_IMAGES[category.id]}
                  alt={category.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold">
                    {category.tagline}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-cream">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="lg:col-span-3">
              <ul className="space-y-1.5">
                {category.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex items-center gap-4 rounded-xl px-4 py-3.5 transition-colors hover:bg-gold/5"
                  >
                    <span className="font-display text-lg font-medium text-cream transition-colors group-hover:text-gold-light">
                      {item.name}
                    </span>
                    <span className="h-px flex-1 border-b border-dashed border-cream/15" />
                    <span className="whitespace-nowrap font-semibold text-gold">
                      {item.price === "—" ? (
                        <span className="text-muted">—</span>
                      ) : (
                        <>
                          {item.price}
                          <span className="ml-1 text-xs font-normal text-muted">
                            {t.menu.currency}
                          </span>
                        </>
                      )}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 text-xs italic text-muted">{t.menu.note}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
