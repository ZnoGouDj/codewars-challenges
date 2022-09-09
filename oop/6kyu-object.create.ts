interface Object {
  create1: ({}, {}: any) => {};
  create2: ({}, {}: any) => {};
  create3: ({}, {}: any) => {};
  create4: ({}, {}: any) => {};
}

Object.create1 = function (prototype, properties) {
  if (typeof prototype !== 'object') throw new TypeError('Wrong prototype value passed!');

  interface IObj {
    __proto__?: typeof prototype;
    sleep?: () => string;
  }

  let obj: IObj = Object.assign({}, prototype);

  if (prototype === null) {
    Object.setPrototypeOf(obj, null);
  } else {
    obj.__proto__ = prototype;
  }

  if (properties !== undefined) {
    Object.defineProperties(obj, properties);
  }

  return obj;
};

Object.create2 = function (prototype, properties) {
  if (prototype === undefined) throw new TypeError();

  interface IObj {
    __proto__?: typeof prototype;
  }

  var obj: IObj = new Object();
  obj.__proto__ = prototype;
  if (properties !== undefined) {
    Object.defineProperties(obj, properties);
  }
  return obj;
};

Object.create3 = function (prototype, properties) {
  if (typeof prototype != 'object' && prototype !== null) throw new TypeError();
  var obj = {
    __proto__: prototype,
  };
  if (typeof properties != 'undefined') Object.defineProperties(obj, properties);
  return obj;
};

Object.create4 = function (prototype, properties = {}) {
  if (typeof prototype !== 'object') throw new TypeError();
  return Object.defineProperties(
    {
      __proto__: prototype,
    },
    properties,
  );
};

//*

var citizen = {
  sleep: function () {
    return 'zzZ...';
  },
  panic: function () {
    return 'AaAaAaAa!';
  },
};

var veteran: any = Object.create1(citizen, {
  panic: {
    value: function () {
      return 'SNAFU';
    },
  },
});

console.log(veteran !== citizen); // => true
console.log(veteran instanceof citizen.constructor); // => true
console.log(veteran.sleep()); // => 'zzZ...',
console.log(veteran.panic()); // => 'SNAFU',
