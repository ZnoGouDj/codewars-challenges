// Create the function prefill that returns an array of n elements 
// that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') 
// that is >=0, throw a TypeError

// When throwing a TypeError, the message should be n is invalid, where you replace 
// n for the actual value passed to the function.

// Code Examples

//     prefill(3,1) --> [1,1,1]

//     prefill(2,"abc") --> ['abc','abc']

//     prefill("1", 1) --> [1]

//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]

//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"

function prefill(n, v) {
    //alert( parseInt('100px') ); // 100
    //2nd param (radix) is optional.
    const nInt = parseInt(n);

    //defines if current value is NaN
    //because both equality operators (==/===) will become FALSE if NaN ==/=== NaN. 
    //That`s pure necessity of Number.isNan() (it`s more reliable than just isNaN())
    //Number.isNaN(NaN); // true
    if (Number.isNaN(nInt) || n % 1 !== 0 || nInt < 0) {
        throw new TypeError(`${n} is invalid`);
    }

    // if n is 0, return an empty array
    if (nInt === 0) { return []; }

    //create the array with JS explicit arr constructor, giving the length integer as a param.
    //On that, call the 'fill' method to fill new arr with this value. Return that.
    //Array.prototype.fill() - fills all the elements in array from the start index until the end index with specified value
    return new Array(nInt).fill(v);

}

//top

function prefill(n, v) {
    if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
    return +n ? Array(n).fill(v) : [];
}

//top2

function prefill(num, value) {
    if (typeof num === 'boolean' || ~~num != num || +num < 0) throw new TypeError(num + ' is invalid')
    return Array.apply(null, Array(+num)).map(function (d, i) { return value })
}

//another

function prefill(n, v) {
    if (isValidInt(n)) throw new PrefillException(n);

    var a = [];

    for (var i = 0; i < n; i++) {
        a.push(v);
    }

    return a;
}

function PrefillException(n) {
    this.message = (n + " is invalid");
    this.name = "TypeError";
}

function isValidInt(n) {
    return isNaN(n) || !isFinite(n) || (n % 1 !== 0) || n < 0 || ("boolean" == typeof n);
}
