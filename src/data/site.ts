import type { NavItem } from "@/types";
import { profile } from "./profile";

/**
 * Set NEXT_PUBLIC_SITE_URL in your environment (see .env.example) after deploying.
 * Until then a clearly fake placeholder host is used.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-site.vercel.app").replace(/\/$/, "");

export const siteConfig = {
  name: `${profile.name} | ${profile.title}`,
  description:
    "Portfolio of Dhanush T, a Java backend software engineer working on payment systems, Kafka-based event processing and secured Spring Boot APIs.",
  url: siteUrl,
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Engineering Notes", href: "/writing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
