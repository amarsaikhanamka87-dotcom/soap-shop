import Image from "next/image";
import { productImageUrl } from "../productImageUrl";
import type { ProductImageInfo } from "../types";
import { SoapPlaceholder } from "./SoapPlaceholder";

type ProductPhotoProps = {
  productName: string;
  image: ProductImageInfo | null;
  /** Rendered width hint for next/image, e.g. "(min-width: 768px) 33vw, 50vw". */
  sizes: string;
  /** Load right away (the main photo on the product page). */
  eager?: boolean;
};

// One product photo filling its (positioned) frame; falls back to the drawn soap bar when there's no photo.
export function ProductPhoto({ productName, image, sizes, eager = false }: ProductPhotoProps) {
  const src = image ? productImageUrl(image.path) : null;
  if (!image || !src) return <SoapPlaceholder productName={productName} />;

  return (
    <Image
      src={src}
      alt={image.alt ?? productName}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
    />
  );
}
