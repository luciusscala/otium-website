"use client";

import { useState } from 'react';
import { DemoStep } from './TerminalSimulator';
import { TypewriterEffect } from './TypewriterEffect';
import { CheckCircle, AlertTriangle, XCircle, Loader } from 'lucide-react';

interface StepRendererProps {
  step: DemoStep;
  isActive: boolean;
  onApproval?: (approved: boolean) => void;
}

export function StepRenderer({ step, isActive, onApproval }: StepRendererProps) {
  const [showContent, setShowContent] = useState(!isActive);

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-400 inline" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-400 inline" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-400 inline" />;
      default:
        return <Loader className="w-4 h-4 text-blue-400 inline animate-spin" />;
    }
  };

  const renderStepContent = () => {
    switch (step.type) {
      case 'analysis':
        return (
          <div className="my-4">
            <div className="text-blue-400 mb-2">
              {getStatusIcon()} Analyzing requirements...
            </div>
            {showContent && (
              <div className="text-gray-300 ml-6 space-y-1">
                {step.content.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            )}
          </div>
        );

      case 'approval':
        return (
          <div className="my-4">
            <div className="text-yellow-400 mb-4">📋 Execution Plan:</div>
            <div className="bg-gray-800 p-4 rounded border-l-4 border-yellow-400">
              <pre className="text-gray-300 whitespace-pre-wrap">{step.content}</pre>
            </div>
            {onApproval && (
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => onApproval(true)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  ✓ Approve & Execute
                </button>
                <button
                  onClick={() => onApproval(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  ✏️ Modify Plan
                </button>
              </div>
            )}
          </div>
        );

      case 'execution':
        return (
          <div className="my-4">
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              {getStatusIcon(step.metadata?.status)}
              <span>{step.content}</span>
              {step.metadata?.progress && (
                <span className="text-gray-400">({step.metadata.progress}%)</span>
              )}
            </div>
            {step.metadata?.details && (
              <div className="ml-6 text-gray-400 text-xs space-y-1">
                {step.metadata.details.map((detail, index) => (
                  <div key={index}>• {detail}</div>
                ))}
              </div>
            )}
          </div>
        );

      case 'completion':
        return (
          <div className="my-4">
            <div className="text-green-400 mb-2">
              <CheckCircle className="w-4 h-4 inline mr-2" />
              Task Completed Successfully!
            </div>
            <div className="bg-gray-800 p-4 rounded border-l-4 border-green-400">
              <pre className="text-gray-300 whitespace-pre-wrap">{step.content}</pre>
            </div>
          </div>
        );

      default:
        return (
          <div className="my-2 text-gray-300">
            {step.content}
          </div>
        );
    }
  };

  return <div>{renderStepContent()}</div>;
}