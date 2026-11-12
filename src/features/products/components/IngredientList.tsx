import type { ProductIngredientInfo } from "../types";

type IngredientListProps = {
  ingredients: ProductIngredientInfo[];
};

// "Саванд юу байдаг вэ?" — each ingredient with what it does in this soap.
export function IngredientList({ ingredients }: IngredientListProps) {
  return (
    <section className="mt-14 border-t-[3px] border-double border-ink pt-7">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-ink pb-2">
        <h2 className="font-display text-[clamp(26px,4vw,38px)]">Саванд юу байдаг вэ?</h2>
        <span className="kicker text-grass-deep">{ingredients.length} үндсэн орц</span>
      </div>
      <dl className="fact-list">
        {ingredients.map(({ name, benefit }) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd>{benefit ?? ""}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
