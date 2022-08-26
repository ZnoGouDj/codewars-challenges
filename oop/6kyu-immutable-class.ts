function OnceNamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = this.firstName + ' ' + this.lastName;
  Object.freeze(this);
}

//! 1

function OnceNamedOne1(first, last) {
  Object.defineProperties(this, {
    firstName: { value: first, writable: false },
    lastName: { value: last, writable: false },
    fullName: { value: first + ' ' + last, writable: false },
  });
}

//! 2

function OnceNamedOne2(first, last) {
  Object.defineProperty(this, 'firstName', { value: first });
  Object.defineProperty(this, 'lastName', { value: last });
  Object.defineProperty(this, 'fullName', { value: first + ' ' + last });
}

//!

class OnceNamedOne3 {
  first: string;
  last: string;
  constructor(first, last) {
    Object.assign(this, { first, last });
  }

  get firstName() {
    return this.first;
  }

  get lastName() {
    return this.last;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }
}

//!

class OnceNamedOne4 {
  _firstName: string;
  _lastName: string;
  constructor(first, last) {
    this._firstName = first;
    this._lastName = last;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set firstName(firstName) {
    console.log('Immutable First Name');
  }

  set lastName(lastName) {
    console.log('Immutable Last Name');
  }

  set fullName(fullName) {
    console.log('Immutable Full Name');
  }
}

let n = new OnceNamedOne('John', 'Doe');

console.log(n.firstName); // => 'John'
console.log(n.lastName); // => 'Doe'
console.log(n['fullName']); // => 'John Doe'

n.firstName = 'Jane';
console.log(n.firstName); // => 'John'
console.log(n.fullName); // => 'John Doe'
