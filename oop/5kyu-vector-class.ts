var Vector = function (components) {
  this.items = components;
  this.length = components.length;
};

Vector.prototype = {
  do: function (action, vector) {
    if (vector.length !== this.length) {
      throw 'Different Length!';
    }
    return new Vector(
      this.items.map(function (v, k) {
        return eval(v + action + vector.items[k]);
      }),
    );
  },
  add: function (v) {
    return this.do('+', v);
  },
  subtract: function (v) {
    return this.do('-', v);
  },
  sum: function (v) {
    return eval(v.items.join('+'));
  },
  dot: function (v) {
    return this.sum(this.do('*', v));
  },
  norm: function () {
    return Math.sqrt(this.dot(this));
  },
  toString: function () {
    return '(' + this.items + ')';
  },
  equals: function (v) {
    return this.toString() == v.toString();
  },
};

//!

class Vector1 {
  components: string[];
  constructor(components) {
    this.components = components;
  }

  toString() {
    return JSON.stringify(this.components).replace('[', '(').replace(']', ')');
  }

  equals(arr) {
    let first = arr.components.toString();
    let second = this.components.toString();

    return first === second;
  }

  add(arr) {
    if (arr.components.length !== this.components.length) {
      throw new Error('Wrong length');
    }

    let newArr: number[] = [];

    for (let i = 0; i < arr.components.length; i++) {
      newArr.push(arr.components[i] + +this.components[i]);
    }

    return new Vector1(newArr);
  }

  subtract(arr) {
    if (arr.components.length !== this.components.length) {
      throw new Error('Wrong length');
    }

    let newArr: number[] = [];

    for (let i = 0; i < arr.components.length; i++) {
      newArr.push(+this.components[i] - arr.components[i]);
    }

    return new Vector1(newArr);
  }

  dot(arr): number {
    if (arr.components.length !== this.components.length) {
      throw new Error('Wrong length');
    }

    return arr.components.reduce((acc, val, index) => acc + val * +this.components[index], 0);
  }

  norm() {
    return Math.sqrt(this.components.reduce((acc, val) => acc + Math.pow(+val, 2), 0));
  }
}

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

console.log(a.add(b)); // should return a new Vector([4, 6, 8])
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
console.log(a.dot(b)); // should return 1*3 + 2*4 + 3*5 = 26
console.log(a.norm()); // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.add(c)); // throws an error
