import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import heroPhoto from "../../../../public/images/hero-steppe.jpg";

// Full-bleed steppe photo under a brand-green wash, with the wordmark set huge and heavy.
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative grid h-[min(80vh,760px)] min-h-110 place-items-center overflow-hidden bg-grass-deep"
    >
      <Image
        src={heroPhoto}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        loading="eager"
        fetchPriority="high"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-grass-deep/85 via-grass-deep/35 to-grass-deep/10"
        aria-hidden="true"
      />

      <div className="site-container relative flex flex-col items-center text-center text-white">
        <p className="kicker mb-5 rounded-full bg-white/15 px-4 py-1.5 backdrop-blur">{siteConfig.tagline}</p>
        <h1 id="hero-heading" className="font-hero text-[clamp(52px,11vw,150px)] font-medium leading-[0.95] tracking-[-0.01em]">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-xl text-[clamp(16px,1.8vw,19px)] font-semibold text-white/90">
          {siteConfig.description}
        </p>
        <Link href="/products" className="btn btn--light mt-8">
          Shop Now
        </Link>
      </div>
    </section>
  );
}
