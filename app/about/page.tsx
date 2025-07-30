"use client";

import { Header } from '@/components/header';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-light text-center mb-12">
          What we do
        </h1>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xl text-gray-300 leading-relaxed">
            We transform Linux system administration through intelligent automation. 
            Our AI-powered platform understands natural language requests and executes 
            complex DevOps tasks automatically.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">15-45x Faster</h3>
              <p className="text-gray-400">
                Complete complex tasks in minutes instead of hours with our intelligent automation.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Natural Language</h3>
              <p className="text-gray-400">
                Simply describe what you want to do in plain English. No scripts or complex configurations needed.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Enterprise Ready</h3>
              <p className="text-gray-400">
                Production-grade capabilities with SSL, security hardening, and comprehensive logging.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 