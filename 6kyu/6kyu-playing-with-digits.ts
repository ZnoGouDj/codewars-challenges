export class G964 {
  public static digPow = (n: number, p: number) => {
    let sum = [...String(n)].reduce((acc, val, index) => acc + Math.pow(+val, index + p), 0);
    return sum % n === 0 ? sum / n : -1;
  };
}
