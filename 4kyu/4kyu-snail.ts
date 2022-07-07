function snail(array: number[][]): number[][] {
  let result = [];

  while (array.length > 0) {
    for (let i = 0; i < 4; i++) {
      result.push(array[0]);
      array.splice(0, 1);

      array = rotate270(array);
    }
  }

  return result.flat(2).filter(el => el !== undefined);
}

function rotate(source: number[][]) {
  if (!source.length) return [];
  const newMatrix = source[0].map(() => []);

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[0].length; j++) {
      newMatrix[j][source.length - 1 - i] = source[i][j];
    }
  }

  return newMatrix;
}

function rotate180(source: number[][]) {
  return rotate(rotate(source));
}

function rotate270(source: number[][]) {
  return rotate180(rotate(source));
}

// Array.prototype.flat = function (depth = 1) {
//   return depth > 0
//     ? this.reduce((acc, val) => acc.concat(Array.isArray(val) ? val.flat(depth - 1) : val), [])
//     : this.slice();
// };

const snail1 = function (array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = result ? result.concat(array.shift()) : array.shift();
    // Steal the right items.
    for (var i = 0; i < array.length; i++) result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
  }
  return result;
};
