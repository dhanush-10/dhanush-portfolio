import Link from "next/link";
import type { Project } from "@/types";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";
import { GithubIcon } from "@/components/ui/Icons";
import { ExternalLink } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-card p-6 transition-colors hover:border-zinc-600">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-fg/90">
        {project.features.map((f) => (
          <li key={f} className="flex gap-2"><span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />{f}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
        <Link href={`/projects/${project.slug}`} className="inline-flex min-h-11 items-center rounded-lg bg-accent px-4 text-sm font-medium text-bg hover:bg-[#b5f04a]">
          View case study
        </Link>
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted hover:text-fg">
            <GithubIcon className="size-4" /> GitHub
          </a>
        ) : null}
        {project.demo ? (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted hover:text-fg">
            <ExternalLink size={16} aria-hidden="true" /> Live demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
