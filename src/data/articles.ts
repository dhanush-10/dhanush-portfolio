import type { Article } from "@/types";

/**
 * These are educational drafts. They explain concepts and do NOT describe workplace experience.
 * Dates are the draft-writing date; change `date` and `status` to "Published" when you publish.
 */
export const articles: Article[] = [
  {
    slug: "java-concurrency-notes",
    title: "Java concurrency notes: threads, executors and synchronization",
    summary: "A short explainer on why raw threads do not scale and how executors and locks fit together.",
    date: "2026-10-24",
    readingMinutes: 4,
    tags: ["Java", "Concurrency"],
    kind: "Explainer",
    status: "Draft",
    relatedProjects: ["distributed-job-processor"],
    blocks: [
      { type: "note", text: "Educational draft. This explains concepts and is not a description of production work." },
      { type: "h2", text: "Why not just create threads?" },
      { type: "p", text: "Creating a thread per task is costly and unbounded: a traffic spike can create thousands of threads and exhaust memory. An ExecutorService separates what to run from how to run it and keeps the number of threads bounded." },
      { type: "code", language: "java", code: "ExecutorService pool = Executors.newFixedThreadPool(8);\nFuture<Integer> result = pool.submit(() -> compute());\nint value = result.get();\npool.shutdown();" },
      { type: "h2", text: "Shared state needs a rule" },
      { type: "p", text: "Two threads incrementing a plain int can lose updates because read, add and write are separate steps. Choose one rule per piece of shared state:" },
      { type: "list", items: ["Do not share it (confine state to one thread).", "Make it immutable.", "Use an atomic type such as AtomicInteger for single variables.", "Guard it with a lock (synchronized or ReentrantLock) when several fields must change together."] },
      { type: "code", language: "java", code: "private final AtomicInteger counter = new AtomicInteger();\n\nvoid hit() {\n    counter.incrementAndGet();\n}" },
      { type: "h2", text: "Takeaway" },
      { type: "p", text: "Bound your threads, name your shared state, and give each piece of it exactly one protection strategy." },
    ],
  },
  {
    slug: "idempotent-payment-apis",
    title: "Designing idempotent payment APIs",
    summary: "How an idempotency key lets clients retry a request safely.",
    date: "2026-10-24",
    readingMinutes: 4,
    tags: ["API design", "Payments"],
    kind: "Explainer",
    status: "Draft",
    relatedProjects: ["payment-processing-system"],
    blocks: [
      { type: "note", text: "Educational draft. It describes a general pattern, not any specific company's implementation." },
      { type: "h2", text: "The problem" },
      { type: "p", text: "A client sends a payment request and the connection times out. It cannot know whether the server processed the request, so it retries. Without protection the customer may be charged twice." },
      { type: "h2", text: "The idea" },
      { type: "p", text: "The client sends a unique Idempotency-Key with each logical request. The server stores the key with the request fingerprint and the response. A repeat with the same key returns the stored response instead of doing the work again." },
      { type: "code", language: "sql", code: "CREATE TABLE idempotency_keys (\n  key           text PRIMARY KEY,\n  request_hash  text NOT NULL,\n  response_body jsonb,\n  created_at    timestamptz NOT NULL DEFAULT now()\n);" },
      { type: "h2", text: "Details that matter" },
      { type: "list", items: ["Insert the key and create the payment in one transaction so a crash cannot split them.", "Reject a reused key whose request body differs.", "Handle two simultaneous requests with the same key: the unique constraint lets only one proceed.", "Expire old keys after a documented window."] },
    ],
  },
  {
    slug: "kafka-consumer-retries",
    title: "Understanding Kafka consumer retries",
    summary: "Why offsets, retries and duplicates are linked, and what at-least-once delivery means for handlers.",
    date: "2026-10-24",
    readingMinutes: 3,
    tags: ["Kafka", "Event-driven"],
    kind: "Explainer",
    status: "Draft",
    blocks: [
      { type: "note", text: "Educational draft. Concepts only." },
      { type: "h2", text: "Offsets are the retry mechanism" },
      { type: "p", text: "A consumer commits an offset to record how far it has read. If it crashes before committing, it restarts from the last committed offset and sees some messages again. That is at-least-once delivery." },
      { type: "h2", text: "So handlers must tolerate duplicates" },
      { type: "list", items: ["Make handlers idempotent, for example by recording processed event ids.", "Commit the offset after processing, not before.", "Send messages that keep failing to a dead-letter topic instead of blocking the partition forever."] },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
