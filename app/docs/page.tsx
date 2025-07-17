import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Palette, Zap, Shield } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Velora UI Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Explore our comprehensive guides and component references to build amazing user interfaces.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Quick Start
            </CardTitle>
            <CardDescription>Get up and running with Velora UI in minutes</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/docs/installation">
              <Button variant="outline" className="w-full bg-transparent">
                Installation Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Components
            </CardTitle>
            <CardDescription>Explore our collection of beautiful components</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/docs/components/button">
              <Button variant="outline" className="w-full bg-transparent">
                Browse Components <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Accessibility
            </CardTitle>
            <CardDescription>Built with accessibility and best practices in mind</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/docs/accessibility">
              <Button variant="outline" className="w-full bg-transparent">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">How to Navigate the Docs</h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            Use the sidebar on the left to navigate through the documentation sections. You'll find guides on getting
            started, detailed component references, and best practices.
          </p>
          <p>
            To quickly find what you're looking for, use the **search bar at the top of the sidebar**. It will filter
            the navigation links in real-time as you type.
          </p>
          <p>If you have any questions or feedback, feel free to reach out to our community on GitHub or Discord.</p>
        </div>
      </div>
    </div>
  )
}
