import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// This function generates static paths for pre-rendering
export async function generateStaticParams() {
  const posts = [
    { slug: "velora-ui-v1-release" },
    { slug: "getting-started-with-theming" },
    { slug: "why-we-built-velora-ui" },
    { slug: "future-of-velora-ui" },
    { slug: "component-spotlight-button" },
  ]
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Placeholder content based on slug
  const blogPostsData = {
    "velora-ui-v1-release": {
      title: "Velora UI v1.0 Release Notes",
      date: "July 15, 2025",
      category: "Release",
      content: `
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
      `,
    },
    "getting-started-with-theming": {
      title: "Getting Started with Velora UI Theming",
      date: "July 10, 2025",
      category: "Guide",
      content: `
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
      `,
    },
    "why-we-built-velora-ui": {
      title: "Why We Built Velora UI",
      date: "July 01, 2025",
      category: "Philosophy",
      content: `
        <p>The idea for Velora UI stemmed from a common challenge faced by many developers: building beautiful, accessible, and performant user interfaces quickly without sacrificing customization.</p>
        <p class="mt-4">Existing UI libraries often come with heavy dependencies, opinionated designs that are hard to override, or lack robust accessibility features. We wanted to create a library that was:</p>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Lightweight:</strong> Minimal dependencies and optimized for performance.</li>
          <li><strong>Unopinionated:</strong> Highly customizable through Tailwind CSS and CSS variables, allowing developers full control over the design.</li>
          <li><strong>Accessible by Design:</strong> Built with accessibility best practices from the ground up, ensuring components are usable by everyone.</li>
          <li><strong>Developer-Friendly:</strong> Intuitive API, clear documentation, and easy integration into Next.js projects.</li>
        </ul>
        <p class="mt-4">Velora UI is our answer to these challenges. We believe it empowers developers to build stunning web applications with confidence and efficiency. We are committed to continuously improving and expanding the library based on community feedback.</p>
      `,
    },
    "future-of-velora-ui": {
      title: "The Future of Velora UI: Roadmap & Vision",
      date: "June 25, 2025",
      category: "Roadmap",
      content: `
        <p>We're constantly working to make Velora UI even better. Here's a glimpse into our exciting roadmap and vision for the future:</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Upcoming Features</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>New Component Categories:</strong> Expanding into data visualization, complex forms, and more.</li>
          <li><strong>Enhanced Documentation:</strong> More examples, interactive playgrounds, and video tutorials.</li>
          <li><strong>Community Contributions:</strong> Streamlining the process for community members to contribute new components and features.</li>
        </ul>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Long-Term Vision</h2>
        <p>Our long-term goal is to make Velora UI the go-to choice for developers building modern, accessible, and highly customizable React applications. We envision a vibrant community contributing to its growth and evolution.</p>
        <p class="mt-4">Stay tuned for more updates!</p>
      `,
    },
    "component-spotlight-button": {
      title: "Component Spotlight: The Versatile Button",
      date: "June 20, 2025",
      category: "Component",
      content: `
        <p>The humble button is often overlooked, but it's a fundamental building block of any user interface. In Velora UI, our Button component is designed for versatility, accessibility, and ease of use.</p>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Variants and Sizes</h2>
        <p>Velora UI's Button comes with several variants (e.g., \`default\`, \`secondary\`, \`outline\`, \`ghost\`, \`link\`) and sizes (\`default\`, \`sm\`, \`lg\`, \`icon\`) to fit various design needs.</p>
        <pre><code class="language-tsx">import { Button } from "@/components/ui/button";

function MyButtons() {
  return (
    &lt;div className="flex gap-2"&gt;
      &lt;Button&gt;Default&lt;/Button&gt;
      &lt;Button variant="secondary"&gt;Secondary&lt;/Button&gt;
      &lt;Button variant="outline"&gt;Outline&lt;/Button&gt;
      &lt;Button size="sm"&gt;Small Button&lt;/Button&gt;
    &lt;/div&gt;
  );
}
</code></pre>
        <h2 class="text-2xl font-semibold mt-6 mb-3">Accessibility</h2>
        <p>We ensure our Button component adheres to accessibility best practices, including proper ARIA attributes and keyboard navigation support.</p>
        <p class="mt-4">Explore the Button component in our <a href="/docs/components/button" class="text-primary underline">component documentation</a> for more details.</p>
      `,
    },
  }

  const post = blogPostsData[slug as keyof typeof blogPostsData] || {
    title: "Blog Post Not Found",
    date: "",
    category: "Error",
    content: "<p>The blog post you are looking for does not exist.</p>",
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/blog" className="flex items-center text-primary hover:underline">
            <ChevronLeft className="h-4 w-4 mr-2" /> Back to Blog
          </Link>
        </Button>
      </div>
      <Card className="shadow-lg">
        <CardHeader>
          <Badge variant="secondary" className="w-fit mb-2">
            {post.category}
          </Badge>
          <CardTitle className="text-4xl font-bold leading-tight">{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">{post.date}</p>
        </CardHeader>
        <Separator className="my-6" />
        <CardContent>
          <div
            className="prose dark:prose-invert max-w-none text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
