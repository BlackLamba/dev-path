import { NavLink } from "react-router-dom";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  Flame,
  LayoutDashboard,
  Map,
  X,
} from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { computeStats, currentDay } from "../utils/progress";
import { LESSONS } from "../data/course";
import { ProgressBar } from "./ui";
import { plural } from "../utils/format";

const NAV = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/roadmap", label: "Roadmap", icon: Map, end: false },
  { to: "/today", label: "Today", icon: CalendarDays, end: false },
  { to: "/practice", label: "Practice", icon: ClipboardCheck, end: false },
  { to: "/materials", label: "Materials", icon: BookOpen, end: false },
  { to: "/progress", label: "Progress", icon: BarChart3, end: false },
];

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { state, completed } = useProgress();
  const stats = computeStats(completed, state.checks);
  const today = currentDay(state.checks);

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-head">
          <div className="logo">
            <span className="logo-mark">
              <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden>
                <rect width="32" height="32" rx="7" fill="rgba(110,139,255,0.14)" />
                <path
                  d="M9 22V10l7 6 7-6v12"
                  stroke="#6e8bff"
                  strokeWidth="2.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="logo-text">
              <span className="logo-name">DEV PATH</span>
              <span className="logo-sub">Backend + AI Engineering</span>
            </span>
          </div>
          <button className="icon-btn sidebar-close" onClick={onClose} aria-label="Закрыть меню">
            <X size={18} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {NAV.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              <Icon size={17} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-progress card">
          <div className="sp-label">Общий прогресс</div>
          <ProgressBar value={stats.daysPct} />
          <div className="sp-row">
            <span className="sp-value mono">
              {stats.daysDone} / {stats.daysTotal}
            </span>
            <span className="sp-pct">{stats.daysPct}%</span>
          </div>
          <div className="sp-sub">{stats.daysPct > 0 ? `${stats.daysPct}% программы пройдено` : "Открой первый день"}</div>
        </div>

        <div className="sidebar-streak">
          <Flame size={16} className={stats.current > 0 ? "streak-fire" : ""} />
          <span>
            Серия: <b>{stats.current}</b> {plural(stats.current, "день", "дня", "дней")}
          </span>
        </div>

        <div className="sidebar-foot">
          {today <= LESSONS.length ? (
            <span>
              Сегодня: <b className="mono">Day {today}</b>
            </span>
          ) : (
            <span>🎉 Всё готово</span>
          )}
          <span className="sidebar-foot-sub">весь прогресс — в localStorage</span>
        </div>
      </aside>
    </>
  );
}
