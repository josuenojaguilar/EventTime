import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';  // Asegúrate de usar esto para las rutas
import { Events } from '../src/components/Event/Events';

// Datos mock para las pruebas
const mockCategories = ['Category 1', 'Category 2'];
const mockEvents = [
  { id: 1, title: 'Reunión de trabajo con el equipo' },
  { id: 2, title: 'Cena con amigos' },
];

// Simula useOutletContext para devolver los valores correctos
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useOutletContext: () => ({
    events: mockEvents,
    isFetching: false,
    addEvent: jest.fn(),
    updateEvent: jest.fn(),
    deleteEvent: jest.fn(),
    categories: mockCategories,
  }),
}));

describe('Events Component', () => {
  test('should render events correctly', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Events />} />
        </Routes>
      </MemoryRouter>
    );

    // Verifica que los eventos se rendericen correctamente
    expect(screen.getByText('Reunión de trabajo con el equipo')).toBeInTheDocument();
    expect(screen.getByText('Cena con amigos')).toBeInTheDocument();
  });
});
