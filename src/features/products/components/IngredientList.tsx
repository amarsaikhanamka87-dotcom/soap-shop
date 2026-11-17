import type { ProductIngredientInfo } from "../types";

type IngredientListProps = {
  ingredients: ProductIngredientInfo[];
};

// "Саванд юу байдаг вэ?" — each ingredient with what it does in this soap.
export function IngredientList({ ingredients }: IngredientListProps) {
  return (
    <section className="mt-16 rounded-3xl bg-mist p-[clamp(20px,4vw,40px)]">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-[clamp(24px,3.6vw,36px)]">Саванд юу байдаг вэ?</h2>
        <span className="kicker rounded-full bg-grass px-3.5 py-1.5 text-white">{ingredients.length} үндсэн орц</span>
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
