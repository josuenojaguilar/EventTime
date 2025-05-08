import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCog } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón hamburger para pantallas pequeñas */}
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
          My App
        </div>
        <nav className="p-4 flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2 hover:text-blue-400">
            <FaHome /> Home
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-400">
            <FaUser /> Profile
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-400">
            <FaCog /> Settings
          </a>
        </nav>
      </div>
    </>
  );
}
