// Drawn soap bar shown until real product photos are uploaded.

type SoapPlaceholderProps = {
  label: string;
};

export function SoapPlaceholder({ label }: SoapPlaceholderProps) {
  return (
    <div className="soap-bar" aria-hidden="true">
      <span className="soap-bar__stamp">{label}</span>
    </div>
  );
}
