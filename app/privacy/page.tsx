"use client";

export default function Privacy() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-900">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-gray max-w-none">
              <p className="text-sm text-gray-500 mb-8">
                <strong>Last updated: August 25, 2025</strong>
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, connect servers, or submit tasks. This includes your email address, server connection details (hostname, username, port), and the natural language tasks you submit.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We use your information to provide Otium&apos;s services, including generating and executing Linux commands on your connected servers. We do not store your server passwords or SSH private keys.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information only as required by law or to protect our rights and safety.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We rely on trusted third-party providers, including Vercel, Railway, and WorkOS, to host and operate parts of our infrastructure. These services may process limited data on our behalf as necessary to provide Otium.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We do not use cookies or tracking technologies for advertising. We may use local storage or similar technologies only for essential functionality of the service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We implement appropriate security measures to protect your information. All data is encrypted in transit and at rest. Server connections are established directly between your browser and your servers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We retain your account information and task history for as long as your account is active. You can delete your account and associated data at any time through the application.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                You can access, update, or delete your personal information through your account settings. You may also contact us at{' '}
                <a href="mailto:contact@otiumtech.dev" className="text-blue-600 hover:text-blue-700 underline">
                  contact@otiumtech.dev
                </a>{' '}
                with any privacy-related questions.
              </p>

              <hr className="my-12 border-gray-200" />

              <div className="text-center">
                <p className="text-gray-600">
                  For questions about this privacy policy, contact us at{' '}
                  <a href="mailto:contact@otiumtech.dev" className="text-blue-600 hover:text-blue-700 underline">
                    contact@otiumtech.dev
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
