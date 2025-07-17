"use client"

import { Sandpack } from "@codesandbox/sandpack-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from "@/components/ui/modal"

export default function ModalDocsPage() {
  const [isDefaultModalOpen, setIsDefaultModalOpen] = useState(false)
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold tracking-tight">Modal</h1>
          <Badge variant="secondary">Component</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          A flexible and accessible dialog component for displaying content on top of the current page.
        </p>
      </div>

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>A simple modal with a title, description, and action buttons.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setIsDefaultModalOpen(true)}>Open Default Modal</Button>
              <Modal isOpen={isDefaultModalOpen} onClose={() => setIsDefaultModalOpen(false)}>
                <ModalHeader onClose={() => setIsDefaultModalOpen(false)}>
                  <ModalTitle>Welcome to Velora UI</ModalTitle>
                  <ModalDescription>This is a basic modal example.</ModalDescription>
                </ModalHeader>
                <ModalBody>
                  <p className="text-gray-700 dark:text-gray-300">
                    You can place any content here. This modal is fully customizable with Tailwind CSS.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button variant="outline" onClick={() => setIsDefaultModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsDefaultModalOpen(false)}>Confirm</Button>
                </ModalFooter>
              </Modal>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Styling</CardTitle>
              <CardDescription>Customize the modal's appearance using `className` props.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setIsCustomModalOpen(true)}>Open Custom Modal</Button>
              <Modal
                isOpen={isCustomModalOpen}
                onClose={() => setIsCustomModalOpen(false)}
                contentClassName="max-w-sm bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                overlayClassName="bg-blue-900/70"
              >
                <ModalHeader onClose={() => setIsCustomModalOpen(false)}>
                  <ModalTitle className="text-white">Styled Modal</ModalTitle>
                  <ModalDescription className="text-blue-100">
                    This modal has custom background and text colors.
                  </ModalDescription>
                </ModalHeader>
                <ModalBody>
                  <p className="text-blue-50">
                    Feel free to experiment with different Tailwind classes to match your design system.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-100 hover:bg-blue-700 bg-transparent"
                    onClick={() => setIsCustomModalOpen(false)}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Playground</CardTitle>
              <CardDescription>Try different modal configurations live</CardDescription>
            </CardHeader>
            <CardContent>
              <Sandpack
                template="react-ts"
                theme="auto"
                files={{
                  "/App.tsx": `import { useState } from 'react'
import { Button } from './Button'
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from './Modal'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Modal Example</h2>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader onClose={() => setIsOpen(false)}>
          <ModalTitle>Hello from Sandpack!</ModalTitle>
          <ModalDescription>This modal is rendered inside the playground.</ModalDescription>
        </ModalHeader>
        <ModalBody>
          <p>You can edit the code on the right to see changes live.</p>
          <p className="mt-2">Try changing the modal's content or styling!</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}`,
                  "/Button.tsx": `import React from 'react'
import { cn } from './utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'default' | 'lg'
  children: React.ReactNode
}

export function Button({ 
  variant = 'default', 
  size = 'default', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
  
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
    ghost: 'hover:bg-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700'
  }
  
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    default: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg'
  }
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}`,
                  "/Modal.tsx": `import type * as React from "react"
import { cn } from './utils'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  overlayClassName?: string
  contentClassName?: string
}

export const Modal = ({ isOpen, onClose, children, className, overlayClassName, contentClassName }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div
      className={cn("fixed inset-0 z-50 flex items-center justify-center p-4", className)}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out animate-in fade-in",
          overlayClassName,
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className={cn(
          "relative z-10 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-out dark:bg-gray-800 animate-in zoom-in-95 slide-in-from-bottom-2",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  )
}

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void
}

export const ModalHeader = ({ className, children, onClose, ...props }: ModalHeaderProps) => (
  <div className={cn("flex items-center justify-between pb-4", className)} {...props}>
    {children}
    {onClose && (
      <button
        type="button"
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    )}
  </div>
)
ModalHeader.displayName = "ModalHeader"

export const ModalTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-lg font-semibold text-gray-900 dark:text-gray-100", className)} {...props} />
)
ModalTitle.displayName = "ModalTitle"

export const ModalDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-gray-500 dark:text-gray-400", className)} {...props} />
)
ModalDescription.displayName = "ModalDescription"

export const ModalBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("py-4", className)} {...props} />
)
ModalBody.displayName = "ModalBody"

export const ModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex justify-end gap-2 pt-4", className)} {...props} />
)
ModalFooter.displayName = "ModalFooter"
`,
                  "/utils.ts": `export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}`,
                }}
                options={{
                  showNavigator: false,
                  showTabs: false,
                  showLineNumbers: true,
                  editorHeight: 400,
                }}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>npm install @velora/ui</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Import</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from '@velora/ui'`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Basic Example</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from '@/components/ui/modal'

function Example() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader onClose={() => setIsOpen(false)}>
          <ModalTitle>Example Modal</ModalTitle>
          <ModalDescription>This is a description for the example modal.</ModalDescription>
        </ModalHeader>
        <ModalBody>
          <p>This is the main content area of the modal.</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button onClick={() => setIsOpen(false)}>Save Changes</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="props">
          <Card>
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>Available props for the Modal component and its sub-components</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="text-md font-semibold mb-2">Modal Props</h4>
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">isOpen</TableCell>
                    <TableCell className="font-mono text-sm">boolean</TableCell>
                    <TableCell className="font-mono">false</TableCell>
                    <TableCell>Controls the visibility of the modal.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onClose</TableCell>
                    <TableCell className="font-mono text-sm">() ={">"} void</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Callback function invoked when the modal is requested to close.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">children</TableCell>
                    <TableCell className="font-mono text-sm">React.ReactNode</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>The content to be rendered inside the modal.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell className="font-mono text-sm">string</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Additional CSS classes for the modal container.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">overlayClassName</TableCell>
                    <TableCell className="font-mono text-sm">string</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Additional CSS classes for the modal overlay.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">contentClassName</TableCell>
                    <TableCell className="font-mono text-sm">string</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Additional CSS classes for the modal content area.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h4 className="text-md font-semibold mb-2">ModalHeader Props</h4>
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">onClose</TableCell>
                    <TableCell className="font-mono text-sm">() ={">"} void</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Optional callback to close the modal, adds a close button.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">children</TableCell>
                    <TableCell className="font-mono text-sm">React.ReactNode</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Content for the header, typically ModalTitle and ModalDescription.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell className="font-mono text-sm">string</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Additional CSS classes for the header container.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h4 className="text-md font-semibold mb-2">ModalTitle Props</h4>
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">children</TableCell>
                    <TableCell className="font-mono text-sm">React.ReactNode</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>The title text of the modal.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell className="font-mono text-sm">string</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Additional CSS classes for the title element.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h4 className="text-md font-semibold mb-2">ModalDescription Props</h4>
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">children</TableCell>
                    <TableCell className="font-mono text-sm">React.ReactNode</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>The descriptive text of the modal.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell className="font-mono text-sm">string</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Additional CSS classes for the description element.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h4 className="text-md font-semibold mb-2">ModalBody Props</h4>
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">children</TableCell>
                    <TableCell className="font-mono text-sm">React.ReactNode</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>The main content of the modal.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell className="font-mono text-sm">string</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Additional CSS classes for the body container.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h4 className="text-md font-semibold mb-2">ModalFooter Props</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">children</TableCell>
                    <TableCell className="font-mono text-sm">React.ReactNode</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Content for the footer, typically action buttons.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell className="font-mono text-sm">string</TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>Additional CSS classes for the footer container.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
