import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { useProgress } from "../hooks/useProgress";

export function ResetModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { reset } = useProgress();
  const [confirm, setConfirm] = useState(false);

  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <AlertTriangle size={18} className="warn" />
          <h3>Reset all progress?</h3>
        </div>
        <p className="modal-text">
          Все отметки, завершённые дни и ссылки на код будут удалены без возможности восстановления.
        </p>
        <div className="modal-actions">
          <button className="btn btn-ghost" onClick={onClose}>
            Отмена
          </button>
          <button
            className={`btn ${confirm ? "btn-danger" : "btn-danger-soft"}`}
            onClick={() => {
              if (!confirm) {
                setConfirm(true);
                return;
              }
              reset();
              setConfirm(false);
              onClose();
            }}
          >
            {confirm ? "Да, удалить всё" : "Сбросить прогресс"}
          </button>
        </div>
      </div>
    </div>
  );
}
