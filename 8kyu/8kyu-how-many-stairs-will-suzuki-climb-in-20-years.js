/*
Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.

var stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Test.assertEquals(stairsIn20(stairs), 54636040);
})
*/

function stairsIn20(stairs) {
    return stairs.reduce((steps, day) => steps.concat(day)).reduce((sum, count) => sum + count) * 20;
}

//another

function stairsIn20(a) {
    return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}

//another

function stairsIn20(s) {
    for (var i = 0, sum = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            sum += s[i][j];
        }
    }
    return sum * 20;
}
