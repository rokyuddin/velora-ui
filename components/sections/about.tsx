"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Zap, Shield, Code, Sparkles, ArrowRight, CheckCircle } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Carefully crafted components with modern design principles and attention to detail.",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      stats: "50+ Components",
      delay: "0"
    },
    {
      icon: Zap,
      title: "Developer Experience",
      description: "Built with TypeScript, excellent IntelliSense, and comprehensive documentation.",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      stats: "100% TypeScript",
      delay: "200"
    },
    {
      icon: Shield,
      title: "Accessibility First",
      description: "WCAG compliant components with proper ARIA attributes and keyboard navigation.",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      stats: "WCAG 2.1 AA",
      delay: "400"
    },
    {
      icon: Code,
      title: "Customizable",
      description: "Easily customize components with CSS variables and Tailwind CSS utilities.",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      stats: "Infinite Themes",
      delay: "600"
    },
  ]

  const highlights = [
    "🎨 Premium design system",
    "⚡ Lightning fast performance",
    "🛡️ Enterprise-grade security",
    "🔧 Developer-friendly API",
    "📱 Mobile-first responsive",
    "🌙 Dark mode built-in"
  ]

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950" />
      
      {/* Animated background shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-red-600/10 rounded-full blur-3xl animate-float animate-delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/5 to-blue-600/5 rounded-full blur-2xl animate-pulse" />

      <div className="container relative z-10">
        {/* Header section */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <div className="animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-800/50">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Why Choose Velora UI?</span>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up animate-delay-200">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="block">Built for</span>
              <span className="gradient-text">Modern React</span>
              <span className="block">Applications</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With developer experience and accessibility in mind, we've created the most comprehensive component library for your next project.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in-up animate-delay-500">
            {highlights.map((highlight, index) => (
              <div
                key={highlight}
                className={`flex items-center gap-2 text-sm text-muted-foreground animate-slide-in-left animate-delay-${700 + index * 100}`}
              >
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`group hover-lift glass border-2 border-white/10 dark:border-slate-700/50 text-center relative overflow-hidden animate-scale-in animate-delay-${feature.delay}`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-all duration-700`} />
              
              {/* Floating icon background */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <feature.icon className="w-16 h-16 text-gray-400" />
              </div>

              <CardHeader className="relative z-10 pb-4">
                <div className={`mx-auto h-20 w-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 animate-glow`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                
                <CardTitle className="text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </CardTitle>
                
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} text-white text-xs font-medium shadow-lg`}>
                  <Sparkles className="w-3 h-3" />
                  {feature.stats}
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0">
                <CardDescription className="text-base leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>
                
                <div className="flex items-center justify-center text-sm text-muted-foreground group-hover:text-blue-600 transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Border glow */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.gradient} p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-lg" />
              </div>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Background card */}
            <div className="glass rounded-3xl p-8 md:p-12 border-2 border-white/10 dark:border-slate-700/50 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
              
              <div className="relative z-10">
                <div className="text-center mb-12 animate-fade-in-up animate-delay-1000">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                    Trusted by Developers Worldwide
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Join thousands of developers building amazing applications
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: "Active Users", value: "50K+", icon: "👥" },
                    { label: "Components", value: "100+", icon: "🧩" },
                    { label: "GitHub Stars", value: "15K+", icon: "⭐" },
                    { label: "Downloads", value: "500K+", icon: "📦" }
                  ].map((stat, index) => (
                    <div 
                      key={stat.label} 
                      className={`text-center group animate-scale-in animate-delay-${1200 + index * 100}`}
                    >
                      <div className="text-3xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
