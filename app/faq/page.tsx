"use client";

import { Header } from '@/components/header';
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
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-light text-center mb-12">
          FAQ
        </h1>
        
        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-left text-white hover:text-gray-300 transition-colors text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Additional Contact Info */}
          <div className="text-center mt-8 space-y-4">
            <p className="text-gray-400">
              Still have questions? We're here to help.
            </p>
            <p className="text-gray-400">
              Contact us at{' '}
              <a href="mailto:hello@otium.tech" className="text-white hover:text-gray-300 transition-colors underline">
                hello@otium.tech
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 