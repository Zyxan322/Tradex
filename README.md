# Tradex Auditing of Accounts LLC

Website built with TanStack Start, React, TypeScript, and Tailwind CSS.

## Local development

Install [Bun](https://bun.sh/), then run:

```sh
bun install --frozen-lockfile
bun run dev
```

## Checks and production build

```sh
bun run lint
bun test
bun run build
```

The Vercel deployment uses the Nitro Vercel preset and the Build Output API
directory configured in `vercel.json`.
