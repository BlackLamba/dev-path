import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import { LESSONS } from "../data/course";
import { useProgress } from "../hooks/useProgress";
import { currentDay } from "../utils/progress";
import { DayPage } from "./DayPage";

export function Today() {
  const { state } = useProgress();
  const today = currentDay(state.checks);

  if (today > LESSONS.length) {
    return (
      <div className="card empty-state big">
        <Rocket size={40} />
        <h2>30 DAYS COMPLETE 🎉</h2>
        <p>You built your first AI backend system. Отличный результат.</p>
        <Link to="/progress" className="btn btn-primary">
          Review your progress
        </Link>
      </div>
    );
  }

  return <DayPage forcedDayId={today} />;
}
