import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/ui/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ResumeButton } from "@/components/ui/ResumeButton";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dhanush T about backend engineering and SDE roles.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const row = "flex min-h-12 items-center gap-3 rounded-lg border border-line bg-card px-4 text-sm hover:border-zinc-600";
  return (
    <div className="container-x pb-8 pt-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mt-4 max-w-xl text-muted">Email is the fastest way to reach me. I&apos;m open to Backend Engineer and SDE roles.</p>
      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <div className="space-y-3">
          <a className={row} href={`mailto:${profile.social.email}`}><Mail size={18} aria-hidden="true" className="text-accent" /> {profile.social.email}</a>
          <a className={row} href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon className="size-[18px] text-sky" /> LinkedIn</a>
          <a className={row} href={profile.social.github} target="_blank" rel="noopener noreferrer"><GithubIcon className="size-[18px] text-sky" /> GitHub</a>
          <div className="pt-3"><ResumeButton /></div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
