interface String {
  toJadenCase(): string;
}

String.prototype.toJadenCase = function () {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (arr[i - 1] === ' ' || arr[i - 1] === undefined) {
      arr.push(this[i].toUpperCase());
    } else {
      arr.push(this[i]);
    }
  }
  return arr.join('');
};

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) {
    return x.toUpperCase();
  });
};
