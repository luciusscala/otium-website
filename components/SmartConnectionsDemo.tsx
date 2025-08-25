"use client";

import { useState, useEffect } from 'react';
import { Wifi, Server, Activity, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export function SmartConnectionsDemo() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const connections = [
    { id: 1, name: "Production Server", status: "connected", latency: "12ms", uptime: "99.9%", users: 3 },
    { id: 2, name: "Staging Environment", status: "connected", latency: "15ms", uptime: "99.8%", users: 2 },
    { id: 3, name: "Database Cluster", status: "connected", latency: "8ms", uptime: "99.95%", users: 1 },
    { id: 4, name: "Load Balancer", status: "connecting", latency: "22ms", uptime: "99.7%", users: 0 }
  ];

  return (
    <div className="bg-white rounded-[1.4rem] aspect-[16/9] p-8">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="text-lg font-semibold text-gray-900">Connection Manager</h3>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Activity className="w-4 h-4" />
              <span>Live</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Real-time</span>
            </div>
          </div>
        </div>

        {/* Connection Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {connections.map((connection, index) => (
            <div 
              key={connection.id}
              className={`bg-gray-50 rounded-xl p-4 border-2 transition-all duration-500 ${
                currentStep === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">{connection.name}</span>
                </div>
                <div className={`flex items-center gap-1 ${
                  connection.status === 'connected' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {connection.status === 'connected' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4 animate-pulse" />
                  )}
                  <span className="text-xs font-medium capitalize">{connection.status}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Latency:</span>
                  <span className="font-medium text-gray-900">{connection.latency}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Uptime:</span>
                  <span className="font-medium text-green-600">{connection.uptime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Active Users:</span>
                  <span className="font-medium text-gray-900">{connection.users}</span>
                </div>
              </div>

              {/* Animated progress bar */}
              <div className="mt-3 bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-green-500 h-1 rounded-full transition-all duration-1000"
                  style={{ width: connection.status === 'connected' ? '100%' : '60%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Bar */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-3 text-white">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4" />
              <span className="text-sm font-medium">Network Health</span>
            </div>
            <div className="text-lg font-bold mt-1">Excellent</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-3 text-white">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span className="text-sm font-medium">Avg Latency</span>
            </div>
            <div className="text-lg font-bold mt-1">14.2ms</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 text-white">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Uptime</span>
            </div>
            <div className="text-lg font-bold mt-1">99.9%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
