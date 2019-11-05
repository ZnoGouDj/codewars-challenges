// A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of num.
// For example:
// 9 has binary representation 1001 and contains a binary gap of length 2.
// 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
// 20 has binary representation 10100 and contains one binary gap of length 1.
// 15 has binary representation 1111 and has 0 binary gaps.
// Write function gap(num) that, given a positive num, returns the length of its longest binary gap.
// The function should return 0 if num doesn't contain a binary gap.

// Test.assertEquals(gap(9),2);
// Test.assertEquals(gap(529),4);
// Test.assertEquals(gap(20),1);
// Test.assertEquals(gap(15),0);

function gap(num) {
    let binary = Array.from(num.toString(2));
    let arr = binary.splice('');
    let counter = 0;
    let finArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
            counter++;
        } else {
            finArr.push(counter);
            counter = 0;
        }
    }
    finArr.sort();
    return finArr[finArr.length - 1];
}

//top 
const gap = num => (num.toString(2).match(/10+(?=1)/g) || [' ']).sort().pop().length - 1;

//top2
function gap(num) {
    binary = num.toString(2)
    zeros = binary.match(/0+(?=1)/g) || ['']
    longest = zeros.sort().pop()
    return longest.length
}
