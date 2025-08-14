'use client'

import { useState, useEffect } from 'react'
import { Check, Plus, Trash2, Edit3, Save, X } from 'lucide-react'
import { GAPS_PHASES, FOOD_CATEGORIES, type GapsFood } from '@/lib/gaps-data'

interface ShoppingItem extends GapsFood {
  id: string
  checked: boolean
  customQuantity?: string
}

interface ShoppingListProps {
  phase: number
}

export default function ShoppingList({ phase }: ShoppingListProps) {
  const [items, setItems] = useState<ShoppingItem[]>([])
  const [customItem, setCustomItem] = useState({ name: '', category: 'Carnes', quantity: '' })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingItem, setEditingItem] = useState<Partial<ShoppingItem>>({})

  useEffect(() => {
    if (phase && GAPS_PHASES[phase as keyof typeof GAPS_PHASES]) {
      const phaseData = GAPS_PHASES[phase as keyof typeof GAPS_PHASES]
      const initialItems: ShoppingItem[] = phaseData.foods.map((food, index) => ({
        ...food,
        id: `phase-${phase}-${index}`,
        checked: false
      }))
      setItems(initialItems)
    }
  }, [phase])

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
  }

  const addCustomItem = () => {
    if (customItem.name.trim()) {
      const newItem: ShoppingItem = {
        ...customItem,
        id: `custom-${Date.now()}`,
        checked: false
      }
      setItems([...items, newItem])
      setCustomItem({ name: '', category: 'Carnes', quantity: '' })
    }
  }

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  const startEditing = (item: ShoppingItem) => {
    setEditingId(item.id)
    setEditingItem(item)
  }

  const saveEdit = () => {
    if (editingId) {
      setItems(items.map(item => 
        item.id === editingId ? { ...item, ...editingItem } : item
      ))
      setEditingId(null)
      setEditingItem({})
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditingItem({})
  }

  const groupedItems = items.reduce((groups, item) => {
    const category = item.category
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(item)
    return groups
  }, {} as Record<string, ShoppingItem[]>)

  const checkedCount = items.filter(item => item.checked).length
  const totalCount = items.length

  if (!phase) {
    return (
      <div className="text-center py-8 text-gray-500">
        Selecciona una fase para ver la lista de compras
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progreso</span>
          <span className="text-sm text-gray-500">{checkedCount}/{totalCount}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gaps-green h-2 rounded-full transition-all duration-300"
            style={{ width: `${totalCount > 0 ? (checkedCount / totalCount) * 100 : 0}%` }}
          ></div>
        </div>
      </div>

      {/* Add Custom Item */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-3 text-gray-800">Agregar Artículo Personalizado</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Nombre del artículo"
            value={customItem.name}
            onChange={(e) => setCustomItem({ ...customItem, name: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gaps-green"
          />
          <select
            value={customItem.category}
            onChange={(e) => setCustomItem({ ...customItem, category: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gaps-green"
          >
            {FOOD_CATEGORIES.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Cantidad"
            value={customItem.quantity}
            onChange={(e) => setCustomItem({ ...customItem, quantity: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gaps-green"
          />
          <button
            onClick={addCustomItem}
            className="bg-gaps-green text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
          >
            <Plus className="w-4 h-4 mr-1" />
            Agregar
          </button>
        </div>
      </div>

      {/* Shopping List by Categories */}
      <div className="space-y-4">
        {FOOD_CATEGORIES.map(category => {
          const categoryItems = groupedItems[category] || []
          if (categoryItems.length === 0) return null

          return (
            <div key={category} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b">
                <h3 className="font-semibold text-gray-800 flex items-center">
                  {category}
                  <span className="ml-2 bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {categoryItems.length}
                  </span>
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {categoryItems.map(item => (
                  <div key={item.id} className="flex items-center space-x-3 group">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        item.checked
                          ? 'bg-gaps-green border-gaps-green text-white'
                          : 'border-gray-300 hover:border-gaps-green'
                      }`}
                    >
                      {item.checked && <Check className="w-3 h-3" />}
                    </button>
                    
                    {editingId === item.id ? (
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                        <input
                          type="text"
                          value={editingItem.name || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                          className="px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                        <input
                          type="text"
                          value={editingItem.quantity || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, quantity: e.target.value })}
                          className="px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                        <div className="flex space-x-2">
                          <button
                            onClick={saveEdit}
                            className="text-green-600 hover:text-green-800"
                          >
                            <Save className="w-4 h-4" />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex-1">
                          <div className={`font-medium ${item.checked ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {item.customQuantity || item.quantity}
                            {item.notes && (
                              <span className="ml-2 text-gaps-blue">• {item.notes}</span>
                            )}
                          </div>
                          {item.substitutions && (
                            <div className="text-xs text-gray-500 mt-1">
                              Sustitutos: {item.substitutions.join(', ')}
                            </div>
                          )}
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                          <button
                            onClick={() => startEditing(item)}
                            className="text-gray-600 hover:text-gaps-blue"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteItem(item.id)}
                            className="text-gray-600 hover:text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}