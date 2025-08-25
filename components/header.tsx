"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

// Client-only wrapper to prevent hydration issues
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}

const navigationItems = [
  { href: '/changelog', label: 'Changelog' },
  { href: '/features', label: 'Features' },
  { href: '/faq', label: 'FAQs' },
  { href: '/docs', label: 'Docs' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    // Don't call onScroll immediately to avoid hydration mismatch
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl pt-4">
        <ClientOnly>
          <div className={`w-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'max-w-6xl mx-auto mt-5 md:mt-6' : ''}`}>
            <div
              className={[
                'flex items-center justify-between h-16 transition-all duration-300',
                isScrolled
                  ? 'rounded-2xl bg-white/90 border border-black/10 shadow-lg px-4'
                  : 'bg-white/90'
              ].join(' ')}
            >
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                <span className="text-black font-semibold text-xl">Otium</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${
                    pathname === item.href ? 'active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://app.otiumtech.dev/dashboard" className="btn-ghost">
                Log in
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-black hover:bg-black/10 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        </ClientOnly>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/10 z-50 md:hidden">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-black/10 text-black'
                      : 'text-black/70 hover:bg-black/5 hover:text-black'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-black/10">
                <a href="https://app.otiumtech.dev/dashboard" className="w-full btn-secondary">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
} 