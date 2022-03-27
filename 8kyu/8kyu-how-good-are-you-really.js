/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!

Test.assertEquals(betterThanAverage([2, 3], 5), true);
Test.assertEquals(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
Test.assertEquals(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
*/

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        avg = (sum += classPoints[i])/classPoints.length;
    }
    return avg < yourPoints;
  }

  //another

  function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }

  //another

  const betterThanAverage = (c, y) => y > c.reduce((a, b) => a + b) / c.length;