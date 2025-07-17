"use client";
import { Sandpack } from "@codesandbox/sandpack-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function BadgeDocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold tracking-tight">Badge</h1>
          <Badge variant="secondary">Component</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          A versatile badge component with multiple variants and sizes.
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
              <CardDescription>
                The default badge with primary styling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Badge>Default Badge</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sizes</CardTitle>
              <CardDescription>
                Different badge sizes for various use cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4">
                <Badge>Small</Badge>
                <Badge>Default</Badge>
                <Badge>Large</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Playground</CardTitle>
              <CardDescription>
                Try different badge configurations live
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Sandpack
                template="react-ts"
                theme="auto"
                files={{
                  "/App.tsx": `import { Badge } from './Badge'

export default function App() {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Badge Examples</h2>
      
      <div className="space-y-4">
        <div className="flex gap-2">
          <Badge>Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        
        <div className="flex gap-2">
          <Badge size="sm">Small</Badge>
          <Badge size="default">Default</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </div>
    </div>
  )
}`,
                  "/Badge.tsx": `import React from 'react'
import { cn } from './utils'

interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'default' | 'lg'
  children: React.ReactNode
}

export function Badge({ 
  variant = 'default', 
  size = 'default', 
  className, 
  children, 
  ...props 
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
  
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
    ghost: 'hover:bg-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700'
  }
  
  const sizes = {
    sm: 'h-5 px-2 text-xs',
    default: 'h-6 px-3',
    lg: 'h-8 px-4 text-lg'
  }
  
  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}`,
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
                <code>{`import { Badge } from '@velora/ui'`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Basic Example</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`function Example() {
  return (
    <div className="space-x-2">
      <Badge>Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
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
              <CardDescription>
                Available props for the Badge component
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                    <TableCell className="font-mono">variant</TableCell>
                    <TableCell className="font-mono text-sm">
                      'default' | 'secondary' | 'outline' | 'ghost' |
                      'destructive'
                    </TableCell>
                    <TableCell className="font-mono">'default'</TableCell>
                    <TableCell>The visual style variant of the badge</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">size</TableCell>
                    <TableCell className="font-mono text-sm">
                      'sm' | 'default' | 'lg'
                    </TableCell>
                    <TableCell className="font-mono">'default'</TableCell>
                    <TableCell>The size of the badge</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">children</TableCell>
                    <TableCell className="font-mono text-sm">
                      ReactNode
                    </TableCell>
                    <TableCell className="font-mono">-</TableCell>
                    <TableCell>The content of the badge</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
