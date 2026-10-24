import type { ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";

const styles: Record<ProjectStatus, string> = {
  Planned: "border-line text-muted",
  "In Progress": "border-sky/40 text-sky",
  "Learning Project": "border-sky/40 text-sky",
  Completed: "border-ok/40 text-ok",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", styles[status])}>
      {status}
    </span>
  );
}
