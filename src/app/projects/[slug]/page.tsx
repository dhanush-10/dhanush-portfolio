import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { getArticle } from "@/data/articles";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { GithubIcon } from "@/components/ui/Icons";
import { ExternalLink, ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, alternates: { canonical: `/projects/${p.slug}` }, openGraph: { title: p.title, description: p.summary, url: `/projects/${p.slug}` } };
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 mt-14 text-xl font-semibold tracking-tight">{children}</h2>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const related = (p.relatedArticles ?? []).map(getArticle).filter((a) => a !== undefined);

  return (
    <article className="container-x max-w-3xl pb-8 pt-12">
      <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{p.title}</h1>
        <StatusBadge status={p.status} />
      </div>
      <p className="mt-4 text-lg leading-relaxed text-muted">{p.summary}</p>
      <p className="mt-4 rounded-lg border border-line bg-bg-2 p-4 text-sm text-muted">{p.statusNote}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      <div className="mt-5 flex flex-wrap items-center gap-5 text-sm">
        {p.github ? <a className="inline-flex min-h-11 items-center gap-2 text-sky hover:underline" href={p.github} target="_blank" rel="noopener noreferrer"><GithubIcon className="size-4" /> Repository</a> : <span className="text-muted">Repository: not published yet</span>}
        {p.demo ? <a className="inline-flex min-h-11 items-center gap-2 text-sky hover:underline" href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} aria-hidden="true" /> Live demo</a> : null}
      </div>

      <H2>Problem</H2>
      <div className="space-y-4 leading-relaxed text-fg/90">{p.problem.map((t) => <p key={t}>{t}</p>)}</div>

      <H2>Goals and requirements</H2>
      <dl className="divide-y divide-line border-y border-line">
        {p.requirements.map((r) => (
          <div key={r.title} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="font-medium">{r.title}</dt>
            <dd className="text-muted">{r.detail}</dd>
          </div>
        ))}
      </dl>

      <H2>Architecture</H2>
      <ArchitectureDiagram nodes={p.architecture} caption={p.architectureCaption} />

      <H2>Technical implementation</H2>
      <div className="space-y-6">
        {p.implementation.map((s) => (
          <section key={s.heading}>
            <h3 className="font-medium">{s.heading}</h3>
            {s.body.map((t) => <p key={t} className="mt-2 leading-relaxed text-muted">{t}</p>)}
          </section>
        ))}
      </div>

      <H2>Engineering challenges</H2>
      <p className="rounded-lg border border-dashed border-line p-4 text-sm text-muted">{p.challengesPrompt}</p>

      <H2>Testing</H2>
      <ul className="space-y-1 font-mono text-sm text-muted">{p.testingPlan.map((t) => <li key={t}>{t}</li>)}</ul>

      <H2>Future improvements</H2>
      <ul className="list-disc space-y-1 pl-5 text-muted">{p.futureWork.map((t) => <li key={t}>{t}</li>)}</ul>

      {related.length > 0 ? (
        <>
          <H2>Related notes</H2>
          <ul className="space-y-2">{related.map((a) => <li key={a.slug}><Link className="text-sky hover:underline" href={`/writing/${a.slug}`}>{a.title}</Link></li>)}</ul>
        </>
      ) : null}
    </article>
  );
}
