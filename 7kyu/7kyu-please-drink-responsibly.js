function drinkResponsibly(people, budget) {
  let twoBeerCases = 4 * 24 * 2; // 192
  let vodkaDaily = 30 * people;
  let beerDaily = budget >= twoBeerCases ? 3 * 8 * people : 4 * 8 * people;

  let vodkaDays = Math.floor(budget / vodkaDaily);
  let beerDays = Math.floor(budget / beerDaily);

  let vodkaLeaves = budget % vodkaDaily;
  let beerLeaves = budget % beerDaily;

  if (!vodkaDays && !beerDays) return 'BUMMER!';

  let whatToDrink = 'BEER!';

  if (vodkaDays === beerDays) {
    if (vodkaLeaves > beerLeaves) {
      whatToDrink = 'VODKA!';
    }
  } else if (vodkaDays > beerDays) {
    whatToDrink = 'VODKA!';
  }

  return whatToDrink;
}

// Test.assertEquals(drinkResponsibly(5, 180), 'VODKA!');
// Test.assertEquals(drinkResponsibly(5, 360), 'BEER!');
// Test.assertEquals(drinkResponsibly(2, 54), 'BUMMER!');
// Test.assertEquals(drinkResponsibly(2, 60), 'VODKA!');
// Test.assertEquals(drinkResponsibly(10, 720), 'BEER!');
// Test.assertEquals(drinkResponsibly(2, 40), 'BUMMER!');
// Test.assertEquals(drinkResponsibly(21, 900), 'BEER!');
// Test.assertEquals(drinkResponsibly(26, 4140), 'BEER!');
// Test.assertEquals(drinkResponsibly(13, 1580), 'BEER!');
// Test.assertEquals(drinkResponsibly(24, 890), 'BEER!');
// Test.assertEquals(drinkResponsibly(5, 349), 'BEER!');
// Test.assertEquals(drinkResponsibly(6, 529), 'BEER!');
// Test.assertEquals(drinkResponsibly(7, 2590), 'BEER!');
// Test.assertEquals(drinkResponsibly(8, 5320), 'BEER!');
// Test.assertEquals(drinkResponsibly(9, 3589), 'BEER!');
// Test.assertEquals(drinkResponsibly(5, 130), 'BUMMER!');
// Test.assertEquals(drinkResponsibly(11, 8390), 'BEER!');
// Test.assertEquals(drinkResponsibly(12, 5489), 'BEER!');
// Test.assertEquals(drinkResponsibly(13, 5290), 'BEER!');
// Test.assertEquals(drinkResponsibly(14, 1409), 'BEER!');
// Test.assertEquals(drinkResponsibly(6, 200), 'BEER!');
// Test.assertEquals(drinkResponsibly(16, 519), 'BEER!');
// Test.assertEquals(drinkResponsibly(17, 5810), 'BEER!');
// Test.assertEquals(drinkResponsibly(18, 5490), 'BEER!');
// Test.assertEquals(drinkResponsibly(19, 4320), 'BEER!');
// Test.assertEquals(drinkResponsibly(20, 140234), 'BEER!');
// Test.assertEquals(drinkResponsibly(21, 2823), 'BEER!');
// Test.assertEquals(drinkResponsibly(22, 5891), 'BEER!');
// Test.assertEquals(drinkResponsibly(23, 58039), 'BEER!');
// Test.assertEquals(drinkResponsibly(24, 41234), 'BEER!');
// Test.assertEquals(drinkResponsibly(25, 412), 'BUMMER!');
// Test.assertEquals(drinkResponsibly(26, 51), 'BUMMER!');
// Test.assertEquals(drinkResponsibly(35, 4589), 'BEER!');
// Test.assertEquals(drinkResponsibly(49, 4190), 'BEER!');

