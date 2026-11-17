// Drawn soap bar shown until real product photos are uploaded.
// The bar is "stamped" with the first word of the product name.

type SoapPlaceholderProps = {
  productName: string;
};

export function SoapPlaceholder({ productName }: SoapPlaceholderProps) {
  const stampLabel = productName.split(" ")[0];

  return (
    <div className="soap-bar" aria-hidden="true">
      <span className="soap-bar__stamp">{stampLabel}</span>
    </div>
  );
}
