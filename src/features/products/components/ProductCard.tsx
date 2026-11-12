import Link from "next/link";
import { formatPriceMnt, formatWeight } from "../format";
import type { ProductSummary } from "../types";
import { SoapPlaceholder } from "./SoapPlaceholder";

type ProductCardProps = {
  product: ProductSummary;
};

export function ProductCard({ product }: ProductCardProps) {
  const stampLabel = product.name.split(" ")[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group flex flex-col gap-2 ${product.inStock ? "" : "opacity-70"}`}
    >
      <div className="product-shot relative grid aspect-square place-items-center overflow-hidden">
        {/* TODO: show the product photo from Supabase storage once imagePath is set */}
        <SoapPlaceholder label={stampLabel} />
        <div className="absolute left-3.5 top-3.5 flex flex-col items-start gap-1.5">
          {!product.inStock && <span className="badge badge--muted">Дууссан</span>}
          {product.isNew && <span className="badge">Шинэ</span>}
        </div>
      </div>
      <span className="text-[17px] leading-snug">
        {product.name} ({formatWeight(product.weightGrams)})
      </span>
      <span className="font-mono text-[15px] tabular-nums">{formatPriceMnt(product.priceMnt)}</span>
    </Link>
  );
}
