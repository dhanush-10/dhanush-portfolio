import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors";
const variants: Record<Variant, string> = {
  primary: "bg-accent text-bg hover:bg-[#b5f04a]",
  secondary: "border border-line bg-card text-fg hover:border-zinc-600",
  ghost: "text-muted hover:text-fg",
};

interface Props {
  href: string;
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
  download?: boolean;
  className?: string;
}

export function Button({ href, variant = "primary", children, external, download, className }: Props) {
  const cls = cn(base, variants[variant], className);
  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }
  return <Link href={href} className={cls}>{children}</Link>;
}
