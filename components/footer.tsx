import Link from 'next/link';

export function Footer() {
  return (
    <footer className="section-alt border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info - OpenAI inspired minimal branding */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-medium text-white hover:opacity-80 transition-opacity">
              Φ
            </Link>
            <p className="text-body max-w-xs">
              The Cursor for DevOps engineers. Transform Linux system administration through intelligent automation.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-white uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-body hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-body hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-body hover:text-white transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-body hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-body hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:contact@otiumtech.dev" className="text-body hover:text-white transition-colors">
                  contact@otiumtech.dev
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-body hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-body hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - refined spacing and typography */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-body opacity-70">
            © 2024 Otium Technology. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://twitter.com/otiumtech" className="text-body hover:text-white transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com/company/otium" className="text-body hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/otium" className="text-body hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 