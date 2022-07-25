function solution(list: number[]): string {
  let result: (number | string)[] = [];

  let j = 0;
  let i = list[0];
  let count = 0;

  do {
    if (i === list[j]) {
      j++;
      count++;
    } else {
      if (count >= 3) {
        result.push(list[j - count] + '-' + list[j - 1]);
      } else if (count === 2) {
        result.push(list[j - 2]);
        result.push(list[j - 1]);
      } else if (count === 1) {
        result.push(list[j - 1]);
      }
      count = 0;
    }
    i++;
  } while (i <= list[list.length - 1] + 1);

  return result.map(el => String(el)).join(',');
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

// '-6,-3-1,3-5,7-11,14,15,17-20',
