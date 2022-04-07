export function sortTwisted37(array: number[]): number[] {
  let reverse = twist(array);
  let sort = reverse.split(',').sort((a, b) => +a - +b);
  let reverseBack = twist(toNumber(sort));
  return toNumber(reverseBack.split(','));
}

export function twist(arr: number[]): string {
  return arr.join(',').replace(/3/g, 'seven').replace(/7/g, 'three').replace(/seven/g, '7').replace(/three/g, '3');
}

export function toNumber(arr: string[]): number[] {
  return arr.map(el => +el);
}

//!

function f(n: number): string {
  return n.toString().replace(/./g, x => (x == '7' ? '3' : x == '3' ? '7' : x));
}

export function sortTwisted371(array: number[]): number[] {
  return array.slice().sort((a, b) => +f(a) - +f(b));
}
