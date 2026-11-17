import "server-only";
import { cacheLife } from "next/cache";
import { prisma } from "@/lib/prisma";
import type { ProductDetail, ProductImageInfo, ProductSummary } from "./types";

const imageSelect = { path: true, alt: true } as const;
const imagesInOrder = { orderBy: { sortOrder: "asc" }, select: imageSelect } as const;

const summarySelect = {
  slug: true,
  name: true,
  priceMnt: true,
  weightGrams: true,
  inStock: true,
  isNew: true,
  images: { ...imagesInOrder, take: 1 },
} as const;

/** Turns the 0–1 photo list from summarySelect into `mainImage`. */
function toSummary<T extends { images: ProductImageInfo[] }>({ images, ...product }: T) {
  return { ...product, mainImage: images[0] ?? null };
}

/** Newest in-stock products, shown in the "New In" carousel on the home page. */
export async function getNewInProducts(): Promise<ProductSummary[]> {
  "use cache";
  cacheLife("hours");

  const rows = await prisma.product.findMany({
    where: { inStock: true },
    select: summarySelect,
    orderBy: { createdAt: "desc" },
    take: 8,
  });
  return rows.map(toSummary);
}

/** All products for the catalogue page, in-stock first. */
export async function getAllProducts(): Promise<ProductSummary[]> {
  "use cache";
  cacheLife("hours");

  const rows = await prisma.product.findMany({
    select: summarySelect,
    orderBy: [{ inStock: "desc" }, { createdAt: "asc" }],
  });
  return rows.map(toSummary);
}

/** Slugs of every product, used to prerender the detail pages. */
export async function getAllProductSlugs(): Promise<string[]> {
  "use cache";
  cacheLife("hours");

  const rows = await prisma.product.findMany({ select: { slug: true } });
  return rows.map((row) => row.slug);
}

/** One product with all its photos and ingredients in display order, or null if the slug is unknown. */
export async function getProductBySlug(slug: string): Promise<ProductDetail | null> {
  "use cache";
  cacheLife("hours");

  const product = await prisma.product.findUnique({
    where: { slug },
    select: {
      ...summarySelect,
      images: imagesInOrder,
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
    mainImage: product.images[0] ?? null,
    ingredients: product.ingredients.map(({ benefit, ingredient }) => ({
      name: ingredient.name,
      benefit,
    })),
  };
}
