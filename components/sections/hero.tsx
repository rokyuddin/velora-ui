import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Build Beautiful UIs with{" "}
              <span className="text-primary">Velora</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A modern, accessible, and customizable React component library
              built with Tailwind CSS. Ship faster with pre-built components
              that look great out of the box.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button startIcon={<ArrowRight />} size="lg" asChild>
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button startIcon={<Github />} size="lg" variant="outline" asChild>
              <Link href="https://github.com/velora-ui/velora" target="_blank">
                View on GitHub
              </Link>
            </Button>
          </div>

          <div className="pt-8">
            <div className="relative rounded-lg border bg-background/50 backdrop-blur p-8">
              <pre className="text-left overflow-x-auto">
                <code className="text-sm">
                  {`import { Button } from '@velora/ui'

function App() {
  return <Button>Hello Velora!</Button>
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
