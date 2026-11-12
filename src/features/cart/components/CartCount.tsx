"use client";

import { countCartItems } from "../cartStore";
import { useCart } from "../useCart";

/** Small green bubble with the number of items in the cart; hidden when empty. */
export function CartCount() {
  const count = countCartItems(useCart());
  if (count === 0) return null;

  return (
    <span className="ml-1 inline-block min-w-5 rounded-full bg-grass px-1.5 text-center text-[11px] text-paper">
      <span className="sr-only">Сагсанд </span>
      {count}
    </span>
  );
}
