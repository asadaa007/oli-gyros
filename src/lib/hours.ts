import type { Dictionary } from "./translations";

const TZ = "Europe/Budapest";

/** Returns the current day index (0 = Monday … 6 = Sunday) and minutes-since-midnight in Budapest. */
export function getBudapestNow(): { dayIndex: number; minutes: number } {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const map: Record<string, string> = {};
  for (const p of parts) map[p.type] = p.value;

  const weekdayToIndex: Record<string, number> = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  };

  const dayIndex = weekdayToIndex[map.weekday] ?? 0;
  let hour = parseInt(map.hour ?? "0", 10);
  if (hour === 24) hour = 0;
  const minute = parseInt(map.minute ?? "0", 10);

  return { dayIndex, minutes: hour * 60 + minute };
}

function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export type OpenStatus = {
  open: boolean;
  todayIndex: number;
};

export function getOpenStatus(schedule: Dictionary["hours"]["schedule"]): OpenStatus {
  const { dayIndex, minutes } = getBudapestNow();
  const today = schedule[dayIndex];

  if (!today || today.closed) {
    return { open: false, todayIndex: dayIndex };
  }

  const openMin = toMinutes(today.open);
  const closeMin = toMinutes(today.close);
  const open = minutes >= openMin && minutes < closeMin;

  return { open, todayIndex: dayIndex };
}
