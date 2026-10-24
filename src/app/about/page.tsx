import type { Metadata } from "next";
import Image from "next/image";
import { profile, education, achievements, certifications } from "@/data/profile";
import { principles } from "@/data/principles";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "About Dhanush T: a backend software engineer focused on Java, Spring Boot, Kafka and payment systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="container-x pb-8 pt-16">
      <div className="grid gap-10 md:grid-cols-[1fr_16rem] md:items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>
          <div className="mt-6 max-w-2xl space-y-5 leading-relaxed text-fg/90">
            <p>I&apos;m a backend engineer based in {profile.location}. I started by building secured Spring Boot REST APIs, where I worked on role-based access with JWT and OAuth2 and on tuning slow queries in Hibernate and MySQL.</p>
            <p>I then spent 19 months on a cards payment gateway through Codingmart Technologies. The work covered card authorization, ISO 8583 messaging, Kafka-based settlement sync and idempotent mandate callbacks, which made reliability and data consistency very concrete problems for me.</p>
            <p>I&apos;m now looking for Backend Engineer and SDE roles where I can keep working on correctness, failure handling and performance, ideally on payments or other systems where mistakes are costly.</p>
          </div>
          <div className="mt-8"><Button href="/experience" variant="secondary">See experience</Button></div>
        </div>
        {profile.portrait ? (
          <Image src={profile.portrait.src} alt={profile.portrait.alt} width={256} height={256} className="size-48 rounded-full border border-line object-cover md:size-64" />
        ) : null}
      </div>

      <section aria-labelledby="edu" className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 id="edu" className="text-xl font-semibold tracking-tight">Education</h2>
          <p className="mt-3 font-medium">{education.degree}</p>
          <p className="text-muted">{education.institution}</p>
          <p className="mt-1 font-mono text-sm text-muted">{education.period} · CGPA {education.cgpa}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Achievements and certifications</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {[...achievements, ...certifications].map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how" className="mt-16">
        <h2 id="how" className="text-xl font-semibold tracking-tight">How I like to work</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {principles.map((p) => (
            <li key={p.title} className="rounded-xl border border-line bg-card p-5">
              <p className="font-medium">{p.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
