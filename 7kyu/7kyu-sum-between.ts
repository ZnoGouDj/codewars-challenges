//!

function getSum(a, b) {
  var result = 0;
  var bigger = a > b ? a : b;
  var smaller = a > b ? b : a;
  for (var i = smaller; i <= bigger; i++) {
    result += i;
  }
  return result;
}
console.log(getSum(-1, -5)); // -15
console.log(getSum(-462, -590)); // -67854
