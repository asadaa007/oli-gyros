export type Language = "hu" | "en";

export type MenuItem = {
  name: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  tagline: string;
  items: MenuItem[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    menu: string;
    reviews: string;
    gallery: string;
    contact: string;
    orderNow: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    rating: string;
    reviews: string;
    reviewsWord: string;
    yearsWord: string;
    featuredLabel: string;
    popularLabel: string;
    viewMenu: string;
    callNow: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    features: { title: string; desc: string }[];
  };
  stats: {
    eyebrow: string;
    title: string;
    items: { value: number; suffix: string; label: string; decimals?: number }[];
  };
  menu: {
    eyebrow: string;
    title: string;
    subtitle: string;
    currency: string;
    categories: MenuCategory[];
    note: string;
  };
  love: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    rating: string;
    count: string;
    items: { quote: string; author: string; role: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    captions: string[];
  };
  hours: {
    eyebrow: string;
    title: string;
    openNow: string;
    closedNow: string;
    opensAt: string;
    closesAt: string;
    today: string;
    days: string[];
    schedule: { open: string; close: string; closed?: boolean }[];
    closedLabel: string;
  };
  amenities: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    hoursLabel: string;
    callRestaurant: string;
    getDirections: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    openingHours: string;
    contact: string;
    follow: string;
    rights: string;
    madeWith: string;
  };
};

