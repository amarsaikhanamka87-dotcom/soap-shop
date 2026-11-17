// Product photos live in a public Supabase Storage bucket; the database stores only
// each photo's file name inside it (ProductImage.path, e.g. "bagvaakhai.jpg").

export const PRODUCT_IMAGES_BUCKET = "product-images";

/** Public URL of a photo in the bucket, or null when Supabase isn't configured. */
export function productImageUrl(path: string): string | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) return null;
  return `${supabaseUrl}/storage/v1/object/public/${PRODUCT_IMAGES_BUCKET}/${encodeURI(path)}`;
}
