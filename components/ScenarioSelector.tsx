"use client";

import { DemoScenario } from './TerminalSimulator';
import { Clock, Server, Database, Container } from 'lucide-react';

interface ScenarioSelectorProps {
  scenarios: DemoScenario[];
  onSelect: (scenarioId: string) => void;
}

const getScenarioIcon = (scenarioId: string) => {
  switch (scenarioId) {
    case 'nginx-ssl':
      return <Server className="w-8 h-8" />;
    case 'database-setup':
      return <Database className="w-8 h-8" />;
    case 'container-deploy':
      return <Container className="w-8 h-8" />;
    default:
      return <Server className="w-8 h-8" />;
  }
};

export function ScenarioSelector({ scenarios, onSelect }: ScenarioSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="heading-xl mb-4">Choose Your Demo Experience</h2>
        <p className="text-body-lg max-w-2xl mx-auto">
          Select a scenario to see how Otium transforms complex DevOps tasks into simple commands.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="card cursor-pointer group transition-all duration-300 hover:scale-105"
            onClick={() => onSelect(scenario.id)}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-blue-600 group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                {getScenarioIcon(scenario.id)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">{scenario.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{Math.round(scenario.duration / 1000)}s demo</span>
                </div>
              </div>
            </div>
            
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