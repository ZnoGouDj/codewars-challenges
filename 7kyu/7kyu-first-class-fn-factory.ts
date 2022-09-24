function factory(x) {
  return function (arr) {
    return arr.map((num) => num * x);
  };
}

var myArray = [1, 2, 3];

var threes = factory(3);
console.log(threes(myArray)); // => [3, 6, 9]

var fives = factory(5);
console.log(fives(myArray)); // => [5, 10, 15]
