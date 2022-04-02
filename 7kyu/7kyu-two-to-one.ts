export class G964 {
  public static longest = (s1: string, s2: string): string => {
    let arr = (s1 + s2)
      .split('')
      .map(el => el.charCodeAt(0))
      .sort((a, b) => a - b)
      .map(el => String.fromCharCode(el));

    return arr.filter((v, i, a) => a.indexOf(v) === i).join('');
  };
}

//!

export class G964q {
  public static longest = (s1, s2) => {
    return Array.from(new Set(Array.from(s1 + s2)))
      .sort()
      .join('');
  };
}
