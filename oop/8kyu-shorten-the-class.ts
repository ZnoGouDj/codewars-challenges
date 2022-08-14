// class Dog {
//   constructor(name, age, gender, species, size, master, loyal) {
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//       this.species = species;
//       this.legs = 4;
//       this.size = size;
//       this.master = master;
//       this.loyal = loyal;
//   }
// }

// class Labrador extends Dog {
//   constructor(...props) {
//       super(...props);
//       this.species = 'Labrador';
//       this.legs = 4;
//       this.size = 'Large';
//       this.loyal = true;

//       // this.master = [...props].slice(-1)[0];
//   }
// }

//?

class Dog {
  legs: number;
  constructor(
    public name: string,
    public age: number,
    public gender: string,
    public species: string,
    public size: string,
    public master: string,
    public loyal: boolean,
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true);
  }
}

var spitsy = new Labrador('Spitsy', 10, 'Male', 'Donald');
console.log(spitsy.name); //  => "Spitsy"
console.log(spitsy.age); // => 10
console.log(spitsy.gender); // => "Male"
console.log(spitsy.species); // => "Labrador"
console.log(spitsy.legs); // => 4
console.log(spitsy.size); // => "Large"
console.log(spitsy.master); // => "Donald"
console.log(spitsy.loyal); // => true
var edward = new Labrador('Edward', 3, 'Male', 'Emma');
console.log(edward.name); // => 'Edward'
console.log(edward.age); // => 3
console.log(edward.gender); // => 'Male'
console.log(edward.species); // => 'Labrador'
console.log(edward.legs); // => 4
console.log(edward.size); // => 'Large'
console.log(edward.master); // => 'Emma'
console.log(edward.loyal); // => true
