function findNb(m: number): number {
  let count = 1;
  let M = m;

  while (M > 0) {
    M -= Math.pow(count, 3);
    count++;
  }

  return !M ? count - 1 : -1;
}
