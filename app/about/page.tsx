"use client";

import { Zap, MessageSquare, Shield, Terminal, Clock, Users, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-hero mb-8">Reimagine Sysadmin with AI</h1>
          <p className="text-body-lg max-w-3xl mx-auto mb-12">
            Otium turns natural language into secure, production-grade infrastructure tasks—so you can move 10x faster with zero stress.
          </p>
          
          {/* Demo Terminal */}
          <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm border border-gray-200 max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-300 ml-2 font-medium">otium-demo</span>
            </div>
            <div className="text-green-400 mb-2">$ otium &quot;set up nginx reverse proxy with SSL&quot;</div>
            <div className="text-gray-300 mb-2">Analyzing requirements...</div>
            <div className="text-blue-400 mb-2">✓ Installing nginx</div>
            <div className="text-blue-400 mb-2">✓ Configuring SSL certificate</div>
            <div className="text-green-400">✓ Server ready at https://example.com</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="btn-primary flex items-center justify-center text-decoration-none">
              See It In Action
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href="https://calendly.com/cnahama-ucsd" target="_blank" rel="noopener noreferrer" className="btn-secondary text-decoration-none">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="section section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Speed Benefit */}
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="heading-lg mb-4">Deploy. Patch. Configure. In Seconds.</h3>
              <p className="text-body mb-6">
                What took hours now takes seconds—with zero scripting.
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Install services</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Patch Linux systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Configure networking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Handle storage & permissions</span>
                </div>
              </div>
              <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-600 font-semibold">15–45× faster workflows</span>
              </div>
            </div>

            {/* Natural Language Benefit */}
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="heading-lg mb-4">Type What You Need. Get the Job Done.</h3>
              <p className="text-body mb-6">
                Otium uses secure AI to translate plain English into production-ready actions.
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Natural language input</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Auto-validation and dry run</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Safe execution with rollback</span>
                </div>
              </div>
              <div className="mt-6 p-3 bg-green-50 rounded-lg">
                <span className="text-green-600 font-semibold">Prompt → Plan → Approve → Run</span>
              </div>
            </div>

            {/* Security Benefit */}
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="heading-lg mb-4">Secure. Auditable. Built for Enterprise.</h3>
              <p className="text-body mb-6">
                Production-ready with comprehensive safety measures.
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Sandboxed execution environments</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">YAML audit logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Role-based access controls</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Instant rollback & versioning</span>
                </div>
              </div>
              <div className="mt-6 p-3 bg-purple-50 rounded-lg">
                <span className="text-purple-600 font-semibold">Enterprise-grade security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Compatibility Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-xl mb-8">One Interface. Every System.</h2>
          <p className="text-body-lg mb-12">
            Otium works across your stack—from VMs to containers, bare metal to cloud.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Terminal className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-sm font-medium">Ubuntu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Terminal className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-sm font-medium">RHEL</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Terminal className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-sm font-medium">CentOS</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Terminal className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-sm font-medium">Debian</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Split Section */}
      <section className="section section-alt">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-xl mb-12 text-center">Built for Your Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* DevOps Teams */}
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="heading-lg">For DevOps Teams</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Simplify tooling, reduce context switching</p>
                    <p className="text-sm text-gray-600">Unified workflows across environments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Automate routine sysadmin safely</p>
                    <p className="text-sm text-gray-600">No more bash scripts or tribal knowledge</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Terminal className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Root-level control without root-level risk</p>
                    <p className="text-sm text-gray-600">From human error to human confidence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* IT Organizations */}
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="heading-lg">For IT Organizations</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Reduce overhead & scale ops without hiring</p>
                    <p className="text-sm text-gray-600">Centralize execution and auditing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Prevent errors with guardrails and policy</p>
                    <p className="text-sm text-gray-600">Comprehensive audit trails</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Say it. See the plan. Ship it.</p>
                    <p className="text-sm text-gray-600">Reduce deployment time by 95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-xl mb-6">Ready to Transform Your DevOps?</h2>
          <p className="text-body-lg mb-12">
            Join the future of Linux system administration. Experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="btn-primary flex items-center justify-center text-decoration-none">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href="https://calendly.com/cnahama-ucsd" target="_blank" rel="noopener noreferrer" className="btn-secondary text-decoration-none">
              Schedule Live Demo
            </a>
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