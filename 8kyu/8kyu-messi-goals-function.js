/*
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions.
Complete the goals function to return his total goals (the sum) for all three leagues.

Note: the parameter for this function will always be a valid number.

Ex :

goals(5,10,2) == 5+10+2 = 17

Test.assertEquals(goals(0,0,0), 0)
Test.assertEquals(goals(43, 10, 5), 58)

*/

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
//another mine
const goals = (la, co, ch) => la + co + ch;

//another

const goals = (...a) => a.reduce((s, v) => s + v, 0);
//another
const goals = (...goalsArray) => goalsArray.reduce((a, b) => a + b);