export function getLengthOfMissingArray(arrayOfArrays: any[]): number {
  if (arrayOfArrays === null || !arrayOfArrays.length) return 0;
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays[i] === null || !arrayOfArrays[i].length) return 0;
  }

  let result = arrayOfArrays.map(arr => arr.length).sort((a, b) => a - b);

  return result.find((el, i) => result[i + 1] - result[i] !== 1) + 1;
}

// console.log(getLengthOfMissingArray([
//     [1, 2],
//     [4, 5, 1, 1],
//     [1],
//     [5, 6, 7, 8, 9]
// ])); // => 3
// console.log(getLengthOfMissingArray([
//     [5, 2, 9],
//     [4, 5, 1, 1],
//     [1],
//     [5, 6, 7, 8, 9]
// ])); // => 2
// console.log(getLengthOfMissingArray([
//     [null],
//     [null, null, null]
// ])); // => 2
// console.log(
//     getLengthOfMissingArray([
//         ['a', 'a', 'a'],
//         ['a', 'a'],
//         ['a', 'a', 'a', 'a'],
//         ['a'],
//         ['a', 'a', 'a', 'a', 'a', 'a'],
//     ]),
// ); // => 5,
// console.log(getLengthOfMissingArray([])); // => 0

console.log(getLengthOfMissingArray([[], [1, 2, 2]]));
