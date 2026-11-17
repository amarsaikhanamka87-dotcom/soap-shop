import Link from "next/link";
import type { ProductDetail } from "../types";
import { IngredientList } from "./IngredientList";
import { ProductFacts } from "./ProductFacts";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";

// Layout of the product detail page: back link, picture beside info + facts, ingredients below.
export function ProductDetailView({ product }: { product: ProductDetail }) {
  return (
    <article className="site-container py-12">
      <Link href="/products" className="kicker text-grass-deep hover:underline">
        ← Бүтээгдэхүүн рүү буцах
      </Link>

      <div className="mt-4.5 grid items-start gap-[clamp(20px,4vw,56px)] md:grid-cols-[1.1fr_1fr]">
        <ProductImage product={product} />
        <div>
          <ProductInfo product={product} />
          <ProductFacts product={product} />
        </div>
      </div>

      {product.ingredients.length > 0 && <IngredientList ingredients={product.ingredients} />}
    </article>
  );
}
