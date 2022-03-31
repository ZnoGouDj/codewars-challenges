// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

// Note: The function accepts an integer and returns an integer
// Test.assertEquals(squareDigits(9119), 811181);

function squareDigits(num: N): N {
  let numArr = Array.from(num.toString());
  let arr = numArr.map(num => Math.pow(+num, 2));
  return Number(arr.join(''));
}

//top

function squareDigits1(num: N): N {
  return Number(
    ('' + num)
      .split('')
      .map(function (val) {
        return +val * +val;
      })
      .join('')
  );
}

//shortest

const squareDigits2 = (num: N): N =>
  Number(
    (num + '')
      .split('')
      .map(c => +c * +c)
      .join('')
  );
