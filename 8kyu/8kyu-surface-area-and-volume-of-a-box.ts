/*
Write a function that returns the total surface area 
and volume of a box as an array: [area, volume]

Test.assertEquals(getSize(4, 2, 6)[1], 48);
Test.assertSimilar(getSize(10, 10, 10), [600, 1000]);
Test.assertEquals(getSize(4, 2, 6)[0], 88);
Test.assertEquals(getSize(4, 2, 6)[1], 48);
*/

function getSize<T extends number>(width: T, height: T, depth: T): number[] {
  let newArr = [];
  newArr.push(2 * width * height + 2 * width * depth + 2 * height * depth, width * height * depth);
  return newArr;
}
