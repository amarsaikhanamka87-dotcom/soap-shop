import type { ContactField } from "../types";

type ContactFormFieldProps = {
  name: ContactField;
  label: string;
  defaultValue: string;
  error?: string;
  multiline?: boolean;
  autoComplete?: string;
};

// One labelled input (or textarea) of the contact form, with its error message.
export function ContactFormField({ name, label, defaultValue, error, multiline, autoComplete }: ContactFormFieldProps) {
  const errorId = `${name}-error`;
  const inputProps = {
    id: name,
    name,
    required: true,
    defaultValue,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: "contact-input",
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="kicker">
        {label}
      </label>
      {multiline ? <textarea rows={6} {...inputProps} /> : <input type="text" autoComplete={autoComplete} {...inputProps} />}
      {error && (
        <p id={errorId} className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
