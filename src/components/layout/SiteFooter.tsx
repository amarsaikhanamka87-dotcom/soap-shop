import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const { phone, facebookName } = siteConfig.contact;

  return (
    <footer className="bg-ink py-7 font-mono text-xs tracking-wide text-paper">
      <div className="site-container flex flex-wrap justify-between gap-2.5">
        <span>© {siteConfig.name}</span>
        <span>
          Утас: {phone} · Facebook: {facebookName} · Бичлэг: {siteConfig.heroVideo.credit}
        </span>
      </div>
    </footer>
  );
}
