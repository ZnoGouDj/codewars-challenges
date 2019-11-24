class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, '', status);
        this.legs = 0;
        this.species = "shark";
    }

}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, '', status);
        this.legs = 4;
        this.species = "cat";
    }

    introduce() {
        return super.introduce() + "  Meow meow!";
    }

}

class Dog extends Animal {
    constructor(name, age, status, master = '') {
        super(name, age, 0, '', status);
        this.legs = 4;
        this.species = "dog";
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }

}

//top
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }
    introduce() {
        return `${super.introduce()}  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }
}