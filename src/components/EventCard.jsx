import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'

export const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <li className="border p-4 rounded flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p className="text-sm text-gray-600">{new Date(event.date).toLocaleString()}</p>
        <p className="text-sm">{event.description}</p>
        <span className="inline-block text-xs bg-gray-200 px-2 py-1 rounded mt-1">{event.category}</span>
      </div>
      <div className="space-x-2">
        <button 
            onClick={() => onEdit(event)} 
            className="text-indigo-600"
        >     
            <FaEdit />
        </button>
        <button 
            onClick={() => onDelete(event.id)} 
            className="text-red-500"
        >
            <AiFillDelete />
        </button>
      </div>
    </li>
  )
}
