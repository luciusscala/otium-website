"use client";

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function ChangelogPage() {
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(new Set());

  const toggleEntry = (entryId: string) => {
    const newExpanded = new Set(expandedEntries);
    if (newExpanded.has(entryId)) {
      newExpanded.delete(entryId);
    } else {
      newExpanded.add(entryId);
    }
    setExpandedEntries(newExpanded);
  };

  const isExpanded = (entryId: string) => expandedEntries.has(entryId);
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">Changelog</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Product updates, improvements, and fixes across Otium.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="w-full max-w-3xl mx-auto space-y-8">
          <article className="card overflow-hidden">
            {/* Clickable Header */}
            <button
              onClick={() => toggleEntry('initial-launch')}
              className="w-full p-8 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Initial Public Launch</h2>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span>August 25, 2025</span>
                    <span>•</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                      Launch
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mt-4">
                    <strong>
                      <a href="https://app.otiumtech.dev/dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                        Otium is now available!
                      </a>
                    </strong>
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {isExpanded('initial-launch') ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </div>
            </button>

            {/* Expandable Content */}
            {isExpanded('initial-launch') && (
              <div className="px-8 pb-8 border-t border-gray-100">
                <div className="prose prose-gray max-w-none pt-6">
                  <p className="mb-6">
                    Otium is the AI DevOps engineer for everyone. Type what you want—&ldquo;set up nginx with SSL,&rdquo; &ldquo;install MariaDB and create a user,&rdquo; &ldquo;configure a reverse proxy&rdquo;—and Otium turns it into a safe, step‑by‑step plan, executes it on your server, and shows results with clear explanations. No prompts, models, or API keys to manage. Just sign in at app.otiumtech.dev/dashboard and get started.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8">What you can do today</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Natural‑language Linux tasks:</strong> install web servers, databases, configure firewalls, set up monitoring, and more.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Review and approve:</strong> see the planned steps, risk levels, and explanations before anything runs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Execute with confidence:</strong> Otium connects securely to your server and handles the sequence for you.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>See what happened:</strong> live status, command output, and a complete history you can revisit later.</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 mt-8">How to get started</h3>
                  <ol className="space-y-2 mb-6 list-decimal list-inside">
                    <li>Go to app.otiumtech.dev/dashboard and sign in.</li>
                    <li>Add a server connection (host, user, password or key).</li>
                    <li>Describe the outcome you want in plain English.</li>
                    <li>Review the plan, approve, and watch Otium complete the job in minutes.</li>
                  </ol>

                  <h3 className="text-xl font-semibold mb-4 mt-8">Who it&apos;s for</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Individual developers</strong> who want production‑grade servers without learning complex DevOps tooling.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>DevOps and platform teams</strong> that need consistent, audited execution and faster delivery.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>IT organizations</strong> that want safer operations, fewer manual errors, and clear accountability.</span>
                    </li>
                  </ul>

                  <p className="text-gray-600 italic">
                    This is our first public launch—focused on making real Linux administration fast, safe, and accessible from a simple UI.
                  </p>
                </div>
              </div>
            )}
          </article>
        </div>
      </section>
    </div>
  );
}


