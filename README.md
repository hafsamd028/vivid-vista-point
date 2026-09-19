# BhuRakshak Frontend

A frontend-only React interface for digitizing and validating land records. It includes mock authentication, dashboard analytics, document upload, OCR review, record search, supervisor review, audit history, user management, and profile preferences. All data and operations are simulated in the browser; no backend or database is included.

## Install

```bash
bun install
```

You can also use `npm install`.

## Start development

```bash
bun run dev
```

Open the local URL printed by Vite.

## Build

```bash
bun run build
```

## Environment variables

Copy `.env.example` to `.env` when connecting a future API. The current mock frontend needs no environment variables.

## Main folders

- `src/components/` — reusable interface components
- `src/pages/` — complete screens
- `src/routes/` — URL routing and page metadata
- `src/data/` — realistic mock records, users, and dashboard data
- `src/services/` — mock asynchronous services ready to replace with API calls
- `src/types/` — shared TypeScript domain types
- `src/assets/` — generated sample scan and district coverage artwork

## Demo notes

- The sign-in screen accepts any valid email and password with six or more characters.
- Upload, extraction, approval, rejection, invitations, and profile saves are frontend simulations.
- Uploaded files never leave the browser.
