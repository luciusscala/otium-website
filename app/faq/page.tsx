"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Mail, MessageCircle } from 'lucide-react';

const faqData = [
  {
    question: "What is Otium?",
    answer: "Otium is an AI‑powered Linux administration platform. You describe the outcome you want in plain English and Otium generates a safe, step‑by‑step plan, executes it on your server, and shows results with clear explanations."
  },
  {
    question: "How much faster is Otium compared to traditional methods?",
    answer: "Typical tasks that take 45–90 minutes with manual CLI, scripts, or config tools complete in 2–3 minutes with Otium—about 15–45× faster, with consistent, repeatable results."
  },
  {
    question: "What Linux distributions does Otium support?",
    answer: "Otium auto‑detects system context and adapts commands for major enterprise families, including Red Hat‑based (RHEL, Rocky, AlmaLinux, CentOS) and Debian‑based (Ubuntu, Debian) systems."
  },
  {
    question: "Is Otium safe to use in production environments?",
    answer: "Yes. Every plan includes risk scoring and explanations, dangerous‑command detection, approval gates for medium/high‑risk actions, rate limiting, and comprehensive audit logs. You review and approve before execution."
  },
  {
    question: "What types of tasks can Otium handle?",
    answer: "Web servers and SSL (nginx/Apache), reverse proxies and load balancing, databases (PostgreSQL/MySQL), firewall and hardening, backups, monitoring stack setup, service/user management, and common system diagnostics."
  },
  {
    question: "Do I need to be a Linux expert to use Otium?",
    answer: "No. You describe the goal in natural language. Otium generates the commands, explains what it will do, and asks for approval when needed. Experts can still inspect, edit, and approve every step."
  },
  {
    question: "How does the approval workflow work?",
    answer: "After you enter a task, Otium creates a step‑by‑step plan with risk levels. You can approve the entire plan or individual steps. Higher‑risk actions require explicit approval by default."
  },
  {
    question: "Can I integrate Otium with my existing tools?",
    answer: "Yes. Otium is UI‑first and also API‑friendly, so you can trigger tasks from your own tools and CI/CD. Most teams start in the UI at app.otiumtech.dev/dashboard and add automation later with the support of the Otium team."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-900">FAQ</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Find answers to common questions about Otium and our AI-powered DevOps platform.
          </p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700 transition-colors text-lg font-medium py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Additional Contact Info */}
          <div className="text-center mt-12 space-y-6">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MessageCircle className="w-5 h-5" />
              <span>Still have questions? We&apos;re here to help.</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href="mailto:contact@otiumtech.dev" className="text-blue-600 hover:text-blue-700 transition-colors underline">
                contact@otiumtech.dev
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
} 