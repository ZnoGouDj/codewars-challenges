class Quark {
    constructor(color, flavor) {
        this.color = color;
        this.flavor = flavor;
        this.baryon_number = 1 / 3;
    }

    interact(another) {
        let color = this.color;
        this.color = another.color;
        another.color = color;
    }
}

let q1 = new Quark('red', 'up');
let q2 = new Quark('blue', 'strange');

console.log(q1.color); // => "red"
console.log(q2.flavor); // => "strange"
console.log(q2.baryon_number); // => 1 / 3
q1.interact(q2);
console.log(q1.color); // => "blue"