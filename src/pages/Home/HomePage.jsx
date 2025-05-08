import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 min-h-screen flex flex-col justify-center items-center text-white">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a tu Gestión de Eventos y Recordatorios</h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Organiza y recuerda tus eventos importantes con facilidad. Crea, actualiza y elimina eventos, 
          y nunca olvides una cita o recordatorio importante. ¡Comienza ahora!
        </p>
        <Link
          to="/dashboard"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg text-xl transition duration-300"
        >
          Comienza ahora
        </Link>
      </div>

      {/* Mas info */}
      <div className="flex flex-col md:flex-row justify-around items-center mt-16 p-10">
        <div className="max-w-xs text-center mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">Eventos</h2>
          <p className="text-lg">Gestiona todos tus eventos con facilidad, ya sea personales, de trabajo o reuniones.</p>
        </div>

        <div className="max-w-xs text-center mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">Recordatorios</h2>
          <p className="text-lg">Recibe alertas y notificaciones para que nunca olvides tus citas importantes.</p>
        </div>

        <div className="max-w-xs text-center">
          <h2 className="text-3xl font-semibold mb-4">Calendario</h2>
          <p className="text-lg">Consulta tus eventos y recordatorios de manera rápida y visual con el calendario interactivo.</p>
        </div>
      </div>

      {/* Testimonios */}
      <div className="bg-gray-800 w-full py-16">
        <h2 className="text-3xl text-center font-semibold text-white mb-8">Lo que dicen nuestros usuarios</h2>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
          <div className="max-w-md bg-gray-700 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4 text-white">"¡Me ha cambiado la vida! Ahora nunca olvido mis reuniones importantes. Muy fácil de usar."</p>
            <p className="font-semibold text-white">Ana López</p>
            <p className="text-sm text-white">Emprendedora</p>
          </div>
          <div className="max-w-md bg-gray-700 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4 text-white">"La mejor herramienta para organizar mis eventos. La integración del calendario es perfecta."</p>
            <p className="font-semibold text-white">Carlos Méndez</p>
            <p className="text-sm text-white">Gerente de Marketing</p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 w-full py-6 mt-16">
        <div className="flex flex-col items-center text-white">
          <p className="text-lg">© 2025 Gestión de Eventos. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-400 mb-4">Desarrollado por <span className="text-white font-semibold">Josué Noj</span></p>
          <div className="flex mt-4 space-x-6">
            <a 
              href="https://gt.linkedin.com/in/josu%C3%A9-david-enrique-noj-aguilar-a49052181" 
              className="text-gray-400 hover:text-white"
              target="_blank" rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/josuenojaguilar" 
              className="text-gray-400 hover:text-white"
              target="_blank" rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.instagram.com/david.aguilaar/#" 
              className="text-gray-400 hover:text-white"
              target="_blank" rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
