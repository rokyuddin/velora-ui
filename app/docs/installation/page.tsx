import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Installation Guide: Get Started with Velora UI</h1>
        <p className="text-xl text-muted-foreground">
          A step-by-step guide to setting up Velora UI in your Next.js project.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <p>
          Welcome to the Velora UI installation guide! This document will walk you through the process of adding Velora
          UI to your Next.js application. Velora UI is built on top of Tailwind CSS and uses Shadcn/ui components,
          providing a highly customizable and accessible foundation for your projects.
        </p>

        <h2 className="text-3xl font-semibold">Prerequisites</h2>
        <p>
          Before you begin, ensure you have Node.js (v18.x or higher) and npm/yarn/pnpm installed on your system. This
          guide assumes you are starting with a Next.js project. If you don't have one, you can create a new one:
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Create a new Next.js project</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>npx create-next-app@latest my-velora-app --typescript --tailwind --eslint</code>
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow the prompts, choosing TypeScript, Tailwind CSS, and ESLint.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold">Step 1: Install Velora UI</h2>
        <p>
          Velora UI components are designed to be easily integrated into your project. You can install the core library
          using your preferred package manager:
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Install with npm</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>npm install @velora/ui</code>
            </pre>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Install with yarn</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>yarn add @velora/ui</code>
            </pre>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Install with pnpm</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>pnpm add @velora/ui</code>
            </pre>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold">Step 2: Configure Tailwind CSS</h2>
        <p>
          Velora UI components are styled with Tailwind CSS. If you created your Next.js project with Tailwind, you'll
          already have a `tailwind.config.js` file. You need to ensure that Tailwind can scan the Velora UI components
          for classes.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Update `tailwind.config.js`</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-muted-foreground">
              Add `@velora/ui` to your `content` array in `tailwind.config.js`:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    // Add Velora UI to content
    "./node_modules/@velora/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}`}</code>
            </pre>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold">Step 3: Add Global CSS</h2>
        <p>
          Velora UI relies on a global CSS file for base styles and CSS variables. You should import this into your main
          `app/layout.tsx` or `app/globals.css` file.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Import `globals.css`</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-muted-foreground">
              Ensure your `app/globals.css` (or equivalent) includes the Tailwind directives:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add any custom global styles here */`}</code>
            </pre>
            <p className="mt-4 mb-2 text-sm text-muted-foreground">
              Then, import `app/globals.css` into your `app/layout.tsx`:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import './globals.css'
// ...
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`}</code>
            </pre>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold">Step 4: Basic Usage</h2>
        <p>
          You're now ready to use Velora UI components! Here's a simple example of how to import and use a `Button`
          component.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Using a Velora UI component</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import { Button } from '@velora/ui'

export default function MyPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button variant="default" size="lg">
        Click Me!
      </Button>
    </div>
  )
}`}</code>
            </pre>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold">Next Steps</h2>
        <p>
          Congratulations! You've successfully installed Velora UI. Now you can explore the{" "}
          <Link href="/docs/components/button" className="text-blue-600 hover:underline dark:text-blue-400">
            component documentation
          </Link>{" "}
          to see all available components and their props. Don't forget to check out the{" "}
          <Link href="/docs/theming" className="text-blue-600 hover:underline dark:text-blue-400">
            theming guide
          </Link>{" "}
          to customize Velora UI to match your brand!
        </p>
      </div>

      <div className="flex justify-end">
        <Link href="/docs/theming">
          <Button variant="outline">
            Next: Theming Guide <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
