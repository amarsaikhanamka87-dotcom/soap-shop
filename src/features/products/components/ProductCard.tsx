import Link from "next/link";
import { formatPriceMnt, formatWeight } from "../format";
import type { ProductSummary } from "../types";
import { ProductPhoto } from "./ProductPhoto";

type ProductCardProps = {
  product: ProductSummary;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group flex flex-col gap-1.5 ${product.inStock ? "" : "opacity-70"}`}
    >
      <div className="product-shot relative mb-2 grid aspect-square place-items-center overflow-hidden transition-colors group-hover:bg-grass-light">
        <ProductPhoto
          productName={product.name}
          image={product.mainImage}
          sizes="(min-width: 768px) 25vw, 50vw"
        />
        <div className="absolute left-3.5 top-3.5 flex flex-col items-start gap-1.5">
          {!product.inStock && <span className="badge badge--muted">Дууссан</span>}
          {product.isNew && <span className="badge badge--new">Шинэ</span>}
        </div>
      </div>
      <span className="text-[16px] font-bold leading-snug group-hover:text-grass-deep">
        {product.name} ({formatWeight(product.weightGrams)})
      </span>
      <span className="text-[16px] font-extrabold tabular-nums text-grass">{formatPriceMnt(product.priceMnt)}</span>
    </Link>
  );
}
