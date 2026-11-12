import Link from "next/link";
import { getFeaturedProducts } from "@/features/products/queries";
import { ProductCard } from "@/features/products/components/ProductCard";

// "Онцлох саван" — sits directly on the background video (no paper behind it).
export async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <section className="on-video py-12">
      <div className="site-container">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-white pb-2">
          <h2 className="font-display text-[clamp(26px,4vw,38px)]">Онцлох саван</h2>
          <Link href="/products" className="kicker text-white">
            Бүгдийг үзэх →
          </Link>
        </div>
        {products.length === 0 ? (
          <p>Онцлох саван одоогоор алга байна.</p>
        ) : (
          <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3 md:gap-x-5.5 md:gap-y-7">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
