export class G964 {
  public static phone = (strng: string, num: string): string => {
    const phoneBook: string[] = strng.split('\n');

    const searchResults = phoneBook.filter(el => el.indexOf(num) > -1);

    if (!searchResults.length) return `Error => Not found: ${num}`;
    if (searchResults.length > 1) return `Error => Too many people: ${num}`;

    const currentContact = searchResults[0];

    const name = /\<(.*?)\>/.exec(currentContact)[0].trim();

    const address = currentContact
      .replace(name, '')
      .replace(num, '')
      .replace(/[+*;/?$,:]/g, '')
      .replace(/\s\s+/g, ' ')
      .replace(/_/g, ' ')
      .trim();

    return `Phone => ${num}, Name => ${name.replace(/[+*\/-<>]/g, '')}, Address => ${address}`;
  };
}

export class G964_ {
  public static phone(dir: string, num: string): string {
    const dataset = dir.split('\n').filter(line => line.includes(num));

    if (!dataset.length) {
      return `Error => Not found: ${num}`;
    }

    if (dataset.length > 1) {
      return `Error => Too many people: ${num}`;
    }

    const phone = dataset
      .join()
      .match(/\+[\d-]+/)
      .join()
      .replace(/\+/g, '');

    const name = dataset.join().match(/<.+>/).join().replace(/[<>]+/g, '');

    const address = dataset
      .join()
      .replace(/\+[\d-]+/, '')
      .replace(/<.+>+/, '')
      .replace(/[^\w\d\s-.]+/g, '')
      .replace(/[\s_]+/g, ' ')
      .trim();

    return [`Phone => ${phone}`, `Name => ${name}`, `Address => ${address}`].join(', ');
  }
}
