function sumDigPow(a: number, b: number): number[] {
  const result = [];

  for (let i = a; i < b; i++) {
    let el = String(i).split('');
    let powered = el.reduce((acc, val, index) => acc + Math.pow(+val, index + 1), 0);
    if (powered === i) result.push(i);
  }

  return result;
}
