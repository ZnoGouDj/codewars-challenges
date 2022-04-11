export function backwardsPrime(start: number, stop: number): number[] {
  const prime = [];
  for (let i = start < 10 ? 11 : start; i <= stop; i++) {
    if (isPrime(i)) {
      if (isPrime(Number(i.toString().split('').reverse().join('')))) {
        if (!isPalindrome(String(i))) {
          prime.push(i);
        }
      }
    }
  }

  return prime;
}

export const isPrime = (num: number): boolean => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};

export function isPalindrome(str: string): boolean {
  return str == str.split('').reverse().join('');
}
