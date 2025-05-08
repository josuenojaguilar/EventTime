// shared/hooks/useCategories.jsx
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { mockCategories } from '../../data/mockData'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))



export const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('categories')
    const parsed = stored ? JSON.parse(stored) : mockCategories
    setCategories(parsed)
    localStorage.setItem('categories', JSON.stringify(parsed))
  }, [])

  const getCategories = async () => {
    setIsFetching(true)
    await delay(300)
    const stored = JSON.parse(localStorage.getItem('categories')) || []
    setCategories(stored)
    setIsFetching(false)
  }

  const persist = (updatedCategories) => {
    localStorage.setItem('categories', JSON.stringify(updatedCategories))
    setCategories(updatedCategories)
    setIsFetching(false)
  }

  const addCategory = (newCategory) => {
    const updated = [...categories, { ...newCategory }]
    persist(updated)
    toast.success('Categoría agregada')
  }

  const updateCategory = async (updatedCategory) => {
    const updated = categories.map(cat => cat.id === updatedCategory.id ? updatedCategory : cat)
    persist(updated)
    await delay(300)
    toast.success('Categoría actualizada')
  }

  const deleteCategory = (id) => {
    const updated = categories.filter(cat => cat.id !== id)
    persist(updated)
    toast.success('Categoría eliminada')
  }

  return {
    categories,
    isFetching,
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
  }
}
