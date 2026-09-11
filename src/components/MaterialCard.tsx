import { BookMarked, BookOpen, ExternalLink, FileText, GraduationCap, ScrollText, Wrench } from "lucide-react";
import type { Material } from "../types";
import { MATERIAL_TYPE_LABEL } from "../types";
import { Checkbox } from "./ui";

const TYPE_ICON = {
  docs: BookOpen,
  tutorial: GraduationCap,
  article: FileText,
  book: BookMarked,
  spec: ScrollText,
  tool: Wrench,
} as const;

export function MaterialCard({
  material,
  primary,
  checked,
  onToggle,
}: {
  material: Material;
  primary: boolean;
  checked: boolean;
  onToggle: () => void;
}) {
  const Icon = TYPE_ICON[material.type];
  return (
    <div className={`card material-card ${primary ? "primary" : ""}`}>
      <div className="material-icon" aria-hidden>
        <Icon size={18} />
      </div>
      <div className="material-body">
        <div className="material-top">
          <span className="material-badge">{primary ? "Primary" : "Additional"}</span>
          <span className="material-type">{MATERIAL_TYPE_LABEL[material.type]}</span>
          <span className="material-min mono">~{material.minutes} мин</span>
        </div>
        <div className="material-title">{material.title}</div>
        <div className="material-meta">
          <span>{material.source}</span>
          <span className="dot">·</span>
          <span className="material-note">{material.note}</span>
        </div>
        <Checkbox checked={checked} onToggle={onToggle} label={primary ? "Основной материал изучен" : "Материал изучен"} />
      </div>
      <a
        className="btn btn-ghost material-open"
        href={material.url}
        target="_blank"
        rel="noreferrer noopener"
        title={material.url}
      >
        Открыть <ExternalLink size={14} />
      </a>
    </div>
  );
}
