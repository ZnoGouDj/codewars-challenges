/*
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.

Return your answer as a number.

Test.assertEquals(sumMix([9, 3, '7', '3']), 22);
Test.assertEquals(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
Test.assertEquals(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
*/

function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        let num = +x[i];
        sum += num;
    }
    return sum;
}

//top

function sumMix(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}

//top2

const sumMix = x => x.reduce((a, b) => +b + a, 0)

//top3

function sumMix(x) {
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}