// This is the first part. 
// You can solve the second part here when you are done with this. 
// Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

// Test.assertEquals(multiply("2", "3"), "6");
// Test.assertEquals(multiply("30", "69"), "2070");
// Test.assertEquals(multiply("11", "85"), "935");
// Test.assertEquals(multiply("98765", "56894"), "5619135910");
// Test.assertEquals(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
// Test.assertEquals(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
// Test.assertEquals(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");

function multiply(a, b){
    return BigInt(a)*BigInt(b);
} //doesn`t work in codewars 

function multiply(a, b) {
    a = a.split("").map(Number).reverse();
    b = b.split("").map(Number).reverse();
    if (!a.length) {
        a[0] = 0;
    }
    if (!b.length) {
        b[0] = 0;
    }
    let arr = [];
    b.forEach((f1, i1) => {
        a.forEach((f2, i2) => {
            arr[i1 + i2] = arr[i1 + i2] || [];
            arr[i1 + i2].push(f1 * f2);
        })
    })
    arr.forEach((e, i) => {
        let sum = e.reduce((a, c) => a + c)
        arr[i] = sum % 10
        let carry = Math.floor(sum / 10)
        if (carry) {
            arr[i + 1] = arr[i + 1] || [];
            arr[i + 1].push(carry);
        }
    })
    return arr.reverse().join("").replace(/^0+/, '') || "0"
}
