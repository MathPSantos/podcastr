export function convertDurationToTimeString(duration: number): string {
  const hours = Math.floor(duration / (60 * 60));
  const min = Math.floor((duration % (60 * 60)) / 60);
  const secs = duration % 60;

  const timeString = [hours, min, secs]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");

  return timeString;
}
