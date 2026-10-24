import Link from "next/link";
import { articles } from "@/data/articles";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/writing/ArticleCard";
import { ArrowRight } from "lucide-react";

export function NotesPreview() {
  return (
    <section aria-labelledby="notes-title" className="container-x pt-24">
      <SectionHeading id="notes-title" title="Engineering notes" intro="Short explainers on backend topics. They are study notes and drafts, not accounts of work at any employer." />
      <div className="grid gap-4 md:grid-cols-3">
        {articles.slice(0, 3).map((a) => <ArticleCard key={a.slug} article={a} />)}
      </div>
      <Link href="/writing" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-sky hover:underline">
        All notes <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
