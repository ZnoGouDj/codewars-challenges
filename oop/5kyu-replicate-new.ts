function nouveau(Constructor, ...props) {
  // 1. Crates an empty object (instance) which inherits from Constructor.prototype
  let objPrototype = Object.create(Constructor.prototype);
  // 2. Binds Constructor to instance (this) and invokes Constructor with any arguments passed in
  let args = Array.prototype.slice.call(arguments, 1);
  let optionalReturn = Constructor.apply(objPrototype, args);

  // 3. If the return value is an object (inc. arrays, funcs, dates, regexes, etc.) => return p. 2
  if (
    (typeof optionalReturn === 'object' || typeof optionalReturn === 'function') &&
    Object.prototype.toString.call(optionalReturn) !== '[object Null]'
  ) {
    return optionalReturn;
    // otherwise => p. 1
  } else {
    return objPrototype;
  }
}

//! or

function nouveau0(Constructor) {
  var args = Array.prototype.slice.call(arguments, 1);

  var obj = Object.create(Constructor.prototype);
  var alt = Constructor.apply(obj, args);

  return alt && (typeof alt === 'object' || typeof alt === 'function') ? alt : obj;
}

//? or

function nouveau1(Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);
  return result === Object(result) ? result : instance;
}

function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  return 'Hi, I am ' + this.name;
};

var guy = nouveau(Person, 'Guy');
console.log(guy);
console.log(guy.name); // => 'Guy'
console.log(guy.sayHi()); // => 'Hi, I am Guy'
