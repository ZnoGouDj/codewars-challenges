/*
Given a string of digits, you should replace 
any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.
fakeBin('45385593107843568')
*/

function fakeBin(x: S): S {
  let arr = x.split('');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) < 5) {
      result.push(0);
    } else {
      result.push(1);
    }
  }
  return result.join('');
}

//another

function fakeBin1(x: S): S {
  return x
    .split('')
    .map(n => (Number(n) < 5 ? 0 : 1))
    .join('');
}

//another

function fakeBin2(str: S): S {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      newStr += '1';
    } else {
      newStr += '0';
    }
  }
  return newStr;
}

//another

// function fakeBin3(x: S): S {
//   return x.replace(/\d/g, d => (d < 5 ? 0 : 1));
// }
