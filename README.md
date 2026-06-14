# Oli Gyros — Premium Restaurant Website

An ultra-premium, bilingual (Hungarian / English) marketing site for **Oli Gyros**, Debrecen's favorite gyros restaurant since 1990.

> Debrecen kedvenc gyrosa 1990 óta · Debrecen's Favorite Gyros Since 1990

## ✨ Features

- **Fully bilingual (HU default / EN)** — instant client-side switching, no reload, persisted in `localStorage`.
- **Dark, cinematic luxury theme** — black/charcoal surfaces, gold & amber accents, glassmorphism, gradients.
- **Framer Motion throughout** — parallax hero, scroll reveals, staggered cards, animated counters, testimonial slider, floating elements, scroll-progress bar.
- **Live open/closed status** — computed in the `Europe/Budapest` timezone, updates every minute.
- **Sections** — Hero, About + feature cards, Statistics counters, Signature Menu (tabbed), Why Customers Love Us, Reviews slider, Gallery (masonry + lightbox), Opening Hours, Amenities, Contact (Google Maps embed), Footer.
- **SEO** — rich metadata, Open Graph / Twitter cards, hreflang alternates, `Restaurant` + `LocalBusiness` JSON-LD structured data, `sitemap.xml`, `robots.txt`.
- **Performance & a11y** — `next/image` optimization (AVIF/WebP), lazy loading, `prefers-reduced-motion` support, semantic markup, keyboard-focus styles.

## 🛠 Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons
- Lenis (smooth scroll)

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
npm run lint     # eslint
```

## 📁 Structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, SEO metadata, JSON-LD, LanguageProvider
│   ├── page.tsx          # homepage composition + scroll progress
│   ├── globals.css       # theme tokens, glass/gold utilities, keyframes
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navbar.tsx · Hero.tsx · About.tsx · Statistics.tsx · Menu.tsx
│   ├── WhyLoveUs.tsx · Reviews.tsx · Gallery.tsx · Hours.tsx
│   ├── Amenities.tsx · Contact.tsx · Footer.tsx · SmoothScroll.tsx
│   └── ui/               # Reveal, Counter, SectionHeading
└── lib/
    ├── i18n.tsx          # LanguageProvider + useI18n hook
    ├── translations.ts   # full HU + EN dictionary (single source of truth)
    ├── site.ts           # business info, images, map links
    ├── hours.ts          # Budapest-timezone open/closed logic
    └── utils.ts          # cn() helper
```

## 🌍 Translations

All copy lives in `src/lib/translations.ts` as a typed `Dictionary`. Components read the
current language via the `useI18n()` hook (`const { t, lang, setLang } = useI18n()`).
Adding a string means adding it to both `hu` and `en` objects — TypeScript enforces shape parity.

## 📝 Notes

- Imagery uses optimized Unsplash placeholders (configured in `next.config.ts`). Swap the URLs
  in `src/lib/site.ts` for real Oli Gyros photography before launch.
- Add a `public/og-image.jpg` (1200×630) for social sharing previews.
- Update `SITE.url` and social links in `src/lib/site.ts` to the production domain.

---

© Oli Gyros · Ótemető u. 35, 4028 Debrecen, Hungary · +36 20 557 0907
