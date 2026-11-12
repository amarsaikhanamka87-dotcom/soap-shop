import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import { ProductCatalog } from "@/features/products/components/ProductCatalog";
import { getAllProducts } from "@/features/products/queries";

export const metadata: Metadata = {
  title: "Бүтээгдэхүүн",
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <section className="site-container py-12">
      <PageTitle title="Бүтээгдэхүүн" aside="Байгалийн гар хийц саван" />
      {products.length === 0 ? (
        <p className="text-ink-soft">Бүтээгдэхүүн одоогоор алга байна.</p>
      ) : (
        <ProductCatalog products={products} />
      )}
    </section>
  );
}
