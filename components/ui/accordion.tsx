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
  ({ className, value, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("border-b border-gray-200 dark:border-gray-800", className)}
      data-value={value}
      {...props}
    />
  ),
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { type, value, onValueChange, collapsible } = useAccordionContext()
    const itemElement = React.useRef<HTMLDivElement>(null)

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
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
      const item = ref && "current" in ref ? ref.current?.closest("[data-value]") : null
      const itemValue = item?.getAttribute("data-value")

      if (!itemValue) return

      if (type === "single") {
        setIsOpen(value === itemValue)
      } else {
        setIsOpen((value as string[]).includes(itemValue))
      }
    }, [value, type])

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden text-sm transition-all",
          isOpen ? "animate-accordion-down" : "animate-accordion-up",
        )}
        style={{
          display: isOpen ? "block" : "none",
        }}
        {...props}
      >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
      </div>
    )
  },
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
