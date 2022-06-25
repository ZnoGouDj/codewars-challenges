function sqInRect(l, w) {
  if (l === w) return null;

  let result = [];

  let currentDimension = Math.min(l, w);
  let currentSquare = Math.pow(currentDimension, 2);
  result.push(currentDimension);

  let nextL = l - currentDimension;
  let nextW = w - currentDimension;

  let nextCurrentDimension = Math.min;
}

console.log(sqInRect(5, 5)); // => null
console.log(sqInRect(5, 3)); // => [3, 2, 1, 1]
