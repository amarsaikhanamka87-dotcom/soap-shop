import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/features/cart/components/AddToCart";
import { IngredientList } from "@/features/products/components/IngredientList";
import { SoapPlaceholder } from "@/features/products/components/SoapPlaceholder";
import { formatPriceMnt, formatWeight } from "@/features/products/format";
import { getAllProductSlugs, getProductBySlug } from "@/features/products/queries";

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

  return (
    <article className="site-container py-12">
      <Link href="/products" className="kicker text-grass-deep hover:underline">
        ← Бүтээгдэхүүн рүү буцах
      </Link>

      <div className="mt-4.5 grid items-start gap-[clamp(20px,4vw,56px)] md:grid-cols-[1.1fr_1fr]">
        <div className="product-shot grid aspect-square place-items-center">
          {/* TODO: product photo from Supabase storage once imagePath is set */}
          <SoapPlaceholder label={product.name.split(" ")[0]} />
        </div>

        <div>
          {(!product.inStock || product.isNew) && (
            <div className="kicker text-grass-deep">
              {product.inStock ? "Шинэ" : "Дууссан"}
            </div>
          )}
          <h1 className="mb-2.5 mt-2 font-display text-[clamp(32px,4.5vw,52px)]">{product.name}</h1>
          <div className="mb-3.5 font-mono text-[22px] tabular-nums">
            {formatPriceMnt(product.priceMnt)}{" "}
            <span className="text-sm text-ink-soft">/ {formatWeight(product.weightGrams)}</span>
          </div>
          <p>{product.description}</p>

          <AddToCart slug={product.slug} inStock={product.inStock} />

          <dl className="fact-list mt-5">
            <div>
              <dt>Жин</dt>
              <dd>{formatWeight(product.weightGrams)}</dd>
            </div>
            {product.skinType && (
              <div>
                <dt>Тохиромжтой</dt>
                <dd>{product.skinType}</dd>
              </div>
            )}
            <div>
              <dt>Хийц</dt>
              <dd>Хүйтэн арга, гар хийц</dd>
            </div>
          </dl>
        </div>
      </div>

      {product.ingredients.length > 0 && <IngredientList ingredients={product.ingredients} />}
    </article>
  );
}
