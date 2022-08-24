class Jar {
  amounts: object;
  totalAmount: number;

  constructor() {
    this.amounts = {};
    this.totalAmount = 0;
  }
  add(amount: number, type: string) {
    this.amounts[type] = (this.amounts[type] || 0) + amount;
    this.totalAmount += amount;
  }
  pourOut(amount: number) {
    Object.keys(this.amounts).forEach(key => (this.amounts[key] -= amount * this.getConcentration(key)));
    this.totalAmount -= amount;
  }
  getTotalAmount() {
    return this.totalAmount;
  }
  getConcentration(type: string) {
    return this.totalAmount ? (this.amounts[type] || 0) / this.totalAmount : 0;
  }
}

//!

function Jar1() {
  this.amount = 0;
  this.mix = {};
}

Jar.prototype.add = function (amount, type) {
  !this.mix[type] ? (this.mix[type] = amount) : (this.mix[type] += amount);
  this.amount += amount;
};

Jar.prototype.pourOut = function (amount) {
  Object.keys(this.mix).forEach(el => {
    let percentage = this.getConcentration(el);
    let amountToPourOut = amount * percentage;
    this.mix[el] -= amountToPourOut;
  });
  this.amount -= amount;
};

Jar.prototype.getTotalAmount = function () {
  return this.amount;
};

Jar.prototype.getConcentration = function (type) {
  return this.mix[type] ? this.mix[type] / this.amount : 0;
};

//? tests

let jar = new Jar();
console.log(jar.getConcentration('apple')); // => 0

jar.add(200, 'apple');
console.log(jar.getTotalAmount()); // => 200
console.log(jar.getConcentration('apple')); // => 1

jar.add(200, 'banana');
console.log(jar.getTotalAmount()); // => 400
console.log(jar.getConcentration('apple')); // => 0.5
console.log(jar.getConcentration('banana')); // => 0.5

jar.pourOut(200);
console.log(jar.getTotalAmount()); // => 200
console.log(jar.getConcentration('apple')); // => 0.5
console.log(jar.getConcentration('banana')); // => 0.5

jar.add(200, 'apple');
console.log(jar.getTotalAmount()); // => 400
console.log(jar.getConcentration('apple')); // => 0.75
console.log(jar.getConcentration('banana')); // => 0.25
