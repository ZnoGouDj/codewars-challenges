export class G964 {
  public static sqInRect(l: number, w: number): number[] {
    if (l === w) return null;

    let result = [];

    let square = l * w;

    while (square > 0) {
      let min = Math.min(l, w);
      square -= Math.pow(min, 2);
      result.push(min);

      if (l > w) {
        l -= min;
      } else {
        w -= min;
      }
    }

    return result;
  }
}
