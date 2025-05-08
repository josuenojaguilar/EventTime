import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaBars, FaTimes, FaHome, FaCalendarAlt } from "react-icons/fa";
import { MdDomain } from "react-icons/md";
import { VscSymbolEvent } from "react-icons/vsc";
import { Link } from "react-router-dom";

export const Sidebar = ()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Boton pal teléfono */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-blue-600 p-2 rounded"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-800 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:block`}
      >
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          EventTime
        </div>
        <div className="flex-1 overflow-hidden">

        <nav className="p-4 flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 hover:text-blue-400">
            <FaHome /> Home
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 hover:text-blue-400">
            <MdDomain /> Principal
          </Link>
          <Link to="categories" className="flex items-center gap-2 hover:text-blue-400">
            <BiCategory /> Categorias
          </Link>
          <Link to="events" className="flex items-center gap-2 hover:text-blue-400">
            <VscSymbolEvent /> Eventos
          </Link>
          <Link to="calendar" className="flex items-center gap-2 hover:text-blue-400">
            <FaCalendarAlt /> Calendario
          </Link>
        </nav>
        <div className="p-4 text-sm text-gray-400 border-t border-gray-700 mt-auto">
            Creado por Josué Noj
          </div>
      </div>
        </div>
    </>
  );
}
