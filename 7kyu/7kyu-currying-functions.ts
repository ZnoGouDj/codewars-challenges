function multiplyAll(arr: number[]): Function {
  return function (multiplier: number): number[] {
    return arr.map(el => el * multiplier);
  };
}
