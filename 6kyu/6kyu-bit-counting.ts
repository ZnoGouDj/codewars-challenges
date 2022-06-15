export function countBits(n: number): number {
  return n
    .toString(2)
    .split('')
    .reduce((acc, val) => +acc + +val, 0);
}
