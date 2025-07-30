"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: "What is Otium?",
    answer: "Otium is an AI-powered Linux system administration platform that transforms complex DevOps tasks into simple natural language commands. Instead of writing scripts or manually configuring systems, you can simply describe what you want to do in plain English."
  },
  {
    question: "How much faster is Otium compared to traditional methods?",
    answer: "Otium is 15-45x faster than traditional DevOps methods. Tasks that typically take 45-90 minutes manually, or 90-210 minutes with bash scripts, can be completed in just 2-3 minutes with Otium's intelligent automation."
  },
  {
    question: "What Linux distributions does Otium support?",
    answer: "Otium supports all major Linux distributions including Red Hat Enterprise Linux, Ubuntu, CentOS, Debian, and more. Our universal package manager intelligence automatically detects and uses the appropriate package manager (dnf, apt, yum, etc.) for your system."
  },
  {
    question: "Is Otium safe to use in production environments?",
    answer: "Yes, Otium is designed for enterprise production use. It includes comprehensive logging, rollback capabilities, system snapshots, and interactive approval workflows. All operations are logged in YAML manifests for audit trails and can be safely rolled back if needed."
  },
  {
    question: "What types of tasks can Otium handle?",
    answer: "Otium can handle a wide range of DevOps tasks including web server setup (Apache, Nginx), database installation and configuration, SSL certificate generation, security hardening, service management, package installation, and complex multi-step operations."
  },
  {
    question: "Do I need to be a Linux expert to use Otium?",
    answer: "No! That's the beauty of Otium. It democratizes complex Linux administration skills. You can use natural language to describe what you want to accomplish, and Otium's AI will handle the technical details. This eliminates expertise barriers and makes DevOps accessible to everyone."
  },
  {
    question: "How does the approval workflow work?",
    answer: "Otium shows you each step of the operation before executing it. You can review the commands, understand what will happen, and approve each step individually. This gives you full control and visibility into what's happening on your systems."
  },
  {
    question: "Can I integrate Otium with my existing tools?",
    answer: "Yes, Otium is designed to work alongside your existing DevOps tools and workflows. It can integrate with CI/CD pipelines, monitoring systems, and other automation tools. The platform is built with extensibility in mind."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-xl mb-8">FAQ</h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            Find answers to common questions about Otium and our AI-powered DevOps platform.
          </p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="section section-alt">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700 transition-colors text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Additional Contact Info */}
          <div className="text-center mt-8 space-y-4">
            <p className="text-body">
              Still have questions? We&apos;re here to help.
            </p>
            <p className="text-body">
              Contact us at{' '}
              <a href="mailto:contact@otiumtech.dev" className="text-gray-900 hover:text-gray-700 transition-colors underline">
                contact@otiumtech.dev
              </a>
            </p>
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
                  <a href="/features" className="block text-body hover:text-gray-800">Features</a>
                  <a href="/demo" className="block text-body hover:text-gray-800">Demo</a>
                  <a href="/faq" className="block text-body hover:text-gray-800">FAQ</a>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Company</h3>
                <div className="space-y-2">
                  <a href="/about" className="block text-body hover:text-gray-800">What We Do</a>
                  <a href="/contact" className="block text-body hover:text-gray-800">Contact</a>
                  <a href="mailto:contact@otiumtech.dev" className="block text-body hover:text-gray-800">contact@otiumtech.dev</a>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4">Legal</h3>
                <div className="space-y-2">
                  <a href="/privacy" className="block text-body hover:text-gray-800">Privacy Policy</a>
                  <a href="/terms" className="block text-body hover:text-gray-800">Terms of Service</a>
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