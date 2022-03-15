function slicesToName(n) {
  if (typeof n !== 'number' || n < 2) return null;
  const arr = [];
  if (n % 2 !== 0) {
    arr.push('bread');
  }
  arr.fill('sandwich', 0, Math.floor(n / 2));

  return arr.join(' ');
}

function nameToSlices(name) {
  if (typeof name !== 'string' || name.length < 1) return null;
  return;
}

console.log(slicesToName(false)); // null
console.log(slicesToName(1)); // null
console.log(slicesToName(-2)); // null
console.log(slicesToName('bread')); // null
console.log(slicesToName(2)); // 'sandwich'
console.log(slicesToName(3)); // 'bread sandwich'
console.log(slicesToName(11)); //'bread sandwich sandwich sandwich sandwich sandwich'
console.log(slicesToName(8)); // 'sandwich sandwich sandwich sandwich'

console.log(nameToSlices(12)); //  null
console.log(nameToSlices('')); //  null
console.log(nameToSlices('sandwich sandwich bread sandwich')); //  null
console.log(nameToSlices('sand wich')); //  null
console.log(nameToSlices('bread sandwich')); //  3
console.log(nameToSlices('sandwich sandwich sandwich sandwich')); //  8
console.log(nameToSlices('bread')); //  null
console.log(nameToSlices('bread sandwich sandwich sandwich')); //  7
console.log(nameToSlices('bread sandwich bread sandwich')); //  null
