/*
What we want to implement is a filter function, like Array.filter(), 
also similar to the _.filter() in underscore.js and lodash.js.

The usage is quite simple, like:

[1,2,3,4].filter((num)=>{ return num > 3})
should output [4]
*/

Array.prototype.filter = function (fn) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) newArray.push(this[i])
    }

    return newArray;
}

//explanation

// This filter function return an array with values that meet 
// the conditions set in the ruleCondition callback function.

Array.prototype.filter = function (ruleCondition) {
    // Create an empty array to store the values that satisfy the ruleCondition
    var arr = [];

    this.forEach(function (currentValue) {
        // Evaluate each element and push the value when content in array meet condition
        if (ruleCondition(currentValue)) arr.push(currentValue);
    });
    return arr;
}
