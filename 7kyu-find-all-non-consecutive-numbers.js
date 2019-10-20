// Your task is to find all the elements of an array 
// that are not consecutive.

// Create a function named allNonConsecutive

// E.g., if we have an array [1,2,3,4,6,7,8,10] then 
// 6 and 10 are non-consecutive.

// You should return the results as an array of objects 
// with two values i: <the index of the non-consecutive number> 
// and n: <the non-consecutive number>.

// E.g., for the above array the result should be:

// [
//   {i: 4, n:6},
//   {i: 7, n:10}
// ]
// If the whole array is consecutive, then return an empty array.

// The array will always have at least 2 elements and all the elements 
// will be numbers. The numbers will also all be unique and in ascending 
// order. The numbers could be positive and/or negetive.

// Test.assertSimilar(results, [{i: 4, n:6}, {i: 7, n:10}])

function allNonConsecutive(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== undefined && arr[i] - arr[i + 1] !== -1) {
            res.push({ i: i + 1, n: arr[i + 1] });
        }
    }
    return res;
}

let allNonConsecutive = arr => arr.reduce((j, n, i) => i > 0 && n - 1 !== arr[i - 1] ? [...j, {i, n}] : j, []);