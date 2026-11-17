import Link from "next/link";

// Shown on the cart page when nothing has been added yet.
export function CartEmpty() {
  return (
    <div className="py-10 text-center">
      <p className="mb-5 text-ink-soft">Таны сагс хоосон байна.</p>
      <Link href="/products" className="btn">
        Бүтээгдэхүүн үзэх
      </Link>
    </div>
  );
}
