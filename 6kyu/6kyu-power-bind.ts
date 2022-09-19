//? genius
Function.prototype.bind = function (obj) {
  for (key in obj) {
    global[key] = obj[key];
  }
  return this;
};

//!

Function.prototype.bind = function (ctx) {
  const that = this;
  return function (...args) {
    const newCtx = this === global ? ctx : this;
    return that.apply(newCtx, args);
  };
};

var func = function () {
  return this.prop;
};
var obj1 = {
    prop: 1,
  },
  obj2 = {
    prop: 2,
  };

func = func.bind(obj1);
console.log(func()); // Will produce 1

func = func.bind(obj2);
console.log(func()); // Will also produce 1 :(
