function duplicateElements(m: N[], n: N[]): boolean {
  if (!m.length || !n.length) return false;

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (m[i] === n[j]) {
        return true;
      }
    }
  }

  return false;
}

console.log(duplicateElements([1, 3, 3, 4, 5], [1, 7, 6, 8, 9]));

//ha-ha

function duplicateElements1(m: N[], n: N[]): boolean {
  return m.some(v => n.includes(v));
}
