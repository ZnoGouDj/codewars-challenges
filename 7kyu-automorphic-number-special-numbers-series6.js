// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
// Given a number determine if it Automorphic or not .

// Explanation:
// 25 squared is 625 , Ends with the same number's digits which are 25 .

// Test.assertEquals(automorphic(1),"Automorphic");
// Test.assertEquals(automorphic(3),"Not!!");
// Test.assertEquals(automorphic(6),"Automorphic");
// Test.assertEquals(automorphic(9),"Not!!");
// Test.assertEquals(automorphic(25),"Automorphic");
// Test.assertEquals(automorphic(53),"Not!!");
// Test.assertEquals(automorphic(76),"Automorphic");
// Test.assertEquals(automorphic(95),"Not!!");
// Test.assertEquals(automorphic(625),"Automorphic");
// Test.assertEquals(automorphic(225),"Not!!");

function automorphic(n) {
    let nArr = String(n).split(''); // ['5']
    let square = String(n * n).split(''); // ['2', '5']
    let diff = square.splice(square.length - nArr.length, nArr.length);
    return diff.join('') === nArr.join('') ? 'Automorphic' : 'Not!!';
}

//top
const automorphic = n => String(n * n).endsWith(String(n)) ? "Automorphic" : "Not!!";

//top2
function automorphic(n) {
    let len = n.toString().length
    let num = (n * n).toString().slice(-len)
    return (n == num) ? 'Automorphic' : 'Not!!'
}