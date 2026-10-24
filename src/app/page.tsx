import { Hero } from "@/components/sections/Hero";
import { Snapshot } from "@/components/sections/Snapshot";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { Principles } from "@/components/sections/Principles";
import { NotesPreview } from "@/components/sections/NotesPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Snapshot />
      <Skills />
      <FeaturedProjects />
      <ExperiencePreview />
      <Principles />
      <NotesPreview />
      <ContactCTA />
    </>
  );
}
