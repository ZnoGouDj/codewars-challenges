Array.prototype.sort = function () {
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = this.length - 1; j >= i; j--) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }
  return this;
};

//!

Array.prototype.sort = function () {
  if (this.length <= 1) return this.slice(0);
  const first = this[0];
  const rest = this.slice(1);
  const lte = rest.filter((x) => x <= first).sort();
  const gt = rest.filter((x) => x > first).sort();
  return lte.concat([first]).concat(gt);
};
