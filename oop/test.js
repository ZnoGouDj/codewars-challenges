function KeywordCipher(abc, keyword) {
    this.encode = function(str) {
        // ...
    };
    this.decode = function(str) {
        // ...
    };
}

console.log(cipher.encode('abc')); // => "key"
console.log(cipher.encode('xyz')); // => "vxz"
console.log(cipher.decode('key')); // => "abc"
console.log(cipher.decode('vxz')); // => "xyz"