function sumArray(array: number[]): number {
  return array && array.length > 2
    ? [...array]
        .sort((a, b) => a - b)
        .splice(1, -1)
        .reduce((a, b) => a + b, 0)
    : 0;
}

/*
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/

console.log(sumArray(null)); // 0
console.log(sumArray([])); // 0
console.log(sumArray([3])); // 0
console.log(sumArray([3, 5])); // 0
console.log(sumArray([6, 2, 1, 8, 10])); // 16
