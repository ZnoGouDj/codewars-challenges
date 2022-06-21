export function inArray(a1: string[], a2: string[]): string[] {
  return a1.filter(el => a2.some(elem => elem.includes(el))).sort();
}
