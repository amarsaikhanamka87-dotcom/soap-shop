import { AddToCart } from "@/features/cart/components/AddToCart";
import { formatPriceMnt, formatWeight } from "../format";
import type { ProductDetail } from "../types";

// Status pill, name, price, description and the add-to-cart controls.
export function ProductInfo({ product }: { product: ProductDetail }) {
  const statusLabel = !product.inStock ? "Дууссан" : product.isNew ? "Шинэ" : null;

  return (
    <div>
      {statusLabel && (
        <div className="kicker inline-block rounded-full bg-grass-light px-3 py-1 text-grass-deep">{statusLabel}</div>
      )}
      <h1 className="mb-3 mt-3 text-[clamp(30px,4.5vw,52px)]">{product.name}</h1>
      <div className="mb-4 text-[24px] font-extrabold tabular-nums text-grass">
        {formatPriceMnt(product.priceMnt)}{" "}
        <span className="text-sm text-ink-soft">/ {formatWeight(product.weightGrams)}</span>
      </div>
      <p>{product.description}</p>

      <AddToCart slug={product.slug} inStock={product.inStock} />
    </div>
  );
}
