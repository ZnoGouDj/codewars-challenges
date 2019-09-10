/*
You're saying good-bye your best friend , See you next happy year .

Happy Year is the year with only distinct digits , (e.g) 2018

Task
Given a year, Find The next happy year or The closest year You'll see your best friend 

Notes
Year Of Course always Positive .
Have no fear , It is guaranteed that the answer exists .
It's not necessary that the year passed to the function is Happy one .
Input Year with in range (1000  ≤  y  ≤  9000)
Input >> Output Examples:
nextHappyYear (7712) ==> return (7801)
Explanation:
As the Next closest year with only distinct digits is 7801 .

nextHappyYear (8989) ==> return (9012)
Explanation:
As the Next closest year with only distinct digits is 9012 .

nextHappyYear (1001) ==> return (1023)
Explanation:
As the Next closest year with only distinct digits is 1023 .
*/

//top
function nextHappyYear(a) {
    while (new Set([...++a + '']).size < 4);
    return a;
}

//top2
function nextHappyYear(year) {
    let newYear = year + 1
    let arr = newYear.toString().split('')
    if (arr.join('') === Array.from(new Set(arr)).join('')) return newYear
    else return nextHappyYear(newYear)
}

//top3
function nextHappyYear(year) {
    do {
        year++;
        var x = year.toString();
    } while (x[0] == x[1] ||
    x[1] == x[2] ||
    x[2] == x[3] ||
    x[1] == x[3] ||
    x[2] == x[0] ||
        x[3] == x[0])

    return year;
}

/*
nextHappyYear(1001),1023);
nextHappyYear(1123),1203);
nextHappyYear(2001),2013);
*/

