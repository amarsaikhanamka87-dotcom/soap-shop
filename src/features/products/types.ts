// Plain product shapes passed from the data layer to UI components.

export type ProductSummary = {
  slug: string;
  name: string;
  priceMnt: number;
  weightGrams: number;
  imagePath: string | null;
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
  ingredients: ProductIngredientInfo[];
};
