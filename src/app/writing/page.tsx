import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/writing/ArticleCard";

export const metadata: Metadata = {
  title: "Engineering Notes",
  description: "Study notes on Java concurrency, idempotent APIs and Kafka consumers.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  return (
    <div className="container-x pb-8 pt-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Engineering notes</h1>
      <p className="mt-4 max-w-2xl text-muted">Short explainers on backend topics. Each is labelled as an explainer, experiment or lessons-learned piece, and drafts are marked as drafts. None describe a former employer&apos;s systems.</p>
      {articles.length === 0 ? (
        <p className="mt-10 rounded-lg border border-dashed border-line p-6 text-muted">No notes yet. Add one in src/data/articles.ts.</p>
      ) : (
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{articles.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
      )}
    </div>
  );
}
