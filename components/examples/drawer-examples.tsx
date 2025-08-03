"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerBody,
} from "@/components/ui/drawer"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Settings,
  User,
  Bell,
  CreditCard,
  Shield,
  Palette,
  Volume2,
  Wifi,
  Battery,
  Smartphone,
  ShoppingCart,
  Star,
  Heart,
  Share,
  MessageSquare,
  MapPin,
  Calendar,
  Clock,
  Camera,
  Music,
  Headphones,
} from "lucide-react"

export function DrawerExamples() {
  const [volume, setVolume] = React.useState([75])
  const [brightness, setBrightness] = React.useState([60])
  const [notifications, setNotifications] = React.useState(true)
  const [darkMode, setDarkMode] = React.useState(false)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Drawer Examples</h2>
        <p className="text-muted-foreground">
          Explore different drawer patterns and use cases for your applications.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Settings Drawer */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Settings Panel</h3>
          <p className="text-sm text-muted-foreground">
            A comprehensive settings drawer with various controls
          </p>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                Open Settings
              </Button>
            </DrawerTrigger>
            <DrawerContent size="lg">
              <DrawerHeader>
                <DrawerTitle>Settings</DrawerTitle>
                <DrawerDescription>
                  Customize your app preferences and settings.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerBody className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Switch between light and dark themes
                      </p>
                    </div>
                    <Switch
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label className="text-base">Volume</Label>
                    <div className="flex items-center space-x-2">
                      <Volume2 className="h-4 w-4" />
                      <Slider
                        value={volume}
                        onValueChange={setVolume}
                        max={100}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm w-8">{volume[0]}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-base">Brightness</Label>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">🔆</span>
                      <Slider
                        value={brightness}
                        onValueChange={setBrightness}
                        max={100}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm w-8">{brightness[0]}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications on your device
                      </p>
                    </div>
                    <Switch
                      checked={notifications}
                      onCheckedChange={setNotifications}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button>Save Changes</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Profile Drawer */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">User Profile</h3>
          <p className="text-sm text-muted-foreground">
            User profile with avatar and information
          </p>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="w-full">
                <User className="mr-2 h-4 w-4" />
                View Profile
              </Button>
            </DrawerTrigger>
            <DrawerContent size="md">
              <DrawerHeader>
                <DrawerTitle>Profile</DrawerTitle>
                <DrawerDescription>
                  View and edit your profile information.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerBody className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    <Badge variant="secondary">Premium Member</Badge>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input id="displayName" defaultValue="John Doe" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      defaultValue="Software developer passionate about creating amazing user experiences."
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" />
                  </div>
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button>Save Profile</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Product Details Drawer */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Product Details</h3>
          <p className="text-sm text-muted-foreground">
            E-commerce product details with actions
          </p>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                View Product
              </Button>
            </DrawerTrigger>
            <DrawerContent size="lg">
              <DrawerHeader>
                <DrawerTitle>Wireless Headphones</DrawerTitle>
                <DrawerDescription>
                  Premium noise-cancelling wireless headphones
                </DrawerDescription>
              </DrawerHeader>
              <DrawerBody className="space-y-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <Headphones className="h-16 w-16 text-muted-foreground" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        (128 reviews)
                      </span>
                    </div>
                    <div className="text-2xl font-bold">$299.99</div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Experience premium sound quality with our latest wireless headphones.
                    Featuring active noise cancellation, 30-hour battery life, and
                    premium comfort for all-day listening.
                  </p>
                  
                  <div className="space-y-2">
                    <Label>Color</Label>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 rounded-full bg-black border-2 border-primary" />
                      <div className="w-8 h-8 rounded-full bg-white border" />
                      <div className="w-8 h-8 rounded-full bg-blue-500 border" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Select>
                      <SelectTrigger className="w-20">
                        <SelectValue placeholder="1" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">Continue Shopping</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Quick Actions Drawer */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <p className="text-sm text-muted-foreground">
            Mobile-style quick actions panel
          </p>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="w-full">
                <Smartphone className="mr-2 h-4 w-4" />
                Quick Actions
              </Button>
            </DrawerTrigger>
            <DrawerContent size="sm">
              <DrawerHeader>
                <DrawerTitle>Quick Actions</DrawerTitle>
                <DrawerDescription>
                  Common actions and shortcuts
                </DrawerDescription>
              </DrawerHeader>
              <DrawerBody>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="ghost" className="h-16 flex-col space-y-1">
                    <Wifi className="h-6 w-6" />
                    <span className="text-xs">WiFi</span>
                  </Button>
                  <Button variant="ghost" className="h-16 flex-col space-y-1">
                    <Battery className="h-6 w-6" />
                    <span className="text-xs">Battery</span>
                  </Button>
                  <Button variant="ghost" className="h-16 flex-col space-y-1">
                    <Bell className="h-6 w-6" />
                    <span className="text-xs">Do Not Disturb</span>
                  </Button>
                  <Button variant="ghost" className="h-16 flex-col space-y-1">
                    <Camera className="h-6 w-6" />
                    <span className="text-xs">Camera</span>
                  </Button>
                  <Button variant="ghost" className="h-16 flex-col space-y-1">
                    <Music className="h-6 w-6" />
                    <span className="text-xs">Music</span>
                  </Button>
                  <Button variant="ghost" className="h-16 flex-col space-y-1">
                    <MapPin className="h-6 w-6" />
                    <span className="text-xs">Location</span>
                  </Button>
                </div>
              </DrawerBody>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Comments Drawer */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Comments</h3>
          <p className="text-sm text-muted-foreground">
            Comments section with scrollable content
          </p>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                View Comments (12)
              </Button>
            </DrawerTrigger>
            <DrawerContent size="lg">
              <DrawerHeader>
                <DrawerTitle>Comments</DrawerTitle>
                <DrawerDescription>
                  Join the conversation
                </DrawerDescription>
              </DrawerHeader>
              <DrawerBody className="space-y-4">
                {[1, 2, 3, 4, 5].map((comment) => (
                  <div key={comment} className="flex space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>U{comment}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">User {comment}</span>
                        <span className="text-xs text-muted-foreground">2h ago</span>
                      </div>
                      <p className="text-sm">
                        This is a sample comment from user {comment}. It demonstrates
                        how comments would look in a drawer interface.
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <button className="hover:text-foreground">Like</button>
                        <button className="hover:text-foreground">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </DrawerBody>
              <DrawerFooter>
                <div className="flex space-x-2">
                  <Input placeholder="Add a comment..." className="flex-1" />
                  <Button>Post</Button>
                </div>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Full Screen Drawer */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Full Screen</h3>
          <p className="text-sm text-muted-foreground">
            Full screen drawer for immersive experiences
          </p>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Open Calendar
              </Button>
            </DrawerTrigger>
            <DrawerContent size="full">
              <DrawerHeader>
                <DrawerTitle>Calendar</DrawerTitle>
                <DrawerDescription>
                  Full screen calendar view
                </DrawerDescription>
              </DrawerHeader>
              <DrawerBody className="bg-muted/20">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Calendar className="h-16 w-16 mx-auto text-muted-foreground" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Calendar View</h3>
                      <p className="text-muted-foreground">
                        This would be your full screen calendar interface
                      </p>
                    </div>
                  </div>
                </div>
              </DrawerBody>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close Calendar</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  )
}