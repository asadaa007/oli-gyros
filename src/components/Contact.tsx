"use client";

import { motion } from "framer-motion";
import { Facebook, MapPin, Navigation, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      className="section-glow relative overflow-hidden bg-charcoal py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Info card */}
          <Reveal className="flex flex-col gap-5">
            <div className="card-gold flex items-start gap-4 rounded-2xl p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {t.contact.addressLabel}
                </p>
                <p className="mt-1.5 text-base text-cream/90">{t.contact.address}</p>
                <p className="mt-1 text-sm text-muted">{SITE.plusCode}</p>
              </div>
            </div>

            <div className="card-gold flex items-start gap-4 rounded-2xl p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {t.contact.phoneLabel}
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-1.5 block text-lg font-semibold text-cream transition-colors hover:text-gold"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>

            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="card-gold group flex items-center gap-4 rounded-2xl p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] text-white">
                <Facebook className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {t.footer.follow}
                </p>
                <p className="mt-1.5 text-base font-semibold text-cream transition-colors group-hover:text-gold">
                  facebook.com/Oli-Gyros
                </p>
              </div>
            </a>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.phoneHref}
                className="btn-shine group relative inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-deep px-6 py-4 text-base font-semibold text-ink shadow-gold-soft transition-shadow hover:shadow-gold"
              >
                <Phone className="relative z-10 h-5 w-5" />
                <span className="relative z-10">{t.contact.callRestaurant}</span>
              </a>
              <a
                href={SITE.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 px-6 py-4 text-base font-semibold text-cream transition-all hover:border-gold hover:bg-gold/10"
              >
                <Navigation className="h-5 w-5 text-gold transition-transform group-hover:translate-x-0.5" />
                {t.contact.getDirections}
              </a>
            </div>
          </Reveal>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[360px] overflow-hidden rounded-3xl border border-gold/15 shadow-luxury lg:h-auto"
          >
            <iframe
              title="Oli Gyros – Debrecen"
              src={SITE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full grayscale-[0.3] contrast-110"
              style={{ border: 0 }}
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
