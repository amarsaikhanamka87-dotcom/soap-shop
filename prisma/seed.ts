// Fills the database with the example soaps. Safe to run more than once:
// products are matched by slug and ingredients by name, then updated.
// Run with: npx prisma db seed

import { PrismaClient } from "@prisma/client";
import { seedProducts } from "./seed-data";

const prisma = new PrismaClient();

async function main() {
  for (const { ingredients, images = [], ...product } of seedProducts) {
    const savedProduct = await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });

    // Replace this product's ingredient list so re-runs reflect the seed data exactly.
    await prisma.productIngredient.deleteMany({ where: { productId: savedProduct.id } });

    for (const [index, { name, benefit }] of ingredients.entries()) {
      const ingredient = await prisma.ingredient.upsert({
        where: { name },
        update: {},
        create: { name },
      });
      await prisma.productIngredient.create({
        data: {
          productId: savedProduct.id,
          ingredientId: ingredient.id,
          benefit,
          sortOrder: index,
        },
      });
    }

    // Same for photos: the list in seed-data.ts, in order, main photo first.
    await prisma.productImage.deleteMany({ where: { productId: savedProduct.id } });
    for (const [sortOrder, path] of images.entries()) {
      await prisma.productImage.create({ data: { productId: savedProduct.id, path, sortOrder } });
    }

    console.log(`✓ ${product.name} (${ingredients.length} орц, ${images.length} зураг)`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
