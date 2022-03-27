/* Write a program that finds the summation of every nuber from 1 to num. 
The number will always be a positive integer greater than 0.
For example:
summation(2) -> 3 1 + 2
summation(8) -> 36 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

(summation 2) ; 3 (+ 1 2)
(summation 8) ; 36 (+ 1 2 3 4 5 6 7 8) */

function summation(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}