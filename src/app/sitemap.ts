import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/experience", "/writing", "/about", "/contact"];
  return [
    ...staticRoutes.map((r) => ({ url: `${siteUrl}${r}` })),
    ...projects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}` })),
    ...articles.map((a) => ({ url: `${siteUrl}/writing/${a.slug}`, lastModified: a.date })),
  ];
}
