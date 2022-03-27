/*
Complete the function so that it finds the mean of the three scores 
passed to it and returns the letter value associated with that grade.

Numercial Score     Letter Grade
90 <= score <= 100  'A'
80 <= score <= 90   'B'
70 <= score <= 80   'C'
60 <= score <= 70   'D'
0 <= score <= 60    'F'

Tested values are between 0 and 100. There is no need to check
for negative values or values greater than 100.

getGrade(95,90,93), A
getGrade(100,85,96), A
getGrade(70,70,100), B
*/

function getGrade(s1, s2, s3) {
    let average = (s1 + s2 + s3)/3;
    return average >= 90 ? "A" : average >= 80 ? "B" : average >= 70 ? "C" : average >= 60 ? "D" : "F";
}

