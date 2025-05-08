import React, { useState } from 'react'
import { mockEvents } from '../../data/mockData'
import toast from 'react-hot-toast'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const useEvents = () => {
  const [events, setEvents] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const getEvents = async(filterByCategory = null) => {
    try {
        setIsFetching(true)
        await delay(1000)

      let filteredEvents = mockEvents

      if (filterByCategory) {
        filteredEvents = mockEvents.filter(
          (event) => event.category === filterByCategory
        )
      }

      setEvents(filteredEvents)
      setIsFetching(false)
    } catch (err) {
        setIsFetching(false)
        console.error(err)
        toast.error('Error al obtener los eventos')
    }
  }

  const addEvent = (newEvent) => {
    setEvents(prev => [...prev, { ...newEvent, id: Date.now() }])
    toast.success('Evento agregado')
  }
  
  const updateEvent = async(updatedEvent) => {
    setEvents(prev =>
      prev.map(ev => (ev.id === updatedEvent.id ? updatedEvent : ev))
    )
    await delay(500)
    toast.success('Evento actualizado')
  }
  
  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(ev => ev.id !== id))
    toast.success('Evento eliminado')
  }
  

  return {
    getEvents,
    isFetching,
    events,
    addEvent,
    updateEvent,
    deleteEvent
  }
}
