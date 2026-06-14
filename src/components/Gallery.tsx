"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { GALLERY_IMAGES } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const SPANS = [
  "sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "sm:row-span-2",
];

export default function Gallery() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  const close = () => setOpen(null);
  const prev = () =>
    setOpen((i) => (i === null ? i : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const next = () =>
    setOpen((i) => (i === null ? i : (i + 1) % GALLERY_IMAGES.length));

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-ink py-24 sm:py-32"
    >
      <div className="absolute inset-0 section-glow" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-gold/10",
                SPANS[i % SPANS.length]
              )}
            >
              <Image
                src={src}
                alt={t.gallery.captions[i] ?? "Oli Gyros"}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
              <span className="absolute bottom-3 left-3 right-3 text-left font-display text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:opacity-100">
                {t.gallery.captions[i]}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream transition-colors hover:bg-gold hover:text-ink"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream transition-colors hover:bg-gold hover:text-ink sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[3/2] w-full max-w-4xl overflow-hidden rounded-2xl"
            >
              <Image
                src={GALLERY_IMAGES[open]}
                alt={t.gallery.captions[open] ?? "Oli Gyros"}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <p className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/90 to-transparent p-4 text-center font-accent text-lg italic text-cream">
                {t.gallery.captions[open]}
              </p>
            </motion.div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream transition-colors hover:bg-gold hover:text-ink sm:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
