import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { useEvents } from '../../shared/hooks/useEvents'
import { BeatLoader } from 'react-spinners'

export const DashboardPage = () => {
  const { getEvents, isFetching, events } = useEvents()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getEvents()
  }, [])

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
      <main className="flex-1 p-4 flex items-center justify-center">
        <Outlet context={{ events: events || [], categories }} />
      </main>
    </div>
  )
}
