import { formatPriceMnt } from "@/features/products/format";
import { OrderByContact } from "./OrderByContact";

// White box beside the cart lines: the total and how to order.
export function CartSummary({ totalMnt }: { totalMnt: number }) {
  return (
    <aside className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgb(13_26_16/0.08)]">
      <div className="flex items-baseline justify-between border-b border-ink/10 pb-3">
        <span className="kicker">Нийт дүн</span>
        <span className="text-[24px] font-bold tabular-nums text-grass-deep">{formatPriceMnt(totalMnt)}</span>
      </div>
      <OrderByContact />
    </aside>
  );
}
