/* 
You get an array of numbers, return the sum of all of the positive ones.
Example  [1, -4, 7, 12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum if default to 0. 
positiveSum([1, -2, 3, 4, 5]), 15
*/

function positiveSum(arr) {
    let result = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            result += arr[i];
        } else {
            result += 0;
        }
    }
    return result;
}