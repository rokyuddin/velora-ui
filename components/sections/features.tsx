"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Code2, Zap, Shield, Sparkles, Play, Copy, Check } from "lucide-react"
import { useState } from "react"

export function Features() {
  const [copiedDemo, setCopiedDemo] = useState(false)
  const [activeDemo, setActiveDemo] = useState("primary")

  const handleCopyDemo = () => {
    navigator.clipboard.writeText(`<Button variant="${activeDemo}">Click me!</Button>`)
    setCopiedDemo(true)
    setTimeout(() => setCopiedDemo(false), 2000)
  }

  const buttonVariants = [
    { name: "primary", label: "Primary" },
    { name: "secondary", label: "Secondary" },
    { name: "outline", label: "Outline" },
    { name: "ghost", label: "Ghost" },
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-900/50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-delay-1000" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-800/50">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Everything You Need</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="gradient-text">Premium Features</span>
            <br />
            <span className="text-foreground">Built for Developers</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive set of components and utilities to build any interface with speed and precision.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {/* Interactive Component Showcase */}
          <Card className="group hover-lift glass border-2 border-white/10 dark:border-slate-700/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                  <Play className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Interactive Showcase</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Live Demo
                  </Badge>
                </div>
              </div>
              <CardDescription className="text-base">
                Experience our components in action with real-time interactions
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              {/* Button Demo */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {buttonVariants.map((variant) => (
                    <Button
                      key={variant.name}
                      size="sm"
                      variant={variant.name as any}
                      onClick={() => setActiveDemo(variant.name)}
                      className={`transition-all duration-200 ${
                        activeDemo === variant.name 
                          ? 'ring-2 ring-blue-500 ring-offset-2 scale-105' 
                          : 'hover:scale-105'
                      }`}
                    >
                      {variant.label}
                    </Button>
                  ))}
                </div>
                
                {/* Code display */}
                <div className="relative">
                  <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleCopyDemo}
                        className="h-6 px-2 text-xs text-slate-400 hover:text-white"
                      >
                        {copiedDemo ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      </Button>
                    </div>
                    <code className="text-sm text-slate-300">
                      <span className="text-blue-400">&lt;Button</span>{" "}
                      <span className="text-green-400">variant</span>
                      <span className="text-slate-400">=</span>
                      <span className="text-orange-400">"{activeDemo}"</span>
                      <span className="text-blue-400">&gt;</span>
                      <span className="text-slate-300">Click me!</span>
                      <span className="text-blue-400">&lt;/Button&gt;</span>
                    </code>
                  </div>
                </div>
              </div>
              
              {/* Feature cards mini demo */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-md transition-shadow">
                  <Code2 className="h-5 w-5 text-blue-500 mb-2" />
                  <h4 className="font-semibold text-sm">TypeScript</h4>
                  <p className="text-xs text-muted-foreground">Full type safety</p>
                </div>
                <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-md transition-shadow">
                  <Zap className="h-5 w-5 text-yellow-500 mb-2" />
                  <h4 className="font-semibold text-sm">Fast</h4>
                  <p className="text-xs text-muted-foreground">Optimized bundle</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dark Mode & Theming */}
          <Card className="group hover-lift glass border-2 border-white/10 dark:border-slate-700/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg">
                  <Palette className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Dark Mode & Theming</CardTitle>
                  <Badge variant="outline" className="mt-1 border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-300">
                    Customizable
                  </Badge>
                </div>
              </div>
              <CardDescription className="text-base">
                Seamless dark mode with system preference detection and custom themes
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 hover:shadow-md transition-all duration-200">
                  <span className="text-sm font-medium">Theme Mode</span>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">Auto</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="group/theme relative overflow-hidden">
                    <div className="h-20 rounded-lg border-2 bg-white flex items-center justify-center text-xs font-medium transition-all duration-200 hover:border-blue-300 hover:shadow-lg cursor-pointer">
                      <div className="text-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-1" />
                        Light Mode
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/theme:opacity-100 transition-opacity rounded-lg" />
                  </div>
                  
                  <div className="group/theme relative overflow-hidden">
                    <div className="h-20 rounded-lg border-2 bg-slate-900 text-white flex items-center justify-center text-xs font-medium transition-all duration-200 hover:border-purple-500 hover:shadow-lg cursor-pointer">
                      <div className="text-center">
                        <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-1" />
                        Dark Mode
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover/theme:opacity-100 transition-opacity rounded-lg" />
                  </div>
                </div>
                
                {/* Color palette preview */}
                <div className="flex gap-2 justify-center pt-2">
                  {['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500'].map((color, i) => (
                    <div
                      key={color}
                      className={`w-6 h-6 ${color} rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer animate-scale-in`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Palette,
              title: "Beautiful Design",
              description: "Carefully crafted components with modern design principles and attention to detail.",
              gradient: "from-blue-500 to-cyan-500",
              delay: "0"
            },
            {
              icon: Zap,
              title: "Developer Experience",
              description: "Built with TypeScript, excellent IntelliSense, and comprehensive documentation.",
              gradient: "from-yellow-500 to-orange-500",
              delay: "100"
            },
            {
              icon: Shield,
              title: "Accessibility First",
              description: "WCAG compliant components with proper ARIA attributes and keyboard navigation.",
              gradient: "from-green-500 to-emerald-500",
              delay: "200"
            },
            {
              icon: Code2,
              title: "Customizable",
              description: "Easily customize components with CSS variables and Tailwind CSS utilities.",
              gradient: "from-purple-500 to-pink-500",
              delay: "300"
            },
          ].map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`group hover-lift glass border-2 border-white/10 dark:border-slate-700/50 text-center relative overflow-hidden animate-fade-in-up animate-delay-${feature.delay}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10">
                <div className={`mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
