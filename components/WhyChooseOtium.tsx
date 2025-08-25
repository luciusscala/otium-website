"use client";

type WhyTile = {
  title: string;
  blurb: string;
  icon: string;
  gradient: string;
  features: string[];
};

const tiles: WhyTile[] = [
  {
    title: "Understands Your Systems",
    blurb: "Otium detects distro, package/service managers, SELinux, and critical services before it plans actions.",
    icon: "🖥️",
    gradient: "from-blue-500 to-indigo-600",
    features: ["Auto-detects Ubuntu, CentOS, RHEL", "Identifies package managers (apt, yum, dnf)", "Recognizes security contexts"]
  },
  {
    title: "Runs Commands (Safely)",
    blurb: "Natural language → validated, OS-aware commands over secure SSH with per-step risk scoring.",
    icon: "⚡",
    gradient: "from-emerald-500 to-teal-600",
    features: ["Risk scoring per command", "OS-aware execution", "Secure SSH connections"]
  },
  {
    title: "Recovers & Guides on Errors",
    blurb: "Automatic retries, health checks, and suggested fixes keep workflows moving.",
    icon: "🔄",
    gradient: "from-orange-500 to-red-500",
    features: ["Smart error diagnosis", "Automatic retry logic", "Contextual fix suggestions"]
  },
  {
    title: "Fast Approvals, Real Control",
    blurb: "Auto-approve low risk; require click-through for medium+ with rationale shown.",
    icon: "✅",
    gradient: "from-purple-500 to-pink-500",
    features: ["Smart auto-approval", "Risk-based workflows", "Clear rationale display"]
  },
  {
    title: "Proven Safety Models",
    blurb: "Detects dangerous patterns (e.g., rm -rf, firewall flush) and blocks before execution.",
    icon: "🛡️",
    gradient: "from-red-500 to-rose-600",
    features: ["Pattern detection", "Destructive command blocking", "Safe alternative suggestions"]
  },
  {
    title: "Compliance-Ready Audit",
    blurb: "Every request, approval, and command is logged with timestamps, risk, and results.",
    icon: "📋",
    gradient: "from-cyan-500 to-blue-500",
    features: ["Complete audit trails", "Timestamp tracking", "Compliance reporting"]
  },
];

export default function WhyChooseOtium() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Why Choose Otium?</h2>
          <p className="mt-4 text-gray-500 text-lg">
            Experience AI-powered Linux operations that are faster, safer, and fully auditable.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tile.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                    {tile.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {tile.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {tile.blurb}
                </p>

                {/* Features list */}
                <div className="space-y-3">
                  {tile.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tile.gradient} mt-2.5 flex-shrink-0`}></div>
                      <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle border glow on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${tile.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-gray-500">
          All actions are risk-scored, approval-gated when needed, validated, rate-limited, and audit-logged. Persistent SSH sessions with health checks keep work moving across major Linux distributions.
        </p>
      </div>
    </section>
  );
}


