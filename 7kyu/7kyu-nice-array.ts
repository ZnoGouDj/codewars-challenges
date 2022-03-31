// export class Kata {
//   static isNice(arr) {
//     return true;
//   }
// }

function isNice(arr: number[]) {
  if (arr.length < 2) return false;

  let str: string = arr.join("'") + "'"; // 2'10'9'3 -> string
  let counter: number = 0;

  for (let i = 0; i < arr.length; i++) {
    let strPlus: string = arr[i] + 1 + "'";
    let strMinus: string = arr[i] - 1 + "'";
    if (str.includes(strPlus) || str.includes(strMinus)) {
      counter++;
    }
  }

  return counter === arr.length;
}

//!

export class Kata {
  static isNice(arr: N[]): boolean {
    let set = new Set(arr);

    return arr.length !== 0 && arr.every(v => set.has(v - 1) || set.has(v + 1));
  }
}

console.log(isNice([2, 10, 9, 3])); // true
console.log(isNice([3, 4, 5, 7])); // false
