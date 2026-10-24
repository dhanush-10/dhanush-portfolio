import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">This page doesn&apos;t exist</h1>
      <p className="mt-3 max-w-md text-muted">The link may be mistyped or the page may have moved. Head back to the homepage or browse projects.</p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Go home</Button>
        <Button href="/projects" variant="secondary">View projects</Button>
      </div>
    </section>
  );
}
