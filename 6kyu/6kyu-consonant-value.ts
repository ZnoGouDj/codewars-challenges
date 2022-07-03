export function solve(s: string) {
  const EXCLUDED = 'aeiou';
  let totalMax = 0;
  let currentSum = 0;

  for (let i = 0; i < s.length; i++) {
    if (EXCLUDED.includes(s[i])) {
      if (currentSum > totalMax) totalMax = currentSum;
      currentSum = 0;
    } else {
      currentSum += s[i].charCodeAt(0) - 96;
    }
  }

  return currentSum > totalMax ? currentSum : totalMax;
}

//!
export function solve1(s: string) {
  // your code here
  return Math.max(
    ...s.split(/[aeiou]/).map(x => [...x].reduce((a, b) => a + b.charCodeAt(0) - 96, 0)),
  );
}
