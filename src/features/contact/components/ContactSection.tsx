import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

// Contact details beside the message form. Used on /contact and on the home page (/#contact).
export function ContactSection() {
  return (
    <div className="grid items-start gap-[clamp(28px,5vw,64px)] md:grid-cols-[1fr_1.3fr]">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
