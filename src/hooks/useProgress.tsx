import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { LESSONS, lessonById } from "../data/course";
import { ACHIEVEMENTS } from "../data/achievements";
import { checkIds, isDayDone } from "../utils/progress";

export interface ProgressState {
  /** ключи чекбоксов: "d8:m1", "d8:t1", "d8:c2" */
  checks: Record<string, boolean>;
  /** день → ISO-время завершения */
  completedAt: Record<number, string>;
  /** "d28:t1" → ссылка на код */
  codeLinks: Record<string, string>;
  /** id уже показанных достижений */
  seen: string[];
  lastDay: number | null;
}

export interface Toast {
  id: number;
  kind: "day" | "achievement";
  icon: string;
  title: string;
  description: string;
}

const STORAGE_KEY = "devpath-progress-v1";
const EMPTY: ProgressState = { checks: {}, completedAt: {}, codeLinks: {}, seen: [], lastDay: null };

const load = (): ProgressState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      checks: parsed.checks ?? {},
      completedAt: parsed.completedAt ?? {},
      codeLinks: parsed.codeLinks ?? {},
      seen: parsed.seen ?? [],
      lastDay: parsed.lastDay ?? null,
    };
  } catch {
    return EMPTY;
  }
};

interface ProgressContextValue {
  state: ProgressState;
  completed: Set<number>;
  toggleCheck: (id: string, dayId: number) => void;
  setCodeLink: (id: string, url: string) => void;
  setLastDay: (dayId: number) => void;
  reset: () => void;
  toasts: Toast[];
  dismissToast: (id: number) => void;
  unlocked: string[];
}

const ProgressContext = createContext<ProgressContextValue | null>(null);
let toastSeq = 1;

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(load);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const prevCompleted = useRef<Set<number>>(new Set(Object.keys(load().completedAt).map(Number)));

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const pushToast = useCallback((t: Omit<Toast, "id">) => {
    const id = toastSeq++;
    setToasts((prev) => [...prev, { ...t, id }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id));
    }, 4500);
  }, []);

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const completed = useMemo(() => new Set(Object.keys(state.completedAt).map(Number)), [state.completedAt]);

  // Тосты о завершении дней
  useEffect(() => {
    const prev = prevCompleted.current;
    const fresh = [...completed].filter((d) => !prev.has(d));
    if (fresh.length) {
      for (const d of fresh.sort((a, b) => a - b)) {
        pushToast({
          kind: "day",
          icon: "✅",
          title: `Day ${d} completed`,
          description: "Отличная работа. День сохранён — двигайся дальше.",
        });
      }
    }
    prevCompleted.current = completed;
  }, [completed, pushToast]);

  // Достижения
  const unlocked = useMemo(
    () => ACHIEVEMENTS.filter((a) => a.test(completed)).map((a) => a.id),
    [completed],
  );

  useEffect(() => {
    const fresh = unlocked.filter((id) => !state.seen.includes(id));
    if (fresh.length) {
      for (const id of fresh) {
        const a = ACHIEVEMENTS.find((x) => x.id === id);
        if (a) {
          pushToast({
            kind: "achievement",
            icon: a.icon,
            title: `Achievement unlocked: ${a.title}`,
            description: a.description,
          });
        }
      }
      setState((s) => ({ ...s, seen: [...s.seen, ...fresh] }));
    }
  }, [unlocked, state.seen, pushToast]);

  const toggleCheck = useCallback(
    (id: string, dayId: number) => {
      setState((s) => {
        const checks = { ...s.checks, [id]: !s.checks[id] };
        const lesson = lessonById(dayId);
        const all = checkIds(lesson).every((k) => checks[k]);
        const completedAt = { ...s.completedAt };
        if (all && !isDayDone(s.checks, lesson)) completedAt[dayId] = new Date().toISOString();
        else if (!all) delete completedAt[dayId];
        return { ...s, checks, completedAt };
      });
    },
    [],
  );

  const setCodeLink = useCallback((id: string, url: string) => {
    setState((s) => {
      const codeLinks = { ...s.codeLinks };
      if (url) codeLinks[id] = url;
      else delete codeLinks[id];
      return { ...s, codeLinks };
    });
  }, []);

  const setLastDay = useCallback((dayId: number) => {
    setState((s) => (s.lastDay === dayId ? s : { ...s, lastDay: dayId }));
  }, []);

  const reset = useCallback(() => {
    setState(EMPTY);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      state,
      completed,
      toggleCheck,
      setCodeLink,
      setLastDay,
      reset,
      toasts,
      dismissToast,
      unlocked,
    }),
    [state, completed, toggleCheck, setCodeLink, setLastDay, reset, toasts, dismissToast, unlocked],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
  return ctx;
}

export { LESSONS };
