"use client";

import { useState } from 'react';
import { Play, ArrowRight, Terminal, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Demo() {
  const [activeTab, setActiveTab] = useState('overview');

  const demoSteps = [
    {
      step: 1,
      title: "Describe Your Task",
      description: "Simply tell Otium what you want to accomplish in natural language",
      example: "Set up a web server with SSL certificate for my domain example.com"
    },
    {
      step: 2,
      title: "Review & Approve", 
      description: "Otium shows you exactly what will be executed before running",
      example: "Review commands, understand impact, approve each step"
    },
    {
      step: 3,
      title: "Execute & Monitor",
      description: "Watch as Otium intelligently handles the complex DevOps tasks",
      example: "Automatic package installation, configuration, and verification"
    }
  ];

  const features = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Describe tasks in plain English, no scripting required"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "15-45x Faster Execution", 
      description: "Complete complex tasks in minutes instead of hours"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Production-ready with comprehensive logging and rollback"
    }
  ];

  const getTerminalContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="text-green-400">
            <div className="mb-2">$ otium &quot;set up nginx with SSL for example.com&quot;</div>
            <div className="text-gray-300 mb-4">Analyzing requirements...</div>
            <div className="text-blue-400 mb-2">✓ Installing nginx</div>
            <div className="text-blue-400 mb-2">✓ Configuring SSL certificate</div>
            <div className="text-blue-400 mb-2">✓ Setting up firewall rules</div>
            <div className="text-green-400">✓ Server ready at https://example.com</div>
          </div>
        );
      case 'installation':
        return (
          <div className="text-green-400">
            <div className="mb-2">$ otium install nginx</div>
            <div className="text-gray-300 mb-4">Checking package manager...</div>
            <div className="text-blue-400 mb-2">✓ Installing nginx package...</div>
            <div className="text-blue-400 mb-2">✓ Configuring service...</div>
            <div className="text-green-400">✓ Installation complete</div>
          </div>
        );
      case 'configuration':
        return (
          <div className="text-green-400">
            <div className="mb-2">$ otium configure ssl</div>
            <div className="text-gray-300 mb-4">Generating SSL certificate...</div>
            <div className="text-blue-400 mb-2">✓ Configuring nginx virtual host...</div>
            <div className="text-blue-400 mb-2">✓ Setting up redirects...</div>
            <div className="text-green-400">✓ SSL configuration complete</div>
          </div>
        );
      case 'deployment':
        return (
          <div className="text-green-400">
            <div className="mb-2">$ otium deploy</div>
            <div className="text-gray-300 mb-4">Testing configuration...</div>
            <div className="text-blue-400 mb-2">✓ Reloading nginx...</div>
            <div className="text-blue-400 mb-2">✓ Verifying deployment...</div>
            <div className="text-green-400">✓ Deployment successful!</div>
            <div className="text-blue-400">→ https://mydomain.com is live</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-xl mb-8">See Otium in Action</h1>
          <p className="text-body-lg mb-12 max-w-3xl mx-auto">
            Experience how AI-powered automation transforms Linux system administration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo Video
            </button>
            <a href="https://calendly.com/cnahama-ucsd" target="_blank" rel="noopener noreferrer" className="btn-secondary text-decoration-none">
              Schedule Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="section section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="card">
            <div className="flex flex-wrap gap-2 mb-8">
              {['overview', 'installation', 'configuration', 'deployment'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-gray-100 text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-300 ml-2 font-medium">otium-demo</span>
              </div>
              
              {getTerminalContent()}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-xl mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 font-semibold">{step.step}</span>
                </div>
                <h3 className="heading-lg mb-4">{step.title}</h3>
                <p className="text-body mb-4">{step.description}</p>
                <div className="bg-gray-50 rounded-lg p-4 text-sm">
                  <p className="text-gray-600 font-mono">&quot;{step.example}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section section-alt">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-xl mb-12 text-center">Key Features</h2>
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

      {/* CTA Section */}
      <section className="section text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-xl mb-6">Ready to Transform Your DevOps?</h2>
          <p className="text-body-lg mb-12">
            Join the future of Linux system administration. Get started with Otium today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary flex items-center justify-center text-decoration-none">
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