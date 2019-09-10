/*
I'm new to coding and now I want to get the sum of two arrays...
actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

  Test.assertEquals(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
  Test.assertEquals(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
  Test.assertEquals(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
  Test.assertEquals(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
*/

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    for (let j = 0; j < arr1.length; j++) {
        sum += arr1[j];
    }
    return sum;
}

//не работает (верхнее)

//top 

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

//похожее на мое

function arrayPlusArray() {
    var res = 0;

    for (var i = 0; i < arguments.length; i++) {

        for (var j = 0; j < arguments[i].length; j++) {

            res += arguments[i][j];
        }
    }
    return res;
}

