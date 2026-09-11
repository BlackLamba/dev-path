import { useState } from "react";
import { BarChart3, Clock, Flame, ListChecks, Target, Trophy } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { categoryProgress, computeStats } from "../utils/progress";
import { fmtHours, plural } from "../utils/format";
import { ProgressBar, SectionLabel, StatCard } from "../components/ui";
import { Achievements } from "../components/Achievements";
import { ResetModal } from "../components/ResetModal";

export function ProgressPage() {
  const { state, completed } = useProgress();
  const [resetOpen, setResetOpen] = useState(false);
  const stats = computeStats(completed, state.checks);
  const byCategory = categoryProgress(completed);

  return (
    <div className="progress-page">
      <header className="page-head">
        <div>
          <div className="page-title">Progress</div>
          <div className="page-sub">Статистика, направления, достижения</div>
        </div>
        <button className="btn btn-ghost danger" onClick={() => setResetOpen(true)}>
          Reset all progress
        </button>
      </header>

      <section className="card section overall">
        <div className="overall-row">
          <div>
            <div className="overall-label mono">{stats.daysDone} / {stats.daysTotal} days</div>
            <div className="overall-pct mono">{stats.daysPct}%</div>
          </div>
          <div className="overall-bar">
            <ProgressBar value={stats.daysPct} className="big" />
          </div>
        </div>
      </section>

      <div className="stats-grid six">
        <StatCard
          label="Completed days"
          icon={<Target size={14} />}
          value={stats.daysDone}
          sub={`из ${stats.daysTotal}`}
        />
        <StatCard
          label="Completed tasks"
          icon={<ListChecks size={14} />}
          value={stats.checksDone}
          sub={`из ${stats.checksTotal} пунктов`}
        />
        <StatCard
          label="Total estimated hours"
          icon={<Clock size={14} />}
          value={fmtHours(stats.minutesTotal)}
          sub="вся программа"
        />
        <StatCard
          label="Completed hours"
          icon={<BarChart3 size={14} />}
          value={fmtHours(stats.minutesDone)}
          sub={`из ${fmtHours(stats.minutesTotal)}`}
        />
        <StatCard
          label="Current streak"
          icon={<Flame size={14} />}
          value={stats.current}
          sub={plural(stats.current, "день", "дня", "дней")}
        />
        <StatCard
          label="Longest streak"
          icon={<Trophy size={14} />}
          value={stats.longest}
          sub={plural(stats.longest, "день", "дня", "дней")}
        />
      </div>

      <section className="card section">
        <div className="section-head">
          <SectionLabel>Progress by direction</SectionLabel>
        </div>
        <div className="cat-bars">
          {byCategory.map((c) => (
            <div key={c.category} className="cat-row">
              <span className="cat-name">{c.category}</span>
              <div className="cat-track">
                <div className="cat-fill" style={{ width: `${c.pct}%` }} />
              </div>
              <span className="cat-pct mono">
                {c.done}/{c.total} · {c.pct}%
              </span>
            </div>
          ))}
        </div>
      </section>

      <Achievements />

      <ResetModal open={resetOpen} onClose={() => setResetOpen(false)} />
    </div>
  );
}
