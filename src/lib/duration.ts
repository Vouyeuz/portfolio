export type Duration = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
};

/**
 * Returns the time elapsed from `start` until `end` (defaults to today).
 * Accepts a Date or a string in "dd/mm/yyyy" format (e.g. "15/09/2021").
 */
export function parseDate(input: Date | string): Date {
  if (input instanceof Date) return input;

  const match = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(input.trim());
  if (!match) {
    throw new Error(`Invalid date "${input}". Use dd/mm/yyyy.`);
  }

  const [, day, month, year] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  // Reject impossible dates like 31/02/2021, which JS would silently roll over.
  if (
    date.getFullYear() !== Number(year) ||
    date.getMonth() !== Number(month) - 1 ||
    date.getDate() !== Number(day)
  ) {
    throw new Error(`Invalid date "${input}".`);
  }

  return date;
}

export function getDuration(start: Date | string, end: Date | string = new Date()): Duration {
  const from = parseDate(start);
  const to = parseDate(end);

  if (from > to) {
    throw new Error("Start date must be before end date.");
  }

  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();

  if (days < 0) {
    // Borrow the length of the month before the end date.
    months -= 1;
    days += new Date(to.getFullYear(), to.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor((to.getTime() - from.getTime()) / 86_400_000);

  return { years, months, days, totalDays };
}

/**
 * Formats a duration like "5 yrs 3 mos", similar to LinkedIn.
 * Shows days only when the duration is under one month.
 */
export function formatDuration(d: Duration): string {
  const parts: string[] = [];
  if (d.years > 0) parts.push(`${d.years} ${d.years === 1 ? "yr" : "yrs"}`);
  if (d.months > 0) parts.push(`${d.months} ${d.months === 1 ? "mo" : "mos"}`);
  if (parts.length === 0) parts.push(`${d.days} ${d.days === 1 ? "day" : "days"}`);
  return parts.join(" ");
}