// it("given (2, 54)", function() {
//   assert.deepEqual(drinkResponsibly(2, 54), 'BUMMER!');
// });
// it("given (2, 60)", function() {
//   assert.deepEqual(drinkResponsibly(2, 60), 'VODKA!');
// });
// it("given (10, 720)", function() {
//   assert.deepEqual(drinkResponsibly(10, 720), 'BEER!');
// });
// it("given (2, 40)", function() {
//   assert.deepEqual(drinkResponsibly(2, 40), 'BUMMER!');
// });
// it("given (21, 900)", function() {
//   assert.deepEqual(drinkResponsibly(21, 900), 'BEER!');
// });
// it("given (26, 4140)", function() {
//   assert.deepEqual(drinkResponsibly(26, 4140), 'BEER!');
// });
// it("given (13, 1580)", function() {
//   assert.deepEqual(drinkResponsibly(13, 1580), 'BEER!');
// });
// it("given (24, 890)", function() {
//   assert.deepEqual(drinkResponsibly(24, 890), 'BEER!');
// });
// it("given (5, 349)", function() {
//   assert.deepEqual(drinkResponsibly(5, 349), 'BEER!');
// });
// it("given (6, 529)", function() {
//   assert.deepEqual(drinkResponsibly(6, 529), 'BEER!');
// });
// it("given (7, 2590)", function() {
//   assert.deepEqual(drinkResponsibly(7, 2590), 'BEER!');
// });
// it("given (8, 5320)", function() {
//   assert.deepEqual(drinkResponsibly(8, 5320), 'BEER!');
// });
// it("given (9, 3589)", function() {
//   assert.deepEqual(drinkResponsibly(9, 3589), 'BEER!');
// });
// it("given (5, 130)", function() {
//   assert.deepEqual(drinkResponsibly(5, 130), 'BUMMER!');
// });
// it("given (11, 8390)", function() {
//   assert.deepEqual(drinkResponsibly(11, 8390), 'BEER!');
// });
// it("given (12, 5489)", function() {
//   assert.deepEqual(drinkResponsibly(12, 5489), 'BEER!');
// });
// it("given (13, 5290)", function() {
//   assert.deepEqual(drinkResponsibly(13, 5290), 'BEER!');
// });
// it("given (14, 1409)", function() {
//   assert.deepEqual(drinkResponsibly(14, 1409), 'BEER!');
// });
// it("given (6, 200)", function() {
//   assert.deepEqual(drinkResponsibly(6, 200), 'BEER!');
// });
// it("given (16, 519)", function() {
//   assert.deepEqual(drinkResponsibly(16, 519), 'BEER!');
// });
// it("given (17, 5810)", function() {
//   assert.deepEqual(drinkResponsibly(17, 5810), 'BEER!');
// });
// it("given (18, 5490)", function() {
//   assert.deepEqual(drinkResponsibly(18, 5490), 'BEER!');
// });
// it("given (19, 4320)", function() {
//   assert.deepEqual(drinkResponsibly(19, 4320), 'BEER!');
// });
// it("given (20, 140234)", function() {
//   assert.deepEqual(drinkResponsibly(20, 140234), 'BEER!');
// });
// it("given (21, 2823)", function() {
//   assert.deepEqual(drinkResponsibly(21, 2823), 'BEER!');
// });
// it("given (22, 5891)", function() {
//   assert.deepEqual(drinkResponsibly(22, 5891), 'BEER!');
// });
// it("given (23, 58039)", function() {
//   assert.deepEqual(drinkResponsibly(23, 58039), 'BEER!');
// });
// it("given (24, 41234)", function() {
//   assert.deepEqual(drinkResponsibly(24, 41234), 'BEER!');
// });
// it("given (25, 412)", function() {
//   assert.deepEqual(drinkResponsibly(25, 412), 'BUMMER!');
// });
// it("given (26, 51)", function() {
//   assert.deepEqual(drinkResponsibly(26, 51), 'BUMMER!');
// });
// it("given (35, 4589)", function() {
//   assert.deepEqual(drinkResponsibly(35, 4589), 'BEER!');
// });
// it("given (49, 4190)", function() {
//   assert.deepEqual(drinkResponsibly(49, 4190), 'BEER!');
// });

console.log(drinkResponsibly(10, 720)); // 'BEER!');
console.log(drinkResponsibly(2, 40)); // 'BEER!');
console.log(drinkResponsibly(21, 900)); // 'BEER!');
console.log(drinkResponsibly(26, 4140)); // 'BEER!');
console.log(drinkResponsibly(13, 1580)); // 'BEER!');
console.log(drinkResponsibly(24, 890)); // 'BEER!');
console.log(drinkResponsibly(5, 349)); // 'BEER!');
console.log(drinkResponsibly(6, 529)); // 'BEER!');
console.log(drinkResponsibly(7, 2590)); // 'BEER!');
console.log(drinkResponsibly(8, 5320)); // 'BEER!');
console.log(drinkResponsibly(9, 3589)); // 'BEER!');
console.log(drinkResponsibly(5, 130)); // 'BEER!');
console.log(drinkResponsibly(11, 8390)); // 'BEER!');
console.log(drinkResponsibly(12, 5489)); // 'BEER!');
console.log(drinkResponsibly(13, 5290)); // 'BEER!');
console.log(drinkResponsibly(14, 1409)); // 'BEER!');
console.log(drinkResponsibly(6, 200)); // 'BEER!');
console.log(drinkResponsibly(16, 519)); // 'BEER!');
console.log(drinkResponsibly(17, 5810)); // 'BEER!');
console.log(drinkResponsibly(18, 5490)); // 'BEER!');
console.log(drinkResponsibly(19, 4320)); // 'BEER!');
console.log(drinkResponsibly(20, 140234)); // 'BEER!');
console.log(drinkResponsibly(21, 2823)); // 'BEER!');
console.log(drinkResponsibly(22, 5891)); // 'BEER!');
console.log(drinkResponsibly(23, 58039)); // 'BEER!');
console.log(drinkResponsibly(24, 41234)); // 'BEER!');
console.log(drinkResponsibly(25, 412)); // 'BUMMER!');
console.log(drinkResponsibly(26, 51)); // 'BUMMER!');
console.log(drinkResponsibly(35, 4589)); // 'BEER!');
console.log(drinkResponsibly(49, 4190)); // 'BEER!');

/*
A company of students is going to spend their free time wisely. All they have to decide is what should they buy today: vodka or beer?

Write a function that will help these guys to have a good time as many days in a row as possible and save as much money as possible too! Days amount is always a priority here! 

If they can't afford even 1 good day, return 'BUMMER!'

Every single student needs no less than 1 vodka/day OR 8 beers/day. 
1 vodka costs 30$, and 1 beer — only 4$.
BUT! If they've got enough money to buy at least (>=) 2 cases of beer (24 beer in each), they have a super-beer-discount, and one beer costs only 3$!

You may assume that there will always be an input, it will always be a number, number of people is more than 0, and at least one of the students is above 21.

Example: 
```javascript
drinkResponsibly(5, 180)) => 'VODKA!' 
// Vodka case: 5 * 30 = 150$ => 1 good day and 30$ left. 
// Beer case: 5 * (4 * 8) = 160$ => 1 good day and 20$ left.
```

```javascript
drinkResponsibly(5, 360)) => 'BEER!' 
// Vodka case: 5 * 30 * 2 = 300$ => 2 good days and 60$ left. 
// Beer case: 5 * (3 * 8) * 2 = 360$ => 3 good days and 0$ left.
```
*/
