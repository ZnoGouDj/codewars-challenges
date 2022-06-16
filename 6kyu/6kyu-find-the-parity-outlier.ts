export function findOutlier(integers: number[]): number {
  let isOdd = integers.slice(0, 3).filter(el => el % 2 === 0).length >= 2;
  let find = (num: number) => (isOdd ? num % 2 !== 0 : num % 2 === 0);

  for (let i = 0; i < integers.length; i++) {
    let el = integers[i];
    if (find(el)) {
      return el;
    }
  }

  return 0;
}

export function findOutlier1(integers: number[]): number {
  if (integers.slice(0, 3).filter(i => i % 2 !== 0).length > 1) {
    return integers.find(v => v % 2 === 0) || 0;
  } else {
    return integers.find(v => v % 2 !== 0) || 0;
  }
}

export function findOutlier2(integers: number[]): number {
  const odds = integers.filter(v => v % 2);
  const evens = integers.filter(v => !(v % 2));

  return odds.length === 1 ? odds[0] : evens[0];
}
