'use client'

import { useState } from 'react'
import PhaseSelector from '@/components/PhaseSelector'
import ShoppingList from '@/components/ShoppingList'
import PrintableList from '@/components/PrintableList'
import { GAPS_PHASES } from '@/lib/gaps-data'

export default function Home() {
  const [selectedPhase, setSelectedPhase] = useState<number>(1)

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Lista de Compras GAPS
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Genera listas de compras personalizadas para cada fase de la dieta GAPS. 
            Incluye alimentos permitidos, cantidades recomendadas y notas importantes.
          </p>
        </div>

        {/* Phase Selection */}
        <PhaseSelector 
          selectedPhase={selectedPhase}
          onPhaseChange={setSelectedPhase}
        />

        {/* Shopping List */}
        {selectedPhase && (
          <>
            <ShoppingList phase={selectedPhase} />
            
            {/* Print/Export Options */}
            <div className="mt-8">
              <PrintableList 
                phase={selectedPhase}
                items={GAPS_PHASES[selectedPhase as keyof typeof GAPS_PHASES]?.foods || []}
              />
            </div>
          </>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p className="mb-2">
            <strong>Importante:</strong> Esta aplicación es solo informativa. 
            Consulta siempre con un profesional de la salud antes de comenzar la dieta GAPS.
          </p>
          <p>
            La dieta GAPS debe ser supervisada por un médico o nutricionista especializado.
          </p>
        </footer>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-area, .print-area * {
            visibility: visible;
          }
          .print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          @page {
            margin: 1in;
          }
        }
      `}</style>
    </main>
  )
}