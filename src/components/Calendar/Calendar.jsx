import React, { useState } from 'react'
import { Calendar as Cal } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useOutletContext } from 'react-router-dom'
import './CalendarStyles.css'
import { FaBell } from 'react-icons/fa'

export const Calendar = () => {
  const { events, categories } = useOutletContext()
  const [date, setDate] = useState(new Date())

  const eventsForSelectedDate = events.filter(event =>
    new Date(event.date).toDateString() === date.toDateString()
  )

  const hasEvents = (date) => {
    return events.some(event => new Date(event.date).toDateString() === date.toDateString())
  }

  return (
    <div className="flex-1 p-4 flex items-center justify-center">
      <div className="p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 max-w-md mx-auto">
          <Cal
            onChange={setDate}
            value={date}
            className="react-calendar"
            tileContent={({ date, view }) =>
              view === 'month' && hasEvents(date) ? (
                <div className="flex justify-center items-center mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                </div>
              ) : null
            }
          />
        </div>

        <div className="mt-8 max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Eventos para {date.toLocaleDateString()}
          </h2>
          {eventsForSelectedDate.length > 0 ? (
            <ul className="space-y-4">
              {eventsForSelectedDate.map(event => (
                <li key={event.id} className="border-l-4 border-indigo-500 pl-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{event.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {categories.find(cat => cat.id === event.category)?.name || 'Sin categoría'}
                  </p>

                  <p className="text-gray-700 dark:text-gray-400">{event.description}</p>
                </div>
                <FaBell className="text-2xl text-gray-500 hover:text-indigo-500 cursor-pointer" />
              </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No hay eventos para este día.</p>
          )}
        </div>
      </div>
    </div>
  )
}
