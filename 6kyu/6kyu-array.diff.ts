function arrayDiff(a: N[], b: N[]): N[] {
  return a.filter(x => !b.includes(x));
}

console.log(arrayDiff([], [4, 5])); // []
console.log(arrayDiff([3, 4], [3])); // [4]
console.log(arrayDiff([1, 8, 2], [])); // [1, 8, 2]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
