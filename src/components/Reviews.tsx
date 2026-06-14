"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { REVIEWS_BG, SITE } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Reviews() {
  const { t } = useI18n();
  const items = t.reviews.items;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDir(next > index || (index === items.length - 1 && next === 0) ? 1 : -1);
      setIndex((next + items.length) % items.length);
    },
    [index, items.length]
  );

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % items.length);
    }, 6000);
    return () => clearInterval(id);
  }, [items.length]);

  const review = items[index];

  return (
    <section
      id="reviews"
      className="relative isolate overflow-hidden py-24 sm:py-32"
    >
      {/* Restaurant ambiance background */}
      <div className="absolute inset-0 z-0">
        <Image src={REVIEWS_BG} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 z-[1] bg-charcoal/88" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
      <div className="absolute inset-0 z-[1] section-glow" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.reviews.eyebrow}
          title={t.reviews.title}
          subtitle={t.reviews.subtitle}
        />

        {/* Rating summary */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-3">
            <span className="font-display text-5xl font-bold gold-text">
              {SITE.rating}
            </span>
            <div>
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < Math.round(SITE.rating)
                        ? "fill-gold text-gold"
                        : "text-cream/20"
                    )}
                    strokeWidth={1}
                  />
                ))}
              </span>
              <span className="text-xs text-muted">{t.reviews.count}</span>
            </div>
          </div>
          <span className="hidden h-10 w-px bg-cream/15 sm:block" />
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4285F4] text-[10px] font-bold text-white">
              G
            </span>
            <span className="text-sm text-cream/85">Google Reviews</span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-12 min-h-[280px] sm:min-h-[240px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="card-gold mx-auto max-w-3xl rounded-3xl p-8 text-center sm:p-12"
            >
              <Quote className="mx-auto h-10 w-10 text-gold/40" />
              <span className="mt-5 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={1} />
                ))}
              </span>
              <p className="mt-5 font-accent text-2xl italic leading-relaxed text-cream sm:text-3xl">
                “{review.quote}”
              </p>
              <footer className="mt-6">
                <p className="font-display text-base font-semibold text-gold-light">
                  {review.author}
                </p>
                <p className="text-xs uppercase tracking-wider text-muted">
                  {review.role}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream transition-colors hover:bg-gold hover:text-ink"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to review ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-gold" : "w-2 bg-cream/25 hover:bg-cream/50"
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream transition-colors hover:bg-gold hover:text-ink"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
