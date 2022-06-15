function isDate(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Date]';

  //or
  return value instanceof Date; // but true for imvalid dates too, new Date('random_string')
  return typeof value.getMonth === 'function';
}

console.log(isDate(new Date()));
// => true

console.log(isDate('Mon April 23 2012'));
// => false
