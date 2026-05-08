# EverNode Admin

A local-only content editor for the EverNode company profile site.
Runs on `127.0.0.1` only. Never deploys with the public site.

## Setup (once)

```sh
npm run admin:setup
```

You'll be prompted for a password (minimum 12 characters). It's stored in
`.env.admin` at the repo root, which is gitignored.

## Run

```sh
npm run admin
```

Open http://localhost:5174 in your browser, sign in, and edit content.

- **Save** writes your edits to `src/data/content.en.json` /
  `content.id.json`, and any uploaded images to `public/uploads/<section>/`.
  If `npm run dev` is running, Vite hot-reloads instantly.
- **Publish…** stages the two content files plus any new/changed files
  under `public/uploads/`, commits, pulls --rebase, and pushes to `main` —
  which triggers the existing GitHub Pages workflow.

## Security

- Server binds to `127.0.0.1` only; rejects requests from other addresses
  and rejects `Host` headers other than `127.0.0.1:5174` / `localhost:5174`.
- Password hashed with sha256 and compared via `crypto.timingSafeEqual`.
- Per-IP exponential backoff on failed logins; 10 failures locks for 15 min.
- Session token (32 random bytes, hex) lives only in server memory; killing
  the server invalidates it. UI stores it in `sessionStorage` (cleared on tab close).

## Configuration

`.env.admin` keys (see `admin/.env.example`):

- `ADMIN_PASSWORD` — required, min 12 chars
- `ADMIN_PORT` — default `5174`
- `ADMIN_GIT_BRANCH` — default `main`
- `ADMIN_GIT_REMOTE` — default `origin`
- `ADMIN_GIT_SIGN=1` — keep gpgsign enabled (default disables it)

## Files this admin will touch

The publish flow only stages:

- `src/data/content.en.json`
- `src/data/content.id.json`
- anything under `public/uploads/` (images uploaded via the editor)

If the working tree has any other dirty file, publish aborts with a
preflight error and tells you which files. Resolve those manually first
(commit, stash, or revert).

## Build isolation

The admin code lives entirely under `admin/` and is not imported anywhere
in `src/` or `index.html`, so it is never bundled into `dist/`. Verify:

```sh
npm run build
grep -r "ADMIN_PASSWORD\|admin/server\|/api/login" dist/ || echo clean
grep -r "admin/" dist/ || echo clean
```
