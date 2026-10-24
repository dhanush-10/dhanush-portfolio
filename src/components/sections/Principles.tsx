import { principles } from "@/data/principles";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Principles() {
  return (
    <section aria-labelledby="principles-title" className="container-x pt-24">
      <SectionHeading id="principles-title" title="Engineering principles" intro="The kinds of problems I like working on, and how I try to approach them." />
      <dl className="divide-y divide-line border-y border-line">
        {principles.map((p) => (
          <div key={p.title} className="grid gap-2 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
            <dt className="text-lg font-medium tracking-tight">{p.title}</dt>
            <dd className="leading-relaxed text-muted">{p.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
