function findOutlier(integers) {
  let isOdd = integers.slice(0, 3).filter(el => el % 2 === 0).length >= 2;
  let find = num => (isOdd ? num % 2 !== 0 : num % 2 === 0);

  for (let i = 0; i < integers.length; i++) {
    let el = integers[i];
    if (find(el)) {
      return el;
    }
  }
}

console.log(findOutlier([0, 1, 2])); // =>  1
console.log(findOutlier([1, 2, 3])); // =>  2
console.log(findOutlier([2, 6, 8, 10, 3])); // =>  3
console.log(findOutlier([0, 0, 3, 0, 0])); // =>  3
console.log(findOutlier([1, 1, 0, 1, 1])); // =>  0
