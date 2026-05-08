# EverNode — Company Profile

Marketing site for EverNode (a brand of PT Djaya Abadi Selamanya). Static
React + Vite app with a local-only admin panel for non-developers to edit
copy, upload images, and publish straight to GitHub Pages.

- Stack: React 18, Vite 5, vanilla JS admin (no framework).
- Deploys: GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.
- Languages: EN / ID via `src/i18n/` and `src/data/content.{en,id}.json`.

## Quick start

```sh
npm install
npm run dev       # site:  http://localhost:5173
npm run admin     # admin: http://localhost:5174  (separate terminal)
```

First time only:

```sh
npm run admin:setup   # creates .env.admin with an admin password (min 12 chars)
```

## Project structure

```
src/
  App.jsx                      router → Home or WorkDetail
  router/HashRouter.jsx        tiny hash router (no dependency)
  components/
    sections/                  Home page sections (Nav, Hero, Work, Team, ...)
    pages/WorkDetail.jsx       /#/work/:id case-study page
    primitives/                shared visual primitives
  data/content.en.json         EN content (single source of truth)
  data/content.id.json         ID content
  i18n/                        language context

public/
  uploads/                     admin-managed image uploads (committed to git)

admin/                         local-only content editor (see admin/README.md)
.github/workflows/deploy.yml   GitHub Pages deploy on push to main
```

## Routing

Hash-based, no dependency. Two routes:

- `/` (or `#anchor`) — single-page Home with anchor scrolling
- `/#/work/:id` — case-study detail page for the work item with that ID

Defined in `src/router/HashRouter.jsx`. Bare anchors like `#work` still scroll
to the corresponding section.

## Editing content (the admin)

Run `npm run admin` (and `npm run dev` in another terminal so you can preview).

In the admin you can:

- Edit any text in either language (EN / ID toggle in the topbar).
- Upload images and assign them to:
  - **Work**: card thumbnail, detail-page hero, gallery, inline body block
    images.
  - **Team**: member headshots.
  - **Services**: per-practice icons.
  - **Clients**: featured-client logos.
- For Work, expand a project row to get a **side-by-side preview** of the
  detail page (`localhost:5173/#/work/:id`). The preview reloads after Save.
- **Publish** stages all changed JSON + uploads, commits, rebases, and pushes
  to `origin/main`. The GitHub Pages workflow then redeploys automatically.

Image uploads are stored under `public/uploads/<section>/`, validated for type
and size (max 3 MB), and committed to git as part of the publish flow.

See `admin/README.md` for security model, configuration, and details.

## Adding a new work case study

1. Open the admin, go to **Work**, click **+ Add row**.
2. Fill in **ID** (used in `/#/work/:id`), title, year, client, tag, short
   description.
3. Upload a **thumbnail** (used on the home grid). If left empty, the original
   procedural dashboard mock is used as a fallback.
4. Optional but recommended for the detail page:
   - **Hero image** (16:9, big visual at the top)
   - **Summary** (longer paragraph)
   - **Outcomes** (bullet list of metrics)
   - **Stack** (tech tags)
   - **Body blocks** (heading + paragraph + optional inline image, repeatable)
   - **Gallery** (additional screenshots)
5. Repeat the same edits in the ID locale (use the language toggle).
6. Save. Preview the detail page in the admin's iframe.
7. Click **Publish…** to commit and push.

## Build & deploy

```sh
npm run build       # outputs to dist/
npm run preview     # serves dist/ at http://localhost:4173
```

GitHub Pages auto-deploys from the workflow on every push to `main`. The
`public/CNAME` file pins the production domain.

## Notes

- The admin server is local-only (`127.0.0.1` bind, host validation,
  password + session token). It is never bundled into the public site.
- `.env.admin` (with the admin password) is gitignored.
- Image references in `content.{en,id}.json` use absolute paths like
  `/uploads/work/foo.webp`, which Vite serves from `public/`.
