"use client";

import { Terminal, Zap, Shield, CheckCircle, ArrowRight, Users, Building2, Search, AlertCircle, User, Play } from 'lucide-react';
import Link from 'next/link';

export default function Features() {
  const coreFeatures = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "AI-Powered Linux Administration",
      description: "Transform natural language into production-ready Linux commands with GPT-powered intelligence. Deploy web servers, configure databases, and manage infrastructure in minutes, not hours.",
      demo: '"Install and configure Apache web server with SSL"'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "15-45x Faster Than Traditional DevOps", 
      description: "What takes hours with manual CLI, scripts, or Ansible takes just 2-3 minutes with Otium. Real enterprise Linux administration with 100% success rate.",
      demo: "2-3 minutes vs 45-90 minutes manual"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security Built-In",
      description: "Multi-factor risk assessment, comprehensive audit logging, and command approval workflows. SOC 2 ready with complete compliance tracking.",
      demo: "risk: low • approval: required(false)"
    }
  ];

  const featureGrid = [
    {
      title: "System Context Awareness",
      description: "Automatically detects Red Hat vs Ubuntu vs CentOS and adapts commands accordingly. No manual configuration needed.",
      icon: <Search className="w-6 h-6" />,
      demo: "Auto-detects package managers (dnf vs apt) and system services"
    },
    {
      title: "Command Safety Analysis", 
      description: "Multi-factor risk scoring and dangerous pattern detection before execution. Interactive approval for high-risk operations.",
      icon: <Play className="w-6 h-6" />,
      demo: "Risk assessment: 2/10 • Safe to execute • Approval: not required"
    },
    {
      title: "Real-Time Monitoring",
      description: "Comprehensive health checks, connection statistics, and performance metrics. Automatic cleanup of dead connections.",
      icon: <AlertCircle className="w-6 h-6" />,
      demo: "3 active connections • 2.3s avg response time • 0 errors"
    }
  ];

  const capabilities = [
    {
      category: "Smart Infrastructure Setup",
      items: [
        "Web servers (Nginx, Apache) tuned for your distro",
        "SSL/TLS certificates issued and installed",
        "Reverse proxies & load balancers configured the right way"
      ],
      outcome: "Get secure, production-ready endpoints in minutes."
    },
    {
      category: "Databases Without the Headaches", 
      items: [
        "PostgreSQL/MySQL install with secure defaults",
        "User roles and permissions applied automatically",
        "Backups scheduled and monitored"
      ],
      outcome: "Reliable, resilient databases — no copy-pasted scripts required."
    },
    {
      category: "Enterprise-Grade Security",
      items: [
        "Firewall and SSH hardening",
        "SELinux/AppArmor-aware execution",
        "Approval gates for medium+ risk changes",
        "Full audit logs for compliance"
      ],
      outcome: "Peace of mind knowing nothing dangerous slips through."
    },
    {
      category: "Day-to-Day Ops Made Easy",
      items: [
        "Install & update packages with context awareness",
        "Manage services, users, and groups safely",
        "Automate monitoring & incident diagnostics"
      ],
      outcome: "One engineer can handle 10× more systems with fewer mistakes."
    }
  ];



  return (
    <div className="min-h-screen pt-16">
      {/* Clean Header */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">Deploy Linux infrastructure faster</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Intelligent, secure, and powerful, Otium is the best way to manage Linux systems with AI.
          </p>
        </div>
      </section>

      {/* First Hero Feature - AI Command Generation */}
      <section className="py-16">
        <div className="relative rounded-3xl overflow-hidden mx-4 md:mx-8 lg:mx-16">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-500 via-red-500 via-purple-600 to-black" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            <div className="flex flex-col justify-center p-8 lg:p-16 text-white">
              <h2 className="text-6xl font-bold mb-4">AI Command Generation</h2>
              <p className="text-xl mb-6 opacity-90 font-medium">Natural Language to Linux Commands</p>
              <p className="text-lg leading-relaxed opacity-80">
                Otium&apos;s AI agent understands your infrastructure context and generates safe, production-ready commands. Simply describe what you want to accomplish and watch it work.
              </p>
            </div>
            <div className="p-8 lg:p-16 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-full max-w-md">
                <div className="bg-white rounded-lg p-4 font-mono text-sm space-y-3">
                  <div className="text-gray-500 text-xs font-medium">AI AGENT</div>
                  <div className="text-gray-600 text-sm leading-relaxed">
                    Install and configure Apache web server with SSL
                  </div>
                  <div className="text-blue-600 text-sm">
                    ▷ Detected Red Hat Enterprise Linux • Generating commands
                  </div>
                  <div className="text-gray-700 text-sm">
                    Generated 12-step deployment plan with SSL certificate generation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid - Small Boxed Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureGrid.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3 border">
                  {feature.demo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Hero Feature - Safety and Approval */}
      <section className="py-16">
        <div className="relative rounded-3xl overflow-hidden mx-4 md:mx-8 lg:mx-16">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-600 via-red-500 via-orange-500 to-yellow-600" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[1000px]">
            <div className="p-8 lg:p-16 flex items-center justify-center order-2 lg:order-1 lg:col-span-8">
              <div className="relative w-full max-w-6xl">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl p-1 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-orange-500/30">
                  <div className="rounded-[1.25rem] bg-white/95 backdrop-blur-sm shadow-md p-3">
                    <div className="rounded-xl overflow-hidden bg-black aspect-[16/9]">
                      <video 
                        className="w-full h-full object-contain"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                      >
                        <source src="/CC8944DE-B3D5-4FC1-87C4-0D628A0DBCEB.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-16 text-white order-1 lg:order-2 lg:col-span-4">
              <h2 className="text-6xl font-bold mb-4">Safety and Approval</h2>
              <p className="text-xl mb-6 opacity-90 font-medium">Multi-Factor Risk Assessment</p>
              <p className="text-lg leading-relaxed opacity-80">
                Comprehensive safety checks with risk scoring and approval workflows. Interactive confirmation for high-risk operations with detailed impact analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-blue-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700 border">
                  {feature.demo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Hero Feature - Command History */}
      <section className="py-16">
        <div className="relative rounded-3xl overflow-hidden mx-4 md:mx-8 lg:mx-16">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-500 via-red-500 via-purple-600 to-black" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[1000px]">
            <div className="flex flex-col justify-center p-8 lg:p-16 text-white lg:col-span-4">
              <h2 className="text-6xl font-bold mb-4">Command History</h2>
              <p className="text-xl mb-6 opacity-90 font-medium">Complete Audit Trail</p>
              <p className="text-lg leading-relaxed opacity-80">
                View detailed command history, execution statistics, and real-time server output. Track performance metrics and maintain comprehensive audit logs.
              </p>
            </div>
            <div className="p-8 lg:p-16 flex items-center justify-center lg:col-span-8">
              <div className="relative w-full max-w-7xl">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl p-1 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-orange-500/30">
                  <div className="rounded-[1.25rem] bg-white/95 backdrop-blur-sm shadow-md p-3">
                    <div className="rounded-xl overflow-hidden bg-black aspect-[16/9]">
                      <video 
                        className="w-full h-full object-contain"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                      >
                        <source src="/Screen Recording 2025-08-24 at 21.49.47.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section - Sleek glass cards with gradient accents */}
      <section className="relative py-28 bg-gradient-to-b from-white via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">What Can Otium Do For You?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Otium doesn&apos;t just run commands, it compresses years of DevOps knowledge into a safe, explainable assistant that makes Linux feel effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-gray-200/80 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-7">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100/70 mb-4">
                    <span className="text-gray-600 text-xs font-semibold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 tracking-tight">{capability.category}</h3>
                  <ul className="space-y-2.5">
                    {capability.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {capability.outcome && (
                    <div className="mt-5 text-sm text-gray-700 bg-gray-50/80 border border-gray-200 rounded-lg px-3 py-2">
                      <span className="font-medium text-gray-900">Outcome:</span> {capability.outcome}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Use Cases Section - refined tiles */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Perfect For</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">From individual developers to enterprise teams, Otium scales with your needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                  <User className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">Individual Developers</h3>
              </div>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5" /><span className="text-gray-700 text-sm leading-relaxed">Launch production servers in minutes</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5" /><span className="text-gray-700 text-sm leading-relaxed">Skip scripts and configs &mdash; describe the outcome in plain English</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-purple-600 mt-0.5" /><span className="text-gray-700 text-sm leading-relaxed">Review and approve every step for safe execution</span></li>
              </ul>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">DevOps Teams</h3>
              </div>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" /><span className="text-gray-700 text-sm leading-relaxed">Eliminate repetitive toil; focus on architecture</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" /><span className="text-gray-700 text-sm leading-relaxed">Standardize deployments across environments and distros</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" /><span className="text-gray-700 text-sm leading-relaxed">Reduce configuration drift with consistent plans and history</span></li>
              </ul>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">IT Organizations</h3>
              </div>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span className="text-gray-700 text-sm leading-relaxed">Scale operations without adding headcount</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span className="text-gray-700 text-sm leading-relaxed">Maintain compliance with built‑in approvals and full audit trails</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /><span className="text-gray-700 text-sm leading-relaxed">Accelerate incident response with fast diagnostics and guided fixes</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your DevOps?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join the future of Linux system administration. Experience the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.otiumtech.dev/dashboard" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 text-decoration-none px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/contact" className="btn-secondary text-decoration-none px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-semibold">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
} 