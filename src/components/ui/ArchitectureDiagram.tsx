import type { ArchitectureNode } from "@/types";

/** Accessible vertical flow diagram rendered as an ordered list. */
export function ArchitectureDiagram({ nodes, caption }: { nodes: ArchitectureNode[]; caption: string }) {
  return (
    <figure>
      <ol className="flex flex-col items-stretch gap-0 sm:max-w-md" aria-label="Architecture flow, top to bottom">
        {nodes.map((n, i) => (
          <li key={n.label} className="flex flex-col items-center">
            <div className="w-full rounded-lg border border-line bg-card px-4 py-3">
              <span className="font-mono text-sm text-fg">{n.label}</span>
              {n.note ? <span className="ml-2 font-mono text-xs text-muted">{n.note}</span> : null}
            </div>
            {i < nodes.length - 1 ? <span aria-hidden="true" className="h-5 w-px bg-sky/60" /> : null}
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
