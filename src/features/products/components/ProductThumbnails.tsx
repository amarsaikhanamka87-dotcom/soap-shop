import type { ProductImageInfo } from "../types";
import { ProductPhoto } from "./ProductPhoto";

type ProductThumbnailsProps = {
  productName: string;
  images: ProductImageInfo[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

// Row of small photo buttons under the main product photo; the selected one gets a green ring.
export function ProductThumbnails({ productName, images, selectedIndex, onSelect }: ProductThumbnailsProps) {
  return (
    <ul className="mt-3 flex gap-3">
      {images.map((image, index) => {
        const selected = index === selectedIndex;
        return (
          <li key={image.path}>
            <button
              type="button"
              aria-label={`${productName}: зураг ${index + 1}`}
              aria-pressed={selected}
              onClick={() => onSelect(index)}
              className={`product-shot relative grid size-18 place-items-center overflow-hidden ring-offset-2 ${
                selected ? "ring-3 ring-grass" : "opacity-75 hover:opacity-100"
              }`}
            >
              <ProductPhoto productName={productName} image={image} sizes="72px" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
