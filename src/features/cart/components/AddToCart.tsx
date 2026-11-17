"use client";

import { useState } from "react";
import { addToCart } from "../cartStore";
import { QuantityStepper } from "./QuantityStepper";

type AddToCartProps = {
  slug: string;
  inStock: boolean;
};

// Quantity picker + "add to cart" button on the product page.
export function AddToCart({ slug, inStock }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  function handleAdd() {
    addToCart(slug, quantity);
    setMessage(`Сагсанд ${quantity} ширхэг нэмэгдлээ`);
  }

  return (
    <div className="my-4.5 flex flex-wrap items-center gap-2.5">
      <QuantityStepper quantity={quantity} onChange={setQuantity} disabled={!inStock} />
      <button
        type="button"
        onClick={handleAdd}
        disabled={!inStock}
        className="btn disabled:cursor-not-allowed disabled:opacity-50"
      >
        {inStock ? "Сагсанд нэмэх" : "Дууссан"}
      </button>
      <span role="status" className="text-[13px] font-bold text-grass-deep">
        {message}
      </span>
    </div>
  );
}
