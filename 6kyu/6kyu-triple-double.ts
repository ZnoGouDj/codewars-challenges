function tripledouble(num1: number, num2: number) {
  let ifNum1Match = isMatch(String(num1), 3);
  let ifNum2Match = isMatch(String(num2), 2);

  let result = 0;

  ifNum2Match.forEach(el => {
    if (ifNum1Match.join('').includes(el)) result = 1;
  });

  return result;
}

function isMatch(str, length) {
  let result = [];

  for (let i = 0; i < str.length - length + 1; i++) {
    let slice = str.slice(i, i + length);
    if ([...slice].every(el => el === slice[0])) {
      result.push(slice);
    }
  }

  return result;
}

function tripledouble1(num1: number, num2: number) {
  let nums = [...Array(10).keys()]; // [0	1	2	3	4	5	6	7	8	9]

  return +nums.some(
    num =>
      num1.toString().includes(num.toString().repeat(3)) &&
      num2.toString().includes(num.toString().repeat(2)),
  );
}
