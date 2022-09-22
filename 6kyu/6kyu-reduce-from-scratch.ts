interface Array<T> {
  reduce1(process: any, initial: any): Array<T>;
}

Array.prototype.reduce1 = function (process, initial) {
  if (typeof this[0] === 'string' && initial === undefined) {
    initial = '';
  } else if (typeof this[0] === 'number' && initial === undefined) {
    initial = 0;
  }

  let result = [initial];
  for (let i = 0; i < this.length; i++) {
    result.push(process(result.slice(-1)[0], this[i]));
  }
  return result.slice(-1)[0];
};

//!

Array.prototype.reduce1 = function (process, initial) {
  var init = {
    string: '',
    number: 0,
  }[typeof this[0]];
  this.forEach(function (e, i) {
    initial = process(initial || init, e, i, this);
  });
  return initial;
};

//?

Array.prototype.reduce1 = function (process, initial) {
  var reduction;
  if (initial == undefined) {
    reduction = this[0];
    for (var i = 1; i < this.length; i++) {
      reduction = process(reduction, this[i]);
    }
  } else {
    reduction = initial;
    for (var i = 0; i < this.length; i++) {
      reduction = process(reduction, this[i]);
    }
  }
  return reduction;
};

//*

Array.prototype.reduce1 = function (process, memo = this.shift()) {
  this.forEach((e) => (memo = process(memo, e)));
  return memo;
};

console.log(
  ['a', 'y', '!'].reduce1(function (x, y) {
    return x + y;
  }, 'y'),
); // => 'yay!'
