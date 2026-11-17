import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/features/products/components/ProductDetailView";
import { getAllProductSlugs, getProductBySlug } from "@/features/products/queries";

// Route only: which slugs to prerender, page metadata, and loading the product.
// The page layout lives in ProductDetailView.

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return product ? { title: product.name, description: product.description } : {};
}

export default async function ProductDetailPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailView product={product} />;
}
