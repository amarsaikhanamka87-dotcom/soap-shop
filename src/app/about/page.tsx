import type { Metadata } from "next";
import { AboutSection } from "@/features/about/components/AboutSection";

export const metadata: Metadata = {
  title: "Бидний тухай",
};

// Standalone About page; the same section also appears on the home page (/#about).
export default function AboutPage() {
  return (
    <section className="site-container py-[clamp(40px,7vw,88px)]">
      <AboutSection headingLevel="h1" eagerPhoto />
    </section>
  );
}
