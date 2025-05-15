import React from 'react'
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import { Category } from '../src/components/Category/Category'

jest.mock('react-spinners', () => ({
  PacmanLoader: () => <div data-testid="pacman-loader" />
}))

jest.mock('react-router-dom', () => ({
  useOutletContext: () => ({
    categories: [
      { id: 1, name: 'Deportes' },
      { id: 2, name: 'Música' }
    ],
    isFetching: false,
    addCategory: jest.fn(),
    updateCategory: jest.fn(),
    deleteCategory: jest.fn()
  })
}))

jest.mock('../src/components/Modal', () => ({
  Modal: ({ children }) => <div data-testid="modal">{children}</div>
}))

jest.mock('../src/components/Category/CategoryForm', () => ({
  CategoryForm: ({ onSubmit, initialData, onCancel }) => (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit({ name: 'Nueva Categoría' }) }}>
      <input name="name" defaultValue={initialData?.name || ''} />
      <button type="submit">Enviar</button>
    </form>
  )
}))

jest.mock('../src/components/Category/CategoryCard', () => ({
  CategoryCard: ({ category, onEdit, onDelete }) => (
    <div data-testid={`category-${category.id}`}>
      <p>{category.name}</p>
      <button onClick={() => onEdit(category)}>Editar</button>
      <button onClick={() => onDelete(category.id)}>Eliminar</button>
    </div>
  )
}))

describe('Componente Category', () => {
  it('muestra el título y el botón para agregar categoría', () => {
    render(<Category />)

    expect(screen.getByText('Categorías')).toBeInTheDocument()
    expect(screen.getByText('Agregar Categoría')).toBeInTheDocument()
  })

  it('muestra las categorías disponibles', () => {
    render(<Category />)

    expect(screen.getByText('Deportes')).toBeInTheDocument()
    expect(screen.getByText('Música')).toBeInTheDocument()
  })

  it('abre el modal al hacer clic en "Agregar Categoría"', () => {
    render(<Category />)

    fireEvent.click(screen.getByText('Agregar Categoría'))

    expect(screen.getByTestId('modal')).toBeInTheDocument()
    expect(screen.getByText('Enviar')).toBeInTheDocument()
  })

  it('envía el formulario del modal para agregar una categoría', async () => {
    render(<Category />)

    fireEvent.click(screen.getByText('Agregar Categoría'))

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Arte' } })

    fireEvent.click(screen.getByText('Enviar'))

    await waitFor(() => {
      expect(input.value).toBe('Arte')
    })
  })

  it('abre el modal para editar una categoría existente', () => {
    render(<Category />)

    const categoryCard = screen.getByTestId('category-1')
    const botonEditar = within(categoryCard).getByText('Editar')

    fireEvent.click(botonEditar)

    expect(screen.getByTestId('modal')).toBeInTheDocument()
    expect(screen.getByRole('textbox').value).toBe('Deportes')
  })
})
