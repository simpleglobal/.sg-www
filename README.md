# .simplemotion.new

Public website for SimpleGlobal at https://new.simplemotion.global — Engineered for Architecture, Entertainment and Industry.

## Technology

- **Generator:** [Hugo](https://gohugo.io/) (static site generator)
- **Hosting:** GitHub Pages via GitHub Actions
- **Theme:** Custom `simplemotion` theme (dark minimalist)

## Local Development

```bash
# Install Hugo (macOS arm64)
curl -sL https://github.com/gohugoio/hugo/releases/download/v0.145.0/hugo_extended_0.145.0_darwin-universal.tar.gz | tar -xz hugo

# Run local dev server
hugo server --buildDrafts
```

Open http://localhost:1313 to preview.

## Editing Content

Content lives in `content/` as Markdown files. Edit any `_index.md` file and push to `main` — the site rebuilds and deploys automatically.

```
content/
├── _index.md              # Homepage
├── architecture/_index.md # Architecture landing page
├── entertainment/_index.md # Entertainment landing page
├── industry/_index.md     # Industry landing page
├── products/_index.md     # Products + download links
├── about/_index.md        # Company information
└── contact/_index.md      # Contact details
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds the site with Hugo and deploys to GitHub Pages.

## ADR

Technology decisions for this website are documented in [9001-0005-00-ADR-website-technology-stack.md](https://github.com/SimpleGlobal-9100-0000-00-ADR/9001-0001-00-Governance/blob/main/docs/decisions/9001-0005-00-ADR-website-technology-stack.md).

## License

MIT — SimpleGlobal.Global Pty Ltd.
