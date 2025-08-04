"use client";

import { useState, useEffect } from 'react';
import { DemoScenario, DemoStep } from './TerminalSimulator';
// import { TypewriterEffect } from './TypewriterEffect';
// import { StepRenderer } from './StepRenderer';

interface TerminalDisplayProps {
  scenario: DemoScenario;
  currentStep: number;
  isPlaying: boolean;
  isPaused: boolean;
  onStepComplete: () => void;
  onInteractionRequired: () => void;
  onComplete: () => void;
}

export function TerminalDisplay({
  scenario,
  currentStep,
  isPlaying,
  isPaused,
  onStepComplete,
  onInteractionRequired,
  onComplete
}: TerminalDisplayProps) {
  const [showCursor, setShowCursor] = useState(true);

  const handleApproval = (approved: boolean) => {
    if (approved) {
      onStepComplete();
    }
  };

  return (
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
        <div className="text-gray-300">
          <div className="mb-4">
            <span className="text-green-400">user@otium-demo:~$ </span>
            <span className="text-green-400">{scenario.command}</span>
          </div>

          {/* Simple demo content for now */}
          <div className="text-gray-300 space-y-2">
            <div className="text-blue-400">✓ Analyzing requirements...</div>
            <div className="text-blue-400">✓ Planning execution steps...</div>
            <div className="text-yellow-400">📋 Execution Plan Ready</div>
            <div className="bg-gray-800 p-4 rounded border-l-4 border-yellow-400 my-4">
              <div className="text-gray-300">
                Demo scenario: {scenario.title}
                <br />
                Command: {scenario.command}
                <br />
                Status: Interactive demo coming soon!
              </div>
            </div>
            <div className="text-green-400">✅ Demo loaded successfully!</div>
          </div>

          {/* Cursor */}
          {showCursor && (
            <span className="text-green-400 animate-pulse">█</span>
          )}
        </div>
      </div>
    </div>
  );
}