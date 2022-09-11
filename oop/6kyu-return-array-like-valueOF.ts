class SortedArray extends Array {
  constructor(_dir) {
    super();
    const dir = {
      asc: 1,
      desc: -1,
    }[_dir];
    if (!dir) throw new Error('Wrong direction enum');
    Object.defineProperty(this, 'dir', {
      value: dir,
    });
  }

  insert(...values) {
    this.push(...values);
    this.sort((a, b) => (a - b) * this.dir);
    return this.length;
  }
}

const ascendingArray = new SortedArray('asc');
console.log(ascendingArray); // => []
ascendingArray.insert(3);
console.log(ascendingArray); // => [3]
ascendingArray.insert(1, 2);
console.log(ascendingArray); // => [1, 2, 3]
ascendingArray.insert(6, 0);
console.log(ascendingArray); // => [0, 1, 2, 3, 6]
ascendingArray.pop();
console.log(ascendingArray); // => [0, 1, 2, 3]
ascendingArray.shift();
console.log(ascendingArray); // => [1, 2, 3]
ascendingArray.insert(-1, 10);
console.log(ascendingArray); // => [-1, 1, 2, 3, 10]
