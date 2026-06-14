"use client";

import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import BrandMark from "@/components/BrandMark";

export default function Footer() {
  const { t, lang, setLang } = useI18n();
  const year = new Date().getFullYear();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#menu", label: t.nav.menu },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gold/10 bg-ink pt-16">
      <div className="absolute inset-x-0 top-0 h-px gold-line" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="h-11 w-11">
                <BrandMark />
              </span>
              <span className="font-display text-xl font-bold text-cream">
                Oli <span className="gold-text">Gyros</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              {t.footer.quickLinks}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              {t.footer.openingHours}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              {t.hours.days.map((day, i) => {
                const slot = t.hours.schedule[i];
                return (
                  <li key={day} className="flex justify-between gap-3">
                    <span>{day}</span>
                    <span className="tabular-nums text-muted">
                      {slot.closed ? t.hours.closedLabel : `${slot.open}–${slot.close}`}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              {t.footer.contact}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{t.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href={SITE.phoneHref} className="transition-colors hover:text-gold">
                  {SITE.phone}
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                {t.footer.follow}
              </p>
              <div className="mt-3 flex gap-2.5">
                <SocialIcon href={SITE.social.facebook} label="Facebook">
                  <Facebook className="h-4 w-4" />
                </SocialIcon>
                <SocialIcon href={SITE.social.instagram} label="Instagram">
                  <Instagram className="h-4 w-4" />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/10 py-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} Oli Gyros. {t.footer.rights}
          </p>
          <p className="order-last text-xs text-muted sm:order-none">
            {t.footer.madeWith}
          </p>
          <div className="flex items-center rounded-full border border-gold/25 bg-charcoal/60 p-0.5 text-xs font-semibold">
            {(["hu", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={cn(
                  "rounded-full px-3 py-1.5 uppercase tracking-wider transition-colors",
                  lang === code
                    ? "bg-gradient-to-r from-gold-light to-gold text-ink"
                    : "text-cream/60 hover:text-cream"
                )}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-cream/80 transition-all hover:border-gold hover:bg-gold hover:text-ink"
    >
      {children}
    </a>
  );
}
