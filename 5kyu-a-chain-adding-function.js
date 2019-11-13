// We want to create a function that will add numbers together when called in succession.

// add(1)(2);
// // returns 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15
// and so on.

// A single call should return the number passed in.

// add(1); // 1
// We should be able to store the returned values and reuse them.

// var addTwo = add(2);
// addTwo; // 2
// addTwo + 5; // 7
// addTwo(3); // 5
// addTwo(3)(5); // 10
// We can assume any number being passed in will be valid whole number.

// Test.expect(add(1) == 1);
// Test.expect(add(1)(2) == 3);
// Test.expect(add(1)(2)(3) == 6);

function add(a) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    function f(b) {
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        if (typeof b == "undefined") {
            return f.toString();
        }

        return f;
    }

    f.toString = function () {
        return sum;
    };

    return f;
}

//top
function add(n) {
    var fn = function (x) {
        return add(n + x);
    };

    fn.valueOf = function () {
        return n;
    };

    return fn;
}

//top2
var add = function (n) {
    const f = x => add(n + x)
    f.valueOf = () => n
    return f;
}