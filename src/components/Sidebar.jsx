import { Link } from "react-router-dom";

export default function Sidebar({isOpen}) {
  return (
    <aside className={`${isOpen ? "w-[280px]" : "w-0"} bg-gray-50 border-r border-[#ddd] flex flex-col transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap`}>

      {/* Botón Nuevo */}
      <div className="p-4 border-b">
        <Link to="/notes/new" className="block w-full text-center bg-[#007aff] text-white py-2 rounded">
          + Nueva Nota
        </Link>
      </div>

      <nav className="flex flex-col grow gap-6 p-4">
        <Link to="/">Dashboard</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      {/* Inferior */}
      <div className="p-4">
        <div className="text-center">Gaby Valencia</div>
      </div>
    </aside>
  );
}