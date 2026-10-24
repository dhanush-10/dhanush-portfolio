import type { Project } from "@/types";

/**
 * IMPORTANT: none of these projects has a verified public repository yet.
 * They are honest "Planned" / "Learning Project" entries. When you build one:
 *  1. set `status`, 2. add the real `github` URL (and `demo` if deployed),
 *  3. replace `challengesPrompt` with what you actually ran into.
 */
export const projects: Project[] = [
  {
    slug: "payment-processing-system",
    title: "Payment Processing System",
    summary: "A Spring Boot service modelling the payment lifecycle with idempotent APIs and Kafka-driven reconciliation.",
    status: "Planned",
    statusNote: "Planned learning project. It is separate from my work at Codingmart and shares no employer code.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Kafka"],
    features: [
      "Idempotency keys on payment creation",
      "Explicit state machine: created, authorized, captured, failed",
      "Transactional outbox publishing events to Kafka",
    ],
    problem: [
      "Clients retry payment requests when networks time out. Without safeguards a retry can charge twice, and a crash between a database write and a message publish can leave other systems out of sync.",
      "This project explores those two problems in isolation: safe retries and reliable event publication.",
    ],
    requirements: [
      { title: "Correctness", detail: "A repeated request with the same idempotency key must return the original result and never create a second payment." },
      { title: "Consistency", detail: "State changes and the events describing them are committed in one database transaction." },
      { title: "Reliability", detail: "Consumers tolerate duplicate and out-of-order events." },
      { title: "Maintainability", detail: "Payment state transitions live in one place and are unit tested." },
    ],
    architecture: [
      { label: "Client" },
      { label: "REST API", note: "validation, idempotency key" },
      { label: "Payment service", note: "state machine" },
      { label: "PostgreSQL", note: "payment + outbox, one transaction" },
      { label: "Outbox publisher" },
      { label: "Kafka" },
      { label: "Reconciliation consumer" },
    ],
    architectureCaption: "Illustrative target architecture. Components will be adjusted to whatever is actually built.",
    implementation: [
      { heading: "Planned API", body: ["POST /payments with an Idempotency-Key header, GET /payments/{id}, and POST /payments/{id}/capture."] },
      { heading: "Planned data model", body: ["payments, idempotency_keys (unique key, request hash, stored response) and outbox_events tables."] },
      { heading: "Planned testing", body: ["Unit tests for the state machine with JUnit and Mockito, and integration tests for duplicate-request handling."] },
    ],
    testingPlan: ["mvn test", "No tests have been written or run yet."],
    challengesPrompt: "To be written after the project is built. Describe real problems you hit and how you solved them.",
    futureWork: ["Retry with backoff for failed publishes", "Dead-letter topic for poison messages", "Basic metrics for publish lag"],
    relatedArticles: ["idempotent-payment-apis"],
  },
  {
    slug: "food-ordering-backend",
    title: "Food Ordering Backend",
    summary: "A Spring Boot REST backend for restaurants, menus and orders, with JWT-secured role-based access.",
    status: "Learning Project",
    statusNote: "Learning project built to practise API design and relational modelling. No repository published yet.",
    tags: ["Java", "Spring Boot", "Spring Security", "MySQL"],
    features: [
      "JWT authentication with customer and restaurant roles",
      "Order lifecycle: placed, accepted, delivered, cancelled",
      "Relational schema with Hibernate and indexed queries",
    ],
    problem: [
      "A typical CRUD service becomes interesting once access control and order state matter: who may see which order, and which transitions are legal.",
      "The project practises modelling those rules cleanly and keeping queries efficient.",
    ],
    requirements: [
      { title: "Security", detail: "Endpoints are protected with role-based access using Spring Security and JWT." },
      { title: "Correctness", detail: "Order state transitions are validated server-side." },
      { title: "Performance", detail: "List endpoints use pagination and indexes chosen from query plans." },
    ],
    architecture: [
      { label: "Client" },
      { label: "Security filter", note: "JWT" },
      { label: "Controllers" },
      { label: "Services" },
      { label: "Repositories", note: "Hibernate" },
      { label: "MySQL" },
    ],
    architectureCaption: "Illustrative layered architecture.",
    implementation: [
      { heading: "Planned structure", body: ["Packages by feature: auth, restaurant, menu, order, each with controller, service and repository."] },
      { heading: "Planned error handling", body: ["A global exception handler returning a consistent JSON error body."] },
    ],
    testingPlan: ["mvn test", "No tests have been written or run yet."],
    challengesPrompt: "To be written after the project is built.",
    futureWork: ["Order events over Kafka", "Redis cache for menus"],
  },
  {
    slug: "distributed-job-processor",
    title: "Distributed Job Processor",
    summary: "A Java job queue with worker threads, retries with backoff and a clear job status model.",
    status: "Planned",
    statusNote: "Planned. Nothing is implemented yet.",
    tags: ["Java", "Concurrency", "PostgreSQL"],
    features: [
      "Worker pool built on ExecutorService",
      "Retry with exponential backoff and a dead-letter state",
      "Safe job claiming so two workers never run one job",
    ],
    problem: [
      "Background work must survive crashes and retries without running twice or getting lost.",
      "This project studies claiming jobs safely from a shared table and handling failure explicitly.",
    ],
    requirements: [
      { title: "Correctness", detail: "A job is claimed by exactly one worker at a time." },
      { title: "Reliability", detail: "Failed jobs retry with backoff, then move to a dead state." },
      { title: "Observability", detail: "Each job exposes its status and attempt count." },
    ],
    architecture: [
      { label: "Producer" },
      { label: "Jobs table", note: "status, attempts, next_run_at" },
      { label: "Poller" },
      { label: "Worker pool" },
      { label: "Handlers" },
    ],
    architectureCaption: "Illustrative design. A broker could replace the table later.",
    implementation: [
      { heading: "Planned claiming strategy", body: ["SELECT ... FOR UPDATE SKIP LOCKED inside a short transaction to claim a batch of due jobs."] },
    ],
    testingPlan: ["mvn test", "No tests have been written or run yet."],
    challengesPrompt: "To be written after the project is built.",
    futureWork: ["Kafka-backed queue option", "Job priorities"],
    relatedArticles: ["java-concurrency-notes"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
