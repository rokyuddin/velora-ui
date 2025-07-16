import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "velora-ui-v1-release",
      title: "Velora UI v1.0 Release Notes",
      date: "July 15, 2025",
      description:
        "Exciting news! We're thrilled to announce the official release of Velora UI v1.0, packed with new components and improvements.",
      category: "Release",
      featured: true,
    },
    {
      slug: "getting-started-with-theming",
      title: "Getting Started with Velora UI Theming",
      date: "July 10, 2025",
      description: "Dive deep into customizing your Velora UI components with our comprehensive theming guide.",
      category: "Guide",
      featured: false,
    },
    {
      slug: "why-we-built-velora-ui",
      title: "Why We Built Velora UI",
      date: "July 01, 2025",
      description: "Learn about the philosophy and motivations behind creating Velora UI, and what makes it unique.",
      category: "Philosophy",
      featured: false,
    },
    {
      slug: "future-of-velora-ui",
      title: "The Future of Velora UI: Roadmap & Vision",
      date: "June 25, 2025",
      description: "A sneak peek into what's next for Velora UI, including upcoming features and our long-term vision.",
      category: "Roadmap",
      featured: false,
    },
    {
      slug: "component-spotlight-button",
      title: "Component Spotlight: The Versatile Button",
      date: "June 20, 2025",
      description: "A deep dive into the design and usage of Velora UI's Button component, from basic to advanced.",
      category: "Component",
      featured: false,
    },
  ]

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0]
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="container py-12">
      {/* Blog Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-primary-foreground bg-gradient-to-r from-primary to-purple-500 inline-block text-transparent bg-clip-text">
          Velora UI Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay up-to-date with the latest news, updates, and insights from the Velora UI team.
        </p>
      </section>

      {/* Featured Post Section */}
      {featuredPost && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Post</h2>
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <Badge variant="secondary" className="w-fit mb-2">
                  {featuredPost.category}
                </Badge>
                <CardTitle className="text-4xl font-bold text-primary">{featuredPost.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">{featuredPost.date}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-base text-foreground">{featuredPost.description}</p>
                <Button variant="link" className="mt-4 px-0 text-primary hover:underline">
                  Read More &rarr;
                </Button>
              </CardContent>
            </Card>
          </Link>
        </section>
      )}

      <Separator className="my-12" />

      {/* Recent Posts Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="h-full flex flex-col group hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{post.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
