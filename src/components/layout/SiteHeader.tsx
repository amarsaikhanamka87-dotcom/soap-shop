import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { MainNav } from "./MainNav";

export function SiteHeader() {
  return (
    <header className="border-b-[3px] border-double border-ink bg-paper">
      <div className="site-container">
        <Link href="/" className="flex items-center justify-center gap-4 pb-2.5 pt-4.5" aria-label="Нүүр хуудас">
          <Logo className="size-14 flex-none" />
          <div>
            <div className="font-display text-[clamp(34px,7vw,66px)] font-bold leading-none">
              {siteConfig.name}
            </div>
            <div className="mt-1 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-grass-deep">
              {siteConfig.tagline}
            </div>
          </div>
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
