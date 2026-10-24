import Image from "next/image";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="container-x grid items-center gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-muted">
          <span className="size-1.5 rounded-full bg-ok" aria-hidden="true" />
          {profile.availability}
        </p>
        <div className="mt-6 flex items-center gap-4">
          {profile.portrait ? (
            <Image src={profile.portrait.src} alt={profile.portrait.alt} width={72} height={72} priority className="size-[72px] rounded-full border border-line object-cover" />
          ) : null}
          <div>
            <p className="text-xl font-semibold tracking-tight">{profile.name}</p>
            <p className="font-mono text-sm text-sky">{profile.title}</p>
          </div>
        </div>
        <h1 id="hero-title" className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="/projects">Explore Projects</Button>
          <ResumeButton />
          <Button href="/contact" variant="ghost">Get in touch</Button>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex size-11 items-center justify-center rounded-lg text-muted hover:text-fg">
            <GithubIcon className="size-5" />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="inline-flex size-11 items-center justify-center rounded-lg text-muted hover:text-fg">
            <LinkedinIcon className="size-5" />
          </a>
        </div>
      </div>
      <div className="rounded-2xl border border-line bg-bg-2 p-6 sm:p-8">
        <HeroVisual />
      </div>
    </section>
  );
}
