import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { useEvents } from '../../shared/hooks/useEvents'
import { BeatLoader } from 'react-spinners'
import { useEventNotifications } from '../../shared/hooks/useEventNotification'

export const DashboardPage = () => {
  const { getEvents, addEvent, updateEvent, deleteEvent, isFetching, events } = useEvents()
  const [categories, setCategories] = useState([])

  useEventNotifications(events)
  useEffect(() => {
    if (events.length === 0 || isFetching) {
      getEvents()
    }
  }, [events])

  if (isFetching) {
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
          deleteEvent
          }}
        />
      </main>
    </div>
  )
}
