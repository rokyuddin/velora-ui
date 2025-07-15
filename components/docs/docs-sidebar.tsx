"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Modal", href: "/docs/components/modal" },
      { title: "Accordion", href: "/docs/components/accordion" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Accessibility", href: "/docs/accessibility" },
      { title: "Contributing", href: "/docs/contributing" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r border-gray-200 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-950/50">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input placeholder="Search docs..." className="pl-9" />
        </div>
      </div>

      <div className="h-[calc(100vh-8rem)] overflow-auto">
        <div className="p-4 space-y-6">
          {navigation.map((section) => (
            <div key={section.title} className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full justify-start",
                      pathname === item.href && "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
                    )}
                    asChild
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
