"use client";

import { useState } from "react";
import type { ProductDetail } from "../types";
import { ProductPhoto } from "./ProductPhoto";
import { ProductThumbnails } from "./ProductThumbnails";

// Product page gallery: the selected photo large, with thumbnails underneath when there's more than one.
export function ProductImage({ product }: { product: ProductDetail }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = product.images[selectedIndex] ?? product.mainImage;

  return (
    <div>
      <div className="product-shot relative grid aspect-square place-items-center overflow-hidden">
        <ProductPhoto
          productName={product.name}
          image={selected}
          sizes="(min-width: 768px) 50vw, 100vw"
          eager={selectedIndex === 0}
        />
      </div>
      {product.images.length > 1 && (
        <ProductThumbnails
          productName={product.name}
          images={product.images}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />
      )}
    </div>
  );
}
