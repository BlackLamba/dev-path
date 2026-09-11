import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { LESSONS, lessonById, weekOf } from "../data/course";
import { useProgress } from "../hooks/useProgress";
import { checkIds, currentDay, isDayDone } from "../utils/progress";
import { fmtDuration } from "../utils/format";
import { CategoryChip, SectionLabel } from "../components/ui";
import { MaterialCard } from "../components/MaterialCard";
import { TaskCard } from "../components/TaskCard";
import { Checklist } from "../components/Checklist";

export function DayPage({ forcedDayId }: { forcedDayId?: number }) {
  const params = useParams<{ id: string }>();
  const dayId = forcedDayId ?? Number(params.id);
  const navigate = useNavigate();
  const { state, setLastDay, toggleCheck } = useProgress();

  useEffect(() => {
    if (dayId >= 1 && dayId <= LESSONS.length) setLastDay(dayId);
  }, [dayId, setLastDay]);

  if (!Number.isFinite(dayId) || dayId < 1 || dayId > LESSONS.length) {
    return (
      <div className="card empty-state">
        <Sparkles size={28} />
        <p>Такого дня не существует.</p>
        <Link className="btn btn-primary" to="/roadmap">
          К roadmap
        </Link>
      </div>
    );
  }

  const lesson = lessonById(dayId);
  const week = weekOf(dayId);
  const done = isDayDone(state.checks, lesson);
  const checks = checkIds(lesson);
  const doneChecks = checks.filter((k) => state.checks[k]).length;
  const today = currentDay(state.checks);
  const isToday = dayId === today;
  const nextId = dayId < LESSONS.length ? dayId + 1 : null;

  return (
    <div className="day-page">
      <Link to="/roadmap" className="back-link">
        <ArrowLeft size={15} /> Roadmap
      </Link>

      <header className="card day-head">
        <div className="day-head-main">
          <div className="day-kicker mono">
            DAY {String(dayId).padStart(2, "0")} {isToday && <span className="today-badge">TODAY</span>}
          </div>
          <h1 className="day-title">{lesson.title}</h1>
          <div className="day-head-week mono">
            {week.code} · {week.title}
          </div>
        </div>
        <div className="day-head-side">
          <div className="day-dur mono">
            <Clock size={15} /> {fmtDuration(lesson.duration)}
          </div>
          <div className="day-head-chips">
            <CategoryChip category={lesson.category} />
            <span className="chip">{lesson.difficulty}</span>
          </div>
          <div className={`day-head-status mono ${done ? "ok" : ""}`}>
            {done ? "✓ completed" : `${doneChecks}/${checks.length} pts`}
          </div>
        </div>
      </header>

      <section className="card section">
        <SectionLabel>What you'll learn</SectionLabel>
        <p className="learn-text">{lesson.learn}</p>
        <div className="learn-why">
          <Sparkles size={14} />
          <span>{lesson.why}</span>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head plain">
          <SectionLabel>Materials</SectionLabel>
          <span className="section-count mono">
            {lesson.materials.filter((m) => state.checks[`d${lesson.id}:${m.id}`]).length}/
            {lesson.materials.length}
          </span>
        </div>
        {lesson.materials.map((m) => (
          <MaterialCard
            key={m.id}
            material={m}
            primary={m.id === lesson.materials[0].id}
            checked={state.checks[`d${lesson.id}:${m.id}`] === true}
            onToggle={() => toggleCheck(`d${lesson.id}:${m.id}`, lesson.id)}
          />
        ))}
      </section>

      <section className="section-block">
        {lesson.tasks.map((t) => (
          <TaskCard
            key={t.id}
            task={t}
            dayId={lesson.id}
            checked={state.checks[`d${lesson.id}:${t.id}`] === true}
          />
        ))}
      </section>

      <Checklist lesson={lesson} />

      {done && (
        <div className="card complete-banner">
          <CheckCircle2 size={20} className="ok" />
          <div>
            <div className="complete-title">Day {dayId} completed ✓</div>
            <div className="complete-sub">Все пункты отмечены — прогресс сохранён.</div>
          </div>
          {nextId ? (
            <button className="btn btn-primary" onClick={() => navigate(`/day/${nextId}`)}>
              Next day <ArrowRight size={15} />
            </button>
          ) : (
            <Link to="/progress" className="btn btn-primary">
              Review your progress <ArrowRight size={15} />
            </Link>
          )}
        </div>
      )}

      {!done && (
        <div className="day-footer">
          <Link to="/roadmap" className="btn btn-ghost">
            <ArrowLeft size={14} /> Roadmap
          </Link>
          {nextId && (
            <Link to={`/day/${nextId}`} className="btn btn-ghost">
              Next: Day {nextId} <ArrowRight size={14} />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
