/**
 * Which photos belong to which product: slug → file names, in display order (the first is the main photo).
 * Files sit in images/products/ locally and keep the same name inside the "product-images" bucket.
 * Used by both upload-product-images.ts and link-product-images.ts.
 */
export const PRODUCT_PHOTOS: Record<string, string[]> = {
  bagvaakhai: ["bagvaakhai.jpg"],
  Idehzuulsen_nuurstei: ["idevhjuulsen-nuurstei.webp"],
};
