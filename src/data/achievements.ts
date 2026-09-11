import { LESSONS, WEEKS } from "./course";

export interface AchievementDef {
  id: string;
  icon: string;
  title: string;
  description: string;
  test: (completed: Set<number>) => boolean;
}

const weekDone = (completed: Set<number>, week: number): boolean =>
  WEEKS.find((w) => w.number === week)!.days.every((d) => completed.has(d));

const categoryDone = (completed: Set<number>, category: string): boolean => {
  const days = LESSONS.filter((l) => l.category === category).map((l) => l.id);
  return days.length > 0 && days.every((d) => completed.has(d));
};

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: "first-step",
    icon: "🏁",
    title: "First Step",
    description: "Завершён первый день",
    test: (c) => c.size >= 1,
  },
  {
    id: "seven-days",
    icon: "🔥",
    title: "7 Days",
    description: "Завершено 7 дней подряд",
    test: (c) => {
      let run = 0;
      for (let d = 1; d <= 30; d++) {
        if (c.has(d)) run++;
        else run = 0;
        if (run >= 7) return true;
      }
      return false;
    },
  },
  {
    id: "backend-core",
    icon: "⚡",
    title: "Backend Core",
    description: "Завершена неделя 1: Python + HTTP + FastAPI",
    test: (c) => weekDone(c, 1),
  },
  {
    id: "postgresql",
    icon: "🐘",
    title: "PostgreSQL",
    description: "Завершена неделя 2: SQL + PostgreSQL + SQLAlchemy",
    test: (c) => weekDone(c, 2),
  },
  {
    id: "containerized",
    icon: "🐳",
    title: "Containerized",
    description: "Завершены все Docker-дни",
    test: (c) => categoryDone(c, "Docker"),
  },
  {
    id: "ai-engineer",
    icon: "🤖",
    title: "AI Engineer",
    description: "Завершён первый AI-день",
    test: (c) => c.has(22),
  },
  {
    id: "thirty",
    icon: "🚀",
    title: "30 / 30",
    description: "Завершена вся программа",
    test: (c) => c.size >= 30,
  },
];
