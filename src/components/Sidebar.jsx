import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-[280px] h-full bg-white border-r border-[#ddd] flex flex-col">

      {/* Botón Nuevo */}
      <div className="p-4 border-b">
        <button className="w-full bg-[#007aff] text-white py-2 rounded">
          + Nueva Nota
        </button>
      </div>

      <nav className="flex flex-col grow gap-6 p-4">
        <Link to="/">Dashboard</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      {/* Inferior */}
      <div className="p-4 border-t">
        <span>Gaby Valencia</span>
      </div>
    </aside>
  );
}