export function SectionHeading({ title, intro, id }: { title: string; intro?: string; id?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 id={id} className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {intro ? <p className="mt-3 leading-relaxed text-muted">{intro}</p> : null}
    </div>
  );
}
