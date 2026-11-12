// Newspaper-style page heading with a rule underneath.

type PageTitleProps = {
  title: string;
  aside?: React.ReactNode;
};

export function PageTitle({ title, aside }: PageTitleProps) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-ink pb-2">
      <h1 className="font-display text-[clamp(30px,4.5vw,44px)]">{title}</h1>
      {aside && <span className="kicker text-grass-deep">{aside}</span>}
    </div>
  );
}
