"use client"

import { useEffect, useRef, useState } from 'react'

// Hook for scroll-triggered animations
export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, stop observing to prevent re-triggering
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold])

  return { elementRef, isVisible }
}

// Scroll reveal component
interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'scale-in'
  delay?: number
  threshold?: number
}

export function ScrollReveal({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1 
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation(threshold)

  return (
    <div
      ref={elementRef as any}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? `animate-${animation} opacity-100 translate-y-0 translate-x-0 scale-100` 
          : 'opacity-0 translate-y-8 scale-95'
      } ${className}`}
      style={{ 
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  )
}

// Staggered children animation
interface StaggeredAnimationProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'scale-in'
}

export function StaggeredAnimation({ 
  children, 
  className = '',
  staggerDelay = 100,
  animation = 'fade-in-up'
}: StaggeredAnimationProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <div ref={elementRef as any} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            isVisible 
              ? `animate-${animation} opacity-100 translate-y-0 translate-x-0 scale-100` 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{ 
            animationDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
            animationFillMode: 'both'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

// Parallax scroll effect
interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return
      
      const rect = elementRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setOffset(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  )
}

// Smooth scroll to element
export function useSmoothScroll() {
  const scrollTo = (elementId: string, offset = 0) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const targetPosition = element.offsetTop - offset
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }

  return { scrollTo }
}