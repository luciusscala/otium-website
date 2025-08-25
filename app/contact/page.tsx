"use client";

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [sendIssue, setSendIssue] = useState(false);

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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        setSubmitStatus('error');
        setSendIssue(true);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
      setSendIssue(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-900">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ready to transform your DevOps workflow? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        {sendIssue && (
          <div className="max-w-4xl mx-auto px-4 mb-6">
            <div className="rounded-lg border border-yellow-300 bg-yellow-50 text-yellow-900 p-4 text-sm">
              Email delivery is initializing while DNS verification completes. Your message was not sent automatically.
              Please email us directly at
              <a href="mailto:contact@otiumtech.dev" className="underline font-medium ml-1">contact@otiumtech.dev</a>.
            </div>
          </div>
        )}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {submitStatus === 'success' ? (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    <span className="text-white">Send Another Message</span>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
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
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-white">
                        <Send className="w-5 h-5 text-white" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
                  Ready to transform your DevOps workflow? Our team is here to help you get started with Otium.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:contact@otiumtech.dev" className="text-blue-600 hover:text-blue-700 transition-colors text-lg">
                      contact@otiumtech.dev
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl">
                <h4 className="font-semibold text-white mb-3">Schedule a Demo</h4>
                <p className="text-gray-300 mb-4">
                  Want to see Otium in action? Schedule a personalized demo with our team.
                </p>
                <a 
                  href="https://calendly.com/cnahama-ucsd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium w-full flex items-center justify-center transition-colors"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
} 