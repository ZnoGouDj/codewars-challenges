Number.prototype.toString = function () {
  return '' + this;
};
Array.prototype.toString = function () {
  return '[' + this.join(',') + ']';
};
Boolean.prototype.toString = function () {
  return '' + this;
};
Object.prototype.toString = function () {
  return '' + this;
};

//! or

Boolean.prototype.toString =
  Number.prototype.toString =
  Array.prototype.toString =
    function () {
      return JSON.stringify(this);
    };

console.log((123).toString()); // => '123'
console.log(Math.PI.toString()); // => '3.141592653589793'
console.log(Math.E.toString()); // => '2.718281828459045'
console.log(true.toString()); // => 'true'
console.log(false.toString()); // => 'false'
console.log([1, 2, 3, 4, 5].toString()); // => '[1,2,3,4,5]'
