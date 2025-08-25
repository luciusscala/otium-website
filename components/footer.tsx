import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <div className="space-y-2">
              <Link href="/features" className="block text-gray-400 hover:text-white transition-colors">Features</Link>
              <Link href="/demo" className="block text-gray-400 hover:text-white transition-colors">Demo</Link>
              <Link href="/faq" className="block text-gray-400 hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              <a href="mailto:contact@otiumtech.dev" className="block text-gray-400 hover:text-white transition-colors">contact@otiumtech.dev</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <div className="space-y-2">
              <Link href="/docs" className="block text-gray-400 hover:text-white transition-colors">Documentation</Link>
              <Link href="/docs" className="block text-gray-400 hover:text-white transition-colors">API Reference</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Support</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Otium Technology. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/company/otium-technology-dev" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 