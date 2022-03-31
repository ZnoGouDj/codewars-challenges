// Create a function that takes in the sum and age
// difference of two people, calculates their individual ages,
// and returns a pair of values (oldest age first) if those exist or null/None if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

//      Test.assertSimilar(getAges(24,4), [14,10]);
//      Test.assertSimilar(getAges(63,-14), null);

function getAges(sum: number, difference: number): number[] {
  if (sum < 0 || difference < 0) {
    return null;
  }
  let arr = [];
  arr.push(sum / 2 + difference / 2);
  arr.push(sum / 2 - difference / 2);
  if (arr[0] < 0 || arr[1] < 0) {
    return null;
  }
  return arr;
}

//top

function getAges1(sum: number, difference: number): number[] {
  let average = 0;
  if (sum < 0 || difference < 0 || sum - difference < 0) return null;
  else average = (sum - difference) / 2;

  return [average + difference, average];
}

//strange

let getAges2 = (s, d) => (s < 0 || d < 0 || (s + d) / 2 < 0 || (s - d) / 2 < 0 ? null : [(s + d) / 2, (s - d) / 2]);
