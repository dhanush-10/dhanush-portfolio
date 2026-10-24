import type { Principle } from "@/types";

/** Engineering interests, not claims of mastery. */
export const principles: Principle[] = [
  {
    title: "Correctness before cleverness",
    body: "Race conditions and read-after-write bugs hide until load arrives. I prefer to reproduce them under load first, then fix the cause instead of the symptom.",
  },
  {
    title: "Design for failure",
    body: "Networks drop and callbacks repeat. Idempotent handlers, typed errors and automatic recovery are part of the feature, not an afterthought.",
  },
  {
    title: "Measure, then optimize",
    body: "Latency work starts with a load test and a profile. Changes are judged by the numbers they move.",
  },
  {
    title: "Clear contracts and testable seams",
    body: "Pluggable handlers and well-defined API contracts make large flows like settlement easier to change and to test.",
  },
];
