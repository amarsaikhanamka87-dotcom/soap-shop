// Plain product shapes passed from the data layer to UI components.

/** One product photo: its file name in the Storage bucket and optional alt text. */
export type ProductImageInfo = {
  path: string;
  alt: string | null;
};

export type ProductSummary = {
  slug: string;
  name: string;
  priceMnt: number;
  weightGrams: number;
  /** First photo by sort order (cards, cart), or null when the product has none. */
  mainImage: ProductImageInfo | null;
  inStock: boolean;
  isNew: boolean;
};

export type ProductIngredientInfo = {
  name: string;
  benefit: string | null;
};

export type ProductDetail = ProductSummary & {
  description: string;
  skinType: string | null;
  /** All photos in display order (product page gallery). */
  images: ProductImageInfo[];
  ingredients: ProductIngredientInfo[];
};
