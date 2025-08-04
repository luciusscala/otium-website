"use client";

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-xl mb-8">Contact Us</h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            Ready to transform your DevOps workflow? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section section-alt">
        <div className="max-w-2xl mx-auto">
          <div className="card">
            {submitStatus === 'success' ? (
              <div className="text-center space-y-6">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
                <h3 className="heading-lg">Message Sent!</h3>
                <p className="text-body">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-primary"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors resize-none"
                    placeholder="Tell us about your DevOps challenges..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  disabled={!isFormValid || isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="text-center mt-8 space-y-4">
            <p className="text-body">
              Or reach out directly at{' '}
              <a href="mailto:contact@otiumtech.dev" className="text-gray-900 hover:text-gray-700 transition-colors underline">
                contact@otiumtech.dev
              </a>
            </p>
            <p className="text-body">
              We typically respond within 24 hours.
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