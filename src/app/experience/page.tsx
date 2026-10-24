import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { Tag } from "@/components/ui/Tag";
import { ResumeButton } from "@/components/ui/ResumeButton";

export const metadata: Metadata = {
  title: "Experience",
  description: "Backend engineering experience at Codingmart Technologies, including work on a cards payment gateway.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className="container-x pb-8 pt-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h1>
      <p className="mt-4 max-w-2xl text-muted">Details are limited to what is public in my resume. No internal company information is shared here.</p>
      {experience.map((e) => (
        <section key={e.id} aria-labelledby={`${e.id}-title`} className="mt-12">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 id={`${e.id}-title`} className="text-2xl font-semibold tracking-tight">{e.employer}</h2>
            <p className="font-mono text-sm text-muted">{e.overallPeriod} · {e.location}</p>
          </div>
          {e.engagement ? <p className="mt-1 text-sky">Client engagement: {e.engagement}</p> : null}
          <ol className="mt-8 space-y-6 border-l border-line pl-6 sm:pl-8">
            {e.roles.map((r) => (
              <li key={r.title} className="relative">
                <span aria-hidden="true" className="absolute -left-[1.85rem] top-2 size-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[2.35rem]" />
                <div className="rounded-xl border border-line bg-card p-6">
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="mt-1 font-mono text-xs text-muted">{r.period} · {r.type}</p>
                  <p className="mt-4 leading-relaxed text-muted">{r.context}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-fg/90">
                    {r.highlights.map((h) => <li key={h} className="flex gap-3"><span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />{h}</li>)}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5">{r.technologies.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}
      <div className="mt-10"><ResumeButton label="Download full resume" /></div>
    </div>
  );
}
