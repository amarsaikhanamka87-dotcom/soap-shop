import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import { ContactSection } from "@/features/contact/components/ContactSection";

export const metadata: Metadata = {
  title: "Холбоо барих",
};

// Standalone Contact page; the same section also appears on the home page (/#contact).
export default function ContactPage() {
  return (
    <section className="site-container py-12">
      <PageTitle title="Холбоо барих" aside="Бид танд хариулна" />
      <ContactSection />
    </section>
  );
}
