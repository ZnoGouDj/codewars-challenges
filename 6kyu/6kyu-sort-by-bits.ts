function sortByBit(arr) {
  return arr.sort((a, b) => {
    if (retrieveBits(a) > retrieveBits(b)) {
      return 1;
    } else if (retrieveBits(a) < retrieveBits(b)) {
      return -1;
    }
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });
}

function retrieveBits(num) {
  return Number(num).toString(2).replace(/0/g, '');
}

//!

const sortByBit1 = (arr) =>
  arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b);

// let a = [3, 8, 3, 6, 5, 7, 9, 1]; // ['11', '1000', '11', '110', '101', '111', '1001', '1'];
sortByBit(a);
console.log(a); // => [1, 8, 3, 3, 5, 6, 9, 7]

// let b = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0];
sortByBit(b);
console.log(b); // => [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]
