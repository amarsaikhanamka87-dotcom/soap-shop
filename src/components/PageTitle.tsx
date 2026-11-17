// Bold page heading with an optional green pill label beside it.

type PageTitleProps = {
  title: string;
  aside?: React.ReactNode;
};

export function PageTitle({ title, aside }: PageTitleProps) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
      <h1 className="text-[clamp(32px,5vw,56px)]">{title}</h1>
      {aside && <span className="kicker rounded-full bg-grass-light px-3.5 py-1.5 text-grass-deep">{aside}</span>}
    </div>
  );
}
