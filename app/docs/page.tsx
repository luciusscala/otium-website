"use client";

import DocumentCard from '../../components/DocumentCard';

export default function DocsPage() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Documentation</h1>
          <p className="text-gray-600">Latest updates and announcements from Otium</p>
        </div>
        
        {/* Document Cards */}
        <div className="space-y-4">
          <DocumentCard
            title="Initial Public Launch"
            date="August 25, 2025"
            tag="Launch"
            preview="Otium is now available!"
            href="/docs/launch-post"
          />
        </div>
      </div>
    </div>
  );
}


