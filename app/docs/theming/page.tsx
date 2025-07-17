import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Theming Guide: Customizing Velora UI</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to effortlessly customize Velora UI to match your brand's aesthetic.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <p>
          Velora UI is built with customization in mind, leveraging the power of Tailwind CSS and CSS variables. This
          approach gives you granular control over the look and feel of your components without ejecting from the
          library.
        </p>

        <h2 className="text-3xl font-semibold">Understanding CSS Variables</h2>
        <p>
          The primary way to customize Velora UI's colors and other design tokens is through CSS variables defined in
          your `app/globals.css` file. These variables are used by Tailwind CSS to generate the utility classes that
          style the components.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Default CSS Variables in `app/globals.css`</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%; /* This is your primary color */
    --primary-foreground: 210 40% 98%;
    /* ... other variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%; /* Primary color for dark mode */
    --primary-foreground: 222.2 84% 4.9%;
    /* ... other variables */
  }
}
/* ... */`}</code>
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              Each variable represents a specific design token (e.g., `--primary` for the main brand color). The values
              are HSL (Hue, Saturation, Lightness) color values.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold">Modifying Existing Colors</h2>
        <p>
          To change the default colors, simply update the HSL values for the corresponding CSS variables in your
          `app/globals.css`. For example, to change the primary color:
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Example: Changing Primary Color</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-muted-foreground">Let's change the primary color to a shade of green:</p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`@layer base {
  :root {
    --primary: 142.1 76.2% 36.3%; /* A nice green */
    --primary-foreground: 355.7 100% 97.3%; /* Adjust foreground for contrast */
    /* ... */
  }

  .dark {
    --primary: 142.1 70.2% 45.3%; /* Darker green for dark mode */
    --primary-foreground: 355.7 100% 97.3%;
    /* ... */
  }
}`}</code>
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              After saving, all components using `bg-primary`, `text-primary`, etc., will automatically reflect the new
              color.
            </p>
          </CardContent>
        </Card>

        <h2 className="3xl font-semibold">Adding New Colors</h2>
        <p>You can also extend your Tailwind CSS configuration to add entirely new colors or shades.</p>
        <Card>
          <CardHeader>
            <CardTitle>Extend `tailwind.config.js`</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-muted-foreground">
              First, define your new CSS variables in `app/globals.css`:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`@layer base {
  :root {
    /* ... existing variables */
    --my-custom-color: 200 50% 50%;
  }
  .dark {
    /* ... existing variables */
    --my-custom-color: 200 50% 70%;
  }
}`}</code>
            </pre>
            <p className="mt-4 mb-2 text-sm text-muted-foreground">
              Then, extend the `colors` object in your `tailwind.config.js`:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        // ... existing colors
        'my-custom-color': 'hsl(var(--my-custom-color))',
      },
    },
  },
  // ...
}`}</code>
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              Now you can use `bg-my-custom-color`, `text-my-custom-color`, etc., in your components.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold">Dark Mode Implementation</h2>
        <p>
          Velora UI comes with built-in dark mode support, leveraging `next-themes` and the CSS variables approach. The
          `ThemeProvider` component handles the theme switching.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Using `ThemeProvider` in `app/layout.tsx`</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-muted-foreground">
              Ensure your `app/layout.tsx` wraps your application with `ThemeProvider`:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}</code>
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              The `attribute="class"` prop tells `next-themes` to apply the `dark` class to the `html` element when dark
              mode is active, which then triggers the `--dark` CSS variables.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold">Component-Specific Customization</h2>
        <p>
          For more granular control, you can always override styles directly on components using Tailwind CSS utility
          classes.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Example: Overriding Button Styles</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`import { Button } from '@velora/ui'

export default function CustomButton() {
  return (
    <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6 py-3">
      Custom Purple Button
    </Button>
  )
}`}</code>
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              Tailwind's utility-first approach makes it easy to apply custom styles directly to any component.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold">Conclusion</h2>
        <p>
          Velora UI's theming system provides a flexible and powerful way to ensure your application's UI perfectly
          matches your brand. By understanding and utilizing CSS variables and Tailwind CSS, you can create unique and
          consistent designs with ease.
        </p>
      </div>

      <div className="flex justify-between">
        <Link href="/docs/installation">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous: Installation Guide
          </Button>
        </Link>
        <Link href="/docs/components/button">
          <Button variant="outline">
            Next: Button Component <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
