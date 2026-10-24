import { existsSync } from "node:fs";
import path from "node:path";
import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "./Button";

/** Server component: checks at build/render time whether public/resume.pdf exists. */
export function ResumeButton({ variant = "secondary", label = "Download Resume", className }: { variant?: "primary" | "secondary" | "ghost"; label?: string; className?: string }) {
  const file = path.join(process.cwd(), "public", profile.resumePath);
  const exists = existsSync(file);
  if (!exists) {
    return (
      <Button href="/contact" variant={variant} className={className}>
        Resume coming soon
      </Button>
    );
  }
  return (
    <Button href={profile.resumePath} variant={variant} download className={className}>
      <Download size={16} aria-hidden="true" /> {label}
    </Button>
  );
}
