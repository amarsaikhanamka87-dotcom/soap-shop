// Example soaps from the design demo. Replace with real products later.

export type SeedIngredient = { name: string; benefit: string };

export type SeedProduct = {
  slug: string;
  name: string;
  description: string;
  priceMnt: number;
  weightGrams: number;
  skinType: string;
  inStock: boolean;
  isNew: boolean;
  isFeatured: boolean;
  ingredients: SeedIngredient[];
};

export const seedProducts: SeedProduct[] = [
  {
    slug: "bagvaakhai",
    name: "Багваахайтай саван",
    description:
      "Хаврын тал дээр хамгийн түрүүнд ургадаг багваахайн хандтай. Арьсыг зөөлөн цэвэрлэж, улайлтыг тайвшруулна.",
    priceMnt: 15000,
    weightGrams: 100,
    skinType: "Бүх төрлийн арьс",
    inStock: true,
    isNew: true,
    isFeatured: true,
    ingredients: [
      { name: "Багваахайн ханд", benefit: "Арьсыг тайвшруулж, улайлтыг бууруулна" },
      { name: "Чацарганы тос", benefit: "Витамин C, E-ээр арьсыг тэжээнэ" },
      { name: "Ямааны сүү", benefit: "Арьсыг зөөлрүүлж, чийгшүүлнэ" },
      { name: "Кокосын тос", benefit: "Нягт, зөөлөн хөөс үүсгэнэ" },
      { name: "Зөгийн лав", benefit: "Чийгийг арьсанд хадгална" },
    ],
  },
  {
    slug: "chatsargana",
    name: "Чацарганатай саван",
    description: "Говийн чацарганы тос, зөгийн балтай. Хуурай, ядарсан арьсанд гэрэл гэгээ өгнө.",
    priceMnt: 16000,
    weightGrams: 100,
    skinType: "Хуурай арьс",
    inStock: true,
    isNew: false,
    isFeatured: true,
    ingredients: [
      { name: "Чацарганы тос", benefit: "Арьсыг сэргээж, гэрэлтүүлнэ" },
      { name: "Зөгийн бал", benefit: "Байгалийн чийгшүүлэгч" },
      { name: "Оливын тос", benefit: "Арьсыг зөөлөн арчилна" },
      { name: "Овъёос", benefit: "Зөөлөн гуужуулна" },
    ],
  },
  {
    slug: "ganga",
    name: "Гангатай саван",
    description: "Тал нутгийн ганга ургамлын анхилуун үнэртэй. Тослог арьсыг цэвэрлэж, сэргээнэ.",
    priceMnt: 14000,
    weightGrams: 100,
    skinType: "Тослог, холимог арьс",
    inStock: true,
    isNew: false,
    isFeatured: true,
    ingredients: [
      { name: "Ганга", benefit: "Нянгийн эсрэг, сэргээх үйлчилгээтэй" },
      { name: "Цагаан шавар", benefit: "Илүүдэл тосыг шингээнэ" },
      { name: "Оливын тос", benefit: "Арьсыг хамгаална" },
      { name: "Кокосын тос", benefit: "Хөөс үүсгэнэ" },
    ],
  },
  {
    slug: "yamaa",
    name: "Ямааны сүүтэй саван",
    description:
      "Малчин айлын ямааны сүү, зөгийн балтай хамгийн зөөлөн саван. Хүүхэд, мэдрэг арьсанд тохиромжтой.",
    priceMnt: 15000,
    weightGrams: 100,
    skinType: "Мэдрэг арьс, хүүхэд",
    inStock: false,
    isNew: false,
    isFeatured: false,
    ingredients: [
      { name: "Ямааны сүү", benefit: "Арьсыг зөөлөн тэжээнэ" },
      { name: "Зөгийн бал", benefit: "Чийгшүүлнэ" },
      { name: "Оливын тос", benefit: "Цочроохгүй арчилна" },
      { name: "Ши тос", benefit: "Арьсыг зөөлрүүлнэ" },
    ],
  },
  {
    slug: "arts",
    name: "Арцтай саван",
    description: "Уулын арц, идэвхжүүлсэн нүүрстэй. Ойн шинэхэн үнэртэй гүн цэвэрлэгээ.",
    priceMnt: 17000,
    weightGrams: 100,
    skinType: "Тослог арьс",
    inStock: true,
    isNew: false,
    isFeatured: false,
    ingredients: [
      { name: "Арц", benefit: "Ариутгаж, анхилуун үнэр өгнө" },
      { name: "Идэвхжүүлсэн нүүрс", benefit: "Нүх сүвийг гүн цэвэрлэнэ" },
      { name: "Кокосын тос", benefit: "Хөөс үүсгэнэ" },
      { name: "Оливын тос", benefit: "Арьсыг хамгаална" },
    ],
  },
  {
    slug: "nokhoin-khoshuu",
    name: "Нохойн хошуутай саван",
    description: "Зэрлэг нохойн хошууны тос, ягаан шавартай. Арьсны уян хатан чанарыг дэмжинэ.",
    priceMnt: 16000,
    weightGrams: 100,
    skinType: "Хуурай, нас ахисан арьс",
    inStock: false,
    isNew: false,
    isFeatured: false,
    ingredients: [
      { name: "Нохойн хошууны тос", benefit: "Арьсыг сэргээнэ" },
      { name: "Ягаан шавар", benefit: "Зөөлөн цэвэрлэнэ" },
      { name: "Оливын тос", benefit: "Тэжээнэ" },
      { name: "Зөгийн лав", benefit: "Чийг хадгална" },
    ],
  },
];
