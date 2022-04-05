export function isValidWalk(walk: string[]): boolean {
  if (walk.length != 10) return false;

  const coordinates = [0, 0];

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        coordinates[0]++;
        break;
      case 's':
        coordinates[0]--;
        break;
      case 'w':
        coordinates[1]--;
        break;
      case 'e':
        coordinates[1]++;
        break;
      default:
        break;
    }
  }
  return coordinates[0] === coordinates[1] && coordinates[0] === 0;
}

export function isValidWalk1(walk: string[]): boolean {
  if (walk.length != 10) return false;

  let x = 0;
  let y = 0;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        x++;
        break;
      case 's':
        x--;
        break;
      case 'w':
        y--;
        break;
      case 'e':
        y++;
        break;
      default:
        break;
    }
  }
  return x == y && x == 0;
}

export function isValidWalk2(walk: string[]) {
  if (walk.length !== 10) return false;
  if (walk.filter(e => e === 'n').length !== walk.filter(e => e === 's').length) return false;
  if (walk.filter(e => e === 'e').length !== walk.filter(e => e === 'w').length) return false;
  return true;
}

export function isValidWalk3(walk: string[]) {
  if (walk.length !== 10) return false;

  type directionValues = {
    [key: string]: number;
  };

  const directions: directionValues = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };

  walk.forEach((direction: string) => {
    directions[direction]++;
  });

  return directions.n === directions.s && directions.w === directions.e;
}
