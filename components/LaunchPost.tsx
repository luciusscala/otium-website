import Link from 'next/link';

export default function LaunchPost() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Otium: The AI Copilot for Linux & DevOps | Built by Engineers, for Engineers
        </h1>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="text-sm">Published on January 27, 2025</span>
          <span className="mx-2">•</span>
          <span className="text-sm">By Cade Nahama</span>
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
            <Link 
              href="/demo" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Watch Demo
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
  );
}
