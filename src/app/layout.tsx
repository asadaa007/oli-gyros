import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Oli Gyros | Debrecen kedvenc gyrosa 1990 óta",
    template: "%s | Oli Gyros",
  },
  description:
    "Oli Gyros – Debrecen legnépszerűbb gyrosozója 1990 óta. Bőséges adagok, friss alapanyagok, gyors kiszolgálás. 4.6★ értékelés, 962+ vélemény. Debrecen's favorite gyros since 1990.",
  applicationName: "Oli Gyros",
  keywords: [
    "Oli Gyros",
    "Gyros Debrecen",
    "Best Gyros Debrecen",
    "legjobb gyros Debrecen",
    "Gyros Hungary",
    "Restaurant Debrecen",
    "étterem Debrecen",
    "Fast Food Debrecen",
    "gyrosozó Debrecen",
    "Ótemető utca gyros",
  ],
  authors: [{ name: "Oli Gyros" }],
  creator: "Oli Gyros",
  alternates: {
    canonical: SITE.url,
    languages: {
      "hu-HU": SITE.url,
      "en-US": `${SITE.url}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    alternateLocale: ["en_US"],
    url: SITE.url,
    siteName: "Oli Gyros",
    title: "Oli Gyros | Debrecen kedvenc gyrosa 1990 óta",
    description:
      "Bőséges adagok, friss alapanyagok, gyors kiszolgálás. 4.6★ értékelés, 962+ vélemény.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oli Gyros – Debrecen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oli Gyros | Debrecen's Favorite Gyros",
    description:
      "Debrecen's most popular gyros since 1990. 4.6★ rating, 962+ reviews.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "restaurant",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE.url}/#restaurant`,
  name: SITE.name,
  description:
    "Debrecen's favorite gyros restaurant since 1990. Generous portions, fresh ingredients and fast, friendly service.",
  url: SITE.url,
  telephone: SITE.phone,
  priceRange: "$",
  servesCuisine: ["Greek", "Mediterranean", "Gyros", "Fast Food"],
  image: [`${SITE.url}/og-image.jpg`],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    postalCode: SITE.postalCode,
    addressCountry: SITE.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.5416,
    longitude: 21.6448,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating,
    reviewCount: SITE.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "12:00",
      closes: "21:00",
    },
  ],
  paymentAccepted: "Cash, Credit Card, NFC",
  hasMap: SITE.directions,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${cormorant.variable} font-body antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
