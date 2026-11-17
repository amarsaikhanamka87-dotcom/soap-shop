import { siteConfig } from "@/config/site";

type FacebookLinkProps = {
  className?: string;
  children: React.ReactNode;
};

// Links to the shop's Facebook page once its URL is set in siteConfig; until then shows plain text.
export function FacebookLink({ className, children }: FacebookLinkProps) {
  const { facebookUrl } = siteConfig.contact;

  if (!facebookUrl) return <span className={className}>{children}</span>;

  return (
    <a href={facebookUrl} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
