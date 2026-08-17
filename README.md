# easysats-site

"The EasySats Chronicle" — the EasySats hub and marketing site. A React + TypeScript + Vite + Tailwind single-page app that presents the EasySats brand and its initiatives: FreedomTech, TimeForce, and Jobs.

## What it is

A multi-page marketing site with the following routes:

| Route            | Page                                                        |
|------------------|-------------------------------------------------------------|
| `/`              | EasySats hub ("The EasySats Chronicle" landing)             |
| `/freedomtech`   | FreedomTech — a terminal-styled page for the dev brand      |
| `/timeforce`     | TimeForce — a time-based earnings/productivity brand page   |
| `/jobs`          | Jobs — an EasySats job-listing page                         |

`/theme2` and `/easysatshub` redirect to the hub (`/`). The site is fully static (no backend), styled with Tailwind and Radix UI primitives.

## Stack

- React 19 + TypeScript
- Vite 7 (build tool)
- Tailwind CSS + `class-variance-authority` / `tailwind-merge`
- React Router 7 + TanStack React Query
- lucide-react icons
- Radix UI slot primitives

## Requirements

- Node 18+ and npm (or your preferred package manager)

## Quickstart

```bash
npm install
npm run dev       # Vite dev server
```

Production build + preview:

```bash
npm run build     # tsc -b && vite build
npm run preview   # preview the built site
```

## Deployment

A GitHub Actions workflow (`.github/workflows/static.yml`) builds the site and deploys it to GitHub Pages on the `gh-pages` branch.

## Project layout

```
index.html                      # SPA entry
src/App.tsx                     # route table
src/pages/EasySatsHub.tsx       # hub landing page
src/pages/FreedomTech.tsx       # FreedomTech page
src/pages/TimeForce.tsx         # TimeForce page
src/pages/Jobs.tsx              # Jobs page
src/components/ui/button.tsx    # shared button primitive
public/                         # static assets (logos, images)
extra/                          # source imagery
```

## Branding

The repo is authored under the EasySats/OKIN brand (`package.json` `author: OKIN`). Use the assets in `public/` and `extra/` for any brand updates.
