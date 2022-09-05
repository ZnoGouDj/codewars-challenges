interface Array<T> {
  toString1: () => string;
}

Array.prototype.toString1 = function () {
  let result: string[] = [];
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === 'number' || typeof this[i] === 'boolean') {
      result.push(this[i].toString());
    } else if (typeof this[i] === 'string') {
      result.push(`'${this[i].toString()}'`);
    } else if (Array.isArray(this[i])) {
      result.push(this[i].toString1());
    }
  }
  return `[${result.join(',')}]`;
};

//!

Array.prototype.toString = function () {
  return '[' + this.map((m) => (typeof m === 'string' ? "'" + m.toString() + "'" : m.toString())).join(',') + ']';
};

console.log([].toString1()); // "[]"
console.log([3.14].toString1()); // "[3.14]"
console.log([1, 2, 3].toString1()); // "[1,2,3]"
console.log([1, 2.72, 4, 3.14, 9].toString1()); // "[1,2.72,4,3.14,9]"

console.log(['Hello World', 3.14, 'Lorem Ipsum'].toString1()); // "['Hello World',3.14,'Lorem Ipsum']"

console.log([1, [2, 4]].toString1()); // "[1,[2,4]]"
console.log([1, 2, [3, 4], [5, 6], [[7]], [8, [9]]].toString1()); // "[1,2,[3,4],[5,6],[[7]],[8,[9]]]"

console.log([true, false].toString1()); // "[true,false]"
