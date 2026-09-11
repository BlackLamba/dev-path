import { Link } from "react-router-dom";
import { Check, CircleDashed, Clock } from "lucide-react";
import { LESSONS, WEEKS } from "../data/course";
import { useProgress } from "../hooks/useProgress";
import { checkIds, currentDay, isDayDone } from "../utils/progress";
import { fmtDuration } from "../utils/format";
import { CategoryChip } from "../components/ui";

export function Roadmap() {
  const { state } = useProgress();
  const today = currentDay(state.checks);

  return (
    <div className="roadmap-page">
      <header className="page-head">
        <div>
          <div className="page-title">Roadmap</div>
          <div className="page-sub">30 дней · 4 недели · от HTTP до AI-платформы</div>
        </div>
      </header>

      <div className="roadmap">
        {WEEKS.map((week) => {
          const doneInWeek = week.days.filter((d) => state.completedAt[d]).length;
          return (
            <section key={week.number} className="week-block">
              <header className="week-head">
                <div className="week-code mono">{week.code}</div>
                <div className="week-title">{week.title}</div>
                <div className="week-focus">{week.focus}</div>
                <div className="week-count mono">
                  {doneInWeek}/{week.days.length}
                </div>
              </header>
              <div className="week-days">
                {week.days.map((d) => {
                  const lesson = LESSONS.find((l) => l.id === d)!;
                  const done = isDayDone(state.checks, lesson);
                  const current = d === today;
                  const checks = checkIds(lesson);
                  const doneChecks = checks.filter((k) => state.checks[k]).length;
                  return (
                    <Link
                      key={d}
                      to={`/day/${d}`}
                      className={`day-item ${done ? "done" : ""} ${current ? "current" : ""}`}
                    >
                      <span className="day-dot" aria-hidden>
                        {done ? <Check size={13} strokeWidth={3} /> : current ? <span className="pulse" /> : <CircleDashed size={14} />}
                      </span>
                      <span className="day-num mono">Day {d}</span>
                      <span className="day-title">{lesson.title}</span>
                      <CategoryChip category={lesson.category} />
                      <span className="day-meta mono">
                        <Clock size={12} /> {fmtDuration(lesson.duration)}
                      </span>
                      <span className="day-checks mono" title="Выполнено пунктов">
                        {doneChecks}/{checks.length}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
