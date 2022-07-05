export function foldArray(array: number[], runs: number): number[] {
  let arr = [...array];
  let result = [];

  while (runs > 0) {
    result = [];
    let firstHalf = arr.slice(0, arr.length / 2);
    let lastHalf;
    let middle;
    if (arr.length % 2 === 0) {
      lastHalf = arr.slice(arr.length / 2);
    } else {
      middle = arr.slice(arr.length / 2, arr.length / 2 + 1);
      lastHalf = arr.slice(arr.length / 2 + 1);
    }

    lastHalf.reverse();

    for (let i = 0; i < firstHalf.length; i++) {
      let sum = firstHalf[i] + lastHalf[i];
      result.push(sum);
    }

    if (middle !== undefined) result.push(...middle);

    arr = [...result];
    runs--;
  }

  return result;
}

function foldArray1(a, n) {
  const r = [],
    c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}
