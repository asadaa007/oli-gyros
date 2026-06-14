"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import BrandMark from "@/components/BrandMark";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#menu", label: t.nav.menu },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong py-2.5 shadow-luxury" : "bg-transparent py-4"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Oli Gyros">
          <span className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105">
            <BrandMark />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-cream">
              Oli <span className="gold-text">Gyros</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted">
              Debrecen · 1990
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch lang={lang} setLang={setLang} />

          <a
            href={SITE.phoneHref}
            className="btn-shine group relative hidden items-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-deep px-5 py-2.5 text-sm font-semibold text-ink shadow-gold-soft transition-shadow hover:shadow-gold sm:inline-flex"
          >
            <Phone className="relative z-10 h-4 w-4" />
            <span className="relative z-10">{t.nav.orderNow}</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-4 mt-3 space-y-1 rounded-2xl glass-strong p-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-cream/90 transition-colors hover:bg-gold/10 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE.phoneHref}
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-deep px-4 py-3 text-base font-semibold text-ink"
                >
                  <Phone className="h-4 w-4" />
                  {t.nav.orderNow}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function LangSwitch({
  lang,
  setLang,
}: {
  lang: "hu" | "en";
  setLang: (l: "hu" | "en") => void;
}) {
  return (
    <div className="relative flex items-center rounded-full border border-gold/25 bg-charcoal/60 p-0.5 text-xs font-semibold">
      {(["hu", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={cn(
            "relative z-10 rounded-full px-2.5 py-1.5 uppercase tracking-wider transition-colors",
            lang === code ? "text-ink" : "text-cream/60 hover:text-cream"
          )}
          aria-pressed={lang === code}
        >
          {lang === code && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-gold-light to-gold"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
          {code}
        </button>
      ))}
    </div>
  );
}
