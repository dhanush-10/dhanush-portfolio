import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${profile.name}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: { card: "summary", title: siteConfig.name, description: siteConfig.description },
};

export const viewport: Viewport = { themeColor: "#09090b", width: "device-width", initialScale: 1 };

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: siteConfig.url,
  email: `mailto:${profile.social.email}`,
  sameAs: [profile.social.github, profile.social.linkedin],
  alumniOf: "M. Kumarasamy College of Engineering",
  knowsAbout: ["Java", "Spring Boot", "Kafka", "Payment systems", "Backend engineering"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
