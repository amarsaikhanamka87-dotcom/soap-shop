"use client";

import { useActionState } from "react";
import { submitContactMessage } from "../actions";
import { initialContactFormState, type ContactField } from "../types";
import { ContactFormField } from "./ContactFormField";

const FIELDS: { name: ContactField; label: string; multiline?: boolean; autoComplete?: string }[] = [
  { name: "name", label: "Нэр", autoComplete: "name" },
  { name: "phoneOrEmail", label: "Утас эсвэл и-мэйл", autoComplete: "email" },
  { name: "message", label: "Зурвас", multiline: true },
];

// Contact form: sends through the server action and shows its result.
export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactMessage, initialContactFormState);

  return (
    // React resets the form after each submit; defaultValue then restores
    // what was typed on error and clears the fields on success.
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      {FIELDS.map((field) => (
        <ContactFormField
          key={field.name}
          {...field}
          defaultValue={state.values[field.name] ?? ""}
          error={state.fieldErrors[field.name]}
        />
      ))}

      {/* Honeypot: hidden from people, often filled by spam bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn disabled:opacity-60" disabled={pending}>
          {pending ? "Илгээж байна…" : "Илгээх"}
        </button>
        <p role="status" className={`text-[15px] ${state.status === "error" ? "text-danger" : "text-grass-deep"}`}>
          {state.message}
        </p>
      </div>
    </form>
  );
}
