export class Challenge {
  static solution(number: number) {
    let sum = 0;

    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        sum += i;
      } else if (i % 3 === 0) {
        sum += i;
      } else if (i % 5 === 0) {
        sum += i;
      }
    }

    return sum;
  }
}

export class Challenge1 {
  static solution(num: number): number {
    let total: number = 0;
    for (let i: number = 0; i < num; i++) {
      total += i % 5 == 0 || i % 3 == 0 ? i : 0;
    }
    return total;
  }
}
