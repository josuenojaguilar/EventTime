import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { useEvents } from '../../shared/hooks/useEvents'
import { BeatLoader } from 'react-spinners'
import { useEventNotifications } from '../../shared/hooks/useEventNotification'
import { useCategories } from '../../shared/hooks/useCategories'

export const DashboardPage = () => {
  const { 
    getEvents, 
    addEvent, 
    updateEvent, 
    deleteEvent, 
    isFetching: isFetchingEvents,
    events 
  } = useEvents()

  const {
    getCategories,
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
    isFetching: isFetchingCategories
  } = useCategories()


  useEventNotifications(events)
  useEffect(() => {
    if (events.length === 0 || isFetchingEvents) {
      getEvents()
    }
  }, [events])

  useEffect(() => {
    getCategories()
  }, [])

  if (isFetchingEvents || isFetchingCategories) {
    return (
      <div className="flex items-center justify-center h-screen">
        <BeatLoader />
      </div>
    )
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4 flex overflow-y-auto h-full">
        <Outlet 
          context={{
            events,
            categories,
            addEvent,
            updateEvent,
            deleteEvent,
            addCategory,
            updateCategory,
            deleteCategory
          }}
        />
      </main>
    </div>
  )
}
