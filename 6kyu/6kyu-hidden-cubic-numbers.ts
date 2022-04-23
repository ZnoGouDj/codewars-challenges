export class G964 {
  public static isSumOfCubes = (s: string): string => {
    const arr = s.split(/[^0-9]/).filter(el => el);
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < 4) {
        if (G964.isCubic(arr[i])) result.push(+arr[i]);
      } else {
        let split = arr[i].match(/.{1,3}/g);

        for (let i = 0; i < split.length; i++) {
          if (G964.isCubic(split[i])) result.push(+split[i]);
        }
      }
    }

    if (result.length) result.push(G964.resultsSum(result));

    return result.length ? result.join(' ') + ' Lucky' : 'Unlucky';
  };

  private static isCubic(n: string): boolean {
    const split = String(n).split('');
    let sum = split.reduce((acc, val) => acc + Math.pow(+val, 3), 0);
    return sum == +n;
  }

  private static resultsSum(result: number[]): number {
    return result.reduce((acc, val) => +acc + +val, 0);
  }
}
