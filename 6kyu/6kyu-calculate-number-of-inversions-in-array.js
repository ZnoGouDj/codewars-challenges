// Array inversion indicates how far the array is from being sorted.

// Inversions are pairs of elements in array, that are out of order.

// Examples
// countInversions([1,2,3,4]) // 0 inversions

// countInversions([1,3,2,4]) // 1 inversion: 2 and 3

// countInversions([4,1,2,3]) // 3 inversions: 4 and 1, 4 and 2, 4 and 3

// countInversions([4,3,2,1]) // 6 inversions: 4 and 3, 4 and 2, 4 and 1, 3 and 2, 3 and 1, 2 and 1
// Goal
// The goal is to come up with a function that can calculate inversions for any arbitrary array

// Test.assertEquals(countInversions([]), 0, 'Empty array has 0 inversions');
// Test.assertEquals(countInversions([1,2,3]), 0, 'Sorted array has 0 inversions');
// Test.assertEquals(countInversions([2,1,3]), 1, 'Array [2,1,3] only has one inversion');
// Test.assertEquals(countInversions([6,5,4,3,2,1]), 15, 'Array [6,5,4,3,2,1] has 15 inversions');
// Test.assertEquals(countInversions([6,5,4,3,3,3,3,2,1]), 30, 'Array [6,5,4,3,3,3,3,2,1] has 30 inversions');

// Calculate the number of inversions in array
function countInversions(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        let counterInner = 0;
        let middle;
        if (array[i] > array[i + 1]) {
            middle = array[i];
            array[i] = array[i + 1];
            array[i + 1] = middle;
            counterInner++;
        }
        counter += counterInner;
        if (counterInner > 0) {
            counterInner = 0;
            i = -1;
        }
    }
    return counter;
}

//top
function countInversions(arr) {
    return arr.map((x, i) => arr.slice(i + 1).filter(y => y < x).length).reduce((a, b) => a + b, 0);
}

//top2
function countInversions(array) {
    var numInversions = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            numInversions += array[i] > array[j];
        }
    }

    return numInversions;
}
  