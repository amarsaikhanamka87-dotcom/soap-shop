"use client";

import { useState } from "react";
import { sortProducts, type SortOption } from "../sorting";
import type { ProductSummary } from "../types";
import { ProductCard } from "./ProductCard";
import { ProductSortSelect } from "./ProductSortSelect";

type ProductCatalogProps = {
  products: ProductSummary[];
};

// Product count + sort control above the sorted product grid.
export function ProductCatalog({ products }: ProductCatalogProps) {
  const [sort, setSort] = useState<SortOption>("popular");
  const sorted = sortProducts(products, sort);

  return (
    <>
      <div className="mb-4.5 flex flex-wrap items-center justify-between gap-3 text-[13px] font-extrabold uppercase tracking-[0.08em]">
        <span>{products.length} бүтээгдэхүүн</span>
        <ProductSortSelect value={sort} onChange={setSort} />
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3 md:gap-x-6 md:gap-y-10">
        {sorted.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
