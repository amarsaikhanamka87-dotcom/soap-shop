// Bold green band with the repeating "Э" pattern and the brand promise.
const PROMISES = ["Байгалийн орц", "Хүйтэн аргаар", "Гар хийц"] as const;

export function BrandBand() {
  return (
    <section aria-label="Бидний амлалт" className="brand-pattern bg-grass py-[clamp(48px,8vw,96px)] text-white">
      <div className="site-container text-center">
        <p className="mx-auto max-w-4xl font-display text-[clamp(30px,5.4vw,64px)] font-extrabold leading-[1.02] tracking-[-0.03em]">
          Байгалиас таны арьсанд
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {PROMISES.map((promise) => (
            <li key={promise} className="rounded-full border-2 border-white/40 px-4 py-1.5 text-sm font-extrabold">
              {promise}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
