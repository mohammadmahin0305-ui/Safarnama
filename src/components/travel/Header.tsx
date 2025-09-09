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
          <a 
            href="#" 
            className="text-white hover:text-primary-light transition-colors duration-300"
          >
            EXPLORE
          </a>
          <a 
            href="#" 
            className="text-white hover:text-primary-light transition-colors duration-300"
          >
            MY TRIPS
          </a>
          <a 
            href="#" 
            className="text-white hover:text-primary-light transition-colors duration-300"
          >
            COMMUNITY
          </a>
        </nav>
        
        {/* Desktop User Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-primary-light hover:bg-white/10">
            <Bell className="h-5 w-5" />
          </Button>
          
          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full p-0">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full border-2 border-transparent hover:border-primary-light transition-colors duration-300" 
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>My Profile</DropdownMenuItem>
              <DropdownMenuItem>Account Settings</DropdownMenuItem>
              <DropdownMenuItem>My Journal</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Logout
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