"use client";

import { useState } from "react";
import { addToCart, MAX_QUANTITY } from "../cartStore";

type AddToCartProps = {
  slug: string;
  inStock: boolean;
};

export function AddToCart({ slug, inStock }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  function handleAdd() {
    addToCart(slug, quantity);
    setMessage(`Сагсанд ${quantity} ширхэг нэмэгдлээ`);
  }

  return (
    <div className="my-4.5 flex flex-wrap items-center gap-2.5">
      <div className="inline-flex items-center border-[1.5px] border-ink">
        <button
          type="button"
          aria-label="Хасах"
          className="h-10.5 w-10 text-lg disabled:opacity-40"
          disabled={!inStock}
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          −
        </button>
        <output className="min-w-8.5 text-center font-mono" aria-live="polite">
          {quantity}
        </output>
        <button
          type="button"
          aria-label="Нэмэх"
          className="h-10.5 w-10 text-lg disabled:opacity-40"
          disabled={!inStock}
          onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))}
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        disabled={!inStock}
        className="btn disabled:cursor-not-allowed disabled:opacity-50"
      >
        {inStock ? "Сагсанд нэмэх" : "Дууссан"}
      </button>
      <span role="status" className="font-mono text-[13px] text-grass-deep">
        {message}
      </span>
    </div>
  );
}
