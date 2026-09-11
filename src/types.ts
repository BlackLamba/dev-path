export type Category = "Python" | "Backend" | "PostgreSQL" | "Docker" | "Redis" | "AI";
export type MaterialType = "docs" | "tutorial" | "article" | "book" | "spec" | "tool";
export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Material {
  /** уникальный id внутри дня: m1, m2, m3 */
  id: string;
  title: string;
  source: string;
  type: MaterialType;
  category: Category;
  url: string;
  minutes: number;
  note: string;
}

export interface Task {
  /** t1 */
  id: string;
  title: string;
  description: string;
  requirements: string[];
  doneWhen: string[];
}

export interface Lesson {
  /** 1..30 */
  id: number;
  week: number;
  title: string;
  category: Category;
  difficulty: Difficulty;
  /** минуты */
  duration: number;
  learn: string;
  why: string;
  /** ключевая концепция дня — подставляется в чек-лист */
  coreConcept: string;
  materials: Material[];
  tasks: Task[];
  /** пункты Definition of Done */
  checklist: string[];
}

export interface Week {
  number: number;
  code: string;
  title: string;
  focus: string;
  days: number[];
}

export const CATEGORIES: Category[] = ["Python", "Backend", "PostgreSQL", "Docker", "Redis", "AI"];

export const MATERIAL_TYPES: MaterialType[] = ["docs", "tutorial", "article", "book", "spec", "tool"];

export const MATERIAL_TYPE_LABEL: Record<MaterialType, string> = {
  docs: "Documentation",
  tutorial: "Tutorial",
  article: "Article",
  book: "Book",
  spec: "Specification",
  tool: "Tool",
};

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  Beginner: "Beginner",
  Intermediate: "Intermediate",
  Advanced: "Advanced",
};
