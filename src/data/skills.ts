import type { SkillGroup } from "@/types";

/** Taken from the resume. No proficiency percentages on purpose. Edit freely. */
export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    description: "Java is the primary language; Rust, Haskell and Python were used in payment gateway work.",
    items: ["Java", "SQL", "Rust", "Haskell", "Python", "C", "C++", "C#", "Dart"],
  },
  {
    name: "Backend engineering",
    description: "Secured REST services and event-driven design.",
    items: ["Spring Boot", "Spring Security", "Hibernate", "REST APIs", "Microservices", "Event-Driven Architecture", "JWT", "OAuth2"],
  },
  {
    name: "Databases",
    description: "Relational first, with exposure to document stores and caches.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "BigQuery"],
  },
  {
    name: "Messaging and payments",
    description: "Asynchronous processing and payment protocols.",
    items: ["Kafka", "ISO 8583", "Idempotent callbacks", "AES", "JWE"],
  },
  {
    name: "Testing and quality",
    description: "Unit tests plus load testing under high TPS.",
    items: ["JUnit", "Mockito", "Postman", "Load testing"],
  },
  {
    name: "Tools and infrastructure",
    description: "Delivery pipeline and observability.",
    items: ["Git", "GitHub", "Bitbucket", "Docker", "Kubernetes", "Jenkins", "CI/CD", "AWS", "Grafana", "Kibana"],
  },
];
