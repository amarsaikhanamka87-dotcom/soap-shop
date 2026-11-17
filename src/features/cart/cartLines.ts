import type { ProductSummary } from "@/features/products/types";
import type { CartItems } from "./cartStore";

export type CartLine = {
  product: ProductSummary;
  quantity: number;
  lineTotalMnt: number;
};

/** Joins the stored { slug: quantity } map with product data. Unknown slugs are skipped. */
export function buildCartLines(items: CartItems, products: ProductSummary[]): CartLine[] {
  const productsBySlug = new Map(products.map((product) => [product.slug, product]));

  return Object.entries(items).flatMap(([slug, quantity]) => {
    const product = productsBySlug.get(slug);
    if (!product || quantity <= 0) return [];
    return [{ product, quantity, lineTotalMnt: product.priceMnt * quantity }];
  });
}

export function sumCartLines(lines: CartLine[]): number {
  return lines.reduce((total, line) => total + line.lineTotalMnt, 0);
}

/** Total number of pieces in the cart (for the menu bubble). */
export function countCartItems(items: CartItems): number {
  return Object.values(items).reduce((total, quantity) => total + quantity, 0);
}
