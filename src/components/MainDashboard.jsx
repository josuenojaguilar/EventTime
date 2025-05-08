import React from 'react'
import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaBell, FaClipboardList } from 'react-icons/fa'

export const MainDashboard = () => {
  return (
    <div className="flex-1 p-4 flex items-center justify-center">

    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        ¡Bienvenido al Dashboard!
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
        Elige una opción del menú para comenzar a gestionar tus eventos y recordatorios.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full">
        <Link to="events" className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition hover:scale-105">
          <FaClipboardList className="text-indigo-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Eventos</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Crea, edita y organiza todos tus eventos fácilmente.</p>
        </Link>

        <Link to="reminders" className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition hover:scale-105">
          <FaBell className="text-yellow-400 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Recordatorios</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Configura alertas personalizadas para tus eventos importantes.</p>
        </Link>

        <Link to="calendar" className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition hover:scale-105">
          <FaCalendarAlt className="text-green-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Calendario</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Consulta y navega tus eventos en una vista de calendario interactiva.</p>
        </Link>
      </div>
    </div>
    </div>
  )
}
