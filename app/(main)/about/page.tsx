import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Shield, Code, Lightbulb, Handshake } from "lucide-react"
import { CTA } from "@/components/sections/cta"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously exploring new ideas and technologies to push the boundaries of UI development.",
    },
    {
      icon: Handshake,
      title: "Community",
      description: "Fostering a supportive and collaborative environment for developers to learn and grow.",
    },
    {
      icon: Shield,
      title: "Accessibility",
      description: "Committed to building inclusive components that are usable by everyone, regardless of ability.",
    },
    {
      icon: Code,
      title: "Quality",
      description: "Delivering robust, well-tested, and performant components that developers can trust.",
    },
  ]

  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Lead Developer",
      avatar: "/placeholder.svg?height=80&width=80&text=Alice",
      bio: "Alice leads the core development of Velora UI, focusing on performance and modularity.",
    },
    {
      name: "Bob Williams",
      role: "Design Lead",
      avatar: "/placeholder.svg?height=80&width=80&text=Bob",
      bio: "Bob shapes the visual language and user experience, ensuring every component is pixel-perfect.",
    },
    {
      name: "Charlie Brown",
      role: "Community Manager",
      avatar: "/placeholder.svg?height=80&width=80&text=Charlie",
      bio: "Charlie is the voice of Velora UI, engaging with the community and gathering feedback.",
    },
  ]

  return (
    <div className="space-y-16 py-12 lg:py-24">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-gray-950 dark:text-gray-50">
          Empowering Developers with <span className="text-blue-600 dark:text-blue-400">Elegant UI</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Our journey to build the most intuitive, beautiful, and accessible React component library for modern web
          applications.
        </p>
      </section>

      {/* Mission Section */}
      <section className="container max-w-5xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-gray-50">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At Velora UI, our mission is to provide developers with a robust, accessible, and highly customizable set
              of UI components that accelerate development and enhance user experiences. We believe in open-source
              collaboration and building tools that empower creators.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We strive to simplify complex UI challenges, allowing you to focus on the unique logic of your application
              while ensuring a consistent and delightful user interface.
            </p>
          </div>
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="A team collaborating on a design project, representing innovation and collaboration"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container max-w-5xl mx-auto px-4 py-12 lg:py-20 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-inner">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-gray-50">The Velora UI Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            From a passion project to a thriving open-source library, here's how Velora UI came to be.
          </p>
        </div>
        <div className="relative pl-8 md:pl-16">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 md:left-8" />
          <div className="space-y-12">
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 -translate-x-1/2 mt-1 md:left-8" />
              <h3 className="text-2xl font-semibold text-gray-950 dark:text-gray-50">2022: The Genesis</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Velora UI began as an internal project to standardize UI components across various applications.
                Frustrated with existing solutions, our small team decided to build a library focused on developer
                experience and design consistency.
              </p>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 -translate-x-1/2 mt-1 md:left-8" />
              <h3 className="text-2xl font-semibold text-gray-950 dark:text-gray-50">2023: Open Source Launch</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                After extensive internal testing and refinement, we decided to open-source Velora UI, believing in the
                power of community contributions. The initial release included core components like Button, Card, and
                Input.
              </p>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 -translate-x-1/2 mt-1 md:left-8" />
              <h3 className="text-2xl font-semibold text-gray-950 dark:text-gray-50">2024: Growth & Expansion</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                With growing community support, Velora UI expanded its component library, added comprehensive
                documentation, and introduced advanced features like dark mode and improved accessibility. We continue
                to evolve based on user feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="container max-w-5xl mx-auto px-4 py-12 lg:py-20">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-gray-50">Our Core Values</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            These principles guide everything we do, from design decisions to community interactions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} className="text-center p-6">
              <CardHeader className="p-0 mb-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <value.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-950 dark:text-gray-50">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="container max-w-5xl mx-auto px-4 py-12 lg:py-20 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-inner">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-gray-50">Meet the Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            The passionate individuals behind Velora UI, dedicated to crafting exceptional user experiences.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="p-0 flex flex-col items-center">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-semibold text-gray-950 dark:text-gray-50">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 dark:text-blue-400 mb-2">{member.role}</CardDescription>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Re-use existing CTA section */}
      <CTA />
    </div>
  )
}
