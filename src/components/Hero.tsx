"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, MapPin, Phone, Star, UtensilsCrossed } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { HERO_DISH, HERO_IMAGE, HERO_THUMBS, SITE } from "@/lib/site";

export default function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const signature = t.menu.categories[0].items[2]; // Gyros Plate / GYROS-tál

  return (
    <section
      ref={ref}
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      {/* Background photo */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Frissen készült gyros és mediterrán fogások az Oli Gyrosnál"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic grade + animated shader mesh + grain */}
      <div className="hero-grade absolute inset-0 z-[1]" aria-hidden />
      <div className="hero-shader absolute inset-0 z-[2]" aria-hidden />
      <div className="hero-grain absolute inset-0 z-[3]" aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-24 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* ── Content ───────────────────────────── */}
        <motion.div style={{ y: contentY, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-cream/90">
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-6xl font-bold leading-[0.92] tracking-tight text-cream drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-[6.5rem]"
          >
            Oli{" "}
            <span className="gold-text drop-shadow-[0_0_45px_rgba(212,162,60,0.35)]">
              Gyros
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-md font-accent text-2xl italic text-cream/85 sm:text-3xl"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Info row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={1} />
                ))}
              </span>
              <span className="font-bold text-cream">{SITE.rating}</span>
              <span className="text-cream/60">· 962+ {t.hero.reviewsWord}</span>
            </span>
            <span className="hidden h-4 w-px bg-cream/20 sm:block" />
            <span className="flex items-center gap-1.5 text-cream/75">
              <MapPin className="h-4 w-4 text-gold" />
              {SITE.city}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#menu"
              className="btn-shine group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-deep px-8 py-4 text-base font-semibold text-ink shadow-gold-soft transition-shadow hover:shadow-gold"
            >
              <UtensilsCrossed className="relative z-10 h-5 w-5" />
              <span className="relative z-10">{t.hero.viewMenu}</span>
            </a>
            <a
              href={SITE.phoneHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-8 py-4 text-base font-semibold text-cream backdrop-blur-sm transition-all hover:border-gold hover:bg-gold/10"
            >
              <Phone className="h-5 w-5 text-gold transition-transform group-hover:rotate-12" />
              {t.hero.callNow}
            </a>
          </motion.div>

          {/* Food thumbnail rail */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-center gap-3"
          >
            <div className="flex -space-x-3">
              {HERO_THUMBS.map((src, i) => (
                <motion.span
                  key={src}
                  whileHover={{ y: -6, scale: 1.08, zIndex: 10 }}
                  className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-gold/40 shadow-lg"
                >
                  <Image
                    src={src}
                    alt={t.menu.categories[i]?.title ?? "Oli Gyros"}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </motion.span>
              ))}
            </div>
            <p className="text-xs leading-tight text-cream/70">
              <span className="font-semibold text-cream">1000+</span>
              <br />
              {t.stats.items[2].label}
            </p>
          </motion.div>
        </motion.div>

        {/* ── Featured dish card (desktop) ───────── */}
        <motion.div
          style={{ y: cardY, opacity }}
          className="relative hidden h-[520px] items-center justify-center lg:flex"
        >
          {/* warm glow */}
          <div className="absolute inset-10 rounded-[3rem] bg-gradient-to-tr from-gold/25 via-amber/10 to-transparent blur-3xl" />

          {/* main dish image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[440px] w-[360px]"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-gold/30 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.85)]"
            >
              <Image
                src={HERO_DISH}
                alt="Oli Gyros-tál friss feltétekkel"
                fill
                priority
                sizes="40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

              {/* signature pill bottom */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl glass-strong px-4 py-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                    {t.hero.featuredLabel}
                  </p>
                  <p className="font-display text-base font-semibold text-cream">
                    {signature.name}
                  </p>
                </div>
                <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-gold-light to-gold px-3 py-1.5 text-sm font-bold text-ink">
                  {signature.price} {t.menu.currency}
                </span>
              </div>
            </motion.div>

            {/* rotating seal */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute -right-7 -top-7 h-24 w-24"
            >
              <Seal />
            </motion.div>

            {/* floating rating chip */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-10 flex items-center gap-2 rounded-2xl glass-strong px-4 py-3 shadow-gold-soft"
            >
              <span className="font-display text-3xl font-bold gold-text">4.6</span>
              <span className="flex flex-col leading-none">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-2.5 w-2.5 fill-gold text-gold" strokeWidth={1} />
                  ))}
                </span>
                <span className="mt-1 text-[10px] text-cream/70">962+ Google</span>
              </span>
            </motion.div>

            {/* popular badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 right-2 rounded-full bg-gradient-to-r from-amber to-gold px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-gold-soft"
            >
              ★ {t.hero.popularLabel}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label={t.hero.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
          {t.hero.scroll}
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/30 p-1">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-gold"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <ArrowDown className="h-4 w-4 text-gold/70" />
      </motion.a>
    </section>
  );
}

function Seal() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
      <defs>
        <path id="seal-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        <linearGradient id="seal-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0c46a" />
          <stop offset="100%" stopColor="#d4a23c" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="58" fill="#0a0a0c" opacity="0.9" />
      <circle cx="60" cy="60" r="57" fill="none" stroke="url(#seal-gold)" strokeWidth="1" opacity="0.7" />
      <circle cx="60" cy="60" r="36" fill="none" stroke="url(#seal-gold)" strokeWidth="0.75" opacity="0.5" />
      <text fill="url(#seal-gold)" fontSize="11" fontWeight="600" letterSpacing="3.5">
        <textPath href="#seal-path" startOffset="0">
          OLI GYROS · DEBRECEN · EST. 1990 ·
        </textPath>
      </text>
      <g transform="translate(60 60)">
        <SealStar x={-8} />
      </g>
    </svg>
  );
}

function SealStar({ x }: { x: number }) {
  return (
    <path
      transform={`translate(${x} -8) scale(0.7)`}
      d="M11.48 3.5a.55.55 0 0 1 1.04 0l2.07 4.2 4.63.67a.55.55 0 0 1 .3.94l-3.35 3.27.79 4.62a.55.55 0 0 1-.8.58L12 16.27l-4.15 2.18a.55.55 0 0 1-.8-.58l.8-4.62-3.36-3.27a.55.55 0 0 1 .3-.94l4.64-.67 2.07-4.2Z"
      fill="url(#seal-gold)"
    />
  );
}
