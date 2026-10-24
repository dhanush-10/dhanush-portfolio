import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="container-x pt-24">
      <SectionHeading id="skills-title" title="Technical expertise" intro="Technologies from my resume, grouped by what they are used for. No proficiency scores, since those say little." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={(i % 3) * 0.05}>
            <div className="h-full rounded-xl border border-line bg-card p-5">
              <h3 className="font-medium">{g.name}</h3>
              <p className="mt-1 text-sm text-muted">{g.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{g.items.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
