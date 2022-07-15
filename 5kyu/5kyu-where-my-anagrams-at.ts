function anagrams(word: string, words: string[]): string[] {
  let result = [];
  let localWords = [...words];

  for (let i = 0; i < localWords.length; i++) {
    let el = [...localWords[i]].sort().join('');
    if (el === [...word].sort().join('')) result.push(localWords[i]);
  }

  return result;
}
