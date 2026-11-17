import { siteConfig } from "@/config/site";

// Thin deep-green strip above the header on every page, with the order phone number.
export function AnnouncementBar() {
  const { phone, phoneHref } = siteConfig.contact;

  return (
    <p className="bg-grass-deep px-4 py-2 text-center text-[13px] font-bold text-white">
      Захиалга:{" "}
      <a href={phoneHref} className="tabular-nums underline underline-offset-2 hover:text-grass-light">
        {phone}
      </a>
    </p>
  );
}
