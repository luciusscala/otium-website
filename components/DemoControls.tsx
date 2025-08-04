"use client";

import { Play, Pause, RotateCcw } from 'lucide-react';
interface DemoScenario {
  id: string;
  title: string;
  description: string;
  command: string;
  steps: unknown[];
  duration: number;
}

interface DemoControlsProps {
  isPlaying: boolean;
  isPaused: boolean;
  onTogglePlayPause: () => void;
  onReset: () => void;
  scenario: DemoScenario | undefined;
  currentStep: number;
}

export function DemoControls({
  isPlaying,
  isPaused,
  onTogglePlayPause,
  onReset,
  scenario,
  currentStep
}: DemoControlsProps) {
  if (!scenario) return null;

  const progress = (currentStep / scenario.steps.length) * 100;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">{scenario.title}</h3>
          <p className="text-sm text-gray-500">
            Step {currentStep + 1} of {scenario.steps.length}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePlayPause}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isPlaying && !isPaused ? (
              <>
                <Pause className="w-4 h-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                {isPaused ? 'Resume' : 'Play'}
              </>
            )}
          </button>
          
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}