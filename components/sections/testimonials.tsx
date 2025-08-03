"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      content:
        "Velora UI has transformed how we build interfaces. The components are beautiful, accessible, and incredibly easy to customize. Our development speed increased by 300%!",
      author: "Sarah Chen",
      role: "Frontend Lead",
      company: "TechCorp",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      content:
        "The developer experience is outstanding. TypeScript support and documentation make it a joy to work with. Best component library I've ever used!",
      author: "Marcus Johnson",
      role: "Senior Developer",
      company: "StartupXYZ",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      content:
        "Finally, a component library that doesn't compromise on accessibility. Our users love the improved experience and we've seen engagement increase significantly.",
      author: "Emily Rodriguez",
      role: "UX Engineer",
      company: "DesignStudio",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      content:
        "The customization options are endless. We were able to match our brand perfectly while maintaining the high quality and accessibility standards.",
      author: "David Kim",
      role: "Lead Designer",
      company: "CreativeAgency",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      gradient: "from-orange-500 to-red-500"
    },
    {
      content:
        "Integration was seamless and the performance is incredible. Our bundle size actually decreased while adding more features. Highly recommended!",
      author: "Lisa Wang",
      role: "Tech Lead",
      company: "InnovateLab",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      gradient: "from-indigo-500 to-purple-500"
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-900/50" />
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-float animate-delay-500" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-float" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
          <div className="animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200/50 dark:border-purple-800/50">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">5.0 Rating</span>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up animate-delay-200">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Loved by</span>
              <br />
              <span className="text-foreground">Developers Worldwide</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              See what developers are saying about their experience with Velora UI.
            </p>
          </div>
        </div>

        {/* Main testimonial carousel */}
        <div 
          className="max-w-5xl mx-auto mb-16"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative overflow-hidden">
              <Card className="glass border-2 border-white/10 dark:border-slate-700/50 relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-700`} />
                
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="flex flex-col items-center text-center space-y-8">
                    {/* Quote icon */}
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${testimonials[currentIndex].gradient} shadow-xl`}>
                      <Quote className="w-8 h-8 text-white" />
                    </div>

                    {/* Rating stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 text-yellow-400 fill-current animate-scale-in animate-delay-${i * 100}`}
                        />
                      ))}
                    </div>

                    {/* Testimonial content */}
                    <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-4xl animate-fade-in-up">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up animate-delay-300">
                      <Avatar className="w-16 h-16 ring-4 ring-white/20 shadow-xl">
                        <AvatarImage 
                          src={testimonials[currentIndex].avatar || "/placeholder.svg"} 
                          alt={testimonials[currentIndex].author} 
                        />
                        <AvatarFallback className={`text-lg font-semibold bg-gradient-to-br ${testimonials[currentIndex].gradient} text-white`}>
                          {testimonials[currentIndex].author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="text-center sm:text-left">
                        <div className="text-xl font-bold gradient-text mb-1">
                          {testimonials[currentIndex].author}
                        </div>
                        <div className="text-muted-foreground font-medium">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass hover-lift shadow-lg z-20 border-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass hover-lift shadow-lg z-20 border-2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${testimonials[index].gradient} scale-125 shadow-lg`
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mini testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group hover-lift glass border-2 border-white/10 dark:border-slate-700/50 cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-blue-500 ring-offset-2' : ''
              } animate-scale-in animate-delay-${index * 200}`}
              onClick={() => goToTestimonial(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <CardContent className="p-6 relative z-10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-sm mb-4 line-clamp-3">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage 
                      src={testimonial.avatar || "/placeholder.svg"} 
                      alt={testimonial.author} 
                    />
                    <AvatarFallback className={`text-xs bg-gradient-to-br ${testimonial.gradient} text-white`}>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center animate-fade-in-up animate-delay-1000">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl glass border border-white/20 dark:border-slate-700/50">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium">Trusted by 10K+ developers</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">4.9/5 average rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
