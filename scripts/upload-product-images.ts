// Uploads product photos to the public Supabase Storage bucket and saves them as ProductImage rows.
// Creates the bucket the first time. Safe to run again: files are overwritten, rows updated in place.
//
// Needs in .env: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, DATABASE_URL.
// Run with: npm run images:upload

import { readFile } from "node:fs/promises";
import path from "node:path";
import { PrismaClient } from "@prisma/client";
import { PRODUCT_IMAGES_BUCKET } from "../src/features/products/productImageUrl";
import { PRODUCT_PHOTOS } from "./productPhotos";


const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !serviceKey) {
  throw new Error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env first.");
}

const headers = { Authorization: `Bearer ${serviceKey}`, apikey: serviceKey };
const prisma = new PrismaClient();

async function ensurePublicBucket() {
  const response = await fetch(`${supabaseUrl}/storage/v1/bucket`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ id: PRODUCT_IMAGES_BUCKET, name: PRODUCT_IMAGES_BUCKET, public: true }),
  });
  const alreadyExists = response.status === 400 || response.status === 409;
  if (!response.ok && !alreadyExists) {
    throw new Error(`Could not create bucket: ${response.status} ${await response.text()}`);
  }
}

async function uploadPhoto(fileName: string) {
  const body = await readFile(path.join(process.cwd(), "images/products", fileName));
  const contentType = CONTENT_TYPES[path.extname(fileName).toLowerCase()] ?? "application/octet-stream";
  const response = await fetch(`${supabaseUrl}/storage/v1/object/${PRODUCT_IMAGES_BUCKET}/${fileName}`, {
    method: "POST",
    headers: { ...headers, "Content-Type": contentType, "x-upsert": "true", "cache-control": "31536000" },
    body,
  });
  if (!response.ok) throw new Error(`Upload of ${fileName} failed: ${response.status} ${await response.text()}`);
}

async function main() {
  await ensurePublicBucket();
  for (const [slug, fileNames] of Object.entries(PRODUCT_PHOTOS)) {
    const product = await prisma.product.findUniqueOrThrow({ where: { slug }, select: { id: true } });

    for (const [sortOrder, fileName] of fileNames.entries()) {
      await uploadPhoto(fileName);
      await prisma.productImage.upsert({
        where: { productId_path: { productId: product.id, path: fileName } },
        update: { sortOrder },
        create: { productId: product.id, path: fileName, sortOrder },
      });
      console.log(`✓ ${slug} #${sortOrder + 1} → ${PRODUCT_IMAGES_BUCKET}/${fileName}`);
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
