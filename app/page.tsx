"use client";

import Link from 'next/link';
import { ArrowRight, Zap, Shield, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Gradient Background Block */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-start pt-20 text-center px-4">
          {/* Main Headline */}
          <h1 className="text-7xl md:text-8xl font-bold text-gray-800 mb-8 animate-fade-in">
            The AI DevOps Engineer
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Built to turn natural language into production infrastructure instantly with AI-powered Linux automation.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in mb-24" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://app.otiumtech.dev/dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              Start using now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* App Interface - Half showing at bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
          <div className="relative">
            {/* App Interface Container */}
            <div className="bg-black rounded-t-3xl overflow-hidden shadow-xl border border-gray-200">
              <div className="aspect-[16/9] relative">
                <img 
                  src="/otium-interface.jpeg" 
                  alt="Otium App Interface" 
                  className="w-full h-full object-contain"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Feature 1 */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Commands</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Natural language → Linux commands with intelligent planning and safety checks.</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-xl p-1 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-green-500/20">
            <div className="bg-white rounded-[1.4rem] aspect-[16/9] overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/0E742031-89D8-44F2-B287-72590FAE58E5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Feature 2 */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Smart Connections</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Multi-user isolation, persistent sessions, and real-time monitoring.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-xl p-1 bg-gradient-to-br from-green-500/20 via-blue-500/10 to-purple-500/20">
            <div className="bg-white rounded-[1.4rem] overflow-hidden">
              <video 
                className="w-full h-auto block"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/Screen Recording 2025-08-25 at 09.46.39.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Feature 3 */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Security</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Risk assessment, approvals, and comprehensive audit trails built-in.</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-xl p-1 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-blue-500/20">
            <div className="bg-white rounded-[1.4rem] overflow-hidden">
              <video 
                className="w-full h-auto block"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/Enterprise Security.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Cursor-style Three Feature Cards */}
      <section className="section section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
            <div className="md:max-w-3xl">
              <h2 className="heading-xl mb-2 text-left">Deploy Linux infrastructure faster</h2>
              <p className="text-body-lg text-left">Intelligent, secure, and powerful, Otium is the best way to manage Linux systems with AI.</p>
            </div>
            <div className="md:pt-1 text-left md:text-right">
              <Link href="/features" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm shadow-sm hover:shadow-md transition">
                <span className="text-white">See more features</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
            {/* Card 1 */}
            <div className="card rounded-2xl overflow-hidden p-8 xl:p-10 space-y-5 flex flex-col">
              <h3 className="heading-lg">AI‑Powered Linux Administration</h3>
              <p className="text-body max-w-md">Type what you want. Otium turns natural language into safe, production‑ready Linux commands—for web servers, databases, networking, and more.</p>
              <div className="rounded-2xl h-36 md:h-40 bg-gradient-to-br from-purple-500/25 via-blue-500/20 to-green-500/25 mt-auto flex items-center justify-center">
                <Terminal className="w-16 h-16 text-blue-600/70" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="card rounded-2xl overflow-hidden p-8 xl:p-10 space-y-5 flex flex-col">
              <h3 className="heading-lg">15‑45x Faster DevOps</h3>
              <p className="text-body max-w-md">Hours of manual CLI and scripts become 2–3 minute runs. Plans, approvals, and execution in one streamlined flow.</p>
              <div className="rounded-2xl h-36 md:h-40 bg-gradient-to-br from-emerald-500/25 via-cyan-500/20 to-indigo-500/25 mt-auto flex items-center justify-center">
                <Zap className="w-16 h-16 text-emerald-600/70" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="card rounded-2xl overflow-hidden p-8 xl:p-10 space-y-5 flex flex-col">
              <h3 className="heading-lg">Enterprise Security Built‑In</h3>
              <p className="text-body max-w-md">Risk scoring, approval gates, and comprehensive audit logs by default. Workspace isolation, rate limiting, and dangerous‑command detection keep operations safe.</p>
              <div className="rounded-2xl h-36 md:h-40 bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-blue-500/25 mt-auto flex items-center justify-center">
                <Shield className="w-16 h-16 text-purple-600/70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="heading-xl mb-6">Ready to Transform Your DevOps?</h2>
          <p className="text-body-lg mb-12">
            Join the future of Linux system administration. Experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://app.otiumtech.dev/dashboard" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center text-decoration-none">
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://calendly.com/cnahama-ucsd" target="_blank" rel="noopener noreferrer" className="btn-secondary text-decoration-none">
              Schedule Demo
            </a>
          </div>
          
          {/* Enterprise Contact Box */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg border border-gray-200">
            <span className="text-sm text-gray-600">For Enterprise Inquiries:</span>
            <a href="mailto:contact@otiumtech.dev" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              contact@otiumtech.dev
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}