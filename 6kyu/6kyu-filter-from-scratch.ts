Array.prototype.filter = function (fn, nThis) {
  let newArr = this.slice();
  this.forEach((v, i, arr) => {
    if (fn.apply(nThis, [v, i, arr])) {
      newArr.push(v);
    }
  });
  return newArr;
};

Array.prototype.filter = function (fn, nThis) {
  let newArr = [];
  // this.forEach((v, i, arr) => {
  //     if (fn.apply(nThis, [v, i, arr])) {
  //         newArr.push(v);
  //     }
  // }); (1)
  // for (let i = 0; i < this.length; i++) {
  //     if (fn.apply(nThis, [this[i], i, this])) {
  //         newArr.push(this[i]);
  //     }
  // } (2) doesn't work with length
  // for (let i in this) {
  //     if (fn.apply(nThis, [this[i], i, this])) {
  //         newArr.push(this[i]);
  //     }
  // } (3) doesn't work with length
  return newArr;
};

Array.prototype.filter = function (fn, nThis) {
  const length = this.length;
  const newArr: any = [];
  for (let i = 0; i < length; i++) {
    if (i in this && fn.call(nThis, this[i], i, this)) newArr.push(this[i]);
  }
  return newArr;
};
