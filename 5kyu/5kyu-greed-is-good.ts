function score(dice: number[]): number {
  let result = 0;

  for (let i = 6; i > 0; i--) {
    let amount = dice.filter(side => side === i);

    if (amount.length >= 3 && i > 1) {
      result += i * (i > 1 ? 100 : 1000);
    }

    if (i === 1) {
      result += (amount.length % 3) * 100;
    }

    if (i === 5) {
      result += (amount.length % 3) * 50;
    }
  }

  return result;
}
