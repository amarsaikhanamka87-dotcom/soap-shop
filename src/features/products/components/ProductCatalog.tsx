"use client";

import { useState } from "react";
import { sortOptions, sortProducts, type SortOption } from "../sorting";
import type { ProductSummary } from "../types";
import { ProductCard } from "./ProductCard";

type ProductCatalogProps = {
  products: ProductSummary[];
};

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [sort, setSort] = useState<SortOption>("popular");
  const sorted = sortProducts(products, sort);

  return (
    <>
      <div className="mb-4.5 flex flex-wrap items-center justify-between gap-3 font-mono text-[13px] uppercase tracking-[0.08em]">
        <span>{products.length} бүтээгдэхүүн</span>
        <label className="flex items-center gap-2">
          Эрэмбэлэх:
          <select
            id="product-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
            className="border-b border-ink bg-transparent px-1 py-0.5 normal-case"
          >
            {sortOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3 md:gap-x-5.5 md:gap-y-7">
        {sorted.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
