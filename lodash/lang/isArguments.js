// function isArguments(value) {
//   if (typeof value !== 'object') return false;
//   if (typeof value.length !== 'number') return false;
//   if (value.pop()) return false;

//   return true;
// }

// function isArguments(item) {
//   let a = Object.prototype.toString.bind(item);
//   return a(item); // === '[object Arguments]';
// }

function isArguments(item) {
  return Object.prototype.toString.call(item) === '[object Arguments]';
}

console.log(
  isArguments(
    (function () {
      return arguments;
    })(),
  ),
); // => true

console.log(isArguments([1, 2, 3])); // => false
