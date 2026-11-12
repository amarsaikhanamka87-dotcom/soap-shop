import { BackgroundVideo } from "@/components/layout/BackgroundVideo";
import { FeaturedProducts } from "@/features/home/components/FeaturedProducts";
import { SoundToggle } from "@/features/home/components/SoundToggle";

// Home is the only page with the steppe video behind it; other pages use the newspaper paper.
export default function HomePage() {
  return (
    <>
      <BackgroundVideo />
      {/* Empty band that lets the background video show on its own */}
      <section aria-label="Монгол тал нутаг" className="h-[min(72vh,680px)] min-h-80" />
      <FeaturedProducts />
      <SoundToggle />
    </>
  );
}
