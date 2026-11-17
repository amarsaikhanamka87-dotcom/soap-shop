import type { ContactField, ContactMessage } from "./types";

const LIMITS: Record<ContactField, number> = {
  name: 80,
  phoneOrEmail: 120,
  message: 2000,
};

type ValidationResult =
  | { ok: true; data: ContactMessage }
  | { ok: false; values: ContactMessage; fieldErrors: Partial<Record<ContactField, string>> };

function readText(formData: FormData, field: ContactField): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

/** Checks the contact form fields. Messages are in Mongolian for the visitor. */
export function validateContactMessage(formData: FormData): ValidationResult {
  const values: ContactMessage = {
    name: readText(formData, "name"),
    phoneOrEmail: readText(formData, "phoneOrEmail"),
    message: readText(formData, "message"),
  };
  const fieldErrors: Partial<Record<ContactField, string>> = {};

  if (!values.name) fieldErrors.name = "Нэрээ бичнэ үү.";
  if (!values.phoneOrEmail) fieldErrors.phoneOrEmail = "Утас эсвэл и-мэйлээ бичнэ үү.";
  if (values.message.length < 5) fieldErrors.message = "Зурвасаа бичнэ үү.";

  for (const field of Object.keys(LIMITS) as ContactField[]) {
    if (values[field].length > LIMITS[field]) {
      fieldErrors[field] = `${LIMITS[field]} тэмдэгтээс ихгүй байна.`;
    }
  }

  return Object.keys(fieldErrors).length > 0 ? { ok: false, values, fieldErrors } : { ok: true, data: values };
}
