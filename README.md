# Portfolio Frontend

Personal introduction website for Abimanyu Bhamakerti — built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 4** (dev server & bundler)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **React Icons**

## Requirements

- Node.js >= 18 (or Node 16 with Vite 4)
- npm >= 8

## Getting Started

```bash
npm install
npm run dev
```

Runs on **http://localhost:5173** by default.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |

## Project Structure

```
src/
├── components/
│   ├── CustomCursor.tsx   # Magnetic cursor with spring physics
│   ├── Navbar.tsx         # Sticky nav with active section highlight
│   ├── Hero.tsx           # Animated hero with typewriter & terminal card
│   ├── About.tsx          # Summary, stats, contact info
│   ├── Skills.tsx         # Categorized skills with animated bars
│   ├── Experience.tsx     # Animated vertical timeline
│   ├── Portfolio.tsx      # 3D tilt project cards
│   ├── Education.tsx      # Degree cards + languages
│   ├── Contact.tsx        # Clickable contact cards + CTA
│   └── Footer.tsx
├── data/
│   └── portfolio.ts       # All content (CV data, projects, skills)
└── index.css              # Global styles, animations, CSS variables
public/
└── cv/
    └── CV_Abimanyu_Bhamakerti_2026.pdf
```

## Updating Content

All site content is centralized in [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that file to:

- Update personal info, email, phone, location
- Add or remove portfolio projects
- Add new skills or change proficiency levels
- Update work experience entries

## Production Build

```bash
npm run build
```

Output goes to `dist/`. Copy it to the backend's static serving path or deploy to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

## API Proxy

In development, requests to `/api/*` are proxied to the Go backend at `http://localhost:8080`. Configured in `vite.config.ts`.
