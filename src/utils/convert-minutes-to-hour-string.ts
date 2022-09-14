export function convertMinutesToHourString(minutesAmount: number) {
  const hour = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;
  const hourString = `${String(hour).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;
  return hourString;
}
