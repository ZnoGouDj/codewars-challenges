export class G964 {
  public static playPass(s: string, n: number): string {
    let crypt = [];
    let arr = s.toLowerCase().split('');

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].match(/[0-9]/i)) {
        crypt.push(9 - +arr[i]);
      } else if (arr[i].match(/[a-z]/i)) {
        let charcode = arr[i].charCodeAt(null) + n;
        if (charcode > 122) charcode = 97 + (charcode - 123);
        crypt.push(i % 2 !== 0 ? String.fromCharCode(charcode) : String.fromCharCode(charcode).toUpperCase());
      } else {
        crypt.push(arr[i]);
      }
    }

    return crypt.reverse().join('');
  }
}
