complete-next-app is an opinionated [Next.js](https://nextjs.org) project with boilerplate code included

## Tech Stack

- [Next.js](https://nextjs.org)
- [Typescript](https://www.typescriptlang.org)
- [Bun Package Manager](https://bun.sh/package-manager)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Biome.js](http://biomejs.dev)
- [t3-env](https://github.com/t3-oss/t3-env)
- [Auth.js](https://authjs.dev)



## Getting Started

Install all dependencies

```bash
bun i
```

Create .env file

```bash
cp .env.local.example .env.local
```

Generate a secret for Auth.js

```bash
bunx auth secret
```

Start the development server

```bash
bun dev
```

Format and lint the files

```bash
bun lint
```
