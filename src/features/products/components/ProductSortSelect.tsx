import { sortOptions, type SortOption } from "../sorting";

type ProductSortSelectProps = {
  value: SortOption;
  onChange: (sort: SortOption) => void;
};

// "Эрэмбэлэх" dropdown above the product grid.
export function ProductSortSelect({ value, onChange }: ProductSortSelectProps) {
  return (
    <label className="flex items-center gap-2">
      Эрэмбэлэх:
      <select
        id="product-sort"
        value={value}
        onChange={(event) => onChange(event.target.value as SortOption)}
        className="rounded-full border-2 border-ink/15 bg-white px-3 py-1 normal-case"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
