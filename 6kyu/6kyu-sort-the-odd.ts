function sortArray(array: number[]): number[] {
  let odd = array.filter(el => el % 2 !== 0).sort((a, b) => b - a);

  return array.map(el => (el % 2 !== 0 ? (el = odd.pop()) : el));
}
