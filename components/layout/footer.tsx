import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-background/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">Velora UI</span>
            </div>
            <p className="text-sm text-muted-foreground">A modern React component library built with Tailwind CSS.</p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/velora-ui/velora" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/veloraui" target="_blank">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://discord.gg/veloraui" target="_blank">
                  <Discord className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Documentation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/docs/installation" className="text-muted-foreground hover:text-foreground">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/docs/theming" className="text-muted-foreground hover:text-foreground">
                  Theming
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Components</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs/components/button" className="text-muted-foreground hover:text-foreground">
                  Button
                </Link>
              </li>
              <li>
                <Link href="/docs/components/input" className="text-muted-foreground hover:text-foreground">
                  Input
                </Link>
              </li>
              <li>
                <Link href="/docs/components/card" className="text-muted-foreground hover:text-foreground">
                  Card
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/velora-ui/velora"
                  className="text-muted-foreground hover:text-foreground"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/veloraui" className="text-muted-foreground hover:text-foreground">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/docs/contributing" className="text-muted-foreground hover:text-foreground">
                  Contributing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Velora UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
