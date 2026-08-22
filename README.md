# Hono + React Minimal Starter

A minimal full-stack starter combining a Hono API server with a React frontend, wired together via Hono's type-safe RPC client.

## Tech stack

- [Bun](https://bun.sh) — runtime, package manager, and bundler
- [Hono](https://hono.dev) — API server and type-safe RPC
- [React](https://react.dev) — frontend UI

This project aims to be the minimal setup for combining Hono and React, so Bun's native bundling and dev server are used to serve both from a single process instead of adding a separate frontend build tool like Vite.

## Install dependencies

```sh
bun install
```

## Start in development mode

```sh
bun run dev  # Hono API server + React frontend (http://localhost:3000)
```

Bun bundles and hot-reloads the frontend natively; no separate dev server is needed.

## Production build

```sh
bun run build  # Bundle the server and frontend (output to dist/)
bun run start  # Serve the built dist/ via Hono
```

After building, open http://localhost:3000 in your browser.

Alternatively, compile a standalone executable that embeds the Bun runtime:

```sh
bun run compile   # Output a standalone binary (dist/server)
./dist/server      # Run it directly, no `bun` install required
```
