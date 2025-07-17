"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sandpack } from "@codesandbox/sandpack-react"

export default function AccordionPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">Accordion</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        A vertically stacked set of interactive headings that each reveal a section of content.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Accordion component allows you to create collapsible sections of content. It supports both single and
          multiple item expansion.
        </p>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that you can override with Tailwind CSS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <h3 className="text-xl font-medium mb-3">Single Accordion</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Only one item can be open at a time.</p>
        <Sandpack
          template="react"
          files={{
            "/App.js": `
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion';
import './styles.css'; // Assuming you have a basic CSS file for global styles

export default function App() {
  const [singleValue, setSingleValue] = React.useState("item-1"); // Example for controlled component
  return (
    <div className="p-4">
      <Accordion type="single" collapsible value={singleValue} onValueChange={setSingleValue} className="w-full max-w-md mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Velora UI?</AccordionTrigger>
          <AccordionContent>
            Velora UI is a modern and interactive UI component library built with React and Tailwind CSS.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I install it?</AccordionTrigger>
          <AccordionContent>
            You can install Velora UI via npm or yarn. Check the installation guide for more details.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
            `,
            "/Accordion.js": `
// This is a simplified representation for Sandpack.
// In a real project, you would import from your components/ui/accordion.tsx
import * as React from "react"
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils" // Assuming cn is available or defined here

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

export const Accordion = ({
  type,
  value,
  defaultValue,
  onValueChange,
  collapsible = false,
  children,
  className,
}: AccordionProps) => {
  const [internalValue, setInternalValue] = React.useState(
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

export const AccordionItem = React.forwardRef(({ className, value, ...props }, ref) => {
  const { type, value: contextValue } = useAccordionContext()
  const isOpen = type === "single" ? contextValue === value : (contextValue).includes(value)

  return (
    <div
      ref={ref}
      className={\`border-b border-gray-200 dark:border-gray-800 \${className || ''}\`}
      data-value={value}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    />
  )
})
AccordionItem.displayName = "AccordionItem"

export const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const { type, value, onValueChange, collapsible } = useAccordionContext()

  const handleClick = () => {
    const item = ref && "current" in ref ? ref.current?.closest("[data-value]") : null
    const itemValue = item?.getAttribute("data-value")

    if (!itemValue) return

    if (type === "single") {
      const currentValue = value
      const newValue = currentValue === itemValue ? (collapsible ? "" : itemValue) : itemValue
      onValueChange(newValue)
    } else {
      const currentValue = value
      const newValue = currentValue.includes(itemValue)
        ? currentValue.filter((v) => v !== itemValue)
        : [...currentValue, itemValue]
      onValueChange(newValue)
    }
  }

  return (
    <button
      ref={ref}
      className={\`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left w-full \${className || ''}\`}
      onClick={handleClick}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

export const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { type, value } = useAccordionContext()
  const contentRef = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [contentHeight, setContentHeight] = React.useState(0)

  React.useEffect(() => {
    const item = contentRef.current?.closest("[data-value]")
    const itemValue = item?.getAttribute("data-value")

    if (!itemValue) return

    if (type === "single") {
      setIsOpen(value === itemValue)
    } else {
      setIsOpen((value).includes(itemValue))
    }
  }, [value, type])

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
      className={\`overflow-hidden transition-all duration-300 ease-in-out \${className || ''}\`}
      style={{
        maxHeight: isOpen ? \`\${contentHeight}px\` : "0px",
        opacity: isOpen ? 1 : 0,
      }}
      {...props}
    >
      <div ref={contentRef} className={\`pb-4 pt-0 \${className || ''}\`}>
        {children}
      </div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

// Helper for cn (simplified for Sandpack)
function cn(...args) {
  return args.filter(Boolean).join(' ');
}
            `,
            "/styles.css": `
/* Basic global styles for Sandpack preview */
body {
  font-family: sans-serif;
  line-height: 1.5;
}
            `,
          }}
          options={{
            editorHeight: 300,
            showLineNumbers: true,
            showTabs: true,
            readOnly: false,
          }}
        />

        <h3 className="text-xl font-medium mt-8 mb-3">Multiple Accordion</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Multiple items can be open simultaneously.</p>
        <Sandpack
          template="react"
          files={{
            "/App.js": `
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion';
import './styles.css';

export default function App() {
  const [multipleValues, setMultipleValues] = React.useState(["item-1"]); // Example for controlled component
  return (
    <div className="p-4">
      <Accordion type="multiple" value={multipleValues} onValueChange={setMultipleValues} className="w-full max-w-md mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>What are the core principles?</AccordionTrigger>
          <AccordionContent>
            Our core principles include modularity, accessibility, and ease of use.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
          <AccordionContent>
            Yes, all components are built with Tailwind CSS, allowing for extensive customization.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it open source?</AccordionTrigger>
          <AccordionContent>
            Yes, Velora UI is open source and available on GitHub.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
            `,
            "/Accordion.js": `
// This is a simplified representation for Sandpack.
// In a real project, you would import from your components/ui/accordion.tsx
import * as React from "react"
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils" // Assuming cn is available or defined here

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

export const Accordion = ({
  type,
  value,
  defaultValue,
  onValueChange,
  collapsible = false,
  children,
  className,
}: AccordionProps) => {
  const [internalValue, setInternalValue] = React.useState(
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

export const AccordionItem = React.forwardRef(({ className, value, ...props }, ref) => {
  const { type, value: contextValue } = useAccordionContext()
  const isOpen = type === "single" ? contextValue === value : (contextValue).includes(value)

  return (
    <div
      ref={ref}
      className={\`border-b border-gray-200 dark:border-gray-800 \${className || ''}\`}
      data-value={value}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    />
  )
})
AccordionItem.displayName = "AccordionItem"

export const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const { type, value, onValueChange, collapsible } = useAccordionContext()

  const handleClick = () => {
    const item = ref && "current" in ref ? ref.current?.closest("[data-value]") : null
    const itemValue = item?.getAttribute("data-value")

    if (!itemValue) return

    if (type === "single") {
      const currentValue = value
      const newValue = currentValue === itemValue ? (collapsible ? "" : itemValue) : itemValue
      onValueChange(newValue)
    } else {
      const currentValue = value
      const newValue = currentValue.includes(itemValue)
        ? currentValue.filter((v) => v !== itemValue)
        : [...currentValue, itemValue]
      onValueChange(newValue)
    }
  }

  return (
    <button
      ref={ref}
      className={\`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left w-full \${className || ''}\`}
      onClick={handleClick}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

export const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { type, value } = useAccordionContext()
  const contentRef = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [contentHeight, setContentHeight] = React.useState(0)

  React.useEffect(() => {
    const item = contentRef.current?.closest("[data-value]")
    const itemValue = item?.getAttribute("data-value")

    if (!itemValue) return

    if (type === "single") {
      setIsOpen(value === itemValue)
    } else {
      setIsOpen((value).includes(itemValue))
    }
  }, [value, type])

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
      className={\`overflow-hidden transition-all duration-300 ease-in-out \${className || ''}\`}
      style={{
        maxHeight: isOpen ? \`\${contentHeight}px\` : "0px",
        opacity: isOpen ? 1 : 0,
      }}
      {...props}
    >
      <div ref={contentRef} className={\`pb-4 pt-0 \${className || ''}\`}>
        {children}
      </div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

// Helper for cn (simplified for Sandpack)
function cn(...args) {
  return args.filter(Boolean).join(' ');
}
            `,
            "/styles.css": `
/* Basic global styles for Sandpack preview */
body {
  font-family: sans-serif;
  line-height: 1.5;
}
            `,
          }}
          options={{
            editorHeight: 300,
            showLineNumbers: true,
            showTabs: true,
            readOnly: false,
          }}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Prop</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Type</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Default</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>type</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>"single" | "multiple"</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>"single"</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  Determines if one or multiple items can be open.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>value</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>string | string[]</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>undefined</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  The controlled value of the open item(s).
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>defaultValue</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>string | string[]</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>undefined</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  The default value of the open item(s) when uncontrolled.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>onValueChange</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>{"(value: string | string[]) => void"}</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>undefined</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  Callback fired when the open item(s) change.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>collapsible</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>boolean</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>false</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  When <code>type="single"</code>, allows a trigger to collapse its content.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>className</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>string</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  <code>""</code>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                  Additional CSS classes for the accordion container.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
