import React, { useState, useEffect } from 'react'

export const EventForm = ({ onSubmit, initialData, onCancel }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title)
      setDescription(initialData.description)
      setCategory(initialData.category)
      setDate(initialData.date)
    }
  }, [initialData])

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      title,
      description,
      category,
      date,
    }

    if (initialData && initialData.id) {
      onSubmit({ ...data, id: initialData.id })
    } else {
      onSubmit(data)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold">Título</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">Descripción</label>
        <textarea
          className="mt-1 p-2 w-full border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">Categoría</label>
        <select
          className="mt-1 p-2 w-full border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Selecciona una categoría</option>
          <option value="work">Trabajo</option>
          <option value="personal">Personal</option>
          <option value="meeting">Reunión</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold">Fecha</label>
        <input
          type="datetime-local"
          className="mt-1 p-2 w-full border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onCancel} className="text-gray-600 hover:text-gray-900">Cancelar</button>
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Guardar</button>
      </div>
    </form>
  )
}
