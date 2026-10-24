import Link from "next/link";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const link = "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg";
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-x flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-medium">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
          <p className="mt-6 text-xs text-muted">© {year} {profile.name}</p>
        </div>
        <ul className="flex flex-col sm:items-end">
          <li><a className={link} href={profile.social.github} target="_blank" rel="noopener noreferrer"><GithubIcon className="size-4" /> GitHub</a></li>
          <li><a className={link} href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon className="size-4" /> LinkedIn</a></li>
          <li><a className={link} href={`mailto:${profile.social.email}`}><Mail size={16} aria-hidden="true" /> {profile.social.email}</a></li>
          <li><Link className={link} href="#main">Back to top</Link></li>
        </ul>
      </div>
    </footer>
  );
}
