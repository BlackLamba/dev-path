import { X } from "lucide-react";
import { useProgress } from "../hooks/useProgress";

export function Toasts() {
  const { toasts, dismissToast } = useProgress();
  if (!toasts.length) return null;
  return (
    <div className="toasts" role="status">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.kind}`}>
          <span className="toast-icon" aria-hidden>
            {t.icon}
          </span>
          <div className="toast-body">
            <div className="toast-title">{t.title}</div>
            <div className="toast-desc">{t.description}</div>
          </div>
          <button className="icon-btn toast-close" onClick={() => dismissToast(t.id)} aria-label="Закрыть">
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
