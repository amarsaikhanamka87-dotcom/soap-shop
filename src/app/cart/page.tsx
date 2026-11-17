import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import { CartView } from "@/features/cart/components/CartView";
import { getAllProducts } from "@/features/products/queries";

export const metadata: Metadata = {
  title: "Сагс",
};

// The cart itself lives in the browser; the server only supplies product names and prices.
export default async function CartPage() {
  const products = await getAllProducts();

  return (
    <section className="site-container py-12">
      <PageTitle title="Сагс" />
      <CartView products={products} />
    </section>
  );
}
