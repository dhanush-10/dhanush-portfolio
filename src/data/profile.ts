import type { Education, Profile } from "@/types";

/**
 * Single source of truth for personal details.
 * Edit this file to update the name, headline, links and email everywhere.
 */
export const profile: Profile = {
  name: "Dhanush T",
  shortName: "Dhanush",
  title: "Backend Software Engineer",
  location: "Bangalore, India",
  headline: "Building reliable backend systems that scale.",
  intro:
    "I'm a backend engineer working in Java, Spring Boot and Kafka, with 1.8+ years across payment gateway engineering and secured REST APIs. I care about correctness, failure handling and data consistency.",
  availability: "Open to Backend / SDE roles",
  summary:
    "Backend Software Engineer with 1.8+ years of experience at Codingmart Technologies, including 19 months on Juspay's cards payment gateway.",
  portrait: {
    src: "/images/dhanush.jpg",
    alt: "Portrait of Dhanush T",
  },
  resumePath: "/resume.pdf",
  social: {
    github: "https://github.com/dhanush-10",
    linkedin: "https://www.linkedin.com/in/dhanush-t-552517268",
    email: "dhanusht810@gmail.com",
  },
};

export const education: Education = {
  institution: "M. Kumarasamy College of Engineering",
  degree: "B.Tech in Computer Science and Business Systems",
  period: "Nov 2021 – Apr 2025",
  cgpa: "8.0 / 10.0",
};

export const achievements: string[] = [
  "1st place, Code Festa National Coding Contest (200+ participants)",
  "Qualified for Flipkart GRID 2024, a national-level engineering challenge",
];

export const certifications: string[] = [
  "MongoDB Certified DBA Associate",
  "NPTEL Java – Elite + Silver",
  "NPTEL Python – Elite + Silver",
];
