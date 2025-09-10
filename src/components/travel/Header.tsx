import { useState, useRef, useEffect } from "react";
import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 p-4 sm:p-6 lg:p-8 z-20">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-playfair text-3xl font-bold text-white">
          Safarnama
        </h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wider">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-white hover:text-primary-light transition-colors duration-300">
                EXPLORE
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card/95 backdrop-blur-sm border-primary/20">
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Destinations</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Routes</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Popular Places</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-white hover:text-primary-light transition-colors duration-300">
                MY TRIPS
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card/95 backdrop-blur-sm border-primary/20">
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Current Trips</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Past Adventures</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Saved Plans</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-white hover:text-primary-light transition-colors duration-300">
                COMMUNITY
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card/95 backdrop-blur-sm border-primary/20">
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Travel Stories</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Travel Groups</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Find Travel Buddies</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        
        {/* Desktop User Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary-light hover:bg-white/10">
                <Bell className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card/95 backdrop-blur-sm border-primary/20">
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Trip Reminders</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Weather Updates</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10">
                <span className="font-medium">Friend Activities</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Enhanced Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full p-0">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full border-2 border-primary/30 hover:border-primary-light transition-all duration-300 shadow-glow" 
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-card/95 backdrop-blur-sm border-primary/20 shadow-elegant">
              <div className="p-3 border-b border-primary/10">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full border-2 border-primary/30" 
                  />
                  <div>
                    <p className="font-semibold text-foreground">Alex Explorer</p>
                    <p className="text-sm text-muted-foreground">Travel Enthusiast</p>
                  </div>
                </div>
              </div>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10 p-3">
                <div>
                  <div className="font-medium">My Profile</div>
                  <div className="text-xs text-muted-foreground">View and edit profile</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10 p-3">
                <div>
                  <div className="font-medium">Account Settings</div>
                  <div className="text-xs text-muted-foreground">Privacy and preferences</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 focus:bg-primary/10 p-3">
                <div>
                  <div className="font-medium">My Travel Journal</div>
                  <div className="text-xs text-muted-foreground">Stories and memories</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-primary/10" />
              <DropdownMenuItem className="text-destructive hover:bg-destructive/10 focus:bg-destructive/10 p-3">
                <div>
                  <div className="font-medium">Logout</div>
                  <div className="text-xs opacity-70">Sign out of your account</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-primary-light hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col p-4 space-y-4">
            <a 
              href="#" 
              className="text-white hover:text-primary-light transition-colors py-2"
            >
              EXPLORE
            </a>
            <a 
              href="#" 
              className="text-white hover:text-primary-light transition-colors py-2"
            >
              MY TRIPS
            </a>
            <a 
              href="#" 
              className="text-white hover:text-primary-light transition-colors py-2"
            >
              COMMUNITY
            </a>
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary-light hover:bg-white/10">
                <Bell className="h-5 w-5" />
              </Button>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-transparent hover:border-primary-light transition-colors cursor-pointer" 
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;