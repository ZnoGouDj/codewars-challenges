function highestFrequency(array) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]]++;
    }
  }

  let values = Object.entries(obj);

  values.sort((a, b) => {
    return b[1] - a[1];
  });

  return values[0][0];
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc
console.log(highestFrequency(['abc', 'def'])); // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])); // -> ghi

function highestFrequency1(array) {
  const map = {};
  let maxFreq = 0;
  let maxFreqStr = array[0];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (map[current]) {
      map[current]++;
    } else {
      map[current] = 1;
    }

    if (map[current] > maxFreq) {
      maxFreq = map[current];
      maxFreqStr = current;
    }
  }

  return maxFreqStr;
}
