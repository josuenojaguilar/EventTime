import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import { CategoryForm } from './CategoryForm'
import { CategoryCard } from './CategoryCard'
import { PacmanLoader } from 'react-spinners'

export const Category = () => {
  const { categories, isFetching, addCategory, updateCategory, deleteCategory } = useOutletContext()
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [categoryToEdit, setCategoryToEdit] = useState(null)

  const handleAdd = () => {
    setCategoryToEdit(null)
    setIsModalOpen(true)
  }

  const handleEdit = (category) => {
    setCategoryToEdit(category)
    setIsModalOpen(true)
  }

  const handleSubmit = (data) => {
    if (categoryToEdit) {
      updateCategory({ ...data, id: categoryToEdit.id })
    } else {
      addCategory(data)
    }
    setIsModalOpen(false)
  }

  if (isFetching) {
    return (
      <div className="w-full flex items-center justify-center h-screen">
        <PacmanLoader />
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 mb-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Categorías</h1>
        <button onClick={handleAdd} className="px-4 py-2 bg-indigo-600 text-white rounded">Agregar Categoría</button>
      </div>

      {categories?.length === 0 ? (
        <p className="text-gray-600">No hay categorías aún.</p>
      ) : (
        <ul className="space-y-4">
          {categories.map(category => (
            <CategoryCard
              key={category.id} 
              category={category} 
              onEdit={handleEdit} 
              onDelete={deleteCategory} 
            />
          ))}
        </ul>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CategoryForm 
          onSubmit={handleSubmit} 
          initialData={categoryToEdit}
          onCancel={() => setIsModalOpen(false)} 
          categories={categories}
        />
      </Modal>
    </div>
  )
}
