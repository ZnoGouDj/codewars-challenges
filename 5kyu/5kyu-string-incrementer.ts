function incrementString(strng: string): string {
  let str = '';
  let nmbr = '';

  for (let i = 0; i < strng.length; i++) {
    if (/^\d+$/.test(strng[i])) nmbr += strng[i];
    else str += strng[i];
  }

  const nmbrLength = nmbr.length;
  const newNmbrValue =
    String(+nmbr + 1).length < nmbrLength
      ? '0'.repeat(nmbrLength - String(+nmbr + 1).length) + String(+nmbr + 1)
      : String(+nmbr + 1);

  return str + newNmbrValue;
}
