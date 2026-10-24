# Dhanush T – Backend Engineer Portfolio

Next.js (App Router), React, TypeScript (strict), Tailwind CSS v4, Framer Motion, Lucide. Fully static, no database, no API keys.

## Run locally (Windows PowerShell)

1. Install Node.js LTS (20.9 or newer) from https://nodejs.org, then check: `node -v`
2. Extract the ZIP, then:

```powershell
cd path\to\portfolio
npm install
npm run dev
```

Open http://localhost:3000.

Production check:

```powershell
npm run lint
npm run typecheck
npm run build
npm run start
```

## Where to edit content (all in `src/data`)

| What | File |
|---|---|
| Name, title, headline, intro, email, GitHub, LinkedIn, portrait, resume path | `profile.ts` |
| Employment, roles, dates, bullets | `experience.ts` |
| Skills | `skills.ts` |
| Projects (status, GitHub, demo links) | `projects.ts` |
| Articles | `articles.ts` |
| Navigation, site URL | `site.ts` |
| Principles | `principles.ts` |

**Resume:** replace `public/resume.pdf`. If the file is missing, the buttons switch to a "Resume coming soon" state.

**Portrait:** `public/images/dhanush.jpg`. Set `portrait: null` in `profile.ts` to remove it.

**Site URL:** copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` (canonical URLs, sitemap, Open Graph).

## Content to verify before publishing

- **Employer vs client:** the resume summary says Codingmart Technologies; the second role lists "Juspay Technologies" as the company. The site shows Codingmart as employer and Juspay as the client engagement. Change `experience.ts` if that is wrong.
- **Projects:** all three are Planned / Learning Project with no repository links. Add real `github` URLs and statuses once built.
- **Articles:** marked Draft, dated at creation, and explicitly educational. Update date/status when you publish.
- Resume metrics (20%, 40%, 60%, 99.2%, 30%) were copied from your resume. Confirm you may share them publicly.
- Your phone number appears only inside the resume PDF, not on the site.

## Contact form

It validates input, then opens the visitor's email app (`mailto:`). It sends and stores nothing. For real delivery later, use a service such as Formspree or Resend through a server route, with keys in environment variables.

## Deploy to Vercel

1. Create a GitHub repository and push the project (`git init`, `git add .`, `git commit`, `git remote add origin ...`, `git push`).
2. At https://vercel.com choose Add New > Project, import the repository (Next.js is auto-detected).
3. Add environment variable `NEXT_PUBLIC_SITE_URL` with your Vercel URL, then Deploy.
4. Open the deployed site and check every page, the resume download and the mobile menu.
5. Custom domain later: Project Settings > Domains, then update `NEXT_PUBLIC_SITE_URL` and redeploy.

Docs: https://vercel.com/docs/deployments and https://nextjs.org/docs/app/getting-started/deploying

## Known limitations

- Article code blocks use monospace styling without syntax colouring (keeps dependencies minimal).
- Articles live in TypeScript data rather than Markdown files.
