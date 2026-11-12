import type { ProductSummary } from "./types";

export const sortOptions = [
  { value: "popular", label: "Эрэлттэй" },
  { value: "price-asc", label: "Үнэ өсөхөөр" },
  { value: "price-desc", label: "Үнэ буурахаар" },
] as const;

export type SortOption = (typeof sortOptions)[number]["value"];

/** Returns a new array; "popular" keeps the catalogue order from the database. */
export function sortProducts(products: ProductSummary[], sort: SortOption): ProductSummary[] {
  if (sort === "price-asc") return [...products].sort((a, b) => a.priceMnt - b.priceMnt);
  if (sort === "price-desc") return [...products].sort((a, b) => b.priceMnt - a.priceMnt);
  return products;
}
