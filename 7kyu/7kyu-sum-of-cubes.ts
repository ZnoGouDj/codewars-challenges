// Write a function that takes a positive integer n, sums all the
// cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples:

// sumCubes(2) // 9
// sum of the cubes of 1 and 2 is 1 + 8

function sumCubes(n: N): N {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i * i;
  }
  return sum;
}

//top
function sumCubes1(n: N): N {
  return ((n * (n + 1)) / 2) ** 2;
}
