"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Sparkles, Zap } from "lucide-react";
import { FloatingElements, ParticleField } from "@/components/ui/floating-elements";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-purple-500/10 animate-gradient-xy" />
      
      {/* Floating elements and particles */}
      <FloatingElements />
      <ParticleField />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Badge */}
          <div className="animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ✨ New v2.0 Released
              </span>
              <ArrowRight className="w-3 h-3 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-6 animate-fade-in-up animate-delay-200">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none">
              <span className="block animate-slide-in-left">Build Beautiful</span>
              <span className="block gradient-text animate-slide-in-right animate-delay-300">
                UIs with Velora
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-500">
              A modern, accessible, and customizable React component library
              built with Tailwind CSS. Ship faster with pre-built components
              that look great out of the box.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animate-delay-700">
            <Button 
              size="lg" 
              className="btn-premium text-lg px-8 py-4 h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl glow-blue hover-lift group"
              asChild
            >
              <Link href="/docs" className="flex items-center gap-2">
                <Zap className="w-5 h-5 group-hover:animate-bounce" />
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-premium text-lg px-8 py-4 h-auto glass hover-lift group border-2"
              asChild
            >
              <Link href="https://github.com/velora-ui/velora" target="_blank" className="flex items-center gap-2">
                <Github className="w-5 h-5 group-hover:animate-spin" />
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in-up animate-delay-1000">
            {[
              { label: "Components", value: "50+" },
              { label: "Downloads", value: "100K+" },
              { label: "GitHub Stars", value: "2.5K+" },
              { label: "Contributors", value: "25+" }
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className={`text-center animate-scale-in animate-delay-${1000 + index * 100}`}
              >
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Code preview */}
          <div className="pt-12 animate-fade-in-up animate-delay-1000">
            <div className="relative max-w-2xl mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl animate-pulse-glow" />
              
              {/* Code block */}
              <div className="relative rounded-2xl glass border-2 border-white/10 dark:border-slate-700/50 p-8 hover-lift group">
                <div className="absolute top-4 left-6 flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animate-delay-100" />
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animate-delay-200" />
                </div>
                
                <pre className="text-left overflow-x-auto mt-8 text-sm sm:text-base">
                  <code className="text-slate-800 dark:text-slate-200">
                    <span className="text-purple-600 dark:text-purple-400">import</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">{"{ Button }"}</span>{" "}
                    <span className="text-purple-600 dark:text-purple-400">from</span>{" "}
                    <span className="text-green-600 dark:text-green-400">'@velora/ui'</span>
                    {"\n\n"}
                    <span className="text-purple-600 dark:text-purple-400">function</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">App</span>
                    <span className="text-slate-600 dark:text-slate-400">() {"{"}</span>
                    {"\n  "}
                    <span className="text-purple-600 dark:text-purple-400">return</span>{" "}
                    <span className="text-red-600 dark:text-red-400">&lt;Button</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">variant</span>
                    <span className="text-slate-600 dark:text-slate-400">=</span>
                    <span className="text-green-600 dark:text-green-400">"primary"</span>
                    <span className="text-red-600 dark:text-red-400">&gt;</span>
                    {"\n    "}Hello Velora! ✨
                    {"\n  "}
                    <span className="text-red-600 dark:text-red-400">&lt;/Button&gt;</span>
                    {"\n"}
                    <span className="text-slate-600 dark:text-slate-400">{"}"}</span>
                  </code>
                </pre>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
            <div className="w-6 h-10 border-2 border-white/30 dark:border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 dark:bg-slate-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
