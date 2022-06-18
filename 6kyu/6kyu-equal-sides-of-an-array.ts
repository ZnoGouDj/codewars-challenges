function findEvenIndex(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    let sumBefore = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
    let sumAfter = arr.slice(i + 1).reduce((acc, val) => acc + val, 0);

    if (sumAfter === sumBefore) return i;
  }

  return -1;
}
