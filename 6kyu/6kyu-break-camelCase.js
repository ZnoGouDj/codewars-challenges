// complete the function
// function solution(string) {
//   const arr = string.split('');

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase() !== arr[i]) {
//       arr.splice(i, 0, ' ');
//       i++;
//     }
//   }

//   return arr.join('');
// }

const solution = string =>
  string
    .split('')
    .map(el => (el.toLowerCase() !== el ? ' ' + el : el))
    .join('');

//! omg
function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}

console.log(solution('camelCasingTest')); // camel Casing Test
console.log(solution('camelCasing')); // "camel Casing"
console.log(solution('identifier')); // "identifier"
console.log(solution('')); // ""

/*

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/
