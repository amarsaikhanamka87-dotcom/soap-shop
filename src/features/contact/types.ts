// Shapes shared by the contact form, its validation and the server action.

export type ContactMessage = {
  name: string;
  phoneOrEmail: string;
  message: string;
};

export type ContactField = keyof ContactMessage;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<ContactField, string>>;
  values: Partial<ContactMessage>; // keeps what the visitor typed when sending fails
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  values: {},
};
