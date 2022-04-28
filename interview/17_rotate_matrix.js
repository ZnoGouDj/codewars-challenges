const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(source) {
  let flatten = source.flat(Infinity);
  let result = [[], [], []];

  result[0].push(flatten[6]);
  result[0].push(flatten[3]);
  result[0].push(flatten[0]);

  result[1].push(flatten[7]);
  result[1].push(flatten[4]);
  result[1].push(flatten[1]);

  result[2].push(flatten[8]);
  result[2].push(flatten[5]);
  result[2].push(flatten[2]);

  return result;
}

function rotate180(source) {
  return rotate(rotate(source));
}

function rotate270(source) {
  return rotate(rotate180(source));
}

console.log(rotate270(matrix));

/*

[1, 2, 3]    [7, 4, 1]     [9, 8, 7]    [3, 6, 9]
[4, 5, 6] -> [8, 5, 2]  -> [6, 5, 4] -> [2, 5, 8]
[7, 8, 9]    [9, 6, 3]     [3, 2, 1]    [1, 4, 7]

*/

/*
Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.

**Дополнительно**: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.
*/

function rotate(source) {
  const newMatrix = source[0].map(() => []);

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[0].length; j++) {
      newMatrix[j][source.length - 1 - i] = source[i][j];
    }
  }

  return newMatrix;
}

function rotate180(source) {
  return rotate(rotate(source));
}

function rotate270(source) {
  return rotate180(rotate(source));
}
