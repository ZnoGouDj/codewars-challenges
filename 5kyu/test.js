// const _ = require('lodash');

// function scramble(str1, str2) {
//     if (str1.length < str2.length) return false;
//     let obj1 = _.countBy([...str1]);

//     console.log('obj1 ', obj1);

//     for (let key in str2) {
//         if (!obj1[str2[key]]) return false;
//         else obj1[str2[key]]--;
//     }

//     return true;
// }

// console.log(scramble('rkqodlw', 'world')); // => true
// console.log(scramble('cedewaraaossoqqyt', 'codewars')); // => true
// console.log(scramble('katas', 'steak')); // => false
// console.log(scramble('scriptjavx', 'javascript')); // => false
// console.log(scramble('scriptingjava', 'javascript')); // => true
// console.log(scramble('scriptsjava', 'javascripts')); // => true
// console.log(scramble('javscripts', 'javascript')); // => false
// console.log(scramble('jscripts', 'javascript')); // => false
// console.log(scramble('aabbcamaomsccdd', 'commas')); // => true
// console.log(scramble('commas', 'commas')); // => true
// console.log(scramble('sammoc', 'commas')); // => true