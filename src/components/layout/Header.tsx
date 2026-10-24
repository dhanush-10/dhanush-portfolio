"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

export function Header({ resumeAvailable }: { resumeAvailable: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [prevPath, setPrevPath] = useState(pathname);

  // Close the menu after navigation (state adjusted during render, no effect needed).
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const resumeHref = resumeAvailable ? profile.resumePath : "/contact";
  const resumeLabel = resumeAvailable ? "Resume" : "Resume soon";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg">
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${profile.name}, home`}>
          <span className="flex size-8 items-center justify-center rounded-md border border-line bg-card font-mono text-sm font-semibold text-accent" aria-hidden="true">
            dt
          </span>
          <span className="font-medium tracking-tight">{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn("rounded-md px-3 py-2 text-sm transition-colors", active ? "text-accent" : "text-muted hover:text-fg")}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={resumeHref}
            {...(resumeAvailable ? { download: true } : {})}
            className="ml-3 inline-flex min-h-10 items-center rounded-lg bg-accent px-4 text-sm font-medium text-bg hover:bg-[#b5f04a]"
          >
            {resumeLabel}
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-bg lg:hidden">
          <ul className="container-x flex flex-col py-4">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn("flex min-h-12 items-center border-b border-line text-lg", active ? "text-accent" : "text-fg")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-6">
              <a
                href={resumeHref}
                {...(resumeAvailable ? { download: true } : {})}
                className="flex min-h-12 items-center justify-center rounded-lg bg-accent font-medium text-bg"
              >
                {resumeLabel}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
