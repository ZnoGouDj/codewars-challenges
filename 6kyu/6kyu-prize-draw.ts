export class G964 {
  public static rank(st: string, we: number[], n: number): string {
    if (!st) return 'No participants';
    if (n > st.split(',').length) return 'Not enough participants';

    const alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];

    const arr = st.split(',');
    const obj = [];

    for (let i = 0; i < arr.length; i++) {}

    for (let i = 0; i < arr.length; i++) {
      let counter = 0;
      let temp = arr[i].toLowerCase().split('');

      for (let j = 0; j < temp.length; j++) {
        counter += alphabet.indexOf(temp[j]) + 1;
      }

      obj[i] = { name: arr[i], value: (counter + arr[i].length) * we[i] };

      counter = 0;
    }

    obj.sort(function (a, b) {
      if (a.value < b.value) {
        return 1;
      }
      if (a.value > b.value) {
        return -1;
      }
      if (a.value === b.value) {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      }
    });

    return obj[n - 1]['name'];
  }
}

interface EntryPosition {
  name: string;
  points: number;
}

export class G9641 {
  public static rank(names: string, weight: number[], rankNumber: number) {
    if (names.length === 0) {
      return 'No participants';
    }

    const nameList = names.split(',');
    const winningNumbers: EntryPosition[] = this.createList(nameList, weight);

    if (rankNumber > nameList.length) {
      return 'Not enough participants';
    }

    return winningNumbers[rankNumber - 1].name;
  }

  private static createList(nameList: string[], weight: number[]): EntryPosition[] {
    const namesWithPoints = [];

    nameList.forEach((name: string) => {
      namesWithPoints.push({
        name,
        points: this.getSum(name, weight, nameList),
      });
    });

    return this.sortNamePositions(namesWithPoints);
  }

  private static sortNamePositions(nameList: EntryPosition[]): EntryPosition[] {
    return nameList.sort((a, b) => {
      let sortV = b.points - a.points;

      if (sortV === 0) {
        return a.name.localeCompare(b.name);
      }

      return sortV;
    });
  }

  private static getSum(name: string, weight: number[], nameList: string[]): number {
    const weightValue = weight[nameList.indexOf(name)];

    let sum = name.length;
    sum += this.letterValue(name);

    return sum * weightValue;
  }

  private static letterValue(letter: string): number {
    const charValue = (letter: string) => letter.toLowerCase().charCodeAt(0) - 96;
    return letter.split('').reduce((val: number, char): number => (val += charValue(char)), 0);
  }
}
