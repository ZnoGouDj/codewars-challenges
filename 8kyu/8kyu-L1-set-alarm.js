/*
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false setAlarm(false, true) -> false setAlarm(false, false) -> false setAlarm(true, false) -> true

setalarm(true, true) -> false
setalarm(false, true) -> false
setalarm(false, false) -> false
setalarm(true, false) -> true

Test.expect(!setAlarm(true, true), "Should be false.");
Test.expect(!setAlarm(false, true), "Should be false.");
Test.expect(setAlarm(true, false), "Should be true.");
*/

function setAlarm(employed, vacation) {
    return employed !== vacation && employed === true;
}

//another mine

const setAlarm = (e, v) => e !== v && e === true;

//top

const setAlarm = (employed, vacation) => employed && !vacation;

//top2

function setAlarm(employed, vacation) {
    return employed && !vacation;
}