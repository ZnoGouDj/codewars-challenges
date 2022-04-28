function allAnagrams(array) {
  let sorted = array.map(el => el.split('').sort().join(''));

  return !sorted.some(el => el != sorted[0]);
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])); // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])); // false
