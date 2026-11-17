import Image from "next/image";
import { FacebookLink } from "@/components/FacebookLink";
import { siteConfig } from "@/config/site";
import { aboutContent } from "../content";

type AboutSectionProps = {
  /** h1 on the standalone /about page, h2 when it's a section of the home page. */
  headingLevel?: "h1" | "h2";
  /** Load the photo right away (only when the section is at the top of the page). */
  eagerPhoto?: boolean;
};

// Editorial layout: large two-line serif name, indented intro, black & white photo on the right.
export function AboutSection({ headingLevel = "h2", eagerPhoto = false }: AboutSectionProps) {
  const { nameLines, intro, photo } = aboutContent;
  const { facebookName } = siteConfig.contact;
  const Heading = headingLevel;

  return (
    <div className="grid items-start gap-[clamp(32px,6vw,80px)] md:grid-cols-[1.2fr_1fr]">
      <div className="flex flex-col">
        <Heading className="text-[clamp(40px,7vw,88px)] leading-[0.95]">
          <span className="block">{nameLines[0]}</span>
          <span className="block pl-[0.4em] text-grass">{nameLines[1]}</span>
        </Heading>

        <div className="mt-[clamp(28px,4vw,48px)] max-w-md space-y-4 text-[16px] text-ink-soft md:ml-[clamp(40px,8vw,120px)]">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-[clamp(32px,6vw,72px)] flex gap-8">
          <FacebookLink className="about-social">Facebook · {facebookName}</FacebookLink>
        </div>
      </div>

      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes="(min-width: 768px) 40vw, 100vw"
        className="aspect-4/5 w-full rounded-3xl object-cover"
        loading={eagerPhoto ? "eager" : "lazy"}
        fetchPriority={eagerPhoto ? "high" : "auto"}
      />
    </div>
  );
}
