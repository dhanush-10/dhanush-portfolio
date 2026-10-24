import Link from "next/link";
import type { Article } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-card p-6 transition-colors hover:border-zinc-600">
      <div className="flex items-center gap-2 text-xs text-muted">
        <span className="rounded-full border border-line px-2 py-0.5">{article.status}</span>
        <span>{article.kind}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">
        <Link href={`/writing/${article.slug}`} className="hover:text-accent">{article.title}</Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{article.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">{article.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      <p className="mt-auto pt-5 font-mono text-xs text-muted">
        <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readingMinutes} min read
      </p>
    </article>
  );
}
