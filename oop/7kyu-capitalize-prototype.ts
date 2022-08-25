interface String {
  capitalize: () => string;
}

String.prototype.capitalize = function () {
  return this.charCodeAt(0) > 96 && this.charCodeAt(0) < 123
    ? String.fromCharCode(this.charCodeAt(0) - 32) + this.slice(1)
    : this.charAt(0) + this.slice(1);
};

console.log('hello world'.capitalize()); // => 'Hello world'
console.log('an apple a day keeps the doctor away'.capitalize()); // => 'An apple a day keeps the doctor away'
console.log('today, I have a dream ... '.capitalize()); // => 'Today, I have a dream ... '
