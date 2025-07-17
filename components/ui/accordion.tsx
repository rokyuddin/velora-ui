"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  type: "single" | "multiple"
  value: string | string[]
  onValueChange: (value: string | string[]) => void
  collapsible?: boolean
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

const useAccordionContext = () => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion")
  }
  return context
}

interface AccordionProps {
  type: "single" | "multiple"
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  collapsible?: boolean
  children: React.ReactNode
  className?: string
}

const Accordion = ({
  type,
  value,
  defaultValue,
  onValueChange,
  collapsible = false,
  children,
  className,
}: AccordionProps) => {
  const [internalValue, setInternalValue] = React.useState<string | string[]>(
    defaultValue || (type === "single" ? "" : []),
  )

  const currentValue = value !== undefined ? value : internalValue
  const handleValueChange = onValueChange || setInternalValue

  return (
    <AccordionContext.Provider
      value={{
        type,
        value: currentValue,
        onValueChange: handleValueChange,
        collapsible,
      }}
    >
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
  ({ className, value, ...props }, ref) => {
    const { type, value: contextValue } = useAccordionContext()
    const isOpen = type === "single" ? contextValue === value : (contextValue as string[]).includes(value)

    return (
      <div
        ref={ref}
        className={cn("border-b border-gray-200 dark:border-gray-800", className)}
        data-value={value}
        data-state={isOpen ? "open" : "closed"} // Add data-state for trigger and content
        {...props}
      />
    )
  },
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { type, value, onValueChange, collapsible } = useAccordionContext()

    const handleClick = () => {
      const item = ref && "current" in ref ? ref.current?.closest("[data-value]") : null
      const itemValue = item?.getAttribute("data-value")

      if (!itemValue) return

      if (type === "single") {
        const currentValue = value as string
        const newValue = currentValue === itemValue ? (collapsible ? "" : itemValue) : itemValue
        onValueChange(newValue)
      } else {
        const currentValue = value as string[]
        const newValue = currentValue.includes(itemValue)
          ? currentValue.filter((v) => v !== itemValue)
          : [...currentValue, itemValue]
        onValueChange(newValue)
      }
    }

    return (
      <button
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left w-full",
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </button>
    )
  },
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { type, value } = useAccordionContext()
    const contentRef = React.useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = React.useState(false)
    const [contentHeight, setContentHeight] = React.useState(0)

    React.useEffect(() => {
      const item = contentRef.current?.closest("[data-value]")
      const itemValue = item?.getAttribute("data-value")

      if (!itemValue) return

      if (type === "single") {
        setIsOpen(value === itemValue)
      } else {
        setIsOpen((value as string[]).includes(itemValue))
      }
    }, [value, type])

    // Measure content height when it becomes open
    React.useLayoutEffect(() => {
      if (isOpen && contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      } else if (!isOpen) {
        setContentHeight(0)
      }
    }, [isOpen])

    return (
      <div
        ref={ref}
        className={cn("overflow-hidden transition-all duration-300 ease-in-out", className)}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
        {...props}
      >
        <div ref={contentRef} className={cn("pb-4 pt-0", className)}>
          {children}
        </div>
      </div>
    )
  },
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
