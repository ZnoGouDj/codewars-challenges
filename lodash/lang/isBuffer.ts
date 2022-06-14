import { Buffer } from 'buffer';

function isBuffer(value: any): boolean {
  return Buffer.isBuffer(value);
}

// buffer is deprecated lol

console.log(isBuffer(new Buffer(2))); // <Buffer 00 00>
// => true

console.log(isBuffer(new Uint8Array(2))); // Uint8Array(2) [ 0, 0 ]
// => false
