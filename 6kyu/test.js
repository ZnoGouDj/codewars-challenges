function countBits(number) {
  return number
    .toString(2)
    .split('')
    .reduce((acc, val) => +acc + +val, 0);
}

// 1234 is 10011010010 in binary, so => 5

// console.log(countBits(0)); // => 0
// console.log(countBits(4)); // => 1
// console.log(countBits(7)); // => 3
// console.log(countBits(9)); // => 2
// console.log(countBits(10)); // => 2
// console.log(countBits(1234)); // => 5
console.log(countBits(5327018930937637));

// 111111000101110001111100100101 // 30
// 10010111011001110010100111111000101110001111100100101 // 53
// 0000000000010010111011001110010100111111000101110001111100100101 // 64
