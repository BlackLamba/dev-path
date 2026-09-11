import type { ReactNode } from "react";
import type { Category } from "../types";

export function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`progress-track ${className}`}>
      <div className="progress-fill" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

export function StatCard({
  label,
  value,
  sub,
  icon,
}: {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="card stat-card">
      <div className="stat-label">
        {label}
        {icon && <span className="stat-icon">{icon}</span>}
      </div>
      <div className="stat-value">{value}</div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>
  );
}

const CATEGORY_STYLE: Record<Category, string> = {
  Python: "cat-python",
  Backend: "cat-backend",
  PostgreSQL: "cat-pg",
  Docker: "cat-docker",
  Redis: "cat-redis",
  AI: "cat-ai",
};

export function CategoryChip({ category }: { category: Category }) {
  return <span className={`chip ${CATEGORY_STYLE[category]}`}>{category}</span>;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="section-label">{children}</div>;
}

export function Checkbox({
  checked,
  onToggle,
  label,
  hint,
}: {
  checked: boolean;
  onToggle: () => void;
  label: ReactNode;
  hint?: string;
}) {
  return (
    <button
      type="button"
      className={`check-row ${checked ? "done" : ""}`}
      onClick={onToggle}
      aria-pressed={checked}
    >
      <span className="check-box" aria-hidden>
        <svg viewBox="0 0 16 16" width="12" height="12">
          <path
            d="M2.5 8.5l3.5 3.5 7.5-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="check-text">
        <span className="check-label">{label}</span>
        {hint && <span className="check-hint">{hint}</span>}
      </span>
    </button>
  );
}
