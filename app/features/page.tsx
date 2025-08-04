"use client";

import { Terminal, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Features() {
  const features = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Describe tasks in plain English, no scripting required. Simply tell Otium what you want to accomplish and let AI handle the technical details."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "15-45x Faster Execution",
      description: "Complete complex DevOps tasks in minutes instead of hours. What used to take 45-90 minutes manually now takes just 2-3 minutes."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Production-ready with comprehensive logging, rollback capabilities, and interactive approval workflows. Built for enterprise environments."
    }
  ];

  const benefits = [
    "No more complex bash scripts",
    "Eliminate expertise barriers",
    "Reduce deployment time by 95%",
    "Comprehensive audit trails",
    "Interactive approval workflows",
    "Universal Linux distribution support"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="heading-xl mb-8">Features</h1>
          <p className="text-body-lg mb-12 max-w-3xl mx-auto">
            Discover how Otium transforms Linux system administration through intelligent automation.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="heading-lg mb-4">{feature.title}</h3>
                <p className="text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-xl mb-8">Why Choose Otium?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-body">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-xl mb-6">Ready to Transform Your DevOps?</h2>
          <p className="text-body-lg mb-12 max-w-2xl mx-auto">
            Join the future of Linux system administration. Experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="btn-primary flex items-center justify-center text-decoration-none">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/contact" className="btn-secondary text-decoration-none">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
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