// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword.
// You will be preloaded with the Animal class, so you should only edit the Cat class.
// Task
// Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g.
// 'Mr Whiskers meows.'
// The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

// Test.describe('Fixed Tests', _ => {
//     var cat = new Cat('Mr Whiskers');
//     Test.assertEquals(cat.speak(),'Mr Whiskers meows.')
//     cat = new Cat('Lamp');
//     Test.assertEquals(cat.speak(),'Lamp meows.')
//     cat = new Cat('$$Money Bags$$');
//     Test.assertEquals(cat.speak(),'$$Money Bags$$ meows.')

interface Animal {
  name: string;
}

interface Cat {
  speak(): string;
}

class Animal {
  constructor(name) {
    this.name = name || 'Dck';
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Cat extends Animal {}

Cat.prototype.speak = function () {
  return this.name + ' meows';
};

//top
class Cat1 extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}
