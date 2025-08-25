"use client";

export default function Terms() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-900">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The terms and conditions for using Otium
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

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                By accessing or using Otium, you agree to be bound by these Terms of Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Description</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Otium provides AI-powered Linux administration services. You are responsible for ensuring you have proper authorization to perform actions on any servers you connect.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptable Use</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                You agree not to use Otium for any illegal or unauthorized purpose. You are responsible for all activities that occur under your account and for maintaining the security of your account credentials.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Server Connections</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                You are solely responsible for the servers you connect to Otium. We are not liable for any damage, data loss, or other issues that may occur on your servers as a result of using our service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Availability</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We strive to maintain high availability but do not guarantee uninterrupted service. We may temporarily suspend service for maintenance or updates.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Otium is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We may update these terms from time to time. Continued use of Otium after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For questions about these policies, contact us at{' '}
                <a href="mailto:contact@otiumtech.dev" className="text-blue-600 hover:text-blue-700 underline">
                  contact@otiumtech.dev
                </a>
              </p>

              <hr className="my-12 border-gray-200" />

              <div className="text-center">
                <p className="text-gray-600">
                  For questions about these terms, contact us at{' '}
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
