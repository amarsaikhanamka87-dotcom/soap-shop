// Shop-wide settings shown across the site. Brand name and logo are placeholders.

export const siteConfig = {
  name: "Ээл Brand",
  tagline: "Цэвэр · Органик · Гар хийц",
  description: "Монголын байгалийн орцоор гар аргаар хийсэн органик саван.",
  contact: {
    phone: "+976 9973-8590",
    phoneHref: "tel:+97699738590",
    facebookName: "Bazarsuran",
    facebookUrl: null as string | null, // add the full Facebook page link when available
  },
  heroVideo: {
    src: "/videos/hero-steppe.mp4",
    credit: "Efulim", // used with the creator's permission
  },
} as const;

/** Ids of the home page sections the menu scrolls to (/#products, /#about, /#contact). */
export const homeSectionIds = {
  products: "products",
  about: "about",
  contact: "contact",
} as const;

// Items with a `section` scroll to that part of the home page; from other pages
// they open the home page and then scroll. `page` is the standalone page they match.
export const mainNav = [
  { href: "/", label: "Нүүр" },
  { href: `/#${homeSectionIds.products}`, label: "Бүтээгдэхүүн", section: homeSectionIds.products, page: "/products" },
  { href: `/#${homeSectionIds.about}`, label: "Бидний тухай", section: homeSectionIds.about, page: "/about" },
  { href: `/#${homeSectionIds.contact}`, label: "Холбоо барих", section: homeSectionIds.contact, page: "/contact" },
  { href: "/cart", label: "Сагс" },
] as const;
