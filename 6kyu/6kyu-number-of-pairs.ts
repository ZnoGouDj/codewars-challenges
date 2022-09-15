function numberOfPairs(gloves) {
  let count = 0;

  let glovez = [...gloves].sort();

  for (let i = 0; i < glovez.length; i++) {
    if (glovez[i] === glovez[i + 1]) {
      count++;
      i++;
    }
  }

  return count;
}

console.log(numberOfPairs(['red', 'green', 'red', 'blue', 'blue'])); // 2
console.log(numberOfPairs(['red', 'red', 'red', 'red', 'red', 'red'])); // 3
