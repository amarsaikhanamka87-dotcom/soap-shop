import "server-only";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import type { ContactMessage } from "./types";

// Without a verified domain, Resend only sends from onboarding@resend.dev
// to the email address of the Resend account owner.
const DEFAULT_FROM = `${siteConfig.name} <onboarding@resend.dev>`;

/** Emails a contact form message to the shop inbox (CONTACT_TO_EMAIL) via Resend. */
export async function sendContactEmail({ name, phoneOrEmail, message }: ContactMessage): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    throw new Error("RESEND_API_KEY and CONTACT_TO_EMAIL must be set to send contact messages.");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
    to,
    // Lets the shop hit "Reply" when the visitor left an email address.
    replyTo: phoneOrEmail.includes("@") ? phoneOrEmail : undefined,
    subject: `Шинэ зурвас: ${name}`,
    text: `Нэр: ${name}\nУтас / и-мэйл: ${phoneOrEmail}\n\n${message}`,
  });

  if (error) throw new Error(`Resend failed: ${error.message}`);
}
