export function accum(s: string): string {
  return s
    .split('')
    .reduce((acc, val, i) => {
      let repeat = val.toUpperCase() + val.repeat(i).toLowerCase() + '-';
      return acc + repeat;
    }, '')
    .slice(0, -1);
}
