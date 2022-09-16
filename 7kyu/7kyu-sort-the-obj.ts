function myLanguages(results: { [key: string]: number }) {
  return Object.entries(results)
    .filter(([, score]) => score >= 60)
    .sort(([, a], [, b]) => b - a)
    .map(([score, _]) => score);
}

console.log(
  myLanguages({
    Java: 10,
    Ruby: 80,
    Python: 65,
  }),
); // ['Ruby', 'Python']);
console.log(
  myLanguages({
    Hindi: 60,
    Greek: 71,
    Dutch: 93,
  }),
); // ['Dutch', 'Greek', 'Hindi']);
console.log(
  myLanguages({
    'C++': 50,
    ASM: 10,
    Haskell: 20,
  }),
); // []);
