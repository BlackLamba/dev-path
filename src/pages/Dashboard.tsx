import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, CheckCircle2, Clock, Flame, Target } from "lucide-react";
import { LESSONS, lessonById } from "../data/course";
import { useProgress } from "../hooks/useProgress";
import { computeStats, currentDay } from "../utils/progress";
import { fmtHours, plural } from "../utils/format";
import { CategoryChip, ProgressBar, SectionLabel, StatCard } from "../components/ui";

export function Dashboard() {
  const { state, completed } = useProgress();
  const stats = computeStats(completed, state.checks);
  const today = currentDay(state.checks);
  const finished = today > LESSONS.length;

  const nextDays = LESSONS.filter((l) => !completed.has(l.id)).slice(0, 3);

  return (
    <div className="dash">
      <header className="dash-head">
        <div>
          <div className="page-title">Добро пожаловать обратно</div>
          <div className="page-sub">
            {finished
              ? "Программа завершена — 30/30"
              : `День ${today} из ${LESSONS.length} · Backend + AI Engineering`}
          </div>
        </div>
        <Link to="/progress" className="btn btn-ghost">
          <BarChart3 size={15} /> Progress
        </Link>
      </header>

      {finished ? (
        <div className="card today-card finished">
          <div className="today-kicker">All done</div>
          <h2 className="today-title">30 DAYS COMPLETE 🎉</h2>
          <p className="today-lead">
            You built your first AI backend system: FastAPI → PostgreSQL → Redis → Celery worker → PyTorch.
          </p>
          <Link to="/progress" className="btn btn-primary">
            Review your progress <ArrowRight size={15} />
          </Link>
        </div>
      ) : (
        (() => {
          const lesson = lessonById(today);
          return (
            <div className="card today-card">
              <div className="today-kicker">Today</div>
              <div className="today-grid">
                <div>
                  <div className="today-day mono">
                    День {lesson.id} <span className="muted">из {LESSONS.length}</span>
                  </div>
                  <h2 className="today-title">{lesson.title}</h2>
                  <div className="today-meta">
                    <CategoryChip category={lesson.category} />
                    <span className="today-chip mono">
                      <Clock size={13} /> ~{fmtHours(lesson.duration)}
                    </span>
                  </div>
                  <p className="today-lead">{lesson.learn}</p>
                </div>
                <div className="today-side">
                  <div className="today-week mono">{`WEEK 0${lesson.week}`}</div>
                  <Link to={`/day/${lesson.id}`} className="btn btn-primary btn-lg">
                    Продолжить обучение <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })()
      )}

      <div className="stats-grid">
        <StatCard
          label="Прогресс"
          icon={<Target size={14} />}
          value={
            <>
              {stats.daysDone} / {stats.daysTotal}
            </>
          }
          sub={<ProgressBar value={stats.daysPct} className="mini" />}
        />
        <StatCard
          label="Задач выполнено"
          icon={<CheckCircle2 size={14} />}
          value={
            <>
              {stats.checksDone} <span className="muted">/ {stats.checksTotal}</span>
            </>
          }
          sub={<ProgressBar value={stats.checksPct} className="mini" />}
        />
        <StatCard
          label="Учебное время"
          icon={<Clock size={14} />}
          value={fmtHours(stats.minutesDone)}
          sub={
            <>
              из {fmtHours(stats.minutesTotal)}
            </>
          }
        />
        <StatCard
          label="Серия"
          icon={<Flame size={14} />}
          value={
            <>
              {stats.current} {plural(stats.current, "день", "дня", "дней")}
            </>
          }
          sub={
            stats.longest > 0 ? (
              <>
                рекорд: {stats.longest} {plural(stats.longest, "день", "дня", "дней")}
              </>
            ) : (
              "заверши день, чтобы начать серию"
            )
          }
        />
      </div>

      <section className="card section">
        <div className="section-head">
          <SectionLabel>Next days</SectionLabel>
          <Link to="/roadmap" className="section-link">
            Roadmap <ArrowRight size={13} />
          </Link>
        </div>
        <div className="next-list">
          {nextDays.map((l) => (
            <Link key={l.id} to={`/day/${l.id}`} className="next-item">
              <span className="next-num mono">{String(l.id).padStart(2, "0")}</span>
              <span className="next-title">{l.title}</span>
              <CategoryChip category={l.category} />
              <span className="next-min mono">{fmtHours(l.duration)}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
