function getDivisorsCnt(n:number):number {
  let count = 1;
  for (let i = Math.floor(n / 2); i > 0; i--) {
    if (n % i === 0) count++
  }
  return count;
}

console.log(getDivisorsCnt(1)) // =>  1
console.log(getDivisorsCnt(10)) // => 4
console.log(getDivisorsCnt(11)) // => 2
console.log(getDivisorsCnt(54)) // => 8