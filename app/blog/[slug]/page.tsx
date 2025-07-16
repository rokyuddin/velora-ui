import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// This function generates static paths for pre-rendering
export async function generateStaticParams() {
  const posts = [
    { slug: "velora-ui-v1-release" },
    { slug: "getting-started-with-theming" },
    { slug: "why-we-built-velora-ui" },
  ]
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Placeholder content based on slug
  let title = "Blog Post Not Found"
  let date = ""
  let content = "The blog post you are looking for does not exist."

  if (slug === "velora-ui-v1-release") {
    title = "Velora UI v1.0 Release Notes"
    date = "July 15, 2025"
    content = `
      <p>We are incredibly excited to announce the official release of Velora UI v1.0! This marks a significant milestone in our journey to provide a beautiful, accessible, and customizable React component library built with Tailwind CSS.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">What's New in v1.0?</h2>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>New Components:</strong> Introducing Accordion, Carousel, and Chart components.</li>
        <li><strong>Improved Accessibility:</strong> Enhanced ARIA attributes and keyboard navigation across all components.</li>
        <li><strong>Dark Mode Support:</strong> Seamless dark mode integration for a better user experience.</li>
        <li><strong>Performance Optimizations:</strong> Faster loading times and smoother interactions.</li>
      </ul>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Getting Started</h2>
      <p>To get started with Velora UI v1.0, simply follow our <a href="/docs/installation" class="text-primary underline">installation guide</a>. For detailed information on theming and customization, check out our new <a href="/docs/theming" class="text-primary underline">theming guide</a>.</p>
      <p class="mt-4">Thank you for your continued support!</p>
    `
  } else if (slug === "getting-started-with-theming") {
    title = "Getting Started with Velora UI Theming"
    date = "July 10, 2025"
    content = `
      <p>Velora UI is designed to be highly customizable, allowing you to easily match your brand's aesthetic. Our theming system leverages CSS variables and Tailwind CSS to provide a flexible and powerful way to control the look and feel of your components.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Understanding CSS Variables</h2>
      <p>At the core of Velora UI's theming are CSS variables. These variables define colors, border radii, and other design tokens. You can override these variables in your \`globals.css\` file or directly within your Tailwind CSS configuration.</p>
      <pre><code class="language-css">/* app/globals.css */
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... other variables */
}

.dark {
  --primary: 217.2 91.2% 59.8%;
  --secondary: 217.2 32.4% 17.3%;
  /* ... other variables for dark mode */
}
</code></pre>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Tailwind CSS Integration</h2>
      <p>Velora UI components use Tailwind CSS classes that reference these CSS variables. This means you can extend or modify your \`tailwind.config.js\` to introduce new colors or adjust existing ones.</p>
      <pre><code class="language-javascript">/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... add your custom colors here
      },
    },
  },
};
</code></pre>
      <p class="mt-4">For more detailed instructions, refer to our official <a href="/docs/theming" class="text-primary underline">theming documentation</a>.</p>
    `
  } else if (slug === "why-we-built-velora-ui") {
    title = "Why We Built Velora UI"
    date = "July 01, 2025"
    content = `
      <p>The idea for Velora UI stemmed from a common challenge faced by many developers: building beautiful, accessible, and performant user interfaces quickly without sacrificing customization.</p>
      <p class="mt-4">Existing UI libraries often come with heavy dependencies, opinionated designs that are hard to override, or lack robust accessibility features. We wanted to create a library that was:</p>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Lightweight:</strong> Minimal dependencies and optimized for performance.</li>
        <li><strong>Unopinionated:</strong> Highly customizable through Tailwind CSS and CSS variables, allowing developers full control over the design.</li>
        <li><strong>Accessible by Design:</strong> Built with accessibility best practices from the ground up, ensuring components are usable by everyone.</li>
        <li><strong>Developer-Friendly:</strong> Intuitive API, clear documentation, and easy integration into Next.js projects.</li>
      </ul>
      <p class="mt-4">Velora UI is our answer to these challenges. We believe it empowers developers to build stunning web applications with confidence and efficiency. We are committed to continuously improving and expanding the library based on community feedback.</p>
    `
  }

  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{date}</p>
        </CardHeader>
        <Separator className="my-4" />
        <CardContent>
          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </CardContent>
      </Card>
    </div>
  )
}
