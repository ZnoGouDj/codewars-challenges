const format = (n: number) => String(Math.floor(n)).padStart(2, '00');

export function humanReadable(seconds: number): string {
  const h = seconds / 3600;
  const m = (seconds % 3600) / 60;
  const s = (seconds % 3600) % 60;

  return [h, m, s].map(format).join(':');
}
