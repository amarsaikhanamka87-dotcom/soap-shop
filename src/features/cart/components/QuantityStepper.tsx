import { MAX_QUANTITY } from "../cartStore";

type QuantityStepperProps = {
  quantity: number;
  onChange: (quantity: number) => void;
  /** Lowest value the − button goes to (0 lets the cart remove the line). */
  min?: number;
  disabled?: boolean;
  /** Prefix for the button labels, e.g. the product name. */
  labelPrefix?: string;
  size?: "sm" | "md";
};

// Rounded − / number / + control, capped at MAX_QUANTITY.
export function QuantityStepper({
  quantity,
  onChange,
  min = 1,
  disabled = false,
  labelPrefix,
  size = "md",
}: QuantityStepperProps) {
  const buttonSize = size === "sm" ? "size-8.5" : "h-10.5 w-10 text-lg";
  const label = (action: string) => (labelPrefix ? `${labelPrefix}: ${action}` : action);

  return (
    <div className="inline-flex items-center rounded-full border-2 border-ink/15 bg-white px-1">
      <button
        type="button"
        aria-label={label("хасах")}
        className={`${buttonSize} disabled:opacity-40`}
        disabled={disabled || quantity <= min}
        onClick={() => onChange(Math.max(min, quantity - 1))}
      >
        −
      </button>
      <output className="min-w-8 text-center font-bold tabular-nums" aria-live="polite">
        {quantity}
      </output>
      <button
        type="button"
        aria-label={label("нэмэх")}
        className={`${buttonSize} disabled:opacity-40`}
        disabled={disabled || quantity >= MAX_QUANTITY}
        onClick={() => onChange(Math.min(MAX_QUANTITY, quantity + 1))}
      >
        +
      </button>
    </div>
  );
}
