function reverse(array) {
  let arrayCopy = [...array];
  let result = [];

  for (let i = arrayCopy.length - 1; i >= 0; i--) {
    result.push(arrayCopy[i]);
    array[arrayCopy.length - i - 1] = arrayCopy[i];
  }

  return result;
}

var array = [1, 2, 3];

console.log(reverse(array)); // => [3, 2, 1]

console.log(array); // => [3, 2, 1]
