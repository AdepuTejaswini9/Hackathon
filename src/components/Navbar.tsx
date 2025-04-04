
import React, { useState } from 'react';
import { Activity, Dumbbell, Heart, ListChecks, LogIn, LogOut, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('isSignedIn') === 'true');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('isSignedIn');
    setIsSignedIn(false);
    toast.success("Signed out successfully");
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-6 w-6 text-fitspark-green" />
            <span className="text-xl font-bold bg-gradient-to-r from-fitspark-green to-fitspark-blue bg-clip-text text-transparent">
              FitSpark
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavItem href="#inspiration" icon={<Activity className="w-4 h-4 mr-1" />} label="Inspiration" />
          <NavItem href="#workouts" icon={<Dumbbell className="w-4 h-4 mr-1" />} label="Workouts" />
          <NavItem href="#tips" icon={<ListChecks className="w-4 h-4 mr-1" />} label="Tips" />
          <NavItem href="#motivation" icon={<Heart className="w-4 h-4 mr-1" />} label="Motivation" />
        </nav>
        
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden md:flex">
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
              <Link to="/signin">
                <LogIn className="w-4 h-4 mr-1" />
                Sign In
              </Link>
            </Button>
          )}
          
          <div className="md:hidden">
            <button 
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-4 py-2 space-y-1">
            <MobileNavItem href="#inspiration" label="Inspiration" />
            <MobileNavItem href="#workouts" label="Workouts" />
            <MobileNavItem href="#tips" label="Tips" />
            <MobileNavItem href="#motivation" label="Motivation" />
            {isSignedIn ? (
              <div 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={handleSignOut}
              >
                <div className="flex items-center">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </div>
              </div>
            ) : (
              <Link 
                to="/signin" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

interface NavItemProps {
  href: string;
  icon?: React.ReactNode;
  label: string;
  className?: string;
}

const NavItem = ({ href, icon, label, className }: NavItemProps) => {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center text-sm font-medium transition-colors hover:text-primary",
        className
      )}
    >
      {icon}
      {label}
    </a>
  );
};

interface MobileNavItemProps {
  href: string;
  label: string;
}

const MobileNavItem = ({ href, label }: MobileNavItemProps) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
    >
      {label}
    </a>
  );
};

export default Navbar;
