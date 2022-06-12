function isArrayBuffer(value) {
  return value && value.byteLength !== undefined && !(value.buffer instanceof ArrayBuffer);
}

console.log(isArrayBuffer(new ArrayBuffer(2))); // => true

console.log(isArrayBuffer(new Array(2))); // => false

console.log(isArrayBuffer(new Int32Array(new ArrayBuffer(8)))); // => false
