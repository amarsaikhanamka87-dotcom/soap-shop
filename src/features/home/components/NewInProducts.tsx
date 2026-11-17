import Link from "next/link";
import { homeSectionIds } from "@/config/site";
import { getNewInProducts } from "@/features/products/queries";
import { NewInCarousel } from "./NewInCarousel";

// "New In" section: centered bold heading over the product carousel. Menu target: /#products.
export async function NewInProducts() {
  const products = await getNewInProducts();

  return (
    <section
      id={homeSectionIds.products}
      aria-labelledby="new-in-heading"
      className="scroll-mt-28 py-[clamp(48px,8vw,96px)] md:scroll-mt-20"
    >
      <div className="site-container">
        <h2 id="new-in-heading" className="mb-10 text-center text-[clamp(30px,4.6vw,52px)]">
          Шинээр ирсэн
        </h2>
        {products.length === 0 ? (
          <p className="text-center text-ink-soft">Бүтээгдэхүүн одоогоор алга байна.</p>
        ) : (
          <NewInCarousel products={products} />
        )}
        <div className="mt-10 text-center">
          <Link href="/products" className="btn">
            Бүх бүтээгдэхүүн
          </Link>
        </div>
      </div>
    </section>
  );
}
