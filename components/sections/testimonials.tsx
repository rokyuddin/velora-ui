import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      content:
        "Velora UI has transformed how we build interfaces. The components are beautiful, accessible, and incredibly easy to customize.",
      author: "Sarah Chen",
      role: "Frontend Lead",
      company: "TechCorp",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      content:
        "The developer experience is outstanding. TypeScript support and documentation make it a joy to work with.",
      author: "Marcus Johnson",
      role: "Senior Developer",
      company: "StartupXYZ",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      content:
        "Finally, a component library that doesn't compromise on accessibility. Our users love the improved experience.",
      author: "Emily Rodriguez",
      role: "UX Engineer",
      company: "DesignStudio",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Loved by Developers</h2>
          <p className="text-xl text-muted-foreground">See what developers are saying about Velora UI.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <blockquote className="text-lg mb-4">"{testimonial.content}"</blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
