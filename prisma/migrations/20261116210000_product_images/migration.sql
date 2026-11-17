-- Several photos per product: new "product_images" table replaces products.image_path.

-- CreateTable
CREATE TABLE "product_images" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "alt" TEXT,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_images_product_id_path_key" ON "product_images"("product_id", "path");

-- CreateIndex
CREATE INDEX "product_images_product_id_sort_order_idx" ON "product_images"("product_id", "sort_order");

-- AddForeignKey
ALTER TABLE "product_images" ADD CONSTRAINT "product_images_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Same protection as the other tables: no access through Supabase's public Data API.
ALTER TABLE "product_images" ENABLE ROW LEVEL SECURITY;

-- Keep any existing bucket paths as each product's first photo.
-- Local file paths (file:///...) never worked on the site, so they are not carried over.
INSERT INTO "product_images" ("id", "product_id", "path", "sort_order")
SELECT 'img_' || "id", "id", "image_path", 0
FROM "products"
WHERE "image_path" IS NOT NULL AND "image_path" NOT LIKE 'file:%';

-- AlterTable
ALTER TABLE "products" DROP COLUMN "image_path";
