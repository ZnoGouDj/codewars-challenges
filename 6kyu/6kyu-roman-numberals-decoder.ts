export function solution(roman: string): number {
  let strCopy = roman;
  let sum = 0;
  let result: number[];

  while (strCopy.length) {
    result = prehistoricDecoder(strCopy);
    sum += result[0];
    strCopy = strCopy.substring(result[1], strCopy.length);
  }

  return sum;
}

export function prehistoricDecoder(string: string): number[] {
  if (string.substring(0, 3) === 'MMM') {
    return [3000, 3];
  } else if (string.substring(0, 2) === 'MM') {
    return [2000, 2];
  } else if (string.substring(0, 1) === 'M') {
    return [1000, 1];
  } else if (string.substring(0, 2) === 'CM') {
    return [900, 2];
  } else if (string.substring(0, 4) === 'DCCC') {
    return [800, 4];
  } else if (string.substring(0, 3) === 'DCC') {
    return [700, 3];
  } else if (string.substring(0, 2) === 'DC') {
    return [600, 2];
  } else if (string.substring(0, 1) === 'D') {
    return [500, 1];
  } else if (string.substring(0, 2) === 'CD') {
    return [400, 2];
  } else if (string.substring(0, 3) === 'CCC') {
    return [300, 3];
  } else if (string.substring(0, 2) === 'CC') {
    return [200, 2];
  } else if (string.substring(0, 1) === 'C') {
    return [100, 1];
  } else if (string.substring(0, 2) === 'XC') {
    return [90, 2];
  } else if (string.substring(0, 4) === 'LXXX') {
    return [80, 4];
  } else if (string.substring(0, 3) === 'LXX') {
    return [70, 3];
  } else if (string.substring(0, 2) === 'LX') {
    return [60, 2];
  } else if (string.substring(0, 1) === 'L') {
    return [50, 1];
  } else if (string.substring(0, 2) === 'XL') {
    return [40, 2];
  } else if (string.substring(0, 3) === 'XXX') {
    return [30, 3];
  } else if (string.substring(0, 2) === 'XX') {
    return [20, 2];
  } else if (string.substring(0, 1) === 'X') {
    return [10, 1];
  } else if (string.substring(0, 2) === 'IX') {
    return [9, 2];
  } else if (string.substring(0, 4) === 'VIII') {
    return [8, 4];
  } else if (string.substring(0, 3) === 'VII') {
    return [7, 3];
  } else if (string.substring(0, 2) === 'VI') {
    return [6, 2];
  } else if (string.substring(0, 1) === 'V') {
    return [5, 1];
  } else if (string.substring(0, 2) === 'IV') {
    return [4, 2];
  } else if (string.substring(0, 3) === 'III') {
    return [3, 3];
  } else if (string.substring(0, 2) === 'II') {
    return [2, 2];
  } else if (string.substring(0, 1) === 'I') {
    return [1, 1];
  }
  return [0, 0];
}

const values: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function solution1(roman: string): number {
  let value = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = values[roman[i]];
    const next = values[roman[i + 1]] || 0;
    if (current < next) {
      value -= current;
    } else {
      value += current;
    }
  }
  return value;
}
