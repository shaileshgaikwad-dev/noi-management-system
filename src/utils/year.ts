import { Start_Year } from "../constants/date";

export function getYears(): number[] {
  const current_year = new Date().getFullYear();
  return Array.from(
    { length: current_year - Start_Year + 1 },
    (_, index) => current_year - index,
  );
}
