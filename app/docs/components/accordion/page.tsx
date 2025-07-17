"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sandpack } from "@codesandbox/sandpack-react";
import { TabsContent } from "@radix-ui/react-tabs";

export default function AccordionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold tracking-tight">Accordion</h1>
          <Badge variant="secondary">Component</Badge>
        </div>
        <p className="text-xl text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
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
                The Accordion component allows you to create collapsible
                sections of content. It supports both single and multiple item
                expansion.
              </CardDescription>
            </CardHeader>
          </Card>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that you can override with
                Tailwind CSS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Sandpack
            template="react"
            files={{
              "/App.js": `
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion"

export default function App() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that you can override with
            Tailwind CSS.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}         `,
              "/Accordion.tsx": `
            import {cn} from './utils'

            interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
              type?: 'single' | 'multiple'
              collapsible?: boolean
            }

            export function Accordion({
              className,
              type = 'single',
              collapsible = true,
              children,
              ...props
            }: AccordionProps) {
              return (
                <div
                  className={cn(
                    'flex flex-col divide-y divide-muted',
                    className
                  )}
                  {...props}
                >
                  {children}
                </div>
              )
            }
            })
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
        </TabsContent>

        <TabsContent value="code" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>npm install @radix-ui/react-accordion</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Import</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`import { Accordion } from '@velora/ui'`}</code>
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
    <div className="space-y-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that you can override with
            Tailwind CSS.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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
                The Accordion component accepts the following props
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
                    <TableCell className="font-medium">type</TableCell>
                    <TableCell>'single' | 'multiple'</TableCell>
                    <TableCell>'single'</TableCell>
                    <TableCell>
                      Controls whether multiple items can be expanded at the
                      same time.
                    </TableCell>
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
