import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="app-shell">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="shell-main">
        <header className="topbar">
          <button className="icon-btn" onClick={() => setOpen(true)} aria-label="Открыть меню">
            <Menu size={20} />
          </button>
          <span className="topbar-brand">DEV PATH</span>
        </header>
        <main className="page" key={location.pathname}>
          <div className="page-anim">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
