// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return
// johns age is 34

// Test.assertEquals(john.info, 'johns age is 34')

interface Person {
  name: string;
  age: number;
}

class Person {
  constructor(name: S, age: N) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return this.name + 's age is ' + this.age;
  }
}

interface Person1 {
  name: string;
  age: number;
}
//top
class Person1 {
  constructor(name: S, age: N) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}
