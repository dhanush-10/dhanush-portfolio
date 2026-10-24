import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section aria-labelledby="cta-title" className="container-x pt-24">
      <div className="rounded-2xl border border-line bg-bg-2 p-8 sm:p-12">
        <h2 id="cta-title" className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
          Have a backend engineering opportunity or an interesting technical problem?
        </h2>
        <p className="mt-3 max-w-xl text-muted">I&apos;m happy to talk about payment systems, reliability work or an SDE role on your team.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`mailto:${profile.social.email}`}>Email me</Button>
          <Button href={profile.social.linkedin} variant="secondary" external>LinkedIn</Button>
          <Button href={profile.social.github} variant="secondary" external>GitHub</Button>
        </div>
      </div>
    </section>
  );
}
