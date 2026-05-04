export default function Sidebar() {
  return (
    <aside className="w-[280px] bg-white border-r border-[#ddd] flex flex-col">

      {/* Botón Nuevo */}
      <div className="p-4 border-b">
        <button className="w-full bg-[#007aff] text-white py-2 rounded">
          + Nueva Nota
        </button>
      </div>

      <nav className="flex flex-col grow gap-6 p-4">
        <a className="cursor-pointer hover:bg-gray-50 p-2 rounded" href="">Dashboard</a>
        <a className="cursor-pointer hover:bg-gray-50 p-2 rounded" href="">Notes</a>
        <a className="cursor-pointer hover:bg-gray-50 p-2 rounded" href="">Settings</a>
      </nav>

      {/* Inferior */}
      <div className="p-4 border-t">
        <span>Gaby Valencia</span>
      </div>
    </aside>
  );
}