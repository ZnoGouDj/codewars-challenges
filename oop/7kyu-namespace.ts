// class MyNamespace {
//     static MyClass = class {
//         constructor(name) {
//             this.name = name;
//         }
//         sayHello() {
//             return this.name;
//         }
//     };
// }

class MyNamespace {
  //
}
MyNamespace.MyClass = class {
  name: string;
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return this.name;
  }
};

var myObject = new MyNamespace.MyClass('Hello!');

var phrase = myObject.sayHello(); // phrase should be 'Hello!'
console.log(phrase);
