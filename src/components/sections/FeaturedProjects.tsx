import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section aria-labelledby="projects-title" className="container-x pt-24">
      <SectionHeading id="projects-title" title="Featured projects" intro="Personal learning projects, each labelled with its real status. My payment gateway work is described under Experience." />
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
      <Link href="/projects" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-sky hover:underline">
        View all projects <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
