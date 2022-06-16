export function isIsogram(str: string): boolean {
  let st = str.toLowerCase();
  let obj: { [key: string]: any } = {};
  for (let i = 0; i < st.length; i++) {
    if (!obj[st[i]]) obj[st[i]] = 'occupied';
    else return false;
  }
  return true;
}

//!

export function isIsogram1(str: string) {
  //resolve str to lowercase first
  str = str.toLowerCase();
  //transform string to a Set to remove duplicates and
  //compare the size of the set to the length of the str
  return new Set(str.split('')).size === str.length;
}
