export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  let arr = Array(n);
  arr[0] = a;
  arr[1] = b;
  arr[2] = c;

  if (n < 3) return [a, b, c].slice(0, n);

  for (let i = 3; i < arr.length; i++) {
    arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
  }

  return arr;
}

//! lol
export function tribonacci1([a, b, c]: [number, number, number], n: number): number[] {
  // your code here
  if (n <= 0) {
    return [];
  }

  return [a].concat(tribonacci([b, c, a + b + c], n - 1));
}
