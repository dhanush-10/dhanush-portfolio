import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Backend learning projects by Dhanush T covering idempotent payments, Spring Boot APIs and job processing.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="container-x pb-8 pt-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        These are personal learning projects, each marked with its real status. No repositories or demos are linked until they exist. For production work, see the <Link className="text-sky hover:underline" href="/experience">experience page</Link>.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  );
}
