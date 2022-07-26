function nextBigger(n) {
    let toCompare = [...String(n)].sort((a, b) => a - b).join('');
    let i = n;
    while (i < n + 23706) {
        i++;
        if ([...String(i)].sort((a, b) => a - b).join('') === toCompare) {
            return i;
        }
    }
    return -1;
}

//? small numbers
// console.log(nextBigger(12)); // => 21
// console.log(nextBigger(513)); // => 531
// console.log(nextBigger(2017)); // => 2071
// console.log(nextBigger(414)); // => 441
// console.log(nextBigger(144)); // => 414

//! big numbers
console.log(nextBigger(123456789)); // => 123456798
console.log(nextBigger(1234567890)); // => 1234567908
console.log(nextBigger(9876543210)); // => 9876543210

//  Time: 2311ms
// *Passed: 139
//! Failed: 13
//! Exit Code: 13