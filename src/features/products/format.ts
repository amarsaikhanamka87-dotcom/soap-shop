/** Formats a tögrög amount, e.g. 15000 → "15,000₮". */
export function formatPriceMnt(amount: number): string {
  return `${amount.toLocaleString("en-US")}₮`;
}

/** Formats a weight, e.g. 100 → "100г". */
export function formatWeight(grams: number): string {
  return `${grams}г`;
}
