"use client";

import type { ProductSummary } from "@/features/products/types";
import { buildCartLines, sumCartLines } from "../cartLines";
import { useCart } from "../useCart";
import { CartEmpty } from "./CartEmpty";
import { CartLineItem } from "./CartLineItem";
import { CartSummary } from "./CartSummary";

type CartViewProps = {
  products: ProductSummary[];
};

// Cart page layout: reads the browser cart, then shows the lines beside the total (or the empty state).
export function CartView({ products }: CartViewProps) {
  const lines = buildCartLines(useCart(), products);

  if (lines.length === 0) return <CartEmpty />;

  return (
    <div className="grid items-start gap-[clamp(24px,4vw,56px)] md:grid-cols-[1.6fr_1fr]">
      <ul className="border-t border-ink/10">
        {lines.map((line) => (
          <CartLineItem key={line.product.slug} line={line} />
        ))}
      </ul>
      <CartSummary totalMnt={sumCartLines(lines)} />
    </div>
  );
}
