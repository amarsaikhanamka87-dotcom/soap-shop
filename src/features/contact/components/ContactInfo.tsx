import { FacebookLink } from "@/components/FacebookLink";
import { siteConfig } from "@/config/site";

// Phone and Facebook details shown next to the contact form.
export function ContactInfo() {
  const { phone, phoneHref, facebookName } = siteConfig.contact;

  return (
    <div>
      <p className="mb-5">
        Захиалга, асуулт, санал хүсэлтээ утсаар эсвэл Facebook-ээр илгээнэ үү. Мөн энэ хуудаснаас шууд зурвас
        үлдээж болно.
      </p>
      <dl className="fact-list">
        <div>
          <dt>Утас</dt>
          <dd>
            <a href={phoneHref} className="font-bold tabular-nums text-grass-deep underline-offset-4 hover:underline">
              {phone}
            </a>
          </dd>
        </div>
        <div>
          <dt>Facebook</dt>
          <dd>
            <FacebookLink className="text-grass-deep">{facebookName}</FacebookLink>
          </dd>
        </div>
      </dl>
    </div>
  );
}
