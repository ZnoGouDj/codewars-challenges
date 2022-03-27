// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.
// Task
// Given a number, Find if it is Jumping or not .
// jumpingNumber(9) ==> return "Jumping!!"
// jumpingNumber(79) ==> return "Not!!"

// Test.assertEquals(jumpingNumber(1), "Jumping!!");
// Test.assertEquals(jumpingNumber(7), "Jumping!!");
// Test.assertEquals(jumpingNumber(9), "Jumping!!");
// Test.assertEquals(jumpingNumber(23), "Jumping!!");
// Test.assertEquals(jumpingNumber(32), "Jumping!!");
// Test.assertEquals(jumpingNumber(79), "Not!!");
// Test.assertEquals(jumpingNumber(98), "Jumping!!");
// Test.assertEquals(jumpingNumber(8987), "Jumping!!");
// Test.assertEquals(jumpingNumber(4343456), "Jumping!!");
// Test.assertEquals(jumpingNumber(98789876), "Jumping!!");

function jumpingNumber(n) {
    let numberDivide = String(n).split('');
    for (let i = 0; i < numberDivide.length - 1; i++) {
        if (+numberDivide[i] === +numberDivide[i + 1] + 1
            || +numberDivide[i] === +numberDivide[i + 1] - 1) {
            console.log('I want you to fuck my wife');
        } else {
            return 'Not!!';
        }
    }
    return 'Jumping!!';
}

//top
const jumpingNumber = n => n.toString().split``.every((e, i, a) => i < 1 || Math.abs(e - a[i - 1]) === 1) ? 'Jumping!!' : 'Not!!';