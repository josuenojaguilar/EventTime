import React, { useState, useEffect } from 'react'
import { mockEvents } from '../../data/mockData'
import toast from 'react-hot-toast'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const useEvents = () => {
  const [events, setEvents] = useState([])
  const [allEvents, setAllEvents] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('events')
    const parsed = stored ? JSON.parse(stored) : mockEvents
    setAllEvents(parsed)
    setEvents(parsed)
    localStorage.setItem('events', JSON.stringify(parsed))
    setIsFetching(false)
  }, [])

  const getEvents = async (filterByCategory = null) => {
    setIsFetching(true)
    const stored = JSON.parse(localStorage.getItem('events'))
    await delay(500)
    if (filterByCategory) {
      setEvents(stored.filter(ev => ev.category === filterByCategory))
      setAllEvents(stored.filter(ev => ev.category === filterByCategory))
    } else {
      console.log('Fetching all events')
      setEvents(stored)
    }
    setIsFetching(false)
  }

  const persist = (updatedEvents) => {
    localStorage.setItem('events', JSON.stringify(updatedEvents))
    setAllEvents(updatedEvents)
    setEvents(updatedEvents)
    setIsFetching(false)
  }

  const addEvent = (newEvent) => {
    const updated = [...allEvents, { ...newEvent, id: Date.now() }]
    persist(updated)
    toast.success('Evento agregado')
  }

  const updateEvent = async (updatedEvent) => {
    const updated = allEvents.map(ev => ev.id === updatedEvent.id ? updatedEvent : ev)
    persist(updated)
    await delay(500)
    toast.success('Evento actualizado')
  }

  const deleteEvent = (id) => {
    const updated = allEvents.filter(ev => ev.id !== id)
    persist(updated)
    toast.success('Evento eliminado')
  }

  return {
    getEvents,
    isFetching,
    events,
    allEvents,
    addEvent,
    updateEvent,
    deleteEvent
  }
}