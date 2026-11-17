"use client";

import { useRef } from "react";
import type { ProductSummary } from "@/features/products/types";
import { ProductCard } from "@/features/products/components/ProductCard";

// Horizontal scroll-snap row of product cards; arrows scroll by about one card.
export function NewInCarousel({ products }: { products: ProductSummary[] }) {
  const arrowClass =
    "grid size-8 flex-none cursor-pointer place-items-center rounded-full text-[22px] leading-none text-ink-soft hover:bg-mist hover:text-ink";
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * (card.clientWidth + 20), behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <div className="relative flex items-center gap-2">
      <button type="button" aria-label="Өмнөх" className={arrowClass} onClick={() => scrollByCard(-1)}>
        ‹
      </button>
      <ul
        ref={trackRef}
        className="flex flex-1 snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <li key={product.slug} className="w-[calc((100%-20px)/2)] flex-none snap-start md:w-[calc((100%-60px)/4)]">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <button type="button" aria-label="Дараах" className={arrowClass} onClick={() => scrollByCard(1)}>
        ›
      </button>
    </div>
  );
}
