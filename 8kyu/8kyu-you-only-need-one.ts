/*
You will be given an array a and a value x. 
All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

Test.assertEquals(check([66, 101], 66), true);
Test.assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
Test.assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
Test.assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);
*/

function check<T extends string | number>(a: T, x: T): boolean {
  return a.toString().indexOf(x + '') > -1;
}

//another mine

const check1 = <T extends string | number>(a: T, x: T) => a.toString().indexOf(x + '') > -1;

//top

const check2 = <T extends string | number>(a: T, x: T) => a.toString().includes(x + '');
