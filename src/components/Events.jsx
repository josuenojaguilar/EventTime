import React, { useEffect, useState } from 'react'
import { useEvents } from '../shared/hooks/useEvents'
import { Modal } from '../components/Modal'
import { EventForm } from '../components/EventForm'
import { EventCard } from './EventCard'
import { PacmanLoader } from 'react-spinners'

export const Events = () => {
  const { events, isFetching, getEvents, addEvent, updateEvent, deleteEvent } = useEvents()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [eventToEdit, setEventToEdit] = useState(null)

  useEffect(() => {
    getEvents()
  }, [])
  

  const handleAdd = () => {
    setEventToEdit(null)
    setIsModalOpen(true)
  }

  const handleEdit = (event) => {
    setEventToEdit(event)
    setIsModalOpen(true)
  }

  const handleSubmit = (data) => {
    if (eventToEdit) {
      updateEvent({ ...data, id: eventToEdit.id })
    } else {
      addEvent(data)
    }
    setIsModalOpen(false)
  }

  if(isFetching) {
    return (
      <div className="w-full flex items-center justify-center h-screen">
        <PacmanLoader />
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 mb-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Eventos</h1>
        <button onClick={handleAdd} className="px-4 py-2 bg-indigo-600 text-white rounded">Agregar Evento</button>
      </div>

      {events?.length === 0 ? (
        <p className="text-gray-600">No hay eventos aún.</p>
      ) : (
        <ul className="space-y-4">
          {events.map(event => (
            <EventCard
              key={event.id} 
              event={event} 
              onEdit={handleEdit} 
              onDelete={deleteEvent} 
            />
          ))}
        </ul>
      )}

      {/* Modal, lo que más me costó :( */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EventForm 
          onSubmit={handleSubmit} 
          initialData={eventToEdit}
          onCancel={() => setIsModalOpen(false)} 
        />
      </Modal>
    </div>
  )
}
