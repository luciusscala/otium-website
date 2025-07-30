"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
      
      {/* Centered Navigation */}
      <nav className="flex space-x-8">
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
      
      {/* Right side spacer */}
      <div className="flex-1"></div>
    </header>
  );
} 