import { formatWeight } from "../format";
import type { ProductDetail } from "../types";

// Weight / skin type / method rows under the product info.
export function ProductFacts({ product }: { product: ProductDetail }) {
  return (
    <dl className="fact-list mt-5">
      <div>
        <dt>Жин</dt>
        <dd>{formatWeight(product.weightGrams)}</dd>
      </div>
      {product.skinType && (
        <div>
          <dt>Тохиромжтой</dt>
          <dd>{product.skinType}</dd>
        </div>
      )}
      <div>
        <dt>Хийц</dt>
        <dd>Хүйтэн арга, гар хийц</dd>
      </div>
    </dl>
  );
}
