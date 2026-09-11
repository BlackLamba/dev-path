import { LESSONS } from "../data/course";
import type { Category, Lesson } from "../types";
import { CATEGORIES } from "../types";

/** Все ключи чекбоксов дня (материалы + задачи + чек-лист). */
export const checkIds = (lesson: Lesson): string[] => [
  ...lesson.materials.map((m) => `d${lesson.id}:${m.id}`),
  ...lesson.tasks.map((t) => `d${lesson.id}:${t.id}`),
  ...lesson.checklist.map((_, i) => `d${lesson.id}:c${i}`),
];

export const isDayDone = (checks: Record<string, boolean>, lesson: Lesson): boolean =>
  checkIds(lesson).every((id) => checks[id] === true);

/** Первый незавершённый день (1..30). Если все завершены — 31. */
export const currentDay = (checks: Record<string, boolean>): number => {
  for (const lesson of LESSONS) {
    if (!isDayDone(checks, lesson)) return lesson.id;
  }
  return LESSONS.length + 1;
};

export interface Streaks {
  current: number;
  longest: number;
}

export const streaks = (completed: Set<number>): Streaks => {
  let longest = 0;
  let run = 0;
  for (let d = 1; d <= LESSONS.length; d++) {
    if (completed.has(d)) {
      run += 1;
      if (run > longest) longest = run;
    } else {
      run = 0;
    }
  }
  let current = 0;
  const max = completed.size ? Math.max(...completed) : 0;
  for (let d = max; d >= 1; d--) {
    if (completed.has(d)) current += 1;
    else break;
  }
  return { current, longest };
};

export interface Stats {
  daysDone: number;
  daysTotal: number;
  daysPct: number;
  checksDone: number;
  checksTotal: number;
  checksPct: number;
  minutesDone: number;
  minutesTotal: number;
  current: number;
  longest: number;
}

export const computeStats = (completed: Set<number>, checks: Record<string, boolean>): Stats => {
  let checksTotal = 0;
  let checksDone = 0;
  let minutesTotal = 0;
  let minutesDone = 0;
  for (const lesson of LESSONS) {
    const ids = checkIds(lesson);
    checksTotal += ids.length;
    const doneCount = ids.filter((id) => checks[id] === true).length;
    checksDone += doneCount;
    minutesTotal += lesson.duration;
    if (completed.has(lesson.id)) minutesDone += lesson.duration;
  }
  const daysDone = completed.size;
  const daysTotal = LESSONS.length;
  const s = streaks(completed);
  return {
    daysDone,
    daysTotal,
    daysPct: Math.round((daysDone / daysTotal) * 100),
    checksDone,
    checksTotal,
    checksPct: checksTotal ? Math.round((checksDone / checksTotal) * 100) : 0,
    minutesDone,
    minutesTotal,
    current: s.current,
    longest: s.longest,
  };
};

export interface CategoryProgress {
  category: Category;
  done: number;
  total: number;
  pct: number;
}

/** Прогресс по направлению: день считается, если в нём есть материал категории. */
export const categoryProgress = (completed: Set<number>): CategoryProgress[] =>
  CATEGORIES.map((category) => {
    const days = LESSONS.filter((l) => l.materials.some((m) => m.category === category)).map((l) => l.id);
    const done = days.filter((d) => completed.has(d)).length;
    return {
      category,
      done,
      total: days.length,
      pct: days.length ? Math.round((done / days.length) * 100) : 0,
    };
  });
