import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Features() {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything You Need</h2>
          <p className="text-xl text-muted-foreground">
            A comprehensive set of components and utilities to build any interface.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle>Component Showcase</CardTitle>
                <Badge variant="secondary">Live Demo</Badge>
              </div>
              <CardDescription>Interactive examples of our components in action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button size="sm" variant="secondary">
                  Secondary
                </Button>
                <Button size="sm" variant="outline">
                  Outline
                </Button>
                <Button size="sm" variant="ghost">
                  Ghost
                </Button>
              </div>
              <div className="p-4 border rounded-lg bg-background">
                <h4 className="font-semibold mb-2">Card Component</h4>
                <p className="text-sm text-muted-foreground">
                  This is an example of our Card component with proper spacing and typography.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dark Mode Support</CardTitle>
              <CardDescription>Seamless dark mode with system preference detection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm font-medium">Theme</span>
                  <Badge>Auto</Badge>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 rounded border bg-background flex items-center justify-center text-xs">
                    Light Mode
                  </div>
                  <div className="h-16 rounded border bg-slate-900 text-white flex items-center justify-center text-xs">
                    Dark Mode
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
