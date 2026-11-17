import Link from "next/link";
import { ProductPhoto } from "@/features/products/components/ProductPhoto";
import { formatPriceMnt, formatWeight } from "@/features/products/format";
import type { CartLine } from "../cartLines";
import { setCartQuantity } from "../cartStore";
import { QuantityStepper } from "./QuantityStepper";

// One product row in the cart: picture, name, unit price, quantity controls, line total.
export function CartLineItem({ line }: { line: CartLine }) {
  const { product, quantity, lineTotalMnt } = line;
  const productHref = `/products/${product.slug}`;

  return (
    <li className="flex items-center gap-4 border-b border-ink/10 py-4">
      <Link
        href={productHref}
        className="product-shot relative grid size-20 flex-none place-items-center overflow-hidden sm:size-24"
        aria-label={product.name}
      >
        <ProductPhoto productName={product.name} image={product.mainImage} sizes="96px" />
      </Link>

      <div className="min-w-0 flex-1">
        <Link href={productHref} className="leading-snug hover:text-grass-deep">
          {product.name} ({formatWeight(product.weightGrams)})
        </Link>
        <div className="text-[13px] font-bold tabular-nums text-ink-soft">{formatPriceMnt(product.priceMnt)} / ш</div>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <QuantityStepper
            size="sm"
            min={0}
            quantity={quantity}
            labelPrefix={product.name}
            onChange={(next) => setCartQuantity(product.slug, next)}
          />
          <button
            type="button"
            className="kicker text-ink-soft underline-offset-4 hover:text-ink hover:underline"
            onClick={() => setCartQuantity(product.slug, 0)}
          >
            Хасах
          </button>
        </div>
      </div>

      <div className="font-bold tabular-nums">{formatPriceMnt(lineTotalMnt)}</div>
    </li>
  );
}
