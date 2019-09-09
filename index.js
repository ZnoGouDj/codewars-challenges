/* I am deliberatly left empty */
function partsSums(ls) {
    for (let i = 0; i < ls.length;) {
        let sum = ls.reduce(function (previousValue, value) {
            return previousValue + value;
        });
        console.log(sum);
        ls.shift();
    }
    console.log(0); //lol
}
partsSums([1,2,3,4,5,6])