const hu: Dictionary = {
  meta: {
    title: "Oli Gyros | Debrecen kedvenc gyrosa 1990 óta",
    description:
      "Oli Gyros – Debrecen legnépszerűbb gyrosozója 1990 óta. Bőséges adagok, friss alapanyagok, gyors kiszolgálás. 4.6★ értékelés, 962+ vélemény. Ótemető u. 35, Debrecen.",
  },
  nav: {
    home: "Főoldal",
    about: "Rólunk",
    menu: "Étlap",
    reviews: "Vélemények",
    gallery: "Galéria",
    contact: "Kapcsolat",
    orderNow: "Rendelj most",
  },
  hero: {
    badge: "Debrecen kedvence 1990 óta",
    title: "Oli Gyros",
    subtitle: "Debrecen kedvenc gyrosa",
    rating: "4.6 Értékelés",
    reviews: "962+ vélemény",
    reviewsWord: "vélemény",
    yearsWord: "év",
    featuredLabel: "A ház specialitása",
    popularLabel: "Népszerű",
    viewMenu: "Étlap megtekintése",
    callNow: "Hívj most",
    scroll: "Görgess",
  },
  about: {
    eyebrow: "A mi történetünk",
    title: "Igazi gyros, igazi debreceni íz",
    lead: "Több mint három évtizede sütjük a város kedvenc gyrosát.",
    body: "Az Oli Gyros Debrecen egyik legnépszerűbb gyrosozója, amelyet helyiek és turisták egyaránt imádnak. Bőséges adagjainkról, friss alapanyagainkról és villámgyors, barátságos kiszolgálásunkról vagyunk híresek. Nálunk a minőség és a kiváló ár-érték arány találkozik – minden falat egy igazi élmény.",
    features: [
      { title: "Friss alapanyagok", desc: "Naponta válogatott, friss hozzávalók minden tálban." },
      { title: "Autentikus gyros", desc: "Hagyományos receptúra, tökéletesen fűszerezve." },
      { title: "Gyors kiszolgálás", desc: "Forró, ízletes étel a lehető leggyorsabban." },
      { title: "Családbarát", desc: "Kellemes hangulat kicsiknek és nagyoknak egyaránt." },
      { title: "Kiszállítás", desc: "Kedvenced házhoz szállítva, frissen és melegen." },
      { title: "Ingyenes parkolás", desc: "Kényelmes parkolás közvetlenül a helyszínen." },
    ],
  },
  stats: {
    eyebrow: "Számokban",
    title: "Amire büszkék vagyunk",
    items: [
      { value: 962, suffix: "+", label: "Vélemény" },
      { value: 4.6, suffix: "", label: "Értékelés", decimals: 1 },
      { value: 1000, suffix: "+", label: "Elégedett vendég havonta" },
      { value: 30, suffix: "+", label: "Éve Debrecen szolgálatában" },
    ],
  },
  menu: {
    eyebrow: "Étlapunk",
    title: "Jellegzetes fogásaink",
    subtitle: "Bőséges adagok, kézzel készített ízek, megfizethető áron.",
    currency: "Ft",
    categories: [
      {
        id: "gyros",
        title: "Gyros különlegességek",
        tagline: "A ház specialitásai",
        items: [
          { name: "GYROS pitában", price: "1100" },
          { name: "Sajtos Gyros pitában", price: "1200" },
          { name: "GYROS-tál", price: "1700" },
          { name: "Sajtos Gyros-tál", price: "1850" },
          { name: "Kicsi Gyros-tál", price: "1100" },
          { name: "Kicsi Gyros-tál (sajtos)", price: "1200" },
        ],
      },
      {
        id: "burgers",
        title: "Hamburgerek és snackek",
        tagline: "Gyors és laktató",
        items: [
          { name: "Hamburger", price: "800" },
          { name: "Sajtos Hamburger", price: "900" },
          { name: "Hot-dog", price: "600" },
          { name: "Sajtos Hot-dog", price: "700" },
          { name: "Sültburgonya", price: "350" },
          { name: "Plusz pita/kifli/sajt", price: "100" },
        ],
      },
      {
        id: "salads",
        title: "Saláták",
        tagline: "Friss és könnyű",
        items: [
          { name: "Görögsaláta tál", price: "750" },
          { name: "Zöldséges kifli", price: "550" },
        ],
      },
      {
        id: "drinks",
        title: "Italok",
        tagline: "A tökéletes kísérő",
        items: [
          { name: "Kávé", price: "—" },
          { name: "Capuccino", price: "—" },
          { name: "Forró csoki", price: "—" },
          { name: "Tea", price: "—" },
        ],
      },
    ],
    note: "Az árak tájékoztató jellegűek. Kérjük, érdeklődj az aktuális kínálatról.",
  },
  love: {
    eyebrow: "Miért szeretnek minket",
    title: "Amiért újra és újra visszatérnek",
    subtitle: "Valódi vendégeink visszajelzései alapján.",
    items: [
      { title: "Hatalmas adagok", desc: "Garantáltan jóllaksz – bőséges, gazdag tálak." },
      { title: "Ízletes gyros", desc: "Tökéletesen fűszerezett, lédús és finom." },
      { title: "Gyors kiszolgálás", desc: "Nem kell sokat várnod a kedvencedre." },
      { title: "Barátságos személyzet", desc: "Mindig mosolygós, segítőkész csapat." },
      { title: "Kiváló ár-érték", desc: "Prémium minőség megfizethető áron." },
      { title: "Helyi kedvenc", desc: "A debreceniek bizalmát élvezzük évtizedek óta." },
    ],
  },
  reviews: {
    eyebrow: "Vélemények",
    title: "Amit vendégeink mondanak",
    subtitle: "Csatlakozz több száz elégedett vendégünkhöz.",
    rating: "4.6 Értékelés",
    count: "962 vélemény",
    items: [
      { quote: "A legjobb gyros Debrecenben. Minden várakozást megér.", author: "Bálint K.", role: "Helyi vezető" },
      { quote: "Hatalmas adagok és kiváló minőség.", author: "Eszter N.", role: "Visszatérő vendég" },
      { quote: "Barátságos személyzet és finom étel.", author: "Gábor T.", role: "Helyi vendég" },
      { quote: "A legfinomabb gyros, amit valaha ettem.", author: "Petra S.", role: "Foodie" },
      { quote: "Gyors kiszolgálás és remek hangulat.", author: "Dávid M.", role: "Turista" },
    ],
  },
  gallery: {
    eyebrow: "Galéria",
    title: "Egy kis ízelítő",
    subtitle: "Pillants be a konyhánkba és a hangulatunkba.",
    captions: [
      "Friss gyros pitában",
      "Bőséges gyros-tál",
      "Éttermünk belső tere",
      "Kerthelyiség",
      "Frissen készült italok",
      "Elégedett vendégeink",
    ],
  },
  hours: {
    eyebrow: "Nyitvatartás",
    title: "Mikor látogass meg minket",
    openNow: "Most nyitva",
    closedNow: "Jelenleg zárva",
    opensAt: "Nyitás",
    closesAt: "Zárás",
    today: "Ma",
    days: ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"],
    schedule: [
      { open: "11:00", close: "21:00" },
      { open: "11:00", close: "21:00" },
      { open: "11:00", close: "21:00" },
      { open: "11:00", close: "21:00" },
      { open: "11:00", close: "21:00" },
      { open: "12:00", close: "21:00" },
      { open: "", close: "", closed: true },
    ],
    closedLabel: "Zárva",
  },
  amenities: {
    eyebrow: "Szolgáltatások",
    title: "Minden, amire szükséged lehet",
    subtitle: "A kényelmedért és az élményért.",
    items: [
      "Kerthelyiség",
      "Kiszállítás",
      "Elvitel",
      "Helyben fogyasztás",
      "Kiváló kávé",
      "Ingyenes parkolás",
      "Akadálymentes",
      "Családbarát",
      "NFC fizetés",
      "Bankkártya elfogadás",
    ],
  },
  contact: {
    eyebrow: "Kapcsolat",
    title: "Látogass el hozzánk",
    subtitle: "Várunk szeretettel egy igazi debreceni gyrosra.",
    addressLabel: "Cím",
    address: "Ótemető u. 35, 4028 Debrecen, Magyarország",
    phoneLabel: "Telefon",
    hoursLabel: "Nyitvatartás",
    callRestaurant: "Hívd az éttermet",
    getDirections: "Útvonaltervezés",
  },
  footer: {
    tagline: "Debrecen kedvenc gyrosa 1990 óta. Bőséges adagok, friss ízek, barátságos kiszolgálás.",
    quickLinks: "Gyors linkek",
    openingHours: "Nyitvatartás",
    contact: "Kapcsolat",
    follow: "Kövess minket",
    rights: "Minden jog fenntartva.",
    madeWith: "Készült szeretettel Debrecenben",
  },
};

