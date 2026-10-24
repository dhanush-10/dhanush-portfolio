import type { ArticleBlock } from "@/types";

/** Renders structured article blocks as plain React nodes (no raw HTML injection). */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="mt-10 space-y-5 leading-relaxed text-fg/90">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i} className="pt-4 text-xl font-semibold tracking-tight text-fg">{b.text}</h2>;
          case "p":
            return <p key={i}>{b.text}</p>;
          case "note":
            return <p key={i} className="rounded-lg border border-line bg-bg-2 p-4 text-sm text-muted">{b.text}</p>;
          case "list":
            return <ul key={i} className="list-disc space-y-2 pl-5">{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
          case "code":
            return (
              <figure key={i} className="overflow-hidden rounded-lg border border-line bg-bg-2">
                <figcaption className="border-b border-line px-4 py-1.5 font-mono text-xs text-muted">{b.language}</figcaption>
                <pre tabIndex={0} className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-fg"><code>{b.code}</code></pre>
              </figure>
            );
        }
      })}
    </div>
  );
}
