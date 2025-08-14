'use client'

import { Printer, Download } from 'lucide-react'
import { GAPS_PHASES, FOOD_CATEGORIES, type GapsFood } from '@/lib/gaps-data'

interface ShoppingItem extends GapsFood {
  id?: string
  checked?: boolean
  customQuantity?: string
}

interface PrintableListProps {
  phase: number
  items: ShoppingItem[]
}

export default function PrintableList({ phase, items }: PrintableListProps) {
  const handlePrint = () => {
    window.print()
  }

  const handleExport = () => {
    const phaseData = GAPS_PHASES[phase as keyof typeof GAPS_PHASES]
    let exportText = `LISTA DE COMPRAS DIETA GAPS - ${phaseData.name}\n`
    exportText += `Fecha: ${new Date().toLocaleDateString('es-ES')}\n\n`
    exportText += `Descripción: ${phaseData.description}\n`
    exportText += `Restricciones: ${phaseData.restrictions}\n\n`

    const groupedItems = items.reduce((groups, item) => {
      const category = item.category
      if (!groups[category]) {
        groups[category] = []
      }
      groups[category].push(item)
      return groups
    }, {} as Record<string, ShoppingItem[]>)

    FOOD_CATEGORIES.forEach(category => {
      const categoryItems = groupedItems[category] || []
      if (categoryItems.length > 0) {
        exportText += `${category.toUpperCase()}:\n`
        categoryItems.forEach((item: ShoppingItem) => {
          exportText += `□ ${item.name} - ${item.customQuantity || item.quantity}`
          if (item.notes) {
            exportText += ` (${item.notes})`
          }
          exportText += '\n'
        })
        exportText += '\n'
      }
    })

    const blob = new Blob([exportText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `lista-compras-gaps-fase-${phase}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (!phase || items.length === 0) {
    return null
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Exportar Lista</h3>
        <div className="flex space-x-2">
          <button
            onClick={handlePrint}
            className="bg-gaps-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center"
          >
            <Printer className="w-4 h-4 mr-2" />
            Imprimir
          </button>
          <button
            onClick={handleExport}
            className="bg-gaps-orange text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Descargar
          </button>
        </div>
      </div>
      
      <div className="text-sm text-gray-600">
        <p>• Imprime esta lista para llevarla al supermercado</p>
        <p>• Descarga como archivo de texto para importar en apps de compras</p>
        <p>• La lista incluye cantidades recomendadas y notas importantes</p>
      </div>
    </div>
  )
}