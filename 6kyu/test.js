const isSumOfCubes = s => {
  let arr = s.split(/[^0-9]/).filter(el => el);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 4) {
      isCubic(arr[i]) ? result.push(arr[i]) : null;
    } else {
      let split = arr[i].match(/.{1,3}/g);
      for (let i = 0; i < split.length; i++) {
        isCubic(split[i]) ? result.push(split[i]) : null;
      }
    }
  }

  let sum = result.reduce((acc, val) => +acc + +val, 0);
  result.push(sum);

  return result;
};

const isCubic = n => {
  let split = String(n).split('');
  let sum = 0;
  split.forEach(el => {
    sum += Math.pow(el, 3);
  });
  return sum == n;
};

console.log(isSumOfCubes('Once upon a midnight dreary, while100 I pondered, 9026315weak and weary -827&()')); // "Unlucky"
console.log(isSumOfCubes('&z371 upon 407298a --- dreary, ###100.153 I thought, 9926315strong and weary -127&() 1')); // "371 407 153 1 932 Lucky"

// console.log(isCubic(153)); //true
// console.log(isCubic(1)); //true
// console.log(isCubic(0)); //true
// console.log(isCubic(22)); // false
