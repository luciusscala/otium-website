"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 backdrop-blur-sm bg-white/80 border-b border-gray-200 sticky top-0 z-50">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="text-2xl font-medium text-black hover:opacity-80 transition-opacity">
            Φ
          </Link>
        </div>
        
        {/* Desktop Navigation - Hidden on mobile */}
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
        
        {/* Mobile Menu Button - Visible on mobile only */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        
        {/* Right side spacer for desktop */}
        <div className="hidden md:block flex-1"></div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link 
                  href="/" 
                  className="text-2xl font-medium text-black"
                  onClick={closeMobileMenu}
                >
                  Φ
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col p-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      pathname === item.href
                        ? 'bg-gray-100 text-black'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
} 