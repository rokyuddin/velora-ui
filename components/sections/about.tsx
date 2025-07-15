import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Zap, Shield, Code } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Carefully crafted components with modern design principles and attention to detail.",
    },
    {
      icon: Zap,
      title: "Developer Experience",
      description: "Built with TypeScript, excellent IntelliSense, and comprehensive documentation.",
    },
    {
      icon: Shield,
      title: "Accessibility First",
      description: "WCAG compliant components with proper ARIA attributes and keyboard navigation.",
    },
    {
      icon: Code,
      title: "Customizable",
      description: "Easily customize components with CSS variables and Tailwind CSS utilities.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Choose Velora UI?</h2>
          <p className="text-xl text-muted-foreground">
            Built for modern React applications with developer experience and accessibility in mind.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
