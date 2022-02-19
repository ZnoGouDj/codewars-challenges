var paintLetterboxes = function (start, end) {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = start; i <= end; i++) {
    let iStringSplit = String(i)
      .split('')
      .sort(function (a, b) {
        return a - b;
      }); // [ '1', '2', '5' ]

    for (let i = 0; i < iStringSplit.length; i++) {
      arr[iStringSplit[i]]++;
    }
  }

  return arr;
};

const paintLetterboxes = (start, end) => {
  let res = Array(10).fill(0);
  for (let i = start; i <= end; i++) {
    for (let n of i + '') {
      res[n]++;
    }
  }
  return res;
};

function paintLetterboxes(start, end) {
  const frequencies = new Array(10).fill(0);
  for (let number = start; number <= end; number++) {
    number
      .toString()
      .split('')
      .forEach(x => frequencies[x]++);
  }
  return frequencies;
}

console.log(paintLetterboxes(125, 132));
