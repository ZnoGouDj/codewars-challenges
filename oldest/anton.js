function divide(number, divideBy) {
  let num = number;
  let arr = [];

  for (let i = 0; i < divideBy - 1; i++) {
    let random = Math.floor(Math.random() * num);
    num -= random;
    arr.push(random);
  }

  arr.push(num);

  return arr;
}

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

console.log(divideWithFractions(15, 3));
// console.log(divide(15, 3));

//! ============================================================
function divideWithFractions(number, divideBy) {
  let num = number * 100;
  let arr = [];

  for (let i = 0; i < divideBy - 1; i++) {
    let random = getRandomIntInclusiveFractions(0, num);

    num -= random;
    arr.push(random);
  }

  arr.push(num);

  return arr.map(el => el / 100);
}

function getRandomIntInclusiveFractions(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random % 5 === 0 ? random : getRandomIntInclusiveFractions(min, max);
}
