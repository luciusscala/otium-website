"use client";

import { useState } from 'react';
import { Play, Pause, RotateCcw, CheckCircle, Loader, Clock, DollarSign, Server, Database, Shield, Zap } from 'lucide-react';

interface DemoScenario {
  id: string;
  title: string;
  description: string;
  command: string;
}

const scenarios: DemoScenario[] = [
  {
    id: 'nginx-ssl',
    title: 'Web Server with SSL',
    description: 'Watch Otium automatically set up Nginx with SSL certificates.',
    command: 'otium "set up nginx with SSL for mydomain.com"'
  },
  {
    id: 'database-setup',
    title: 'PostgreSQL Database',
    description: 'See how Otium installs and secures PostgreSQL with backups.',
    command: 'otium "install PostgreSQL with backup and monitoring"'
  }
];

export function SimpleTerminalDemo() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showApproval, setShowApproval] = useState(true);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);

  const scenario = scenarios.find(s => s.id === selectedScenario);

  const startDemo = (scenarioId: string) => {
    setSelectedScenario(scenarioId);
    setIsRunning(false);
    setCurrentStep(0);
    setShowApproval(true);
    setExecutionLogs([]);
  };

  const resetDemo = () => {
    setSelectedScenario(null);
    setIsRunning(false);
    setCurrentStep(0);
    setShowApproval(true);
    setExecutionLogs([]);
  };

  const approveExecution = () => {
    setShowApproval(false);
    setIsRunning(true);
    executeSteps();
  };

  const executeSteps = () => {
    const steps = getExecutionSteps(selectedScenario!);
    
    steps.forEach((step, index) => {
      setTimeout(() => {
        setExecutionLogs(prev => [...prev, step]);
        setCurrentStep(index + 1);
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setExecutionLogs(prev => [...prev, { log: 'COMPLETION', icon: 'success', ...getCompletionMessage(selectedScenario!) }]);
          }, 1000);
        }
      }, step.delay);
    });
  };

  const getExecutionSteps = (scenarioId: string) => {
    if (scenarioId === 'nginx-ssl') {
      return [
        { delay: 2000, log: 'Installing latest stable NGINX package... (apt update && apt install nginx)', icon: 'loader' },
        { delay: 4500, log: 'NGINX v1.18.0 installed successfully with HTTP/2 support', icon: 'check' },
        { delay: 6500, log: 'Creating virtual host configuration for mydomain.com...', icon: 'loader' },
        { delay: 8500, log: 'Virtual host configured at /etc/nginx/sites-available/mydomain.com', icon: 'check' },
        { delay: 10000, log: 'Configuring UFW firewall rules... (ufw allow 80/tcp && ufw allow 443/tcp)', icon: 'loader' },
        { delay: 12000, log: 'Firewall rules applied - HTTP (80) and HTTPS (443) ports opened', icon: 'check' },
        { delay: 14000, log: 'Installing Certbot and requesting Let\'s Encrypt certificate...', icon: 'loader' },
        { delay: 18000, log: 'SSL certificate obtained and installed for mydomain.com', icon: 'check' },
        { delay: 20000, log: 'Configuring strong SSL settings (TLS 1.2+, HSTS, OCSP stapling)...', icon: 'loader' },
        { delay: 22000, log: 'SSL hardening complete - A+ security rating achieved', icon: 'check' },
        { delay: 24000, log: 'Adding security headers (X-Frame-Options, CSP, Referrer-Policy)...', icon: 'loader' },
        { delay: 25500, log: 'Security headers configured for enhanced protection', icon: 'check' },
        { delay: 27000, log: 'Testing NGINX configuration... (nginx -t)', icon: 'loader' },
        { delay: 28500, log: 'Configuration validated - reloading NGINX service', icon: 'check' }
      ];
    } else {
      return [
        { delay: 2000, log: 'Installing PostgreSQL 14 with extensions... (apt install postgresql-14 postgresql-contrib)', icon: 'loader' },
        { delay: 5500, log: 'PostgreSQL 14.9 installed with pg_stat_statements and uuid-ossp extensions', icon: 'check' },
        { delay: 7500, log: 'Generating SSL certificates and configuring secure authentication...', icon: 'loader' },
        { delay: 10000, log: 'SSL certificates created, pg_hba.conf configured for md5 + SSL authentication', icon: 'check' },
        { delay: 12000, log: 'Creating application database and non-superuser role...', icon: 'loader' },
        { delay: 14500, log: 'Database "app_database" created with dedicated "app_user" role (limited privileges)', icon: 'check' },
        { delay: 16500, log: 'Setting up automated backup system with pg_dump...', icon: 'loader' },
        { delay: 19000, log: 'Daily backup cron job configured (2:00 AM) → /var/backups/pgsql/', icon: 'check' },
        { delay: 21000, log: 'Installing performance monitoring via pg_stat_statements...', icon: 'loader' },
        { delay: 23500, log: 'Performance monitoring enabled with pgwatch2 agent configured', icon: 'check' },
        { delay: 25000, log: 'Starting and enabling PostgreSQL service...', icon: 'loader' },
        { delay: 27000, log: 'PostgreSQL is running and accepting secure connections on port 5432', icon: 'check' }
      ];
    }
  };

  const getCompletionMessage = (scenarioId: string) => {
    if (scenarioId === 'nginx-ssl') {
      return {
        title: 'SUCCESS! NGINX with hardened SSL is live at https://mydomain.com',
        accomplishments: [
          'NGINX 1.18.0 installed with HTTP/2 and modern TLS support',
          `Let\'s Encrypt SSL certificate valid until ${new Date(Date.now() + 90*24*60*60*1000).toLocaleDateString()}`,
          'Security grade: A+ (SSL Labs) with HSTS and OCSP stapling',
          'Security headers configured (CSP, X-Frame-Options, Referrer-Policy)',
          'Automatic HTTP to HTTPS redirect with 301 status',
          'UFW firewall configured for ports 80/443 only'
        ],
        totalTime: '4 minutes 45 seconds',
        timeSaved: '2.5–4 hours'
      };
    } else {
      return {
        title: 'SUCCESS! PostgreSQL database is production-ready with monitoring',
        accomplishments: [
          'PostgreSQL 14.9 installed with pg_stat_statements and uuid-ossp extensions',
          'SSL encryption enabled with self-signed certificates',
          'Application database "app_database" with non-superuser role "app_user"',
          'Automated daily backups via pg_dump stored in /var/backups/pgsql/',
          'Performance monitoring active via pg_stat_statements',
          'pgwatch2 agent configured for advanced observability',
          'Service hardened with restricted authentication (md5 + SSL required)'
        ],
        totalTime: '5 minutes 30 seconds',
        timeSaved: '3–5 hours'
      };
    }
  };

  if (!selectedScenario) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="heading-xl mb-4">Choose Your Demo Experience</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Select a scenario to see how Otium transforms complex DevOps tasks into simple commands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="card cursor-pointer group transition-all duration-300 hover:scale-105"
              onClick={() => startDemo(scenario.id)}
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{scenario.title}</h3>
              <p className="text-body mb-4">{scenario.description}</p>
              
              <div className="bg-gray-900 rounded-lg p-3 mb-4">
                <code className="text-green-400 text-sm font-mono">
                  $ {scenario.command}
                </code>
              </div>
              
              <button className="w-full btn-primary group-hover:bg-gray-800 transition-colors">
                Start Demo
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Demo Controls */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">{scenario?.title}</h3>
            <p className="text-sm text-gray-500">Interactive Demo</p>
          </div>
          
          <button
            onClick={resetDemo}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Choose Different Demo
          </button>
        </div>
      </div>

      {/* Terminal */}
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-300 text-sm font-medium">otium-demo</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm min-h-[400px] max-h-[600px] overflow-y-auto">
          <div className="text-gray-300 space-y-4">
            <div className="mb-4">
              <span className="text-green-400">user@otium-demo:~$ </span>
              <span className="text-green-400">{scenario?.command}</span>
            </div>

            <div className="text-blue-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Analyzing request...
            </div>
            <div className="text-blue-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              System: Ubuntu 22.04 LTS detected
            </div>
            <div className="text-blue-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              {scenario?.id === 'nginx-ssl' 
                ? 'Checking DNS resolution for mydomain.com...'
                : 'Validating user privileges and available storage...'
              }
            </div>
            <div className="text-blue-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              {scenario?.id === 'nginx-ssl' 
                ? 'Validating permissions and firewall status...'
                : 'Planning optimal deployment path...'
              }
            </div>
            
            {showApproval && (
              <>
                <div className="text-yellow-400 mt-6 flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  Execution Plan:
                </div>
                <div className="bg-gray-800 p-4 rounded border-l-4 border-yellow-400 my-4">
                  <div className="text-gray-300">
                    {scenario?.id === 'nginx-ssl' ? (
                      <div className="space-y-1">
                        <div>1. Install latest stable NGINX package (v1.18+) via apt</div>
                        <div>2. Configure virtual host for mydomain.com in /etc/nginx/sites-available/</div>
                        <div>3. Set up UFW rules for ports 80 and 443</div>
                        <div>4. Automatically request Let's Encrypt certificate using Certbot</div>
                        <div>5. Enable strong SSL settings (TLS 1.2+, HSTS, OCSP stapling)</div>
                        <div>6. Add secure headers (X-Frame-Options, Referrer-Policy, Content-Security-Policy)</div>
                        <div>7. Test NGINX configuration and reload service</div>
                        <div className="mt-3 text-yellow-400 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Estimated execution time: 4–6 minutes
                        </div>
                        <div className="text-green-400 flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          Estimated manual time saved: 2.5–4 hours
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div>1. Install PostgreSQL 14 with pg_stat_statements and uuid-ossp extensions</div>
                        <div>2. Configure secure authentication (md5 + SSL with self-signed cert)</div>
                        <div>3. Create application database and non-superuser role</div>
                        <div>4. Set up automated daily backups using pg_dump + cron (stored in /var/backups/pgsql)</div>
                        <div>5. Configure performance monitoring via pg_stat_statements and optional pgwatch2 agent</div>
                        <div className="mt-3 text-yellow-400 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Estimated execution time: 5–7 minutes
                        </div>
                        <div className="text-green-400 flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          Estimated manual time saved: 3–5 hours (including backup/monitoring setup)
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 my-6">
                  <button 
                    onClick={approveExecution}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Approve & Execute
                  </button>
                </div>

                <div className="text-green-400 mt-6">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 animate-pulse" />
                    {scenario?.id === 'nginx-ssl' 
                      ? 'nginx with HTTPS, hardened SSL, and HTTP/2 support will be ready at https://mydomain.com'
                      : 'Ready to deploy PostgreSQL with production-ready defaults and observability tooling.'
                    }
                  </div>
                </div>
              </>
            )}

            {isRunning && (
              <div className="mt-6 space-y-2">
                <div className="text-yellow-400 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Executing plan...
                </div>
                {executionLogs.map((log, index) => {
                  if (log.log === 'COMPLETION') {
                    return (
                      <div key={index} className="mt-6 space-y-3">
                        <div className="text-green-400 flex items-center gap-2 text-lg">
                          <CheckCircle className="w-5 h-5" />
                          {log.title}
                        </div>
                        <div className="bg-gray-800 p-4 rounded border-l-4 border-green-400">
                          <div className="text-gray-300 space-y-2">
                            <div className="flex items-center gap-2 text-green-400 font-semibold">
                              <Server className="w-4 h-4" />
                              What was accomplished:
                            </div>
                            {log.accomplishments.map((item, i) => (
                              <div key={i} className="flex items-center gap-2 ml-4">
                                <CheckCircle className="w-3 h-3 text-green-400" />
                                {item}
                              </div>
                            ))}
                            <div className="mt-4 flex items-center gap-4">
                              <div className="flex items-center gap-2 text-yellow-400">
                                <Clock className="w-4 h-4" />
                                Total time: {log.totalTime}
                              </div>
                              <div className="flex items-center gap-2 text-green-400">
                                <DollarSign className="w-4 h-4" />
                                Manual time saved: {log.timeSaved}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <div key={index} className="text-gray-300 pl-4 flex items-center gap-2">
                      {log.icon === 'check' ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Loader className="w-4 h-4 text-blue-400 animate-spin" />
                      )}
                      {log.log}
                    </div>
                  );
                })}
                {isRunning && executionLogs.length > 0 && executionLogs.length < 13 && !executionLogs.some(log => log.log === 'COMPLETION') && (
                  <div className="text-blue-400 pl-4 flex items-center gap-2">
                    <Loader className="w-4 h-4 animate-spin" />
                    Executing...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}