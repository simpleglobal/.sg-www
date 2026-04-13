# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is the **public website** for SimpleGlobal, hosted via GitHub Pages at https://new.simplemotion.global. It is a static site built with Hugo using a custom dark minimalist theme.

**No build system beyond Hugo.** Content is Markdown. Pushing to `main` triggers GitHub Actions to build and deploy.

## Common Operations

```bash
# Local development
hugo server --buildDrafts

# Build for production
hugo --minify

# Edit content
# All pages are in content/ as _index.md files — edit Markdown, push to main
```

## Architecture

- **Hugo** static site generator with custom `simplemotion` theme in `themes/simplemotion/`
- **GitHub Actions** workflow in `.github/workflows/deploy.yml` builds and deploys on push to main
- **Brand assets** in `static/img/` — SVG logos and favicons from the `.github` profile assets
- **CSS** in `themes/simplemotion/static/css/main.css` — CSS custom properties, fluid typography, dark palette
- **No JavaScript frameworks** — only vanilla JS for mobile nav toggle

## Key Rules

- **Do not include "Co-Authored-By" trailers in git commits.**
- All intellectual property is assigned to SimpleGlobal.Global Pty Ltd per `ASSIGN.md`.
- Licensed under MIT (`LICENSE.md`).
