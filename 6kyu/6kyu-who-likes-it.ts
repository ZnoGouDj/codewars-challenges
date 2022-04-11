export const likes = (a: string[]): string => {
  // if (!!a) return 'no one likes this';

  console.log(a);

  return a[0] === 'undefined'
    ? 'no one likes this'
    : a[1] === 'undefined'
    ? `${a[0]} likes this`
    : a[2] === 'undefined'
    ? `${a[0]} and ${a[1]} like this`
    : a[3] === 'undefined'
    ? `${a[0]}, ${a[1]} and ${a[2]} like this`
    : `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
};

//${a.length - 2}

//! error TS2339: Property 'x' does not exist on type 'Y' -- stupid kata
