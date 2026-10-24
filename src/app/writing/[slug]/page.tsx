import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/articles";
import { getProject } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { ArticleBody } from "@/components/writing/ArticleBody";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return { title: a.title, description: a.summary, alternates: { canonical: `/writing/${a.slug}` }, openGraph: { type: "article", title: a.title, description: a.summary, url: `/writing/${a.slug}` } };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const related = (a.relatedProjects ?? []).map(getProject).filter((p) => p !== undefined);
  return (
    <article className="container-x max-w-3xl pb-8 pt-12">
      <Link href="/writing" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"><ArrowLeft size={16} aria-hidden="true" /> All notes</Link>
      <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{a.title}</h1>
      <p className="mt-3 text-lg text-muted">{a.summary}</p>
      <p className="mt-4 font-mono text-xs text-muted">
        {a.status} · {a.kind} · <time dateTime={a.date}>{formatDate(a.date)}</time> · {a.readingMinutes} min read
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">{a.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      <ArticleBody blocks={a.blocks} />
      {related.length > 0 ? (
        <aside className="mt-12 border-t border-line pt-6" aria-label="Related projects">
          <h2 className="text-sm font-medium">Related projects</h2>
          <ul className="mt-2 space-y-1">{related.map((p) => <li key={p.slug}><Link className="text-sky hover:underline" href={`/projects/${p.slug}`}>{p.title}</Link></li>)}</ul>
        </aside>
      ) : null}
    </article>
  );
}
