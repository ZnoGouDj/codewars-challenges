class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  toString() {
    return `${this.name} is a ${this.type}`;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  set name(value) {
    this._name = value;
  }

  set type(value) {
    this._type = value;
  }
}

//! or

var Animal1 = function (name, type) {
  this.name = name;
  this.type = type;
};
Animal.prototype.toString = function () {
  return this.name + ' is a ' + this.type;
};

var dog = new Animal('Max', 'dog');
console.log(dog.toString()); // should return 'Max is a dog'
console.log(dog.type); // should == 'dog'
console.log(dog.name); // should == 'Max'
dog.name = 'Lassie'; // should set name to 'Lassie'
console.log(dog);
