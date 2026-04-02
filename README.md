# Sagar — Portfolio (Simple Mode + Space Mode)

Built from scratch using React, Three.js & custom shaders.

A premium dual-experience portfolio:
- **Simple Mode**: recruiter-friendly single-page React site.
- **Space Mode**: a cinematic Three.js solar-system where each planet maps to a project.

## Live

- Main site: https://portfolio-two-sooty-v03zrt87zk.vercel.app
- Space Mode (direct): https://portfolio-two-sooty-v03zrt87zk.vercel.app/space.html

## Features

- Mode gate (Simple vs Space).
- Space Mode: clickable planets, rocket travel animation, Project HUD, project modal, focus mode.
- Mobile support for Space Mode planet taps.
- "Next Project" button (cycles through the 5 project planets).

## Tech Stack

- React + Vite (Simple Mode)
- Three.js (Space Mode in `public/space.html`)
- Tailwind (build pipeline) + custom CSS
- Deployed on Vercel

## Local Development

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

## Deployment (Vercel)

This repo is configured for SPA routing on Vercel via `vercel.json` (serves static files first, then falls back to `index.html`).

Recommended: connect the GitHub repo to Vercel for automatic deploys on every push to `main`.

## Project Structure

- `src/` — Simple Mode (React)
- `public/space.html` — Space Mode (standalone Three.js scene loaded via iframe)
- `vercel.json` — Vercel routing for SPA + static assets

