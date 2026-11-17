import { homeSectionIds } from "@/config/site";
import { ContactSection } from "@/features/contact/components/ContactSection";

// Contact block on the home page. Menu target: /#contact.
export function HomeContactSection() {
  return (
    <section
      id={homeSectionIds.contact}
      aria-labelledby="home-contact-heading"
      className="scroll-mt-28 py-[clamp(48px,8vw,104px)] md:scroll-mt-20"
    >
      <div className="site-container">
        <h2 id="home-contact-heading" className="mb-10 text-center text-[clamp(30px,4.6vw,52px)]">
          Холбоо барих
        </h2>
        <ContactSection />
      </div>
    </section>
  );
}
