function encrypt(text, n) {
  if (!text || n < 0) return text;

  const even = [];
  const odd = [];
  let result = text;

  for (let i = 0; i < n; i++) {
    for (let i = 0; i < result.length; i++) {
      if (i % 2 === 0) {
        even.push(result[i]);
      } else {
        odd.push(result[i]);
      }
    }
    result = odd.concat(even).join('');
    even.length = 0;
    odd.length = 0;
  }

  return result;
}

function decrypt(encryptedText, n) {
  let test = encryptedText;
  let cont = '';

  for (let i = 0; i < n; i++) {
    for (let i = 0; i < Math.floor(test.length / 2); i++) {
      cont += test[Math.floor(test.length / 2) + i];

      cont += test[i];
    }

    if (test.length % 2 !== 0) {
      cont += test[test.length - 1];
    }
    test = cont;
    cont = '';
  }

  return test;
}

// console.log(encrypt('012345', 1)); // "135024"
// console.log(encrypt('012345', 2)); // "304152"
// console.log(encrypt('012345', 3)); // "012345"

console.log(decrypt('012345', 1)); // "304152"
console.log(decrypt('20314', 1)); // "32104"
console.log(decrypt('012345', 3)); // "123024"

/*

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

*/
