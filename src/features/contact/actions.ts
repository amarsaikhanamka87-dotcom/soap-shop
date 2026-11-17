"use server";

import { sendContactEmail } from "./sendContactEmail";
import type { ContactFormState } from "./types";
import { validateContactMessage } from "./validation";

// Hidden field real visitors never fill in; bots usually do.
const HONEYPOT_FIELD = "website";

export async function submitContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (formData.get(HONEYPOT_FIELD)) {
    return { status: "success", message: "Баярлалаа! Таны зурвас илгээгдлээ.", fieldErrors: {}, values: {} };
  }

  const result = validateContactMessage(formData);
  if (!result.ok) {
    return {
      status: "error",
      message: "Талбаруудаа шалгана уу.",
      fieldErrors: result.fieldErrors,
      values: result.values,
    };
  }

  try {
    await sendContactEmail(result.data);
  } catch (error) {
    console.error("Contact message not sent:", error);
    return {
      status: "error",
      message: "Зурвас илгээж чадсангүй. Түр хүлээгээд дахин оролдох эсвэл утсаар холбогдоно уу.",
      fieldErrors: {},
      values: result.data,
    };
  }

  return { status: "success", message: "Баярлалаа! Таны зурвас илгээгдлээ.", fieldErrors: {}, values: {} };
}
