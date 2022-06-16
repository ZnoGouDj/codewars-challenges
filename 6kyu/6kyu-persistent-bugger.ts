export function persistence(num: number, count: number = 0): number {
  let arr = String(num).split('');

  if (arr.length > 1) {
    count++;
    let result = Number(arr.reduce((acc, val) => acc * +val, 1));
    return persistence(result, count);
  } else {
    return count;
  }
}

//?

export function persistence1(num: number): number {
  let count = 0;
  while (num > 9) {
    num = String(num)
      .split('')
      .map(d => +d)
      .reduce((prev, current) => (prev *= current));
    count++;
  }
  return count;
}

//!

export const getNumberOfDigits = (x: number): number => x.toString().length;

export const isSingleDigit = (x: number): boolean => getNumberOfDigits(x) === 1;

export const multiplyDigits = (x: number): number =>
  x
    .toString()
    .split('')
    .map(char => Number(char))
    .reduce((acc, cur) => acc * cur, 1);

export const persistence2 = (num: number, step: number = 0): number =>
  isSingleDigit(num) ? step : persistence2(multiplyDigits(num), step + 1);
