// function seven(m) {

//     let counter = 0;
//     let arr = m.toString().split('');
//     let lastDigit;

//     for (let i = arr.length - 1; i > 0; i--) {
//         lastDigit = arr.pop();
//         counter++;
//         if ((arr.join('') - lastDigit * 2) < 10) {
//             return [+arr.join(''), counter];
//         }
//     }

// }

function seven(m) {
    let counter = 0
    let result = 0
    let number = String(m)
    while (number.length > 2) {
        counter++
        const lastNumber = +(number.slice(-1))
        const rest = +(number.slice(0, number.length - 1))
        result = rest - 2 * lastNumber
        number = String(result)
    }
    return [result, counter]
}

//recursive
function seven(m, n = 0) {
    return m < 100 ? [m, n] : seven(Math.floor(m / 10) - 2 * (m % 10), ++n);
}



// 10x + y => x − 2y:
/*
m = 371 -> 37 − (2×1) -> 37 − 2 = 35
m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7
m = 372 -> 37 − (2×2) -> 37 − 4 = 33
m = 477557101->47755708->4775554->477547->47740->4774->469->28

47755710 - (2x1) = 47755708
4775570 - (2x8) = 4775554
477555 - (2x4) = 477547
47754 - (2x7) = 47740
4774 - (2x0) = 4774
477 - (2x4) = 469
46 - (2x9) = 28

160 - (2x3) = 154
15 - (2x4) = 7
*/