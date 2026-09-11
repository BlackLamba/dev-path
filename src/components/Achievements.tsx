import { Lock, Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "../data/achievements";
import { useProgress } from "../hooks/useProgress";
import { SectionLabel } from "./ui";

export function Achievements() {
  const { unlocked } = useProgress();
  return (
    <section className="card section">
      <div className="section-head">
        <SectionLabel>Achievements</SectionLabel>
        <span className="section-count mono">
          {unlocked.length}/{ACHIEVEMENTS.length}
        </span>
      </div>
      <div className="ach-grid">
        {ACHIEVEMENTS.map((a) => {
          const got = unlocked.includes(a.id);
          return (
            <div key={a.id} className={`ach ${got ? "got" : "locked"}`}>
              <div className="ach-icon" aria-hidden>
                {got ? <span>{a.icon}</span> : <Lock size={15} />}
              </div>
              <div className="ach-text">
                <div className="ach-title">
                  <Trophy size={12} className={got ? "gold" : ""} /> {a.title}
                </div>
                <div className="ach-desc">{a.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
