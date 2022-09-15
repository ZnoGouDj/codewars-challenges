Array.prototype.map = function (fn, cb) {
  let result: any = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      if (cb) {
        result.push(fn.call(cb, this[i], i, this));
      } else {
        result.push(fn(this[i], i, this));
      }
    } else result.push(undefined);
  }
  return result;
};

//!

Array.prototype.map = function (fn, nThis) {
  var newArr = this.slice();
  this.forEach((v, i, arr) => (newArr[i] = fn.apply(nThis, [v, i, arr])));
  return newArr;
};

//?

Array.prototype.map = function (callback, context) {
  const newArr = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    if (i in this) newArr[i] = callback.call(context, this[i], i, this);
  }
  return newArr;
};
