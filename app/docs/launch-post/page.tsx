"use client";

import Link from 'next/link';

export default function LaunchPostPage() {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4">
            <Link 
              href="/docs" 
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center gap-2"
            >
              ← Back to Docs
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Otium: The AI Copilot for Linux & DevOps | Built by Engineers, for Engineers
          </h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="text-sm">Published on August 25, 2025</span>
            <span className="mx-2">•</span>
            <span className="text-sm">By Cade Nahama</span>
            <span className="mx-2">•</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              Launch
            </span>
          </div>
          <div className="w-24 h-1 bg-blue-600 rounded"></div>
        </header>

        {/* Quote Section */}
        <blockquote className="border-l-4 border-blue-600 pl-6 mb-8 bg-blue-50 p-6 rounded-r-lg">
          <p className="text-lg text-gray-700 italic mb-4">
            &ldquo;While working at General Atomics as a systems infrastructure engineer, I constantly faced Linux tasks that meant digging through runbooks, endless research, and tedious terminal work. Each step carried the risk of mistakes that could cause downtime and force extensive recovery planning. I knew there had to be a better way. That&apos;s why I built Otium - an AI copilot to take on the heavy lifting, reduce risk, and give engineers back the time to focus on what matters most: deploying infrastructure with speed and confidence.&rdquo;
          </p>
          <cite className="text-gray-600 font-semibold">— Cade Nahama, CEO & Founder</cite>
        </blockquote>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Otium is the AI DevOps engineer for everyone. Just type what you want in natural language, 
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">&ldquo;set up nginx with SSL,&rdquo;</code> 
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">&ldquo;install MariaDB and create a user,&rdquo;</code> 
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">&ldquo;configure a reverse proxy&rdquo;</code>, 
            and Otium generates a safe, step-by-step plan, executes it directly on your server, and explains the results.
          </p>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            It maintains secure SSH connections, auto-detects your system context, scores risk for every action, and requires approval for all steps. Every command is logged with timestamps and outputs, giving you a full audit trail. Whether you&apos;re an individual developer or a DevOps team, Otium makes Linux administration faster, safer, and more accessible.
          </p>

          {/* Technical Details Section */}
          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Otium Works</h2>
            <p className="text-lg text-gray-700 mb-6">
              Otium uses a combination of large language models and a custom command execution engine to translate natural language into safe, executable Linux commands. When you describe a task, Otium:
            </p>
            <ol className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                <div>
                  <strong className="text-gray-900">Analyzes your system context</strong> - Detects your OS, installed packages, and current configuration
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                <div>
                  <strong className="text-gray-900">Generates a step-by-step plan</strong> - Creates a detailed execution plan with risk assessment for each command
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                <div>
                  <strong className="text-gray-900">Requires explicit approval</strong> - Shows you exactly what will run before execution
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                <div>
                  <strong className="text-gray-900">Executes securely</strong> - Uses SSH with proper authentication and maintains session state
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">5</span>
                <div>
                  <strong className="text-gray-900">Provides real-time feedback</strong> - Shows live command output and execution status
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">6</span>
                <div>
                  <strong className="text-gray-900">Maintains audit trails</strong> - Logs every command with timestamps, outputs, and results
                </div>
              </li>
            </ol>
            <p className="text-lg text-gray-700">
              The system is built on a microservices architecture with real-time WebSocket connections for live status updates, and all commands are executed in isolated environments to prevent system-wide issues.
            </p>
          </div>

          {/* Pricing Section */}
          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing & Availability</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <p className="text-lg text-gray-700 mb-4">
                Otium is currently in public beta and <strong className="text-green-800">completely free to use</strong>. We&apos;re focused on gathering feedback and improving the product before introducing paid tiers.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Tier Includes:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Unlimited server connections
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Full access to all current features
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  No usage limits or restrictions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Priority support for early users
                </li>
              </ul>
            </div>
            <p className="text-lg text-gray-700">
              We plan to introduce paid plans later this year with additional features like team collaboration, advanced analytics, and enterprise integrations. Early users will receive special pricing and grandfathering benefits.
            </p>
          </div>

          {/* Comparison Section */}
          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Otium Differs from Existing Solutions</h2>
            
            <div className="space-y-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">vs. Traditional Configuration Management (Ansible, Chef, Puppet)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>No YAML/JSON configuration files to write or maintain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Natural language interface instead of complex playbooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Real-time execution with immediate feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Built-in risk assessment and approval workflows</span>
                  </li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">vs. Infrastructure as Code (Terraform, CloudFormation)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Focused on server administration, not cloud provisioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Immediate execution vs. declarative planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Works with existing infrastructure without migration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Human-readable audit trails vs. state files</span>
                  </li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">vs. Manual SSH/CLI</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Eliminates the need to remember complex command syntax</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Reduces human error through automated execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Provides built-in safety checks and rollback capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Maintains complete audit trails automatically</span>
                  </li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">vs. AI Coding Assistants (GitHub Copilot, etc.)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Specialized for DevOps and system administration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Executes commands directly on servers, not just code generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Built-in safety mechanisms and approval workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Real-time monitoring and status updates</span>
                  </li>
                </ul>
              </div>
            </div>


          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl my-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your DevOps Workflow?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Try out Otium for free and tell us where it helps, where it falls short, and what you&apos;d love to see next. Your feedback will help shape where we go from here!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://app.OtiumTech.dev" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Try Otium Free
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-gray-600 mb-2">
              <strong>Cheers,</strong><br />
              -Otium Technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
              <a 
                href="mailto:contact@otiumtech.dev" 
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                contact@otiumtech.dev
              </a>
              <a 
                href="https://www.linkedin.com/company/otium-technology-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
