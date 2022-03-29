export function findRoutes(routes: string[][]): string {
  let arr: string[] = routes.flat();

  let length: number = [...new Set(arr)].length;

  let result: string[] = [];

  // setup 1st and last element
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
    if (counter === 1) {
      result.push(arr[i]);
      break;
    }
    counter = 0;
  }

  // find by the chain?
  let stringToFind: any = result[0];
  for (let i = 0; i < length - 1; i++) {
    if (routes[i][0] === stringToFind) {
      result.push(routes[i][1]);
      stringToFind = routes[i][1];
      i = -1;
    }
  }

  return result.join(', ');
}

//!

export function findRoutes1(routes: string[][]): string {
  for (let i = 0; i < routes.length; i++) {
    let prev: string[] = routes[i];
    let results: string[][] = [prev];
    for (let k = 0; k < routes.length; ) {
      if (routes[k][0] === prev[1]) {
        results.push(routes[k]);
        prev = routes[k];
        k = 0;
      } else {
        k++;
      }
    }
    if (results.length === routes.length) {
      return [results[0][0]].concat(results.map(x => x[1])).join(', ');
    }
  }
  return '';
}

/*

[ ['USA', 'BRA'], ['JPN', 'PHL'], ['BRA', 'UAE'], ['UAE', 'JPN'] ]
"USA, BRA, UAE, JPN, PHL"

*/
