import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "velora-ui-v1-release",
      title: "Velora UI v1.0 Release Notes",
      date: "July 15, 2025",
      description:
        "Exciting news! We're thrilled to announce the official release of Velora UI v1.0, packed with new components and improvements.",
    },
    {
      slug: "getting-started-with-theming",
      title: "Getting Started with Velora UI Theming",
      date: "July 10, 2025",
      description: "Dive deep into customizing your Velora UI components with our comprehensive theming guide.",
    },
    {
      slug: "why-we-built-velora-ui",
      title: "Why We Built Velora UI",
      date: "July 01, 2025",
      description: "Learn about the philosophy and motivations behind creating Velora UI, and what makes it unique.",
    },
  ]

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Velora UI Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{post.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
