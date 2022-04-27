function removeDupes1(str) {
  let arr = Array.from(new Set(str));

  return arr.join('');
}

function removeDupes(str) {
  let obj = {};
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (!obj.hasOwnProperty(str[i])) {
      obj[str[i]] = 'check';
      result.push(str[i]);
    }
  }

  return result.join('');
}

console.log(removeDupes('abcd')); // -> 'abcd'
console.log(removeDupes('aabbccdd')); // -> 'abcd'
console.log(removeDupes('abcddbca')); // -> 'abcd'
console.log(removeDupes('abababcdcdcd')); // -> 'abcd'
