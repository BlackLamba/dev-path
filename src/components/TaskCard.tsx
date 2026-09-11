import { useEffect, useState } from "react";
import { CheckCircle2, ExternalLink, Link2, ListChecks } from "lucide-react";
import type { Task } from "../types";
import { Checkbox } from "./ui";
import { useProgress } from "../hooks/useProgress";

export function TaskCard({ task, dayId, checked }: { task: Task; dayId: number; checked: boolean }) {
  const { state, setCodeLink, toggleCheck } = useProgress();
  const linkKey = `d${dayId}:${task.id}`;
  const [url, setUrl] = useState(state.codeLinks[linkKey] ?? "");

  // Синхронизация поля при смене дня
  useEffect(() => {
    setUrl(state.codeLinks[linkKey] ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linkKey]);

  return (
    <div className={`card task-card ${checked ? "done" : ""}`}>
      <div className="task-head">
        <span className="section-label">Practice</span>
        <span className={`task-checkline mono ${checked ? "ok" : ""}`}>{checked ? "✓ done" : "pending"}</span>
      </div>
      <h3 className="task-title">{task.title}</h3>
      <p className="task-desc">{task.description}</p>

      <div className="req-block">
        <div className="req-label">
          <ListChecks size={14} /> Требования
        </div>
        <ul>
          {task.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="req-block">
        <div className="req-label">
          <CheckCircle2 size={14} /> Критерий готовности
        </div>
        <ul>
          {task.doneWhen.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="task-link-row">
        <Link2 size={14} />
        <input
          type="url"
          placeholder="Ссылка на код (GitHub) — по желанию"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setCodeLink(linkKey, e.target.value.trim());
          }}
        />
        {state.codeLinks[linkKey] && (
          <a
            className="btn btn-ghost btn-sm"
            href={state.codeLinks[linkKey]}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Открыть код"
          >
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      <Checkbox
        checked={checked}
        onToggle={() => toggleCheck(linkKey, dayId)}
        label="Задание выполнено"
      />
    </div>
  );
}
