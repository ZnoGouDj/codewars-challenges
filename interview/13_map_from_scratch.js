Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], (index = i), this));
  }
  return result;
};

console.log([1, 2, 3, 4, 5].myMap(el => el * 2));