const en: Dictionary = {
  meta: {
    title: "Oli Gyros | Debrecen's Favorite Gyros Since 1990",
    description:
      "Oli Gyros – Debrecen's most popular gyros spot since 1990. Generous portions, fresh ingredients, fast service. 4.6★ rating, 962+ reviews. Ótemető u. 35, Debrecen.",
  },
  nav: {
    home: "Home",
    about: "About",
    menu: "Menu",
    reviews: "Reviews",
    gallery: "Gallery",
    contact: "Contact",
    orderNow: "Order Now",
  },
  hero: {
    badge: "Debrecen's favorite since 1990",
    title: "Oli Gyros",
    subtitle: "Debrecen's Favorite Gyros",
    rating: "4.6 Rating",
    reviews: "962+ reviews",
    reviewsWord: "reviews",
    yearsWord: "years",
    featuredLabel: "House Signature",
    popularLabel: "Popular",
    viewMenu: "View Menu",
    callNow: "Call Now",
    scroll: "Scroll",
  },
  about: {
    eyebrow: "Our Story",
    title: "Authentic gyros, true Debrecen taste",
    lead: "We've been grilling the city's favorite gyros for over three decades.",
    body: "Oli Gyros is one of Debrecen's most beloved gyros restaurants, adored by locals and tourists alike. We're famous for our generous portions, fresh ingredients, and lightning-fast, friendly service. Here, quality meets unbeatable value – every bite is a genuine experience.",
    features: [
      { title: "Fresh Ingredients", desc: "Hand-picked, fresh produce in every plate, daily." },
      { title: "Authentic Gyros", desc: "Traditional recipe, perfectly seasoned every time." },
      { title: "Fast Service", desc: "Hot, delicious food served as quickly as possible." },
      { title: "Family Friendly", desc: "A welcoming atmosphere for guests of all ages." },
      { title: "Delivery Available", desc: "Your favorite delivered fresh and warm to your door." },
      { title: "Free Parking", desc: "Convenient parking right on site." },
    ],
  },
  stats: {
    eyebrow: "By the Numbers",
    title: "What we're proud of",
    items: [
      { value: 962, suffix: "+", label: "Reviews" },
      { value: 4.6, suffix: "", label: "Rating", decimals: 1 },
      { value: 1000, suffix: "+", label: "Happy Customers Monthly" },
      { value: 30, suffix: "+", label: "Years Serving Debrecen" },
    ],
  },
  menu: {
    eyebrow: "Our Menu",
    title: "Signature dishes",
    subtitle: "Generous portions, handcrafted flavors, at honest prices.",
    currency: "Ft",
    categories: [
      {
        id: "gyros",
        title: "Gyros Specials",
        tagline: "House favorites",
        items: [
          { name: "Gyros in Pita", price: "1100" },
          { name: "Cheesy Gyros in Pita", price: "1200" },
          { name: "Gyros Plate", price: "1700" },
          { name: "Cheesy Gyros Plate", price: "1850" },
          { name: "Small Gyros Plate", price: "1100" },
          { name: "Small Cheesy Gyros Plate", price: "1200" },
        ],
      },
      {
        id: "burgers",
        title: "Burgers & Snacks",
        tagline: "Quick and filling",
        items: [
          { name: "Hamburger", price: "800" },
          { name: "Cheese Hamburger", price: "900" },
          { name: "Hot Dog", price: "600" },
          { name: "Cheese Hot Dog", price: "700" },
          { name: "French Fries", price: "350" },
          { name: "Extra Pita/Bread/Cheese", price: "100" },
        ],
      },
      {
        id: "salads",
        title: "Salads",
        tagline: "Fresh and light",
        items: [
          { name: "Greek Salad Plate", price: "750" },
          { name: "Vegetable Roll", price: "550" },
        ],
      },
      {
        id: "drinks",
        title: "Drinks",
        tagline: "The perfect companion",
        items: [
          { name: "Coffee", price: "—" },
          { name: "Cappuccino", price: "—" },
          { name: "Hot Chocolate", price: "—" },
          { name: "Tea", price: "—" },
        ],
      },
    ],
    note: "Prices are indicative. Please ask our staff about current offerings.",
  },
  love: {
    eyebrow: "Why Customers Love Us",
    title: "Why they keep coming back",
    subtitle: "Based on real feedback from our guests.",
    items: [
      { title: "Huge Portions", desc: "Guaranteed to fill you up – generous, hearty plates." },
      { title: "Delicious Gyros", desc: "Perfectly seasoned, juicy, and full of flavor." },
      { title: "Fast Service", desc: "No long waits for your favorite meal." },
      { title: "Friendly Staff", desc: "Always smiling, always happy to help." },
      { title: "Great Value", desc: "Premium quality at an affordable price." },
      { title: "Local Favorite", desc: "Trusted by the people of Debrecen for decades." },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What our guests say",
    subtitle: "Join hundreds of satisfied customers.",
    rating: "4.6 Rating",
    count: "962 reviews",
    items: [
      { quote: "Best gyros in Debrecen. Worth every minute of waiting.", author: "Bálint K.", role: "Local Guide" },
      { quote: "Large portions and excellent quality.", author: "Eszter N.", role: "Returning guest" },
      { quote: "Friendly staff and delicious food.", author: "Gábor T.", role: "Local guest" },
      { quote: "The best gyros I've ever tasted.", author: "Petra S.", role: "Foodie" },
      { quote: "Fast service and great atmosphere.", author: "Dávid M.", role: "Tourist" },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A taste of what awaits",
    subtitle: "Take a peek inside our kitchen and atmosphere.",
    captions: [
      "Fresh gyros in pita",
      "Generous gyros plate",
      "Our restaurant interior",
      "Outdoor seating",
      "Freshly made drinks",
      "Our happy customers",
    ],
  },
  hours: {
    eyebrow: "Opening Hours",
    title: "When to visit us",
    openNow: "Open now",
    closedNow: "Currently closed",
    opensAt: "Opens",
    closesAt: "Closes",
    today: "Today",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    schedule: [
      { open: "11:00", close: "21:00" },
      { open: "11:00", close: "21:00" },
      { open: "11:00", close: "21:00" },
      { open: "11:00", close: "21:00" },
      { open: "11:00", close: "21:00" },
      { open: "12:00", close: "21:00" },
      { open: "", close: "", closed: true },
    ],
    closedLabel: "Closed",
  },
  amenities: {
    eyebrow: "Amenities",
    title: "Everything you need",
    subtitle: "For your comfort and experience.",
    items: [
      "Outdoor Seating",
      "Delivery",
      "Takeaway",
      "Dine-In",
      "Great Coffee",
      "Free Parking",
      "Wheelchair Accessible",
      "Family Friendly",
      "NFC Payments",
      "Credit Cards Accepted",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Come visit us",
    subtitle: "We can't wait to serve you an authentic Debrecen gyros.",
    addressLabel: "Address",
    address: "Ótemető u. 35, 4028 Debrecen, Hungary",
    phoneLabel: "Phone",
    hoursLabel: "Opening Hours",
    callRestaurant: "Call Restaurant",
    getDirections: "Get Directions",
  },
  footer: {
    tagline: "Debrecen's favorite gyros since 1990. Generous portions, fresh flavors, friendly service.",
    quickLinks: "Quick Links",
    openingHours: "Opening Hours",
    contact: "Contact",
    follow: "Follow Us",
    rights: "All rights reserved.",
    madeWith: "Made with love in Debrecen",
  },
};

export const translations: Record<Language, Dictionary> = { hu, en };
