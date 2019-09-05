function nextHappyYear(year) {
    //let x = year.toString();
    for (let i = year; i <= 9000 && i >= 1000; i++) {
        let numbers = year.split('');
        for (let j = 1; j < numbers.length; j++) {
            let char = numbers[j];
            if (j === numbers.indexOf(char)) {
                return parseInt(year, 10);
            }
        }
    }
}
        //if (numbers[0] !== numbers[1] && numbers[2] && numbers[3]) {
            //if (numbers[1] !== numbers[2] && numbers[3]) {
                //if (numbers[2] !== numbers[3]) {
                   // return numbers // = parseInt(x, 10)
                }
            }
        }
    }
}
/*
nextHappyYear(1001),1023);
nextHappyYear(1123),1203);
nextHappyYear(2001),2013);
*/

