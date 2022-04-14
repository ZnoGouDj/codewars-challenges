export class G964 {
  public static step(g, m, n) {
    for (let i = m; i <= n; i++) {
      if (this.isPrime(i) && this.isPrime(i + g)) {
        return [i, i + g];
      }
    }
  }

  private static isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
    return num > 1;
  }
}
