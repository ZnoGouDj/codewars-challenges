export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 === null || a2 === null) return false;
  let sorted1 = a1.sort((a, b) => a - b);
  let sorted2 = a2.sort((a, b) => a - b);

  return (
    sorted1.length === sorted2.length &&
    sorted1.every(function (value, index) {
      return value === sorted2[index] || value === Math.sqrt(sorted2[index]) || Math.sqrt(value) === sorted2[index];
    })
  );
}

export function comp1(a1: number[] | null, a2: number[] | null): boolean {
  if (!(a1 && a2) || a1.length !== a2.length) return false;
  return (
    a1
      .map(x => x * x)
      .sort()
      .toString() === a2.sort().toString()
  );
}
