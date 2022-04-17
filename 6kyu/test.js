function playPass(s, n) {
  let crypt = [];
  let arr = s.toLowerCase().split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[0-9]/i)) {
      crypt.push(9 - arr[i]);
    } else if (arr[i].match(/[a-z]/i)) {
      let charcode = arr[i].charCodeAt() + n;
      crypt.push(i % 2 !== 0 ? String.fromCharCode(charcode) : String.fromCharCode(charcode).toUpperCase());
    } else {
      crypt.push(arr[i]);
    }
  }

  return crypt.reverse().join('');
}

console.log(playPass('BORN IN 2015!', 1)); // '!4897 Oj oSpC'
console.log(playPass('I LOVE YOU!!!', 1)); // '!!!vPz fWpM J'
console.log(playPass('I LOVE YOU!!!', 0)); //  '!!!uOy eVoL I'
