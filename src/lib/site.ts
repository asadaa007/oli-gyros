export const SITE = {
  name: "Oli Gyros",
  url: "https://oligyros.hu",
  phone: "+36 20 557 0907",
  phoneHref: "tel:+36205570907",
  street: "Ótemető u. 35",
  city: "Debrecen",
  postalCode: "4028",
  country: "Hungary",
  countryCode: "HU",
  plusCode: "GJPV+4P Debrecen, Hungary",
  rating: 4.6,
  reviewCount: 962,
  founded: "1990",
  // Centered on Debrecen, Ótemető u. 35
  mapEmbed:
    "https://www.google.com/maps?q=%C3%93temet%C5%91%20u.%2035%2C%204028%20Debrecen%2C%20Hungary&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=%C3%93temet%C5%91+u.+35%2C+4028+Debrecen%2C+Hungary",
  social: {
    facebook: "https://www.facebook.com/pages/Oli-Gyros/155670307828283",
  },
} as const;

// Curated Unsplash imagery (food / restaurant). Used with next/image optimization.
export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&w=1200&q=80",
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=2400&q=80";

export const HERO_DISH =
  "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1100&q=80";

// Small food thumbnails for the hero rail
export const HERO_THUMBS = [
  "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80",
];

export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1400&q=80";

// Darkened full-width "band" backgrounds behind certain sections
export const STATS_BG =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80";

export const REVIEWS_BG =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80";

export const MENU_CATEGORY_IMAGES: Record<string, string> = {
  gyros:
    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1000&q=80",
  burgers:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
  salads:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80",
  drinks:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
};
