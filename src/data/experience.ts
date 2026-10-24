import type { Engagement } from "@/types";

/**
 * Employment relationship (kept accurate on purpose):
 *  - Employer: Codingmart Technologies (internship Dec 2024 – Mar 2025, then the engagement below).
 *  - Engagement: Juspay cards payment gateway, Mar 2025 – Sep 2026 (19 months).
 *
 * NOTE: the PDF resume lists the second role under "Juspay Technologies" as the company, while its
 * summary says the 1.8+ years were at Codingmart Technologies. This site follows the summary.
 * If Juspay was in fact your direct employer, change `employer` and `engagement` below and update
 * `profile.summary` in profile.ts.
 */
export const experience: Engagement[] = [
  {
    id: "codingmart-juspay",
    employer: "Codingmart Technologies",
    engagement: "Juspay – Cards payment gateway",
    location: "Bangalore, India",
    overallPeriod: "Dec 2024 – Sep 2026",
    roles: [
      {
        title: "Software Development Engineer, Cards Payment Gateway",
        type: "Full-time · Juspay engagement",
        period: "Mar 2025 – Sep 2026",
        context:
          "Backend work on a cards payment gateway: authorization, ISO 8583 messaging, settlement and recurring-payment mandates, written mainly in Java, Haskell, Rust and Python.",
        highlights: [
          "Reduced p99 authorization latency by 20% by load testing at thousands of TPS, optimizing bottlenecks and fixing a critical read-after-write race condition.",
          "Replaced database polling with Kafka-based synchronization, cutting transaction propagation latency by 40% and database polling load by 60% for faster settlement processing.",
          "Engineered Active-Active card-range switching for the 3DS Server with validation and alerting, enabling zero-downtime card-range updates.",
          "Developed Rust-based ISO Bridge workers with persistent TCP connections, ISO 8583 processing, health monitoring and automatic connection recovery.",
          "Built the Standing Instruction mandate lifecycle with idempotent callbacks and typed error handling, achieving 99.2% notification reliability.",
          "Refactored clearing and settlement using pluggable handlers and built multi-region HSBC FX conversion with dynamic rates and scheme-compliant rounding.",
        ],
        technologies: ["Java", "Haskell", "Python", "Rust", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "AES", "JWE", "ISO 8583"],
      },
      {
        title: "Backend Developer Intern",
        type: "Internship",
        period: "Dec 2024 – Mar 2025",
        context: "Spring Boot API development with a focus on security, query performance and release automation.",
        highlights: [
          "Secured REST APIs with role-based access control using Spring Security, JWT and OAuth2, restricting endpoints behind scoped, token-based permissions.",
          "Reduced API response latency by up to 30% through query tuning, composite indexing and lazy-loading fixes on high-traffic endpoints (Hibernate, MySQL).",
          "Automated build, test and deployment pipelines with Git and Jenkins, removing manual release steps and shortening release turnaround time.",
        ],
        technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "OAuth2", "Hibernate", "MySQL", "Git", "Jenkins"],
      },
    ],
  },
];
