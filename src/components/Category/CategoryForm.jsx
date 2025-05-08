import React, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

export const CategoryForm = ({ onSubmit, initialData, onCancel, categories }) => {
  const [name, setName] = useState('')

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
    }
  }, [initialData])

  const getNextId = () => {
    if (!categories || categories.length === 0) return 1
    const ids = categories.map(c => Number(c.id)).filter(n => !isNaN(n))
    console.log(Math.max(...ids) + 1);
    
    return Math.max(...ids) + 1
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name,
      color: "bg-blue-500"
    }
    if(!initialData){
      data.id = getNextId()
    }
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre de la categoría</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" 
          required
        />
      </div>
      <div className="flex justify-between">
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Guardar</button>
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 text-gray-700 rounded">Cancelar</button>
      </div>
    </form>
  )
}
