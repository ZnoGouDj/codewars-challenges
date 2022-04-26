function User(name, age) {
  this.name = name;
  this.age = age;
}

const user = new User('Egor', 26);

console.log(user);
console.log(user instanceof User);
