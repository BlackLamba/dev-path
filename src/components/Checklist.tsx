import { useProgress } from "../hooks/useProgress";
import type { Lesson } from "../types";
import { Checkbox } from "./ui";

export function Checklist({ lesson }: { lesson: Lesson }) {
  const { state, toggleCheck } = useProgress();
  const done = lesson.checklist.filter((_, i) => state.checks[`d${lesson.id}:c${i}`] === true).length;

  return (
    <div className="card checklist-card">
      <div className="dod-head">
        <span className="section-label">Done when</span>
        <span className="dod-count mono">
          {done}/{lesson.checklist.length}
        </span>
      </div>
      {lesson.checklist.map((item, i) => (
        <Checkbox
          key={i}
          checked={state.checks[`d${lesson.id}:c${i}`] === true}
          onToggle={() => toggleCheck(`d${lesson.id}:c${i}`, lesson.id)}
          label={item}
        />
      ))}
    </div>
  );
}
