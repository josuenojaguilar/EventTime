import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'

export const CategoryCard = ({ category, onEdit, onDelete }) => {
  return (
    <li className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{category.name}</h3>
        <div className="space-x-2">
                  <button 
                      onClick={() => onEdit(category)} 
                      className="text-indigo-600"
                  >     
                      <FaEdit />
                  </button>
                  <button 
                      onClick={() => onDelete(category.id)} 
                      className="text-red-500"
                  >
                      <AiFillDelete />
                  </button>
        </div>
      </div>
    </li>
  )
}
