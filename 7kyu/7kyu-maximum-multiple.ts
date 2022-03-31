/*
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positve values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

maxMultiple (10,50)  ==> return (50)
Explanation:
(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

maxMultiple (37,200) ==> return (185)
Explanation:
(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .

  Test.assertEquals(maxMultiple(2,7),6);
  Test.assertEquals(maxMultiple(3,10),9);
  Test.assertEquals(maxMultiple(7,17),14);
  Test.assertEquals(maxMultiple(10,50),50);
  Test.assertEquals(maxMultiple(37,200),185);
  Test.assertEquals(maxMultiple(7,100),98);
  Test.assertEquals(maxMultiple(37,100),74);
  Test.assertEquals(maxMultiple(1,13),13);
  Test.assertEquals(maxMultiple(1,1),1);
  Test.assertEquals(maxMultiple(4,1),0);
*/

function maxMultiple(divisor: N, bound: N): N {
  for (let i = bound; i > 0; i--) {
    if (bound < divisor) {
      return 0;
    }
    if (i % divisor === 0) {
      return i;
    }
  }
}

//top

function maxMultiple1(divisor: N, bound: N): N {
  return bound - (bound % divisor);
}

//another

function maxMultiple2(divisor: N, bound: N): N {
  return Math.floor(bound / divisor) * divisor;
}
