import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Menu, Plus, Settings, User, CreditCard, Bell, Search, Filter } from "lucide-react"
import { DrawerExamples } from "@/components/examples/drawer-examples"

export default function DrawerPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Drawer</h1>
          <p className="text-xl text-muted-foreground">
            A drawer component for React, built on top of Vaul. Perfect for mobile-friendly interfaces and contextual actions.
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Mobile First</Badge>
          <Badge variant="secondary">Accessible</Badge>
          <Badge variant="secondary">Customizable</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Usage</h2>
        <p className="text-muted-foreground">
          A simple drawer that slides up from the bottom of the screen.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>Example</CardTitle>
            <CardDescription>Click the button to open a basic drawer</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Basic Drawer</DrawerTitle>
                  <DrawerDescription>
                    This is a simple drawer component that slides up from the bottom.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    You can put any content here. The drawer will automatically adjust its height
                    based on the content inside.
                  </p>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>
      </div>

      {/* Form Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Form in Drawer</h2>
        <p className="text-muted-foreground">
          Drawers are perfect for forms, especially on mobile devices.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>Contact Form Example</CardTitle>
            <CardDescription>A form inside a drawer for better mobile UX</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Contact
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Add New Contact</DrawerTitle>
                  <DrawerDescription>
                    Fill in the information below to add a new contact.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" placeholder="Additional notes..." rows={3} />
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Save Contact</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>
      </div>

      {/* Menu Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Menu Drawer</h2>
        <p className="text-muted-foreground">
          Use drawers to create mobile-friendly navigation menus.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>Navigation Menu</CardTitle>
            <CardDescription>A drawer used as a mobile navigation menu</CardDescription>
          </CardHeader>
          <CardContent>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                  <DrawerDescription>
                    Navigate to different sections of the app.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Separator className="my-2" />
                  <Button variant="ghost" className="w-full justify-start text-red-600">
                    Sign Out
                  </Button>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close Menu</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardContent>
        </Card>
      </div>

      {/* Filter Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Filter Drawer</h2>
        <p className="text-muted-foreground">
          Perfect for complex filtering interfaces on mobile devices.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>Search Filters</CardTitle>
            <CardDescription>A drawer containing search and filter options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <div className="flex-1">
                <Input placeholder="Search products..." />
              </div>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Filter Options</DrawerTitle>
                    <DrawerDescription>
                      Refine your search with these filters.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 space-y-6">
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Price Range</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Min" type="number" />
                        <Input placeholder="Max" type="number" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Category</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="electronics" className="rounded" />
                          <Label htmlFor="electronics" className="text-sm">Electronics</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="clothing" className="rounded" />
                          <Label htmlFor="clothing" className="text-sm">Clothing</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="books" className="rounded" />
                          <Label htmlFor="books" className="text-sm">Books</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Rating</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="4plus" name="rating" className="rounded" />
                          <Label htmlFor="4plus" className="text-sm">4+ Stars</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="3plus" name="rating" className="rounded" />
                          <Label htmlFor="3plus" className="text-sm">3+ Stars</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="any" name="rating" className="rounded" />
                          <Label htmlFor="any" className="text-sm">Any Rating</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Apply Filters</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Installation and Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Install Dependencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-md">
                <code className="text-sm">npm install vaul</code>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Import Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
{`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* API Reference */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Drawer</CardTitle>
              <CardDescription>The root component that manages the drawer state.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="font-medium">Prop</div>
                  <div className="font-medium">Type</div>
                  <div className="font-medium">Default</div>
                </div>
                <Separator />
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>shouldScaleBackground</div>
                  <div>boolean</div>
                  <div>true</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>open</div>
                  <div>boolean</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>onOpenChange</div>
                  <div>(open: boolean) => void</div>
                  <div>-</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>DrawerContent</CardTitle>
              <CardDescription>The main content area of the drawer.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="font-medium">Prop</div>
                  <div className="font-medium">Type</div>
                  <div className="font-medium">Default</div>
                </div>
                <Separator />
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>className</div>
                  <div>string</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>children</div>
                  <div>React.ReactNode</div>
                  <div>-</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Advanced Examples */}
      <DrawerExamples />
    </div>
  )
}