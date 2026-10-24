import { existsSync } from "node:fs";
import path from "node:path";
import { profile } from "@/data/profile";
import { Header } from "./Header";

export function SiteHeader() {
  const resumeAvailable = existsSync(path.join(process.cwd(), "public", profile.resumePath));
  return <Header resumeAvailable={resumeAvailable} />;
}
