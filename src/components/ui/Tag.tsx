export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-bg-2 px-2 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
