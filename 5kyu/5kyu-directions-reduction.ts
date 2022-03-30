function dirReduc(arr: string[]): string[] {
  let arrCopy = [...arr];

  for (let i = 0; i < arrCopy.length; i++) {
    if (
      (arrCopy[i] === 'NORTH' && arrCopy[i + 1] === 'SOUTH') ||
      (arrCopy[i] === 'SOUTH' && arrCopy[i + 1] === 'NORTH')
    ) {
      arrCopy.splice(i, 2);
      i = -1;
    } else if (
      (arrCopy[i] === 'EAST' && arrCopy[i + 1] === 'WEST') ||
      (arrCopy[i] === 'WEST' && arrCopy[i + 1] === 'EAST')
    ) {
      arrCopy.splice(i, 2);
      i = -1;
    }
  }

  return arrCopy;
}

console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])); // ["WEST"]
console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])); // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])); // []
