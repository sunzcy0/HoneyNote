import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <header>
        <h1>Honey Notes</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2026 HoneyNote. All rights reserved.</p>
      </footer>
    </div>
  );
}