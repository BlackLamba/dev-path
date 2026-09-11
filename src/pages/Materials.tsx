import { useState } from "react";
import { Link } from "react-router-dom";
import { BookMarked, BookOpen, ExternalLink, FileText, GraduationCap, ScrollText, Wrench } from "lucide-react";
import { LESSONS } from "../data/course";
import type { Category, MaterialType } from "../types";
import { CATEGORIES, MATERIAL_TYPES, MATERIAL_TYPE_LABEL } from "../types";
import { useProgress } from "../hooks/useProgress";

const TYPE_ICON = {
  docs: BookOpen,
  tutorial: GraduationCap,
  article: FileText,
  book: BookMarked,
  spec: ScrollText,
  tool: Wrench,
} as const;

interface FlatMaterial {
  dayId: number;
  m: (typeof LESSONS)[number]["materials"][number];
}

export function Materials() {
  const { state } = useProgress();
  const [category, setCategory] = useState<Category | "all">("all");
  const [type, setType] = useState<MaterialType | "all">("all");

  const all: FlatMaterial[] = LESSONS.flatMap((l) => l.materials.map((m) => ({ dayId: l.id, m })));
  const visible = all.filter(
    (x) => (category === "all" || x.m.category === category) && (type === "all" || x.m.type === type),
  );

  return (
    <div className="list-page">
      <header className="page-head">
        <div>
          <div className="page-title">Materials</div>
          <div className="page-sub">
            {all.length} источников · все ссылки проверены (офиц. доки, туториалы, статьи, книги)
          </div>
        </div>
      </header>

      <div className="filter-row">
        <button className={`filter-btn ${category === "all" ? "active" : ""}`} onClick={() => setCategory("all")}>
          All
        </button>
        {CATEGORIES.map((c) => (
          <button key={c} className={`filter-btn ${category === c ? "active" : ""}`} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="filter-row">
        <button className={`filter-btn sm ${type === "all" ? "active" : ""}`} onClick={() => setType("all")}>
          All types
        </button>
        {MATERIAL_TYPES.map((t) => (
          <button key={t} className={`filter-btn sm ${type === t ? "active" : ""}`} onClick={() => setType(t)}>
            {MATERIAL_TYPE_LABEL[t]}
          </button>
        ))}
      </div>

      <div className="materials-grid">
        {visible.map(({ dayId, m }) => {
          const Icon = TYPE_ICON[m.type];
          const checked = state.checks[`d${dayId}:${m.id}`] === true;
          return (
            <div key={`${dayId}-${m.id}`} className="card material-row">
              <div className="material-icon" aria-hidden>
                <Icon size={16} />
              </div>
              <div className="material-body">
                <div className="material-top">
                  <Link to={`/day/${dayId}`} className="day-ref mono">
                    Day {dayId}
                  </Link>
                  <span className="material-type">{MATERIAL_TYPE_LABEL[m.type]}</span>
                  <span className="material-min mono">~{m.minutes} мин</span>
                  {checked && <span className="material-done">✓</span>}
                </div>
                <div className="material-title">{m.title}</div>
                <div className="material-meta">
                  <span>{m.source}</span>
                  <span className="dot">·</span>
                  <span>{m.note}</span>
                </div>
              </div>
              <a
                className="icon-btn"
                href={m.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Открыть ${m.title}`}
                title={m.url}
              >
                <ExternalLink size={15} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
