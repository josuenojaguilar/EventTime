import React from 'react'
import { render, screen } from '@testing-library/react'
import { Events } from '../src/components/Event/Events'

jest.mock('react-router-dom', () => ({
  useOutletContext: () => ({
    events: [],
    isFetching: false,
    addEvent: jest.fn(),
    updateEvent: jest.fn(),
    deleteEvent: jest.fn(),
    categories: []
  })
}))

jest.mock('../src/components/Modal', () => ({
  Modal: ({ children }) => <div data-testid="modal">{children}</div>
}))
jest.mock('../src/components/Event/EventForm', () => ({
  EventForm: () => <div>Formulario</div>
}))
jest.mock('../src/components/Event/EventCard', () => ({
  EventCard: () => <div>Tarjeta de Evento</div>
}))

describe('Componente Events', () => {
  it('muestra el título y el botón para agregar evento', () => {
    render(<Events />)

    expect(screen.getByText('Eventos')).toBeInTheDocument()
    expect(screen.getByText('Agregar Evento')).toBeInTheDocument()
  })
})
