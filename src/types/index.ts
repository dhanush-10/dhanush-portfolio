export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface Profile {
  name: string;
  shortName: string;
  title: string;
  location: string;
  headline: string;
  intro: string;
  availability: string;
  summary: string;
  portrait: { src: string; alt: string } | null;
  resumePath: string;
  social: SocialLinks;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
}

export interface Role {
  title: string;
  type: string;
  period: string;
  context: string;
  highlights: string[];
  technologies: string[];
}

export interface Engagement {
  id: string;
  employer: string;
  /** Client / product engagement the work was done on. Not the employer. */
  engagement?: string;
  location: string;
  overallPeriod: string;
  roles: Role[];
}

export interface SkillGroup {
  name: string;
  description: string;
  items: string[];
}

export type ProjectStatus = "Planned" | "In Progress" | "Learning Project" | "Completed";

export interface ProjectSection {
  heading: string;
  body: string[];
}

export interface ArchitectureNode {
  label: string;
  note?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  statusNote: string;
  tags: string[];
  features: string[];
  github?: string;
  demo?: string;
  problem: string[];
  requirements: { title: string; detail: string }[];
  architecture: ArchitectureNode[];
  architectureCaption: string;
  implementation: ProjectSection[];
  testingPlan: string[];
  challengesPrompt: string;
  futureWork: string[];
  relatedArticles?: string[];
}

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string };

export interface Article {
  slug: string;
  title: string;
  summary: string;
  /** ISO date this draft was written. Update when you publish. */
  date: string;
  readingMinutes: number;
  tags: string[];
  kind: "Explainer" | "Experiment" | "Lessons learned";
  status: "Draft" | "Published";
  relatedProjects?: string[];
  blocks: ArticleBlock[];
}

export interface Principle {
  title: string;
  body: string;
}

export interface NavItem {
  label: string;
  href: string;
}
