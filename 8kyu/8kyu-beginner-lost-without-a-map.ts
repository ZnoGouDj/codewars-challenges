/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes
in very handy quite a lot so is a good one to know.

  Test.assertDeepEquals(maps([1, 2, 3]), [2, 4, 6]);
  Test.assertDeepEquals(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
  Test.assertDeepEquals(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
*/

function maps(x: N[]): N[] {
  let newArr = [];
  for (let i = 0; i < x.length; i++) {
    newArr.push(x[i] * 2);
  }
  return newArr;
}

//top!

function maps1(x: N[]): N[] {
  return x.map(n => n * 2);
}

//top2

let maps2 = (x: N[]): N[] => x.map(e => e * 2);

//anthr

function maps3(x: N[]): N[] {
  return x.map(num => num * 2);
}
