import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { MainNav } from "./MainNav";

// Sticky header: logo + bold wordmark on the left, menu on the right (wraps below on phones).
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} — нүүр хуудас`}>
          <Logo className="size-11 flex-none" />
          <span className="font-display text-[22px] font-extrabold leading-none tracking-[-0.03em] text-grass-deep">
            {siteConfig.name}
          </span>
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
