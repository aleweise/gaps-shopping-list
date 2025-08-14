'use client'

import { GAPS_PHASES } from '@/lib/gaps-data'

interface PhaseSelectorProps {
  selectedPhase: number
  onPhaseChange: (phase: number) => void
}

export default function PhaseSelector({ selectedPhase, onPhaseChange }: PhaseSelectorProps) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Selecciona la Fase GAPS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {Object.entries(GAPS_PHASES).map(([phase, data]) => (
          <button
            key={phase}
            onClick={() => onPhaseChange(parseInt(phase))}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedPhase === parseInt(phase)
                ? 'border-gaps-green bg-gaps-green text-white'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gaps-green'
            }`}
          >
            <div className="font-semibold">Fase {phase}</div>
            <div className="text-sm opacity-90 mt-1">{data.name.split(' - ')[1]}</div>
          </button>
        ))}
      </div>
      
      {selectedPhase && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900">
            {GAPS_PHASES[selectedPhase as keyof typeof GAPS_PHASES].name}
          </h3>
          <p className="text-blue-800 text-sm mt-1">
            {GAPS_PHASES[selectedPhase as keyof typeof GAPS_PHASES].description}
          </p>
          <p className="text-red-700 text-sm mt-2 font-medium">
            <strong>Restricciones:</strong> {GAPS_PHASES[selectedPhase as keyof typeof GAPS_PHASES].restrictions}
          </p>
        </div>
      )}
    </div>
  )
}