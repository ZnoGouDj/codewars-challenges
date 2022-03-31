function wave(str: string): string[] {
  let separate = str.split('');
  const arr = [];

  for (let i = 0; i < separate.length; i++) {
    let separateCopy = [...separate];
    if (separateCopy[i] !== ' ') {
      separateCopy[i] = separateCopy[i].toUpperCase();
      arr.push(separateCopy.join(''));
    }
  }

  return arr;
}

console.log(wave('hello')); // => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave(' gap '));
