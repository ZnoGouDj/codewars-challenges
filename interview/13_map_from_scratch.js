Array.prototype.myMap = function(cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], (index = i), this));
    }
    return result;
};

//! map above isn't full

Array.prototype.map = function(fn, cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            if (cb) {
                result.push(fn.call(cb, this[i], i, this));
            } else {
                result.push(fn(this[i], i, this));
            }
        } else result.push(undefined);
    }
    return result;
};

//? MORE in 6kyu-map-from-scratch

console.log([1, 2, 3, 4, 5].myMap((el) => el * 2));