import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers who are already building beautiful
              interfaces with Velora UI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button startIcon={<ArrowRight />} size="lg" asChild>
              <Link href="/docs">Start Building</Link>
            </Button>
            <Button startIcon={<Github />} size="lg" variant="outline" asChild>
              <Link href="https://github.com/velora-ui/velora" target="_blank">
                Star on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
