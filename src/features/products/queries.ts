import "server-only";
import { cacheLife } from "next/cache";
import { prisma } from "@/lib/prisma";
import type { ProductDetail, ProductSummary } from "./types";

const summarySelect = {
  slug: true,
  name: true,
  priceMnt: true,
  weightGrams: true,
  imagePath: true,
  inStock: true,
  isNew: true,
} as const;

/** Products marked "featured", shown in "Онцлох саван" on the home page. */
export async function getFeaturedProducts(): Promise<ProductSummary[]> {
  "use cache";
  cacheLife("hours");

  return prisma.product.findMany({
    where: { isFeatured: true },
    select: summarySelect,
    orderBy: { createdAt: "asc" },
    take: 3,
  });
}

/** All products for the catalogue page, in-stock first. */
export async function getAllProducts(): Promise<ProductSummary[]> {
  "use cache";
  cacheLife("hours");

  return prisma.product.findMany({
    select: summarySelect,
    orderBy: [{ inStock: "desc" }, { createdAt: "asc" }],
  });
}

/** Slugs of every product, used to prerender the detail pages. */
export async function getAllProductSlugs(): Promise<string[]> {
  "use cache";
  cacheLife("hours");

  const rows = await prisma.product.findMany({ select: { slug: true } });
  return rows.map((row) => row.slug);
}

/** One product with its ingredients in display order, or null if the slug is unknown. */
export async function getProductBySlug(slug: string): Promise<ProductDetail | null> {
  "use cache";
  cacheLife("hours");

  const product = await prisma.product.findUnique({
    where: { slug },
    select: {
      ...summarySelect,
      description: true,
      skinType: true,
      ingredients: {
        orderBy: { sortOrder: "asc" },
        select: { benefit: true, ingredient: { select: { name: true } } },
      },
    },
  });

  if (!product) return null;

  return {
    ...product,
    ingredients: product.ingredients.map(({ benefit, ingredient }) => ({
      name: ingredient.name,
      benefit,
    })),
  };
}
