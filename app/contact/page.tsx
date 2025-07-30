import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-light text-center mb-12">
          Contact Us
        </h1>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto w-full space-y-8">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  placeholder="Tell us about your DevOps challenges..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gray-300 text-black hover:bg-gray-400 transition-colors font-semibold py-3"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="text-center space-y-4">
            <p className="text-gray-400">
              Or reach out directly at{' '}
              <a href="mailto:hello@otium.tech" className="text-white hover:text-gray-300 transition-colors underline">
                hello@otium.tech
              </a>
            </p>
            <p className="text-gray-400">
              We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 