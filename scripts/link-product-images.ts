// Saves already-uploaded photos as ProductImage rows (for photos uploaded by hand in the Supabase dashboard).
// Checks each file is publicly reachable in the bucket first, so no secret key is needed.
// Safe to run again: rows are updated in place.
//
// Needs in .env: NEXT_PUBLIC_SUPABASE_URL, DATABASE_URL.
// Run with: npm run images:link

import { PrismaClient } from "@prisma/client";
import { productImageUrl } from "../src/features/products/productImageUrl";
import { PRODUCT_PHOTOS } from "./productPhotos";

const prisma = new PrismaClient();

async function assertPublic(fileName: string) {
  const url = productImageUrl(fileName);
  if (!url) throw new Error("Set NEXT_PUBLIC_SUPABASE_URL in .env first.");
  const response = await fetch(url, { method: "HEAD" });
  if (!response.ok) {
    throw new Error(`${fileName} is not reachable (${response.status}). Is it uploaded to a *public* "product-images" bucket?`);
  }
}

async function main() {
  for (const [slug, fileNames] of Object.entries(PRODUCT_PHOTOS)) {
    const product = await prisma.product.findUniqueOrThrow({ where: { slug }, select: { id: true } });

    for (const [sortOrder, fileName] of fileNames.entries()) {
      await assertPublic(fileName);
      await prisma.productImage.upsert({
        where: { productId_path: { productId: product.id, path: fileName } },
        update: { sortOrder },
        create: { productId: product.id, path: fileName, sortOrder },
      });
      console.log(`✓ ${slug} #${sortOrder + 1} → ${fileName}`);
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
