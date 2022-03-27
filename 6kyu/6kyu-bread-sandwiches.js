function slicesToName(n) {
  if (typeof n !== 'number' || n < 2) return null;

  const arr = Array(Math.floor(n / 2)).fill('sandwich', 0, Math.floor(n / 2) + 1);

  if (n % 2 !== 0) {
    arr.unshift('bread');
  }

  return arr.join(' ');
}

function nameToSlices(name) {
  if (
    typeof name !== 'string' ||
    name.length < 1 ||
    name.split(' ').some(el => el !== 'sandwich' && el !== 'bread') ||
    name.lastIndexOf('bread') > 0 ||
    name === 'bread'
  )
    return null;

  const arr = name.split(' ');
  let counter = 0;

  if (arr[0] === 'bread') counter--;

  counter += arr.length * 2;

  return counter;
}

// console.log(slicesToName(false)); // null
// console.log(slicesToName(1)); // null
// console.log(slicesToName(-2)); // null
// console.log(slicesToName('bread')); // null
// console.log(slicesToName(2)); // 'sandwich'
// console.log(slicesToName(3)); // 'bread sandwich'
// console.log(slicesToName(11)); //'bread sandwich sandwich sandwich sandwich sandwich'
// console.log(slicesToName(8)); // 'sandwich sandwich sandwich sandwich'

console.log(nameToSlices(12)); //  null
console.log(nameToSlices('')); //  null
console.log(nameToSlices('sandwich sandwich bread sandwich')); //  null
console.log(nameToSlices('sand wich')); //  null
console.log(nameToSlices('bread sandwich')); //  3
console.log(nameToSlices('sandwich sandwich sandwich sandwich')); //  8
console.log(nameToSlices('bread')); //  null
console.log(nameToSlices('bread sandwich sandwich sandwich')); //  7
console.log(nameToSlices('bread sandwich bread sandwich')); //  null
