"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarLink {
  title: string
  href: string
}

interface SidebarSection {
  title: string
  links: SidebarLink[]
}

const sidebarNav: SidebarSection[] = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Components",
    links: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Modal", href: "/docs/components/modal" },
      { title: "Table", href: "/docs/components/table" },
      { title: "Tabs", href: "/docs/components/tabs" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-16 left-0 z-20 hidden h-[calc(100vh-64px)] w-64 shrink-0 overflow-y-auto border-r bg-white p-6 dark:border-gray-800 dark:bg-gray-950 lg:block">
      <nav className="flex flex-col space-y-6">
        {sidebarNav.map((section, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                      pathname === link.href
                        ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                        : "text-gray-600 dark:text-gray-400",
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
