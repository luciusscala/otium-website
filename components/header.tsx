"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'What We Do' },
  { href: '/features', label: 'Features' },
  { href: '/demo', label: 'Demo' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-8 py-6 backdrop-blur-sm bg-white/80 border-b border-gray-200 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex-1 flex justify-start">
        <Link href="/" className="text-2xl font-medium text-black hover:opacity-80 transition-opacity">
          Φ
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all hover:after:w-full ${
              pathname === item.href 
                ? 'text-black' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2">
              <Menu className="h-5 w-5 text-gray-700" />
              <span className="sr-only">Open menu</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end" 
            className="w-64 bg-white border border-gray-200 shadow-xl rounded-xl p-2 mt-2"
            sideOffset={8}
          >
            <div className="py-2">
              {navigationItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    href={item.href}
                    className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      pathname === item.href 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {/* Right side spacer */}
      <div className="flex-1 hidden md:block"></div>
    </header>
  );
} 