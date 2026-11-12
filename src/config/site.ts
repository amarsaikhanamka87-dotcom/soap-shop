// Shop-wide settings shown across the site. Brand name and logo are placeholders.

export const siteConfig = {
  name: "Тал Саван",
  tagline: "Цэвэр · Органик · Гар хийц",
  description: "Монголын байгалийн орцоор гар аргаар хийсэн органик саван.",
  contact: {
    phone: "+976 9973-8590",
    facebookName: "Bazarsuran",
    facebookUrl: null as string | null, // add the full Facebook page link when available
  },
  heroVideo: {
    src: "/videos/hero-steppe.mp4",
    credit: "Efulim", // used with the creator's permission
  },
} as const;

export const mainNav = [
  { href: "/", label: "Нүүр" },
  { href: "/products", label: "Бүтээгдэхүүн" },
  { href: "/about", label: "Бидний тухай" },
  { href: "/contact", label: "Холбоо барих" },
  { href: "/cart", label: "Сагс" },
] as const;
