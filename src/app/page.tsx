import { BrandBand } from "@/features/home/components/BrandBand";
import { HeroSection } from "@/features/home/components/HeroSection";
import { HomeAboutSection } from "@/features/home/components/HomeAboutSection";
import { HomeContactSection } from "@/features/home/components/HomeContactSection";
import { NewInProducts } from "@/features/home/components/NewInProducts";

// Home is one long page: the menu scrolls to #products, #about and #contact.
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewInProducts />
      <BrandBand />
      <HomeAboutSection />
      <HomeContactSection />
    </>
  );
}
