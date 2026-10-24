import { education, profile } from "@/data/profile";

export function Snapshot() {
  const items = [
    { k: "Focus", v: "Payment systems and backend services" },
    { k: "Main language", v: "Java, with Rust and Haskell in production payment work" },
    { k: "Framework", v: "Spring Boot, Spring Security, Hibernate" },
    { k: "Experience", v: "1.8+ years, Codingmart Technologies" },
    { k: "Education", v: `B.Tech CSBS, CGPA ${education.cgpa.split(" ")[0]}/10` },
    { k: "Based in", v: profile.location },
  ];
  return (
    <section aria-label="Professional snapshot" className="border-y border-line bg-bg-2">
      <dl className="container-x grid grid-cols-1 gap-x-8 gap-y-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.k}>
            <dt className="font-mono text-xs text-muted">{i.k}</dt>
            <dd className="mt-1 text-sm text-fg">{i.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
