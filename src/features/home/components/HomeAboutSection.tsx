import { homeSectionIds } from "@/config/site";
import { AboutSection } from "@/features/about/components/AboutSection";

// About block on the home page. Menu target: /#about.
export function HomeAboutSection() {
  return (
    <section
      id={homeSectionIds.about}
      aria-label="Бидний тухай"
      className="scroll-mt-28 bg-mist py-[clamp(48px,8vw,104px)] md:scroll-mt-20"
    >
      <div className="site-container">
        <AboutSection />
      </div>
    </section>
  );
}
