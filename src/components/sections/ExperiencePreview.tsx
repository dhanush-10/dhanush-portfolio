import Link from "next/link";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export function ExperiencePreview() {
  return (
    <section aria-labelledby="exp-title" className="container-x pt-24">
      <SectionHeading id="exp-title" title="Experience" />
      {experience.map((e) => {
        const main = e.roles[0];
        if (!main) return null;
        return (
          <div key={e.id} className="rounded-xl border border-line bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">{e.employer}</h3>
              <p className="font-mono text-sm text-muted">{e.overallPeriod}</p>
            </div>
            {e.engagement ? <p className="mt-1 text-sm text-sky">Client engagement: {e.engagement}</p> : null}
            <p className="mt-5 font-medium">{main.title}</p>
            <p className="font-mono text-xs text-muted">{main.period}</p>
            <ul className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-fg/90">
              {main.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex gap-3"><span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />{h}</li>
              ))}
            </ul>
            <Link href="/experience" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-sky hover:underline">
              View complete experience <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        );
      })}
    </section>
  );
}
