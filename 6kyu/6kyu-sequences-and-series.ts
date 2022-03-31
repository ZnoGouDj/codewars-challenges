function getScore(n: number): number {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i * 50;
  }

  return sum;
}

function getScore1(n: number): number {
  return n !== 0 ? n * 50 + getScore(n - 1) : 0;
}

/*

n | score
---+-------
 1 |  50
 2 |  150
 3 |  300
 4 |  500
 5 |  750

 */
