Available as an npx script! Just run:
```
npx complete-next-app
```

# Next.js TypeScript Template

This is a template repository for building web applications with Next.js, TypeScript, and a set of powerful tools and libraries. Use this as a starting point for your Next.js projects to accelerate development and maintain a consistent codebase.

## Features

- **Next.js**: A React framework for building server-rendered applications.
- **TypeScript**: Adds static types to JavaScript to improve developer productivity and code quality.
- **Bun**: A modern and fast package manager for JavaScript and TypeScript projects.
- **Drizzle**: An Object-Relational Mapping (ORM) for working with databases.
- **trpc**: A TypeScript runtime compiler for making type-safe and efficient API calls.
- **Biome.js**: A linter and formatter for maintaining code quality and consistency.
- **React Testing Library**: A testing library for React applications to write unit tests.
- **Jest**: A testing framework for JavaScript and TypeScript applications.
- **Shadcn/ui**: A component library for building beautiful and consistent UI components.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and scalable designs.
- **Husky**: A tool to prevent bad `git commit`, `git push`, and more by using hooks.
- **Next-auth**: An authentication library for Next.js applications.

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-nextjs-project.git
    cd your-nextjs-project
    ```

2. **Install dependencies:**

    ```bash
    bun install
    ```

3. **Start the development server:**

    ```bash
    bun dev
    ```

    Your Next.js application should now be running at [http://localhost:3000](http://localhost:3000).

4. **Lint and format the code:**

    ```bash
    biome check
    ```

5. **Run tests:**

    ```bash
    npm test
    ```

6. **Configure Next-auth:**

    Set up your authentication provider and configure Next-auth according to your needs.

7. **Build and deploy:**

    Customize the `build` script in `package.json` and deploy your application to your preferred hosting platform.

## Folder Structure

- `pages/`: Next.js pages and API routes.
- `components/`: Reusable React components.
- `styles/`: Stylesheets using Tailwind CSS.
- `lib/`: Utility functions and libraries.
- `public/`: Static assets.

## Contributing

If you'd like to contribute, please fork the repository and create a pull request. Issues and feature requests are welcome!

## License

This project is licensed under the [MIT License](LICENSE).



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
