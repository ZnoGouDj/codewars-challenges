class Person {
  name: any;
  constructor(public firstName: string, public lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
} //? existing class here, add getters to it outside!~

Object.defineProperty(Person.prototype, 'name', {
  get: function () {
    return this.getName();
  },
  set: function (val) {
    if (val.includes(' ')) {
      [this.firstName, this.lastName] = val.split(' ');
    }
  },
});

let augustusCole = new Person('Augustus', 'Cole');
augustusCole.name = 'Cole Train';
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'
