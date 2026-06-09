# learnvc.org

A companion site for W3C Verifiable Credentials and
[VCALM](https://www.w3.org/TR/vcalm/). Vertical-first entry points
("would this work for our business?") that funnel into role-scoped quick
starts. Built with [Eleventy](https://www.11ty.dev/).

## Quick start

```bash
npm install
npm start          # dev server with live reload
npm run build      # static build into _site/
```

## Structure

```
src/
  _data/site.js          Company info + site metadata (single source of truth)
  _includes/layouts/     Base layout (SEO meta, OG tags, canonical)
  _includes/partials/    Header, footer
  index.njk              Home (lists verticals from a collection)
  company/               About, Contact
  verticals/
    education/           Education vertical (Layers 1–4 of the IA)
  llms.txt.njk           Auto-generated llms.txt (see below)
  sitemap.xml.njk        Auto-generated sitemap
  robots.njk             robots.txt
```

## llms.txt and sitemap.xml are auto-generated

Both are produced at build time from the `discoverable` and `verticals`
collections. **They regenerate automatically whenever content is added or
changed** — never edit them by hand.

To add a page to discovery: just create it. To exclude one, set
`discoverable: false` in its front matter.

## Adding a vertical

1. Create `src/verticals/<name>/index.njk` with `title`, `shortName`,
   `summary`, `description`, `order`, `chooserIcon`, and
   `permalink: /<name>/` front matter. `shortName` is the home-page tile
   label; `chooserIcon` names an icon in `src/_data/flowIcons.js` for the
   tile (add a new icon there if needed).
2. Add `<name>.json` in that folder setting `layout` and `tags` (copy
   `education/education.json`).
3. Clone the Layer 2–4 pages, swapping the anchor scenario.

The home page, sitemap, and `llms.txt` pick it up automatically.

## Inline review comments (Hypothesis)

The site can load [Hypothesis](https://web.hypothes.is) for inline,
text-anchored review comments. It is **off by default** so production ships no
third-party script. Enable it only on a review build:

```bash
HYPOTHESIS_COMMENTS=1 HYPOTHESIS_GROUP=<group-id> npm run build
```

- `HYPOTHESIS_COMMENTS=1` injects the Hypothesis embed.
- `HYPOTHESIS_GROUP` scopes the client to a Hypothesis **private group** so only
  logged-in group members see and post comments; the public sees nothing. Omit
  it to use public Hypothesis annotations (not recommended for review).

Reviewers join the private group, log in to Hypothesis, highlight text, and
comment.

**Where it's enabled:** PR previews on Cloudflare Pages only. Set the
`HYPOTHESIS_GROUP` repository variable to your private group id; the preview
workflow then builds each PR preview with comments on, scoped to that group.
Production (GitHub Pages) never loads Hypothesis. Comments stay off until the
variable is set. To also hide the Hypothesis UI from the public, keep the
enabled build behind an access gate (e.g. Cloudflare Access) rather than the
public site.

## Deployment

Pushes to `main` deploy to GitHub Pages via
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). Set the
`SITE_URL` repo variable for a custom domain (e.g. `https://learnvc.org`).
Production builds leave Hypothesis comments off (see above).
