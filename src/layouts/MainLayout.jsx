import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar isOpen={isSidebarOpen}/>
      <div className="flex flex-col flex-1 w-full min-w-0">
        <header className="border-b flex items-center gap-4 p-4">
          <button onClick={toggleSidebar} className="px-4 py-1 bg-gray-100 border rounded hover:bg-gray-200">
              ☰
          </button>
          <h1>Honey Notes</h1>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
        <footer className="p-4 text-center text-sm text-gray-600 border-t">
          <p>© 2026 HoneyNote. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}