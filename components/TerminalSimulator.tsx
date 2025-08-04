"use client";

import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, FastForward } from 'lucide-react';
import { ScenarioSelector } from './ScenarioSelector';
import { DemoControls } from './DemoControls';
import { TerminalDisplay } from './TerminalDisplay';

export interface DemoStep {
  type: 'typing' | 'analysis' | 'approval' | 'execution' | 'completion';
  content: string;
  duration: number;
  interactive?: boolean;
  metadata?: {
    progress?: number;
    status?: 'success' | 'warning' | 'error';
    details?: string[];
  };
}

export interface DemoScenario {
  id: string;
  title: string;
  description: string;
  command: string;
  steps: DemoStep[];
  duration: number;
}

interface TerminalSimulatorProps {
  scenarios: DemoScenario[];
  autoStart?: boolean;
  showControls?: boolean;
}

export function TerminalSimulator({ 
  scenarios, 
  autoStart = false, 
  showControls = true 
}: TerminalSimulatorProps) {
  const [currentScenario, setCurrentScenario] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const selectedScenario = scenarios.find(s => s.id === currentScenario);

  const startScenario = (scenarioId: string) => {
    setCurrentScenario(scenarioId);
    setCurrentStep(0);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
  };

  const resetDemo = () => {
    setCurrentScenario(null);
    setCurrentStep(0);
    setIsPlaying(false);
    setIsPaused(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {!currentScenario ? (
        <ScenarioSelector scenarios={scenarios} onSelect={startScenario} />
      ) : (
        <div className="space-y-4">
          {showControls && (
            <DemoControls
              isPlaying={isPlaying}
              isPaused={isPaused}
              onTogglePlayPause={togglePlayPause}
              onReset={resetDemo}
              scenario={selectedScenario}
              currentStep={currentStep}
            />
          )}
          <TerminalDisplay
            scenario={selectedScenario!}
            currentStep={currentStep}
            isPlaying={isPlaying}
            isPaused={isPaused}
            onStepComplete={() => setCurrentStep(prev => prev + 1)}
            onInteractionRequired={() => {}}
            onComplete={() => {}}
          />
        </div>
      )}
    </div>
  );
}