function goodVsEvil(good: string, evil: string): string {
  const goodValues = {
    0: 1,
    1: 2,
    2: 3,
    3: 3,
    4: 4,
    5: 10,
  };

  const evilValues = {
    0: 1,
    1: 2,
    2: 2,
    3: 2,
    4: 3,
    5: 5,
    6: 10,
  };

  let goodForce = good.split(' ').reduce((acc, val, i) => acc + +val * goodValues[i], 0);
  let evilForce = evil.split(' ').reduce((acc, val, i) => acc + +val * evilValues[i], 0);

  const goodMessage = 'Battle Result: Good triumphs over Evil';
  const evilMessage = 'Battle Result: Evil eradicates all trace of Good';
  const drawMessage = 'Battle Result: No victor on this battle field';

  return goodForce > evilForce ? goodMessage : goodForce < evilForce ? evilMessage : drawMessage;
}
