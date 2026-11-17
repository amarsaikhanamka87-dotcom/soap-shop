import { FacebookLink } from "@/components/FacebookLink";
import { siteConfig } from "@/config/site";

// Orders aren't placed online yet: the customer calls or writes on Facebook.
export function OrderByContact() {
  const { phone, phoneHref, facebookName } = siteConfig.contact;

  return (
    <div className="mt-4 text-[15px]">
      <p className="mb-4">Захиалга өгөхийн тулд утсаар холбогдох эсвэл Facebook-ээр бичнэ үү.</p>
      <a href={phoneHref} className="btn w-full justify-center">
        Залгах: {phone}
      </a>
      <p className="mt-3 text-center text-[13px] font-bold text-ink-soft">
        Facebook: <FacebookLink className="text-grass-deep">{facebookName}</FacebookLink>
      </p>
    </div>
  );
}
