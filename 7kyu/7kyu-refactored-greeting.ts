class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(myName: string) {
    return 'Hello ' + myName + ', my name is ' + this.name;
  }
}

//! or

function Person1(name: string) {
  this.name = name;
}

Person1.prototype.greet = function (yourName: string) {
  return 'Hello ' + yourName + ', my name is ' + this.name;
};

var joe = new Person('Joe');
console.log(joe.greet('Kate'));
console.log(joe.name);
