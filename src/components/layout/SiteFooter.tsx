import Link from "next/link";
import { FacebookLink } from "@/components/FacebookLink";
import { mainNav, siteConfig } from "@/config/site";
import { Logo } from "./Logo";

// Deep-green footer with the "Э" pattern, a big wordmark, menu links and contact details.
export function SiteFooter() {
  const { phone, phoneHref, facebookName } = siteConfig.contact;

  return (
    <footer className="brand-pattern bg-grass-deep pt-14 pb-8 text-white">
      <div className="site-container">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="flex items-center gap-4">
            <Logo className="size-16 flex-none" />
            <div>
              <p className="font-display text-[clamp(32px,5vw,48px)] font-extrabold leading-none tracking-[-0.04em]">
                {siteConfig.name}
              </p>
              <p className="kicker mt-2 text-grass-light">{siteConfig.tagline}</p>
            </div>
          </div>

          <nav aria-label="Доод цэс" className="grid grid-cols-2 gap-x-10 gap-y-2 text-[15px] font-bold">
            {mainNav.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-grass-light">
                {label}
              </Link>
            ))}
          </nav>

          <div className="space-y-1 text-[15px] font-bold">
            <a href={phoneHref} className="block tabular-nums hover:text-grass-light">
              {phone}
            </a>
            <FacebookLink className="block hover:text-grass-light">Facebook · {facebookName}</FacebookLink>
          </div>
        </div>

        <p className="mt-12 border-t border-white/15 pt-6 text-[13px] text-white/70">
          © {siteConfig.name} · Бичлэг: {siteConfig.heroVideo.credit}
        </p>
      </div>
    </footer>
  );
}
