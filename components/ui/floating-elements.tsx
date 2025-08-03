"use client"

import React from 'react'

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating shapes */}
      <div className="floating-shape floating-shape-1 top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl" />
      <div className="floating-shape floating-shape-2 top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-red-600/20 rounded-full blur-lg" />
      <div className="floating-shape floating-shape-3 bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-2xl" />
      
      {/* Medium floating shapes */}
      <div className="floating-shape floating-shape-1 top-60 right-1/3 w-20 h-20 bg-gradient-to-br from-emerald-400/30 to-teal-600/30 rounded-full blur-md animate-delay-300" />
      <div className="floating-shape floating-shape-2 bottom-40 right-10 w-16 h-16 bg-gradient-to-br from-yellow-400/25 to-orange-600/25 rounded-full blur-lg animate-delay-500" />
      
      {/* Small accent shapes */}
      <div className="floating-shape floating-shape-3 top-32 left-1/3 w-12 h-12 bg-gradient-to-br from-violet-400/40 to-purple-600/40 rounded-full blur-sm animate-delay-700" />
      <div className="floating-shape floating-shape-1 bottom-60 left-20 w-8 h-8 bg-gradient-to-br from-cyan-400/50 to-blue-600/50 rounded-full blur-sm animate-delay-1000" />
      
      {/* Geometric shapes */}
      <div className="floating-shape floating-shape-2 top-1/4 left-1/2 w-6 h-6 bg-gradient-to-br from-pink-500/30 to-rose-600/30 rotate-45 animate-delay-200" style={{ borderRadius: '20%' }} />
      <div className="floating-shape floating-shape-3 bottom-1/4 right-1/4 w-10 h-10 bg-gradient-to-br from-indigo-500/25 to-purple-600/25 rotate-12 animate-delay-400" style={{ borderRadius: '30%' }} />
      
      {/* Animated particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {/* Glowing orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className={`absolute rounded-full animate-pulse-glow`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              background: `radial-gradient(circle, ${
                ['rgba(59, 130, 246, 0.4)', 'rgba(147, 51, 234, 0.4)', 'rgba(236, 72, 153, 0.4)', 'rgba(16, 185, 129, 0.4)'][i % 4]
              } 0%, transparent 70%)`,
              animationDelay: `${i * 0.5}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
        
        {/* Floating dots */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}