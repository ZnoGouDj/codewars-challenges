function nouveau(Constructor) {
    let objPrototype = Object.create(Constructor.prototype);
    let args = Array.prototype.slice.call(arguments, 1);
    let optionalReturn = Constructor.apply(objPrototype, args);

    if (typeof optionalReturn === 'object') {
        return optionalReturn;
    } else {
        return objPrototype;
    }
}

function Person(name) {
    this.name = name;
}
Person.prototype.sayHi = function() {
    return 'Hi, I am ' + this.name;
};

var guy = nouveau(Person, 'Guy');
console.log(guy);
console.log(guy.name); // => 'Guy'
console.log(guy.sayHi()); // => 'Hi, I am Guy'