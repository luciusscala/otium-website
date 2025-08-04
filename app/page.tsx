"use client";

import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - OpenAI inspired layout */}
      <main className="section flex flex-col items-center justify-center min-h-[calc(100vh-120px)] pattern-dots">
        <div className="max-w-5xl mx-auto text-center px-4">
          {/* Hero Headline with proper typography hierarchy */}
          <h1 className="heading-hero mb-6 md:mb-8">
            <Typewriter
              words={['The Cursor for DevOps engineers.']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={10000}
            />
          </h1>
          
          {/* Subheadline with better hierarchy */}
          <p className="text-body-lg text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Transform Linux system administration through intelligent automation. 
            Our AI-powered platform understands natural language requests and executes 
            complex DevOps tasks automatically.
          </p>
          
          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 px-4">
            <Link href="/demo" className="btn-primary flex items-center justify-center text-decoration-none">
              Book a Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/about" className="btn-secondary text-decoration-none">
              Learn More
            </Link>
          </div>

          {/* Backed by UCSD Section with refined styling */}
          <div className="text-center px-4">
            <p className="text-body mb-6 opacity-70">Backed by</p>
            <div className="flex justify-center items-center">
              <div className="card p-4 sm:p-6 md:p-8 inline-flex items-center justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[160px] lg:min-w-[200px]">
                <img 
                  src="/ucsd-logo.png" 
                  alt="UC San Diego" 
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 opacity-90 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="section">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-medium mb-4">Product</h3>
                <div className="space-y-2">
                  <Link href="/features" className="block text-body hover:text-gray-800">Features</Link>
                  <Link href="/demo" className="block text-body hover:text-gray-800">Demo</Link>
                  <Link href="/faq" className="block text-body hover:text-gray-800">FAQ</Link>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Company</h3>
                <div className="space-y-2">
                  <Link href="/about" className="block text-body hover:text-gray-800">What We Do</Link>
                  <Link href="/contact" className="block text-body hover:text-gray-800">Contact</Link>
                  <a href="mailto:contact@otiumtech.dev" className="block text-body hover:text-gray-800">contact@otiumtech.dev</a>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Legal</h3>
                <div className="space-y-2">
                  <Link href="/privacy" className="block text-body hover:text-gray-800">Privacy Policy</Link>
                  <Link href="/terms" className="block text-body hover:text-gray-800">Terms of Service</Link>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-body">© 2025 Otium Technology. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <span className="text-body">Twitter</span>
                <span className="text-body">LinkedIn</span>
                <span className="text-body">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}