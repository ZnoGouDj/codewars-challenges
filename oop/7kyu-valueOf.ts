function Counter() {
  this.num = 0;
}

Counter.prototype.incr = function () {
  this.num++;
};

Counter.prototype.valueOf = function () {
  return this.num;
};

// Your counter must act like a number and support arithmetic operations and comparisons.

var c = new Counter();
c.incr(); // counter is now at 1
console.log(c); // 1
console.log(c + 1); // 2
console.log(c > 1); // false
console.log(c > 0); // true
console.log(c == 1); // true
console.log(Math.sqrt(c)); // 1
