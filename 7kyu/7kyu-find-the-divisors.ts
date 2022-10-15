function divisors(integer: number): number[] | string {
  const divisors:number[] = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }

  return divisors.length ? divisors : `${integer} is prime`;
}

console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"
