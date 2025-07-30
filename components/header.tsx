import Link from 'next/link';

const navigationItems = [
  { href: '/about', label: 'What We Do' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-black text-white">
      {/* Logo - positioned closer to the left */}
      <div className="flex-1 flex justify-start">
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
          Φ
        </Link>
      </div>
      
      {/* Centered Navigation */}
      <nav className="flex space-x-12">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="uppercase text-white hover:text-gray-300 transition-colors font-medium tracking-wide text-sm hover:underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right side spacer to balance the logo */}
      <div className="flex-1"></div>
    </header>
  );
} 