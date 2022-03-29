/*
You are given two angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

Test.assertEquals(otherAngle(30, 60), 90);
Test.assertEquals(otherAngle(60, 60), 60);
Test.assertEquals(otherAngle(43, 78), 59);
Test.assertEquals(otherAngle(10, 20), 150);
*/

function otherAngle<T extends number>(a: T, b: T): number {
  return 180 - (a + b);
}
//another mine
const otherAngle1 = <T extends number>(a: T, b: T): number => 180 - (a + b);
