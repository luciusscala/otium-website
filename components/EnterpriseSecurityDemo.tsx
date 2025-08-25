"use client";

import { useState, useEffect } from 'react';
import { Shield, User, CheckCircle, Clock, AlertTriangle, FileText, Lock, BadgeCheck } from 'lucide-react';

export function EnterpriseSecurityDemo() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const workflowSteps = [
    {
      id: 1,
      title: "Request Submitted",
      user: "DevOps Engineer",
      action: "Deploy nginx with SSL",
      risk: "Low",
      status: "pending",
      time: "2 min ago"
    },
    {
      id: 2,
      title: "Risk Assessment",
      user: "Security System",
      action: "Automated scan completed",
      risk: "Low",
      status: "approved",
      time: "1 min ago"
    },
    {
      id: 3,
      title: "Approval Required",
      user: "Security Admin",
      action: "Manual review",
      risk: "Low",
      status: "pending",
      time: "30 sec ago"
    },
    {
      id: 4,
      title: "Approved",
      user: "Security Admin",
      action: "Request approved",
      risk: "Low",
      status: "approved",
      time: "Now"
    },
    {
      id: 5,
      title: "Executing",
      user: "Otium System",
      action: "Deploying infrastructure",
      risk: "Low",
      status: "executing",
      time: "Live"
    }
  ];

  return (
    <div className="bg-white rounded-[1.4rem] aspect-[16/9] p-8">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Security Workflow</h3>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">SOC 2 Compliant</span>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="flex-1 space-y-3">
          {workflowSteps.map((step, index) => (
            <div 
              key={step.id}
              className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all duration-500 ${
                currentStep === index 
                  ? 'border-blue-500 bg-blue-50' 
                  : step.status === 'approved' 
                    ? 'border-green-200 bg-green-50' 
                    : step.status === 'executing'
                      ? 'border-purple-200 bg-purple-50'
                      : 'border-gray-200 bg-gray-50'
              }`}
            >
              {/* Step Number */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep === index 
                  ? 'bg-blue-500 text-white' 
                  : step.status === 'approved' 
                    ? 'bg-green-500 text-white' 
                    : step.status === 'executing'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-300 text-gray-600'
              }`}>
                {step.id}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-gray-900">{step.title}</h4>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{step.user}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">{step.action}</p>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500">Risk:</span>
                    <span className={`font-medium ${
                      step.risk === 'Low' ? 'text-green-600' : 'text-yellow-600'
                    }`}>{step.risk}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-gray-500">{step.time}</span>
                  </div>
                </div>
              </div>

              {/* Status Icon */}
              <div className="flex items-center gap-2">
                {step.status === 'approved' && <CheckCircle className="w-5 h-5 text-green-600" />}
                {step.status === 'pending' && <Clock className="w-5 h-5 text-yellow-600" />}
                {step.status === 'executing' && <div className="w-5 h-5 bg-purple-600 rounded-full animate-pulse" />}
                <span className={`text-xs font-medium capitalize ${
                  step.status === 'approved' ? 'text-green-600' : 
                  step.status === 'executing' ? 'text-purple-600' : 'text-yellow-600'
                }`}>
                  {step.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Security Metrics */}
        <div className="mt-6 grid grid-cols-4 gap-3">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-3 text-white text-center">
            <div className="text-lg font-bold">99.9%</div>
            <div className="text-xs">Approval Rate</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-3 text-white text-center">
            <div className="text-lg font-bold">2.3s</div>
            <div className="text-xs">Avg Response</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 text-white text-center">
            <div className="text-lg font-bold">100%</div>
            <div className="text-xs">Audit Trail</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-3 text-white text-center">
            <div className="text-lg font-bold">0</div>
            <div className="text-xs">Security Incidents</div>
          </div>
        </div>
      </div>
    </div>
  );
}
