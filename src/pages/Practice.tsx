import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { LESSONS } from "../data/course";
import { useProgress } from "../hooks/useProgress";
import { checkIds } from "../utils/progress";
import { fmtDuration } from "../utils/format";
import { CategoryChip } from "../components/ui";

type Filter = "all" | "todo" | "in-progress" | "completed";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "todo", label: "Todo" },
  { id: "in-progress", label: "In progress" },
  { id: "completed", label: "Completed" },
];

export function Practice() {
  const { state } = useProgress();
  const [filter, setFilter] = useState<Filter>("all");

  const items = LESSONS.map((l) => {
    const taskKey = `d${l.id}:${l.tasks[0].id}`;
    const done = state.checks[taskKey] === true;
    const anyCheck = checkIds(l).some((k) => state.checks[k] === true);
    const status: Exclude<Filter, "all"> = done ? "completed" : anyCheck ? "in-progress" : "todo";
    return { lesson: l, status };
  });

  const visible = items.filter((i) => filter === "all" || i.status === filter);

  return (
    <div className="list-page">
      <header className="page-head">
        <div>
          <div className="page-title">Practice</div>
          <div className="page-sub">
            Все практические задания проекта · {items.filter((i) => i.status === "completed").length}/{items.length} выполнено
          </div>
        </div>
      </header>

      <div className="filter-row">
        {FILTERS.map((f) => {
          const count = f.id === "all" ? items.length : items.filter((i) => i.status === f.id).length;
          return (
            <button
              key={f.id}
              className={`filter-btn ${filter === f.id ? "active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label} <span className="mono">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="practice-grid">
        {visible.map(({ lesson, status }) => (
          <Link to={`/day/${lesson.id}`} key={lesson.id} className={`card task-list-card status-${status}`}>
            <div className="tlc-top">
              <span className="tlc-day mono">DAY {String(lesson.id).padStart(2, "0")}</span>
              <span className={`status-pill ${status}`}>
                {status === "completed" && <Check size={11} strokeWidth={3} />}
                {status === "completed" ? "Done" : status === "in-progress" ? "In progress" : "Todo"}
              </span>
            </div>
            <div className="tlc-title">{lesson.tasks[0].title}</div>
            <div className="tlc-meta">
              <CategoryChip category={lesson.category} />
              <span className="mono tlc-min">~{fmtDuration(lesson.duration)}</span>
            </div>
            <div className="tlc-open">
              Open task <ArrowRight size={13} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
