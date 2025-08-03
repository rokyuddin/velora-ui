"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Sparkles, Rocket, Download, Heart, Users } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [isHoveringPrimary, setIsHoveringPrimary] = useState(false)
  const [isHoveringSecondary, setIsHoveringSecondary] = useState(false)

  const stats = [
    { icon: Users, label: "Active Users", value: "50K+" },
    { icon: Download, label: "Downloads", value: "500K+" },
    { icon: Heart, label: "GitHub Stars", value: "15K+" },
    { icon: Sparkles, label: "Components", value: "100+" }
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient-xy" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-float animate-delay-1000" />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/15 rounded-full blur-lg animate-float animate-delay-500" />
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white/10 rounded-full blur-md animate-float animate-delay-700" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Badge */}
          <div className="animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-2xl">
              <Rocket className="w-5 h-5 text-white animate-bounce" />
              <span className="text-white font-medium">Ready to Launch?</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-8 animate-fade-in-up animate-delay-200">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              <span className="block">Ready to Build</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-shimmer">
                Something Amazing?
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of developers who are already building beautiful, accessible, and performant interfaces with Velora UI.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up animate-delay-500">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center group animate-scale-in animate-delay-${600 + index * 100}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animate-delay-700">
            <Button 
              size="lg" 
              className="btn-premium text-lg px-10 py-6 h-auto bg-white text-gray-900 hover:bg-gray-100 shadow-2xl hover:shadow-3xl hover-lift group border-0 relative overflow-hidden"
              asChild
              onMouseEnter={() => setIsHoveringPrimary(true)}
              onMouseLeave={() => setIsHoveringPrimary(false)}
            >
              <Link href="/docs" className="flex items-center gap-3 relative z-10">
                <Rocket className={`w-6 h-6 transition-all duration-300 ${isHoveringPrimary ? 'animate-bounce text-blue-600' : ''}`} />
                <span className="font-bold">Start Building Now</span>
                <ArrowRight className={`w-6 h-6 transition-all duration-300 ${isHoveringPrimary ? 'translate-x-1 text-blue-600' : ''}`} />
                
                {/* Shimmer effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transition-all duration-500 ${isHoveringPrimary ? 'translate-x-full' : '-translate-x-full'}`} />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-premium text-lg px-10 py-6 h-auto border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl hover-lift group relative overflow-hidden"
              asChild
              onMouseEnter={() => setIsHoveringSecondary(true)}
              onMouseLeave={() => setIsHoveringSecondary(false)}
            >
              <Link href="https://github.com/velora-ui/velora" target="_blank" className="flex items-center gap-3 relative z-10">
                <Github className={`w-6 h-6 transition-all duration-300 ${isHoveringSecondary ? 'animate-spin' : ''}`} />
                <span className="font-bold">Star on GitHub</span>
                <Heart className={`w-5 h-5 transition-all duration-300 ${isHoveringSecondary ? 'text-red-400 animate-pulse' : ''}`} />
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-white/5 transition-opacity duration-300 ${isHoveringSecondary ? 'opacity-100' : 'opacity-0'}`} />
              </Link>
            </Button>
          </div>

          {/* Additional info */}
          <div className="space-y-6 animate-fade-in-up animate-delay-1000">
            <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Free & Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animate-delay-200" />
                <span>MIT License</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animate-delay-400" />
                <span>Active Community</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animate-delay-600" />
                <span>Regular Updates</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white/90 text-sm font-medium">TypeScript Support</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-4 h-4 rounded bg-green-400" />
                <span className="text-white/90 text-sm font-medium">WCAG 2.1 AA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-4 h-4 rounded bg-blue-400" />
                <span className="text-white/90 text-sm font-medium">Tree Shakable</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border border-white/20 rounded-full animate-spin-slow" />
          <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-white/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          <div className="absolute top-1/4 -right-5 w-12 h-12 border border-white/20 rounded-full animate-spin-slow animate-delay-1000" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
