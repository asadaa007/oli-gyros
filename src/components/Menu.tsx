"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { MENU_CATEGORY_IMAGES } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Menu() {
  const { t } = useI18n();

  return (
    <section
      id="menu"
      className="section-glow relative overflow-hidden bg-charcoal py-24 sm:py-32"
    >
      {/* decorative blurred orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-amber/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.menu.eyebrow}
          title={t.menu.title}
          subtitle={t.menu.subtitle}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {t.menu.categories.map((category, ci) => {
            const allNoPrice = category.items.every((it) => it.price === "—");
            const isSignature = ci === 0;
            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: (ci % 2) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card-gold group relative flex flex-col overflow-hidden rounded-3xl"
              >
                {/* Photo header */}
                <div className="relative h-48 overflow-hidden sm:h-52">
                  <Image
                    src={MENU_CATEGORY_IMAGES[category.id]}
                    alt={category.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

                  {/* index number */}
                  <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-ink/50 font-display text-sm font-bold text-gold backdrop-blur-sm">
                    {String(ci + 1).padStart(2, "0")}
                  </span>

                  {/* popular badge on signature category */}
                  {isSignature && (
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber to-gold px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink shadow-gold-soft">
                      <Flame className="h-3.5 w-3.5" />
                      {t.hero.popularLabel}
                    </span>
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                      {category.tagline}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold text-cream">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Items */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {allNoPrice ? (
                    <div className="flex flex-wrap gap-2.5">
                      {category.items.map((item) => (
                        <span
                          key={item.name}
                          className="rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-sm font-medium text-cream/90 transition-colors hover:border-gold/50 hover:text-gold"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-0.5">
                      {category.items.map((item) => (
                        <li
                          key={item.name}
                          className="group/item flex items-baseline gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-gold/5"
                        >
                          <span className="font-display text-[15px] font-medium text-cream transition-colors group-hover/item:text-gold-light">
                            {item.name}
                          </span>
                          <span className="h-px flex-1 translate-y-[-3px] border-b border-dashed border-cream/15" />
                          <span className="whitespace-nowrap text-sm font-bold text-gold">
                            {item.price}
                            <span className="ml-1 text-xs font-normal text-muted">
                              {t.menu.currency}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* gold corner accents */}
                <span className="pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-bl-[2rem] border-r border-t border-gold/0 transition-colors duration-500 group-hover:border-gold/30" />
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-center">
          <Star className="h-4 w-4 fill-gold/40 text-gold/40" />
          <p className="text-xs italic text-muted">{t.menu.note}</p>
          <Star className="h-4 w-4 fill-gold/40 text-gold/40" />
        </div>
      </div>
    </section>
  );
}
