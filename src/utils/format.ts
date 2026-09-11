/** 90 → "1 ч 30 м", 45 → "45 мин" */
export const fmtDuration = (minutes: number): string => {
  if (minutes < 60) return `${minutes} мин`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} ч ${m} м` : `${h} ч`;
};

/** 1480 → "24 ч 40 м" */
export const fmtHours = (minutes: number): string => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} ч ${m} м` : `${h} ч`;
};

export const plural = (n: number, one: string, few: string, many: string): string => {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
};
